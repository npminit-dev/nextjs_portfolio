"use client"

import { press_start } from "@/utils/font_classes"
import { BsHeartFill } from "react-icons/bs"

export default function Footer() {
  return (
    <footer className={`h-4 w-[100%] flex align-middle justify-center bg-slate-200 text-slate-950 text-sm px-2 ${press_start.className}`}>
      <p>
        Made with <BsHeartFill className="text-red-600 inline"></BsHeartFill>
      </p>
    </footer>
  )
}