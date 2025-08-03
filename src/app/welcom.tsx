import React from "react";

const Welcom = () => {
  return (
    <div>
      <div className="bg-gray-100 dark:bg-[#37334d] py-4 transition-colors duration-300">
        <div className="flex flex-col items-center">
          <img src="icons/blur.png" alt="logo" width={150} height={150} />

          <h6 className="text-gray-600 dark:text-textGrayLight mt-1 text-sm text-center font-thin">
            Your anonymous messaging app.
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Welcom;
