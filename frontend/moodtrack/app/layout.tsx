import type { Metadata } from "next";
import "./globals.css";
import { Shadows_Into_Light_Two } from "next/font/google";
import { Open_Sans } from "next/font/google";

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
    <html lang="en">
      <body className={`${shadowsIntoLightTwo.variable} ${openSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
