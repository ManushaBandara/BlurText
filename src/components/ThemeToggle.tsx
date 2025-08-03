"use client";

import React from "react";
import { useTheme } from "@/contexts/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-between w-full px-4 py-3 text-left hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 rounded-lg"
    >
      <span className="text-sm font-medium">Theme</span>
      <div className="flex items-center space-x-2">
        <span className="text-xs text-gray-500 dark:text-gray-400">
          {theme === "dark" ? "Dark" : "Light"}
        </span>
        <div className="relative">
          <div
            className={`w-12 h-6 rounded-full transition-colors duration-300 ${
              theme === "dark" ? "bg-blue-600" : "bg-gray-300"
            }`}
          >
            <div
              className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-300 ${
                theme === "dark" ? "translate-x-6" : "translate-x-0"
              }`}
            />
          </div>
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle;
