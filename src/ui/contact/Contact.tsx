"use client"

import { ContactType } from "@/typedefs/Contact_Types";
import { linkOnNewTab } from "@/utils/utilities";
import { nunito } from "@/utils/font_classes"; 

export default function Contact({ title, url, description, children }: ContactType) {
  return (
    <div id="Contact-box" onClick={linkOnNewTab(url)} className={`relative h-fit w-full sm:w-fit p-4 m-1 md:m-4 border-[1px] border-slate-500 dark:border-slate-400 
      rounded-s-xl rounded-e-xl overflow-hidden bg-sky-100/75 dark:bg-sky-900/80 cursor-pointer z-20 duration-200 hover:scale-[101%] ${nunito.className}`}>
      <div id="Contact-background" className="absolute w-full h-full rounded-s-xl rounded-e-xl bg-gradient-to-br from-sky-200/50 from-40% to-sky-300/50 to-99% left-[-100%] 
        dark:bg-gradient-to-r dark:to-sky-700/50 dark:from-sky-800/50 top-0 duration-300 z-10">
      </div>
      <div className="relative h-fit w-full flex items-center justify-evenly sm:h-fit sm:w-fit sm:grid sm:grid-cols-[70%_30%] sm:gap-2 z-20">
        <div className="flex flex-col items-center justify-center h-[100%] self-center justify-self-center">
          <h3 className="font-semibold dark:text-slate-300">{ title }</h3>
          <h4 className="flex items-center justify-center h-fit w-fit text-xs text-slate-700/500">
            <p className="text-center text-nowrap dark:text-slate-300">{ description }</p>
          </h4>
        </div>
        <div className="self-center justify-self-center">
          { children }
        </div>
      </div>
    </div>
  )
}