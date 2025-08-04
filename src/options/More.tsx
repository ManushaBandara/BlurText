import Welcom from "@/app/welcom";
import React, { useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import Privacy from "./Privacy";
import { useTranslation, Language, languageNames } from "@/contexts/TranslationContext";
import { TranslatedText } from "@/hooks/useTranslation";

const More = () => {
  const { currentLanguage, setLanguage } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  const languages: { value: Language; label: string }[] = [
    { value: "en", label: "English" },
    { value: "ru", label: "Русский" },
    { value: "it", label: "Italiano" },
    { value: "fr", label: "Français" },
    { value: "si", label: "සිංහල" },
    { value: "ja", label: "日本語" },
  ];

  const handleLanguageChange = (language: Language) => {
    setLanguage(language);
    setIsDropdownOpen(false);
  };

  const handlePrivacyClick = () => {
    setShowPrivacy(true);
  };

  const handleBackToMore = () => {
    setShowPrivacy(false);
  };

  if (showPrivacy) {
    return <Privacy onBack={handleBackToMore} />;
  }
  return (
    <div className="bg-white dark:bg-[#262335] text-black dark:text-[#ededed] min-h-screen">
      <Welcom />
      <div>
        <h1 className="font-bold px-4 mt-4">
          <TranslatedText>More</TranslatedText>
        </h1>
      </div>
      <hr className="opacity-50 border-gray-200 dark:border-gray-700" />
      <div className="text-gray-500 dark:text-gray-400 font-light text-sm px-4 mt-2">
        <TranslatedText>Accessibility, display and languages</TranslatedText>
      </div>
      <div className="mt-4 px-4">
        <div className="space-y-2">
          <ThemeToggle />

          {/* Language Section */}
          <div className="flex items-center justify-between w-full px-4 py-3 text-left hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 rounded-lg">
            <span className="text-sm font-medium">
              <TranslatedText>Language</TranslatedText>
            </span>
            <div className="relative w-32">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center justify-between w-full px-3 py-2 text-left hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 rounded-md"
              >
                <span className="text-sm font-medium">{languageNames[currentLanguage]}</span>
                <svg
                  className={`w-3 h-3 transition-transform duration-200 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full left-0 w-full mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-10">
                  {languages.map((lang) => (
                    <button
                      key={lang.value}
                      onClick={() => handleLanguageChange(lang.value)}
                      className={`w-full px-3 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg ${
                        currentLanguage === lang.value
                          ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                          : ""
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        <div
          className="flex items-center justify-between w-full px-4 py-3 text-left hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 rounded-lg cursor-pointer"
          onClick={handlePrivacyClick}
        >
          <span className="text-sm font-medium">
            <TranslatedText>Privacy & safety</TranslatedText>
          </span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
      <footer>
        {/* Separator */}
        <hr className="opacity-50 border-gray-200 dark:border-gray-700  my-auto" />

        {/* App Info Section */}
        <div className="px-4 py-2">
          <div className="text-gray-500 dark:text-gray-400 font-light text-xs text-center">
            <TranslatedText>Version 1.0.0</TranslatedText>
          </div>
          <div className="text-gray-500 dark:text-gray-400 font-light text-xs mt-1 text-center">
            <TranslatedText>© 2025 Blur Text. All rights reserved.</TranslatedText>
          </div>
          <div className="flex justify-center mt-2 space-x-6">
            {/* Developer 1 */}
            <a
              href="https://github.com/ukihunter"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ukihunter GitHub Profile"
              className="inline-flex flex-col items-center"
            >
              <span className="block rounded-full overflow-hidden border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#262335] p-1">
                <svg
                  className="w-6 h-6 text-gray-700 dark:text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.867 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.579.688.481C19.135 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
                </svg>
              </span>
              <span className="text-xs mt-1 text-gray-700 dark:text-gray-600">
                <TranslatedText>ukihunter</TranslatedText>
              </span>
            </a>
            {/* Developer 2 */}
            <a
              href="https://github.com/AkashMLodiwiksz"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="AkashMLodiwiksz GitHub Profile"
              className="inline-flex flex-col items-center"
            >
              <span className="block rounded-full overflow-hidden border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#262335] p-1">
                <svg
                  className="w-6 h-6 text-gray-700 dark:text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.867 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.579.688.481C19.135 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
                </svg>
              </span>
              <span className="text-xs mt-1 text-gray-600 dark:text-gray-600">
                <TranslatedText>AkashMLodiwiksz</TranslatedText>
              </span>
            </a>
            {/* Developer 3 */}
            <a
              href="https://github.com/ManushaBandara"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ManushaBandara GitHub Profile"
              className="inline-flex flex-col items-center"
            >
              <span className="block rounded-full overflow-hidden border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#262335] p-1">
                <svg
                  className="w-6 h-6 text-gray-700 dark:text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.867 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.579.688.481C19.135 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
                </svg>
              </span>
              <span className="text-xs mt-1 text-gray-600 dark:text-gray-600">
                <TranslatedText>ManushaBandara</TranslatedText>
              </span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default More;
