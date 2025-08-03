import Welcom from "@/app/welcom";
import React from "react";
import ThemeToggle from "@/components/ThemeToggle";

const More = () => {
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
