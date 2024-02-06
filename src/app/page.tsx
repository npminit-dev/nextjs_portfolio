"use client";

import BackEnd from "@/ui/home/BackEnd";
import Databases from "@/ui/home/Databases";
import FrontEnd from "@/ui/home/FrontEnd";
import Testing from "@/ui/home/Testing";

export default function Home() {
  return (
    <>
      <FrontEnd></FrontEnd>
      <BackEnd></BackEnd>
      <Databases></Databases>
      <Testing></Testing>
    </>
  );
}
