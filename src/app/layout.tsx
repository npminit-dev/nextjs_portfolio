"use client";

import MyCard from "@/ui/home/MyCard";
import "./globals.css";
import Navigation from "@/ui/navigation/Navigation";
import { montserrat } from "@/utils/font_classes";
import { AIContextProvider } from "@/contexts/AIContext";
import Footer from "@/ui/Footer";
import { Head } from "next/document";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>MyPortfolio</title>
        <meta name="description" content="A web portfolio that contains skills, experiences and knowledge of Jorge Antonio Balsamo in the area of ​​Informatics."></meta>
      </Head>
      <body
        className={`h-fit w-[100dvw] ${montserrat.className} md:overflow-x-hidden scroll-smooth`}
      >
        <Navigation></Navigation>
        <MyCard></MyCard>
        <AIContextProvider>
          {children}
        </AIContextProvider>
        <Footer></Footer>
      </body>
    </html>
  );
}
