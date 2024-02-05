"use client"

import { ContactType } from "@/typedefs/Contact_Types";
import { linkOnNewTab } from "@/utils/utilities";
import Link from "next/link";

export default function Contact({ title, url, description, children }: ContactType) {
  return (
    <div id="Contact-box" onClick={linkOnNewTab(url)} className="relative h-fit w-fit py-2 px-4 rounded-s-full border-[1px] border-slate-500 rounded-e-full overflow-hidden bg-red-200 cursor-pointer hover:first:left-0 z-20">
      <div id="Contact-background" className="absolute h-full w-full rounded-s-full rounded-e-full bg-red-300 left-[-100%] top-0 duration-300 z-10">
      </div>
      <div className="relative h-fit w-fit grid grid-cols-[70%_30%] z-20">
        <div className="flex flex-col items-center justify-center h-[100%] self-center justify-self-center">
          <h3>{ title }</h3>
          <h4 className="flex items-center justify-center h-fit w-fit text-xs text-slate-700/500">
            <p className="text-center">{ description }</p>
          </h4>
        </div>
        <div className="self-center justify-self-center">
          { children }
        </div>
      </div>
    </div>
  )
}