"use client"

import { montserrat } from "@/utils/font_classes"
import { BsHeartFill } from "react-icons/bs"

export default function Footer() {
  return (
    <footer className={`left-0 bottom-0 h-4 w-[100%] py-2 flex items-center justify-center bg-[#ddd] dark:bg-slate-900 text-slate-950 dark:text-slate-300 text-sm px-2 overflow-hidden`}>
      <p className={`${montserrat.className}`}>
        Made with <BsHeartFill className="text-red-600 inline"></BsHeartFill> by myself {":)"}
      </p>
    </footer>
  )
}