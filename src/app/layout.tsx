"use client";

import MyCard from "@/ui/home/MyCard";
import "./globals.css";
import Navigation from "@/ui/navigation/Navigation";
import { montserrat } from "@/utils/font_classes";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`h-[200vh] ${montserrat.className} md:overflow-x-hidden`}
      >
        <Navigation></Navigation>
        <MyCard></MyCard>
        {children}
        {/* <Footer></Footer> */}
      </body>
    </html>
  );
}
