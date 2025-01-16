import type { Metadata } from "next";
import "./globals.css";
import { Shadows_Into_Light_Two } from "next/font/google";
import { Open_Sans } from "next/font/google";
import { Sidebar } from "@/app/components/navigation";

const shadowsIntoLightTwo = Shadows_Into_Light_Two({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-shadows-into-light-two",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "MoodTrack",
  description: "App for tracking mood",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${shadowsIntoLightTwo.variable} ${openSans.variable} bg-mint-green-50 text-black dark:bg-nordic-purple-1000 dark:text-white h-screen`}
      >
        <div className=" flex flex-row p-10 gap-5 h-full">
          <Sidebar ></Sidebar>
          {children}
        </div>
      </body>
    </html>
  );
}
