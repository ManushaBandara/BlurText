// filepath: d:\Work\next.js\twiiter [layout.tsx](http://_vscodecontentref_/3)
import LeftBar from "@/components/LeftBar";
import "./globals.css";
import RightBar from "@/components/RightBar";

export const metadata = {
  title: "BLUR TEXT", // Set your desired title here
  description: "This is a description for SEO purposes.", // Optional
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.png" />
        {/* Add the favicon */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        <div className="max-w-screen-md lg:max-w-screen-lg mx-auto flex justify-between">
          <div className="">
            <LeftBar />
          </div>
          <div className="">{children}</div>
          <div className="">
            <RightBar />
          </div>
        </div>
      </body>
    </html>
  );
}
