"use client"

import { raleway } from "@/utils/font_classes"
import { useEffect } from "react"
import { BsDatabaseFill } from "react-icons/bs"
import { GiPadlock } from "react-icons/gi"
import { PiFileSqlFill } from "react-icons/pi"
import { SiAlwaysdata, SiMongodb } from "react-icons/si"
import { useInView } from "react-intersection-observer"

export default function Databases() {
  const { ref, inView, entry } = useInView({ threshold: .38 })

  useEffect(() => {
    if(inView) {
      entry?.target.classList.add('home_section_app')
      entry?.target.classList.remove('home_section_dis')
    } else {
      entry?.target.classList.add('home_section_dis')
      entry?.target.classList.remove('home_section_app')
    }
  }, [inView])

  return (
    <article className="h-fit min-h-96 w-screen bg-green-300 dark:bg-green-900">
      <span className="relative h-[100%] w-[100%] opacity-0" ref={ref}>
        <div className="relative grid h-[500px] md:h-[400px] w-[100%] grid-cols-none grid-rows-2 items-center justify-center md:grid-cols-2 md:grid-rows-none overflow-hidden">
          <div className="relative order-2 md:order-2 flex w-[100%] h-[100%] flex-col items-center justify-center self-center justify-self-center overflow-hidden px-4 md:max-w-[500px]">
            <h3
              className={
                `text-center mb-2 p-0 sm:px-2 md:px-4 text-base/4 sm:text-xl md:text-2xl font-bold text-slate-950 dark:text-slate-300 antialiased ${raleway.className}`
              }
            >
              Secure and scalable databases.
            </h3>
            <p
              className={
                `mt-0 text-center text-sm/4 sm:text-sm md:text-base max-h-[200px] text-slate-950 dark:text-slate-300 antiliased ${raleway.className}`
              }
            >  
              Design, construction and implementation of relational databases. 
              Use of managers such as MySQL Workbench and pgAdmin. Knowledge of non-relational databases such as MongoDB.
            </p>
          </div>
          <div className="relative order-1 md:order-1 h-[100%] w-[100%] flex items-center justify-center bg-gradient-to-tl from-green-300 to-green-200 dark:from-green-900 dark:to-green-800 self-center justify-self-center">
            <div className="absolute h-[100%] w-[500px]">
              <BsDatabaseFill className="absolute h-[150px] w-[150px] md:h-[200px] md:w-[200px] m-auto inset-0 text-green-400 hover:scale-105 duration-300" />
              <SiMongodb className="absolute h-[72px] w-[72px] md:h-[110px] md:w-[110px] m-auto left-[31%] bottom-8 md:left-[20%] md:bottom-[20%] z-[25] text-green-500 hover:scale-105 duration-300" />
              <GiPadlock className="absolute h-[75px] w-[75px] md:h-[80px] md:w-[80px] m-auto right-[30%] bottom-8 md:right-[23%] md:bottom-[20%] z-[22] text-green-500 hover:scale-105 duration-300" />
              <SiAlwaysdata className="absolute h-[30px] w-[30px] md:h-[65px] md:w-[65px] m-auto top-12 right-24 md:top-12 md:right-14 z-[22] text-green-400 hover:scale-105 duration-300" />
              <PiFileSqlFill className="absolute h-[45px] w-[45px] md:h-[80px] md:w-[80px] m-auto top-12 left-24 md:top-12 md:left-14 z-[22] text-green-400 hover:scale-105 duration-300" />
            </div>
          </div>
        </div>
      </span>
    </article>
  );
}