"use client";

import MyCard from "@/ui/home/MyCard";
import "./globals.css";
import Navigation from "@/ui/navigation/Navigation";
import { montserrat } from "@/utils/font_classes";
import { AIContextProvider } from "@/contexts/AIContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`h-[200vh] ${montserrat.className} md:overflow-x-hidden`}
      >
        <Navigation></Navigation>
        <MyCard></MyCard>
        <AIContextProvider>
          {children}
        </AIContextProvider>
        {/* <Footer></Footer> */}
      </body>
    </html>
  );
}
