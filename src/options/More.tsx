import Welcom from "@/app/welcom";
import React, { useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";

const More = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const languages = ["English", "Russian"];

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
    setIsDropdownOpen(false);
  };
  return (
    <div className="bg-white dark:bg-[#262335] text-black dark:text-[#ededed] min-h-screen">
      <Welcom />
      <div>
        <h1 className="font-bold px-4 mt-4">More</h1>
      </div>
      <hr className="opacity-50 border-gray-200 dark:border-gray-700" />
      <div className="text-gray-500 dark:text-gray-400 font-light text-sm px-4 mt-2">
        Accessibility, display and languages
      </div>
      <div className="mt-4 px-4">
        <div className="space-y-2">
          <ThemeToggle />
          
          {/* Language Section */}
          <div className="flex items-center justify-between w-full px-4 py-3 text-left hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 rounded-lg">
            <span className="text-sm font-medium">Language</span>
            <div className="relative w-32">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center justify-between w-full px-3 py-2 text-left hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 rounded-md"
              >
                <span className="text-sm font-medium">{selectedLanguage}</span>
                <svg
                  className={`w-3 h-3 transition-transform duration-200 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isDropdownOpen && (
                <div className="absolute top-full left-0 w-full mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-10">
                  {languages.map((language) => (
                    <button
                      key={language}
                      onClick={() => handleLanguageChange(language)}
                      className={`w-full px-3 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg ${
                        selectedLanguage === language
                          ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                          : ""
                      }`}
                    >
                      {language}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between w-full px-4 py-3 text-left hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 rounded-lg">
            <span className="text-sm font-medium">Accessibility</span>
          </div>
          <div className="flex items-center justify-between w-full px-4 py-3 text-left hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 rounded-lg">
            <span className="text-sm font-medium">Display</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default More;
