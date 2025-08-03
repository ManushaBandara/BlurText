"use client";

import React from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { TranslatedText } from "@/hooks/useTranslation";

const Welcom = () => {
  const { theme } = useTheme();

  return (
    <div>
      <div className="bg-gray-100 dark:bg-[#37334d] py-4 transition-colors duration-300">
        <div className="flex flex-col items-center">
          <img
            src={theme === "light" ? "icons/blur-dark.png" : "icons/blur.png"}
            alt="logo"
            width={150}
            height={150}
          />

          <h6 className="text-gray-600 dark:text-textGrayLight mt-1 text-sm text-center font-thin">
            <TranslatedText>Your anonymous messaging app.</TranslatedText>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Welcom;
