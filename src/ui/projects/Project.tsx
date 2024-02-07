"use client"

import { ProjectProps } from "@/typedefs/Projects_Types";
import { montserrat } from "@/utils/font_classes";
import { linkOnNewTab } from "@/utils/utilities";
import Image from 'next/image'
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function Project({
  name, info, tecs, thumbnail, cover, link, repo
}: ProjectProps) {

  const [viewed, setviewed] = useState(false)
  const { ref, inView } = useInView()

  useEffect(() => {
    if(inView) setviewed(true)
  }, [inView])

  return (
    <span className="w-[100%] min-h-[100px] md:min-w-[350px] md:max-w-[400px]" ref={ref}>
      {
        viewed ?
        <article className={`relative flex flex-col items-center justify-center my-2 p-4 h-fit w-[100%] md:min-w-[200px] md:max-w-[400px] md:h-[300px] rounded-xl 
          bg-gradient-to-tr from-teal-300/50 from-1% via-teal-100/50 via-50% to-teal-300/50 to-99% hover:scale-[101%] 
          hover:shadow-md duration-150 cursor-pointer border-[1px] border-slate-500/50 dark:from-teal-900/50 dark:via-teal-700/50 dark:to-teal-900/50 
          dark:border-slate-400 ${montserrat.className}`}>
          <header className="leading-none text-center">
            <h2 className="text-base font-semibold md:text-xl dark:text-slate-300">{ name }</h2>
            <sub className='leading-[2px] text-slate-950/80 md:text-sm dark:text-slate-300'>{ info }</sub>
          </header>
          <div className="relative h-[100px] w-[100px] rounded-md overflow-hidden border-1 border-slate-700 my-4">
            <Image
              className=""
              src={thumbnail}
              fill={true}
              alt={`Project ${name} image`}
              title="Open image in a new tab"
              sizes="max-width(768px) 100, min-width(768px) 200"
              onClick={linkOnNewTab(cover)}
            ></Image>   
          </div>
          <div>
            {  link &&  
              <div className="inline-block mx-2 cursor-pointer text-sm text-nowrap font-semibold hover:scale-[102%] hover:text_shadowed dark:hover:text_dark_shadow duration-100 dark:text-slate-300" onClick={linkOnNewTab(link)}>Domain</div>
            }
            { repo && 
              <div className="inline-block mx-2 cursor-pointer text-sm text-nowrap font-semibold hover:scale-[102%] hover:text_shadowed dark:hover:text_dark_shadow duration-100 dark:text-slate-300" onClick={linkOnNewTab(repo)}>Repo</div>
            }
          </div>
          <footer className="flex items-start justify-center h-fit w-[100%] my-2">
            {
              tecs.map(tec => tec)
            }
          </footer>
        </article>
        : <></>
      }
    </span>
  )
  
}