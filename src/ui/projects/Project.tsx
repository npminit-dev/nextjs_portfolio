"use client"

import { ProjectProps } from "@/typedefs/Projects_Types";
import { montserrat } from "@/utils/font_classes";
import Image from 'next/image'
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function Project({
  name, info, tecs, thumbnail, cover, link, repo
}: ProjectProps) {

  const [viewed, setviewed] = useState(false)
  const { ref, inView } = useInView()
  const router = useRouter()

  useEffect(() => {
    if(inView) setviewed(true)
  }, [inView])

  const pushLink = (link: string) => () => router.push(link)
  
  return (
    <span className="w-[100%] min-h-[100px] md:min-w-[350px] md:max-w-[500px]" ref={ref}>
      {
        viewed ?
        <article className={`relative flex flex-col items-center justify-center my-2 p-4 h-fit w-[100%] md:min-w-[200px] md:max-w-[500px] md:h-[300px] md:mx-8 rounded-md 
          bg-gradient-to-tr from-sky-200/85 from-35% via-sky-300/85 via-70% to-sky-400/85 to-99% hover:scale-[101%] 
          hover:shadow-md duration-150 cursor-pointer ${montserrat.className}`}>
          <header className="leading-none text-center">
            <h2 className="text-base font-semibold md:text-xl">{ name }</h2>
            <sub className='leading-[2px] text-slate-950/80 md:text-sm'>{ info }</sub>
          </header>
          <div className="relative h-[100px] w-[100px] rounded-md overflow-hidden border-1 border-slate-700 my-4">
            <Image
              className=""
              src={thumbnail}
              fill={true}
              alt={`Project ${name} image`}
              title=""
              sizes="max-width(768px) 100, min-width(768px) 200"
            ></Image>   
          </div>
          <div>
            <div className="inline-block mx-2 cursor-pointer text-sm text-nowrap font-semibold hover:scale-[102%] hover:text_shadowed duration-100" onClick={pushLink(link)}>Domain</div>
            { repo && 
              <div className="inline-block mx-2 cursor-pointer text-sm text-nowrap font-semibold hover:scale-[102%] hover:text_shadowed duration-100" onClick={pushLink(repo)}>Repo</div>
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