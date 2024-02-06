"use client"

import { montserrat } from "@/utils/font_classes"
import { BsHeartFill } from "react-icons/bs"

export default function Footer() {
  return (
    <footer className={`left-0 bottom-0 h-4 w-[100%] py-2 flex items-center justify-center bg-[#ddd] text-slate-950 text-sm px-2`}>
      <p className={`${montserrat.className}`}>
        Made with <BsHeartFill className="text-red-600 inline"></BsHeartFill> by myself {":)"}
      </p>
    </footer>
  )
}