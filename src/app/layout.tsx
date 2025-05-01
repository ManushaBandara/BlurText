import LeftBar from "@/components/LeftBar";
import "./globals.css";
import RightBar from "@/components/RightBar";

export const metadata = {
  title: "BLUR TEXT",
  description: "Anonemous app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="icons/icone.png" />

        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        <div className="max-w-screen-md lg:max-w-screen-lg  xl:max-w-screen-xl xxl:max-w-screen-xxl  mx-auto flex justify-between  bg-[#262335]">
          <div className="px-2 xsm:px-4 xxl:px-8  ">
            <LeftBar />
          </div>
          <div className="flex-1 lg:min-w-[600px] border-x-[1px] border-borderGray bg-teal-950">
            {children}
          </div>
          <div className="hidden  ml-4 md:ml-8 h-screen lg:flex flex-1 ">
            <RightBar />
          </div>
        </div>
      </body>
    </html>
  );
}
