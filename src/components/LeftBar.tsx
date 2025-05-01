import React from "react";
import Link from "next/link";
import { link } from "fs";

const menulist = [
  {
    id: 1,
    name: "Home",
    link: "/",
    icon: "home.svg",
  },
  {
    id: 2,
    name: "Explore",
    link: "/",
    icon: "explore.svg",
  },
  {
    id: 3,
    name: "Notification",
    link: "/",
    icon: "notification.svg",
  },
  {
    id: 4,
    name: "Messages",
    link: "/",
    icon: "message.svg",
  },
  {
    id: 5,
    name: "Bookmarks",
    link: "/",
    icon: "bookmark.svg",
  },
  {
    id: 9,
    name: "Profile",
    link: "/",
    icon: "profile.svg",
  },
  {
    id: 10,
    name: "More",
    link: "/",
    icon: "more.svg",
  },
];

const LeftBar = () => {
  return (
    <div className="h-screen  sticky top-0  flex flex-col justify-between pt-2 pb-8">
      {/* Logo menu button */}
      <div className="">
        {/* Logo */}
        <Link href="/">
          <img src="icons/blur.png" alt="logo" width={150} height={150} />
        </Link>
        {/* Menu list */}
        <div className="flex flex-col mt-10 gap-5">
          {menulist.map((item) => (
            <Link href={item.link} key={item.id}>
              <div className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded-md cursor-pointer font-bold transition-all duration-200 ease-in-out">
                <img
                  src={`icons/${item.icon}`}
                  alt={item.name}
                  width={24}
                  height={24}
                />
                <span className=" hidden xxl:inline text-sm">{item.name}</span>
              </div>
            </Link>
          ))}
        </div>
        <Link
          href="/"
          className="bg-white text-black rounded-full font-bold w-12 h-12 flex items-center justify-center xxl:hidden mt-10 hover:bg-[#1ca1f1] hover:text-white transition-all duration-200 ease-in-out"
        >
          <img src="icons/post.svg" alt="" width={24} height={24} />
        </Link>

        <Link href="/">
          <button
            type="button"
            className="  hidden xxl:block bg-slate-100 text-black rounded-full px-20 py-2 mt-10  font-bold text-sm hover:bg-[#1ca1f1] hover:text-white transition-all duration-200 ease-in-out"
          >
            Post
          </button>
        </Link>
      </div>
      {/* user */}
      <div className="">user</div>
    </div>
  );
};

export default LeftBar;
