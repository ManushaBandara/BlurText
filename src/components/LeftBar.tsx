"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import More from "@/options/More";
import Icon from "./Icon";
import { useTheme } from "@/contexts/ThemeContext";
import { TranslatedText } from "@/hooks/useTranslation";

const menulist = [
  {
    id: 1,
    name: "Home",
    content: <div>Home Content</div>,
    icon: "home.svg",
  },
  {
    id: 2,
    name: "Explore",
    content: <div>Explore Content</div>,
    icon: "explore.svg",
  },
  {
    id: 3,
    name: "Notification",
    content: <div>Notification Content</div>,
    icon: "notification.svg",
  },
  {
    id: 4,
    name: "Messages",
    content: <div>Messages Content</div>,
    icon: "message.svg",
  },
  {
    id: 5,
    name: "Bookmarks",
    content: <div>Bookmarks Content</div>,
    icon: "bookmark.svg",
  },
  {
    id: 9,
    name: "Profile",
    content: <div>Profile Content</div>,
    icon: "profile.svg",
  },
  {
    id: 10,
    name: "More",
    content: <More />,
    icon: "more.svg",
  },
];

const LeftBar = ({
  onMenuClick,
  onLogout,
}: {
  onMenuClick: (content: React.ReactNode) => void;
  onLogout: () => void;
}) => {
  const { theme } = useTheme();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="h-screen sticky top-0 bg-white dark:bg-[#262335] text-black dark:text-white flex flex-col justify-between pt-2 pb-8 transition-colors duration-300">
      <div>
        <Link href="/">
          <img
            src={theme === "light" ? "icons/blur-dark.png" : "icons/blur.png"}
            alt="logo"
            width={150}
            height={150}
          />
        </Link>
        <div className="flex flex-col mt-10 gap-5">
          {menulist.map((item) => (
            <div
              key={item.id}
              onClick={() => onMenuClick(item.content)}
              className="flex items-center gap-2 p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md cursor-pointer font-bold transition-all duration-200 ease-in-out"
            >
              <Icon name={item.icon} width={24} height={24} />
              <span className="hidden xxl:inline text-sm">
                <TranslatedText>{item.name}</TranslatedText>
              </span>
            </div>
          ))}
        </div>
        <Link
          href="/"
          className="bg-blue-500 text-white rounded-full font-bold w-12 h-12 flex items-center justify-center xxl:hidden mt-10 hover:bg-blue-600 transition-all duration-200 ease-in-out"
        >
          <Icon name="post.svg" width={24} height={24} className="text-white" />
        </Link>
        <Link href="/">
          <button
            type="button"
            className="hidden xxl:block bg-blue-500 text-white rounded-full px-20 py-2 mt-10 font-bold text-sm hover:bg-blue-600 transition-all duration-200 ease-in-out"
          >
            <TranslatedText>Post</TranslatedText>
          </button>
        </Link>
      </div>
      <div className="relative" ref={dropdownRef}>
        <div className="flex items-center justify-between mt-6 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full cursor-pointer transition-all duration-200 ease-in-out">
          <div className="flex items-center gap-4 px-2 py-1">
            <div className="w-8 h-8 relative rounded-full overflow-hidden">
              <img src="https://avatar.iran.liara.run/public/40" alt="" />
            </div>
            <div className="hidden xxl:flex flex-col font-bold">
              <span>UKI</span>
              <span className="text-gray-500 dark:text-zinc-600 font-thin">
                @uki Hunter
              </span>
            </div>
          </div>
          <div
            className="hidden xxl:block cursor-pointer font-bold px-2 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-full p-1 transition-all duration-200"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            ...
          </div>
        </div>

        {/* Dropdown Menu */}
        {showDropdown && (
          <div className="absolute bottom-full left-0 right-0 mb-2 bg-white dark:bg-[#2b2941] border border-gray-200 border-none rounded-full shadow-lg overflow-hidden z-50">
            <button
              onClick={() => {
                onLogout();
                setShowDropdown(false);
              }}
              className="w-full text-left px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 flex items-center gap-3 text-red-600 dark:text-red-400 font-medium"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              <span className="hidden xxl:inline">
                <TranslatedText>Log out </TranslatedText>
              </span>
              <span className="xxl:hidden">
                <TranslatedText>Logout</TranslatedText>
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeftBar;
