"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Icon from "./Icon";
import Privacy from "@/options/Privacy";

interface CryptoData {
  id: string;
  name: string;
  current_price: number;
  price_change_percentage_24h: number;
}

const RightBar = ({
  onMenuClick,
}: {
  onMenuClick?: (content: React.ReactNode) => void;
}) => {
  // State for Privacy component navigation - REMOVED (no longer needed)
  // const [showPrivacy, setShowPrivacy] = useState(false);

  // Fetch news articles from the API
  const [news, setNews] = useState<{ title: string; url: string }[]>([]);
  const [loading, setLoading] = useState(true);

  // Cryptocurrency state
  const [crypto, setCrypto] = useState<CryptoData[]>([]);
  const [cryptoLoading, setCryptoLoading] = useState(true);

  // Handle Privacy Policy click
  const handlePrivacyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onMenuClick) {
      onMenuClick(<Privacy />);
    }
  };
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/top-headlines?country=us&apiKey=9d72a6cdbdf243bf904090d76ec5f3f2"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data); // Debugging: Check the API response
        setNews(data.articles || []);
      } catch (error) {
        console.error("Error fetching news:", error);
        setNews([]); // Set empty news on error
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  // Fetch cryptocurrency data
  useEffect(() => {
    const fetchCrypto = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCrypto(data);
      } catch (error) {
        console.error("Error fetching crypto data:", error);
        setCrypto([]);
      } finally {
        setCryptoLoading(false);
      }
    };

    fetchCrypto();
  }, []);

  // Function to handle search box click

  return (
    <div className="bg-white dark:bg-[#262335] text-black dark:text-white transition-colors duration-300">
      <div className="relative">
        <input
          type="text"
          placeholder="search"
          className="bg-gray-100 dark:bg-[#262335] border border-gray-300 dark:border-[#3b3b3b] text-black dark:text-white rounded-full py-2 px-10 w-full mt-4 pl-3 focus:border-blue-500 focus:outline-none transition-colors duration-300"
          onClick={() => {
            const searchBox = document.createElement("div");
            searchBox.textContent = "Search using keyword";
            searchBox.style.textAlign = "center";
            searchBox.style.width = "250px";
            searchBox.style.fontSize = "15px";
            searchBox.style.fontWeight = "thinner";
            searchBox.style.position = "absolute";
            searchBox.style.top = "65px";
            searchBox.style.right = "180px";
            searchBox.style.backgroundColor = "#262335";
            searchBox.style.color = "grey";
            searchBox.style.padding = "50px";
            searchBox.style.borderRadius = "5px";
            searchBox.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.2)";
            document.body.appendChild(searchBox);

            setTimeout(() => {
              document.body.removeChild(searchBox);
            }, 1800);
          }}
        />
        <div className="absolute top-9 right-3 transform -translate-y-1/2 w-5 h-5">
          <Icon name="search.svg" width={20} height={20} />
        </div>
      </div>
      {/* Search box*/}
      <div className="mt-4 border border-gray-300 dark:border-zinc-600 rounded-3xl p-4 bg-gray-50 dark:bg-[#262335] mb-4 transition-colors duration-300">
        <div className="mt-2 mb-1 ml-3">
          <div className="font-bold text-[19px] mb-1">Subscribe to Premium</div>
          <span className="text-gray-700 dark:text-white text-[14px] font-extralight">
            Subscribe to unlock new features and if eligible, receive a share of
            revenue.
          </span>

          <Link
            href="/subscribe"
            className="mt-3  flex justify-center flex-direction-row bg-[#1a8cd8] w-40 rounded-full py-2 text-center text-white font-bold "
          >
            Subscribe
          </Link>
        </div>
      </div>

      {/* Cryptocurrency section */}
      <div className="mt-1 mb-2 border border-gray-300 dark:border-zinc-600 rounded-3xl p-4 bg-gray-50 dark:bg-[#262335] transition-colors duration-300">
        <div className="flex justify-center items-center mb-4 font-bold">
          <span>Trending Crypto</span>
        </div>
        {cryptoLoading ? (
          <div>Loading crypto data...</div>
        ) : Array.isArray(crypto) && crypto.length > 0 ? (
          <ul className="space-y-2">
            {crypto.slice(0, 3).map((coin) => (
              <li key={coin.id} className="flex justify-between items-center">
                <div>
                  <span className="font-medium text-sm">{coin.name}</span>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    ${coin.current_price.toFixed(2)}
                  </div>
                </div>
                <div
                  className={`text-sm font-medium ${
                    coin.price_change_percentage_24h >= 0
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {coin.price_change_percentage_24h >= 0 ? "+" : ""}
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div>No crypto data available</div>
        )}
      </div>

      {/* News section */}

      <div className="mt-17 border border-gray-300 dark:border-zinc-600 rounded-3xl p-4 bg-gray-50 dark:bg-[#262335] transition-colors duration-300">
        <div className="flex justify-center items-center mb-4 font-bold ">
          <span>Related NEWS</span>
        </div>
        {loading ? (
          <div>Loading...</div>
        ) : Array.isArray(news) && news.length > 0 ? (
          <ul className="list-disc gap-2 pl-4">
            {news.slice(0, 3).map((article, index) => (
              <li key={index} className="mb-3">
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-neutral-400 hover:underline font-extralight text-[14px] justify-center flex"
                >
                  {article.title}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <div>No news available</div>
        )}
        <div style={{ color: "#1d9bf0" }}>
          <a
            href="https://news.google.com/home?hl=en-US&gl=US&ceid=US:en"
            target="_blank"
            rel="noopener noreferrer"
          >
            see more
          </a>
        </div>
      </div>

      <div className="mt-4 border border-gray-300 dark:border-zinc-600 rounded-3xl p-4 bg-gray-50 dark:bg-[#262335] transition-colors duration-300">
        <div className="flex  mb-4 font-bold ">
          <span>Who to follow</span>
        </div>

        <div className="flex  items-center mb-4">
          <div className="w-10 h-10 rounded-full bg-[#1d9bf0] flex justify-center items-center">
            <img src="https://avatar.iran.liara.run/public/27" alt="" />
          </div>
          <div className="ml-3  flex flex-col">
            <span>uki</span>
            <span className="text-gray-500 dark:text-stone-400"> @hunter</span>
          </div>
          <div className="ml-auto flex items-center">
            <button className="ml-20 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full px-4 py-1 transition-colors duration-200">
              Follow
            </button>
          </div>
        </div>
      </div>

      {/* Footer section */}
      <div>
        <div className="text-gray-500 dark:text-neutral-400 text-sm mt-4 flex flex-wrap justify-center gap-2">
          |
          <a
            href="/privacy"
            className="hover:underline"
            onClick={handlePrivacyClick}
          >
            Privacy Policy
          </a>
          |
          <a href="/more" className="hover:underline">
            More
          </a>
          © 2025 UKI.
        </div>
      </div>
    </div>
  );
};

export default RightBar;
