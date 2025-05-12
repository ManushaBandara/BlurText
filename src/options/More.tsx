import Welcom from "@/app/welcom";
import React from "react";

const More = () => {
  return (
    <div>
      <Welcom />
      <div>
        <h1 className="font-bold px-4 mt-4 ">More</h1>
      </div>
      <hr style={{ opacity: 0.5 }} />
      <div className="text-gray-400 font-light text-sm px-4 mt-2">
        Accessibility, display and languages
      </div>
      <div>
        <ul className="display flex flex-col gap-2 mt-4 px-4">
          <li>Theme</li>
          <li>Languvage</li>
          <li>uki</li>
          <li>uki</li>
        </ul>
      </div>
    </div>
  );
};

export default More;
