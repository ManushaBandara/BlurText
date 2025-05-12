"use client";

import React, { useState } from "react";
import LeftBar from "@/components/LeftBar";
import "./globals.css";
import RightBar from "@/components/RightBar";
import More from "@/options/More";

//export const metadata = {
//title: "BLUR TEXT",
//description: "Anonymous app.",
//};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [activeContent, setActiveContent] = useState<React.ReactNode>(children);

  const handleMenuClick = (content: React.ReactNode) => {
    setActiveContent(content);
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="icons/icone.png" />
        {/* <title>{metadata.title}</title>*
        <meta name="description" content={metadata.description} />*/}
      </head>
      <body>
        <div className="max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl xxl:max-w-screen-xxl mx-auto flex justify-between bg-[#262335]">
          <div className="px-3 xsm:px-4 xxl:px-8">
            <LeftBar onMenuClick={handleMenuClick} />
          </div>
          <div className="flex-1 lg:min-w-[600px] border-x-[1px] border-borderGray ">
            {activeContent}
          </div>
          <div className="hidden ml-4 md:ml-8 h-screen lg:flex flex-1">
            <RightBar />
          </div>
        </div>
      </body>
    </html>
  );
}
