"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const RightBar = () => {
  const [news, setNews] = useState<{ title: string; url: string }[]>([]);
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_API_KEY"
        );
        const data = await response.json();
        setNews(data.articles);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching news:", error);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div>
      <div className="relative">
        <input
          type="text"
          placeholder="search"
          className="bg-[#262335] border border-[#3b3b3b] rounded-full py-2 px-10 w-full mt-4 pl-3 focus:border-blue-500 focus:outline-none"
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
        <img
          src="icons/explore.svg"
          alt=""
          className="absolute top-9  right-3 transform -translate-y-1/2 w-5 h-5"
        />
      </div>

      <div className="mt-4 border border-zinc-600 rounded-3xl p-4 bg-[#262335]">
        <div className="mt-2 mb-2 ml-3">
          <div className="font-bold text-[19px] mb-1">Subscribe to Premium</div>
          <span className="text-white text-[14px] font-extralight">
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

      <div className="mt-20 border border-zinc-600 rounded-lg p-4 bg-[#262335]">
        <div className="flex justify-center items-center mb-4 ">
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
                  className="text-neutral-400 hover:underline font-extralight text-[14px] justify-center flex"
                >
                  {article.title}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <div>No news available</div>
        )}
      </div>
    </div>
  );
};

export default RightBar;
