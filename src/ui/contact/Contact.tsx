"use client"

import { ContactType } from "@/typedefs/Contact_Types";
import { linkOnNewTab } from "@/utils/utilities";
import { nunito } from "@/utils/font_classes"; 
import Link from "next/link";

export default function Contact({ title, url, description, children }: ContactType) {
  return (
    <div id="Contact-box" onClick={linkOnNewTab(url)} className={`relative h-fit w-fit p-4 m-1 md:m-4 border-[1px] border-slate-500 rounded-s-xl rounded-e-xl overflow-hidden bg-blue-100/75 cursor-pointer z-20 duration-200 hover:scale-[101%] ${nunito.className}`}>
      <div id="Contact-background" className="absolute w-full h-full rounded-s-xl rounded-e-xl bg-gradient-to-br from-blue-200/50 from-40% to-blue-300/50 to-99% left-[-100%] top-0 duration-300 z-10">
      </div>
      <div className="relative h-fit w-fit grid grid-cols-[70%_30%] gap-2 z-20">
        <div className="flex flex-col items-center justify-center h-[100%] self-center justify-self-center">
          <h3 className="font-semibold">{ title }</h3>
          <h4 className="flex items-center justify-center h-fit w-fit text-xs text-slate-700/500">
            <p className="text-center text-nowrap">{ description }</p>
          </h4>
        </div>
        <div className="self-center justify-self-center">
          { children }
        </div>
      </div>
    </div>
  )
}