import React from "react";
import Link from "next/link";
import More from "@/options/More";

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
}: {
  onMenuClick: (content: React.ReactNode) => void;
}) => {
  return (
    <div className="h-screen sticky top-0 bg-white dark:bg-[#262335] text-black dark:text-white flex flex-col justify-between pt-2 pb-8 transition-colors duration-300">
      <div>
        <Link href="/">
          <img src="icons/blur.png" alt="logo" width={150} height={150} />
        </Link>
        <div className="flex flex-col mt-10 gap-5">
          {menulist.map((item) => (
            <div
              key={item.id}
              onClick={() => onMenuClick(item.content)}
              className="flex items-center gap-2 p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md cursor-pointer font-bold transition-all duration-200 ease-in-out"
            >
              <img
                src={`icons/${item.icon}`}
                alt={item.name}
                width={24}
                height={24}
              />
              <span className="hidden xxl:inline text-sm">{item.name}</span>
            </div>
          ))}
        </div>
        <Link
          href="/"
          className="bg-blue-500 text-white rounded-full font-bold w-12 h-12 flex items-center justify-center xxl:hidden mt-10 hover:bg-blue-600 transition-all duration-200 ease-in-out"
        >
          <img src="icons/post.svg" alt="" width={24} height={24} />
        </Link>
        <Link href="/">
          <button
            type="button"
            className="hidden xxl:block bg-blue-500 text-white rounded-full px-20 py-2 mt-10 font-bold text-sm hover:bg-blue-600 transition-all duration-200 ease-in-out"
          >
            Post
          </button>
        </Link>
      </div>
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
        <div className="hidden xxl:block cursor-pointer font-bold px-2">
          ...
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
