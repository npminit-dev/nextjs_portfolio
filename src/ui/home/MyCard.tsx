"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { SiMongodb, SiTailwindcss } from "react-icons/si";

export default function MyCard() {

  const [centeredImg, setCenteredImg] = useState(true)
  const imgRef = useRef<HTMLImageElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {

    const containerWidth = containerRef.current?.offsetWidth || 200
    const containerHeight = containerRef.current?.offsetHeight || 200

    const mouseMoveHandler = (e: MouseEvent) => {
      if (containerRef.current && imgRef.current) {
        if (centeredImg) setCenteredImg(false)
        const leftDistance = containerRef.current.getBoundingClientRect().left + window.scrollX
        const topDistance = containerRef.current.getBoundingClientRect().top + window.scrollY
        const X = (e.clientX - leftDistance - containerHeight / 2) * -0.1
        const Y = (e.clientY - topDistance - containerWidth / 2) * -0.1
        imgRef.current.style.transform = `translate(${X}px,${Y}px)`
      }
    }

    const mouseLeaveHandler = () => setCenteredImg(true)

    imgRef.current && imgRef.current.addEventListener('mousemove', mouseMoveHandler)
    imgRef.current && imgRef.current.addEventListener('mouseleave', mouseLeaveHandler)

    return () => {
      containerRef.current && containerRef.current.removeEventListener('mousemove', mouseMoveHandler)
      containerRef.current && containerRef.current.removeEventListener('mouseleave', mouseLeaveHandler)
    }
  }, [])

  return (
    <>
      <div className="h-8 w-screen bg-blue-300 dark:bg-blue-900 relative z-20"></div>
      <section
        className="relative overflow-hidden w-screen h-fit py-12 md:py-48 bg-blue-300 flex flex-col md:flex-row items-center justify-center 
        bg-gradient-to-b from-blue-300 from-5% via-blue-100 via-50% to-blue-300 to-95% 
        dark:from-blue-900 dark:via-blue-700 dark:to-blue-900 z-30"
      >
        <div className="relative flex w-svw max-w-56 h-fit align-middle justify-center z-30 photo_appear opacity-0">
          <div className="h-[140px] w-[140px] md:h-[190px] md:w-[190px] rounded-full overflow-hidden">
            <div className="absolute m-auto rounded-full border-2 h-[142px] w-[142px] md:h-[192px] md:w-[192px] border-blue-400 animate-[ping_1300ms_linear_3000ms_infinite] ping_bezier pointer-events-none z-10"></div>
            <div className="h-full w-full rounded-full bg-slate-950 cursor-pointer" ref={containerRef}>
              <Image
                className={`${centeredImg ? 'img_normalized' : ''}`}
                alt="My cartooned photo"
                src="/avatar_small.webp"
                width={200}
                height={200}
                ref={imgRef}
              ></Image>
            </div>
          </div>
        </div>
        <div className="h-28 w-96 flex items-center justify-center select-none z-30 pointer-events-none">
          <IoIosArrowBack className="h-7 w-7 md:h-9 md:w-9 arrow_appear_right opacity-0 dark:text-slate-300" />
          <span className="text-slate-900 dark:text-slate-300 text-lg md:text-3xl font-bold leading-none mr-1 slash_appear_right opacity-0">
            {"/"}
          </span>
          <div className="flex flex-col items-end">
            <span className="text-slate-900 dark:text-slate-300 text-lg md:text-2xl font-bold leading-none mr-1 opacity-0 text_appear_right">
              Jorge
            </span>
            <span className="text-slate-900 dark:text-slate-300 text-lg md:text-2xl font-bold leading-none mr-1 opacity-0 text_appear_right">
              Balsamo
            </span>
          </div>
          <div className="h-[35%] md:h-[50%] md:w-1 w-0.5 bg-slate-900 dark:bg-slate-300 rounded-t-sm rounded-b-sm line_appear opacity-0"></div>
          <div className="flex flex-col">
            <span className="text-slate-900 dark:text-slate-300 text-lg md:text-2xl font-bold leading-none ml-1 opacity-0 text_appear_left">
              Web
            </span>
            <span className="text-slate-900 dark:text-slate-300 text-lg md:text-2xl font-bold leading-none ml-1 opacity-0 text_appear_left">
              Developer
            </span>
          </div>
          <IoIosArrowForward className="h-7 w-7 md:h-9 md:w-9 arrow_appear_left opacity-0 dark:text-slate-300"/>
        </div>
        <FaReact className="absolute -bottom-[100px] -right-[100px] md:h-[350px] md:w-[350px] h-[280px] w-[280px] 
          text-blue-200/50 dark:text-blue-700/30 hover:scale-125 hover:text-[#00e3f738] dark:hover:text-[#00e3f738] hover:-rotate-45 duration-500"></FaReact>
        <FaNodeJs className="absolute top-[8%] md:right-[30%] right-[10%] md:h-[125px] md:w-[125px] h-[60px] w-[60px] 
          text-blue-200/50 dark:text-blue-700/30 hover:scale-125 hover:text-[#71b15649] dark:hover:text-[#71b15649] duration-500"></FaNodeJs>
        <SiTailwindcss className="absolute top-[10%] left-[10%] md:h-[100px] md:w-[100px] h-[60px] w-[60px] 
          text-blue-200/50 dark:text-blue-700/30 hover:scale-125 hover:text-[#38bff880] dark:hover:text-[#38bff880] duration-500"></SiTailwindcss>
        <SiMongodb className="absolute bottom-[7%] left-[2%] h-[100px] w-[100px] md:h-[125px] md:w-[125px] 
          text-blue-200/50 dark:text-blue-700/30 hover:scale-125 hover:text-[#11614944] dark:hover:text-[#11614944] duration-500"></SiMongodb>
      </section>
    </>
  );
}
