"use client";

import BackEnd from "@/ui/home/BackEnd";
import FrontEnd from "@/ui/home/FrontEnd";
import MyCard from "@/ui/home/MyCard";

export default function Home() {
  return (
    <>
      <MyCard></MyCard>
      <FrontEnd></FrontEnd>
      <BackEnd></BackEnd>
    </>
  );
}
