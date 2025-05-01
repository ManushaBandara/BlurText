import React from "react";

const Welcom = () => {
  return (
    <div>
      <div className="bg-[#262335] py-4">
        <div className="flex flex-col items-center">
          <img src="icons/blur.png" alt="logo" width={150} height={150} />

          <h6 className=" text-textGrayLight mt-1 text-sm text-center font-thin">
            Your anonymous messaging app.
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Welcom;
