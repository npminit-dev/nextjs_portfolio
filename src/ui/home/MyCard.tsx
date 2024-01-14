"use client";

import Image from "next/image";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { SiMongodb, SiNextdotjs, SiTailwindcss } from "react-icons/si";

export default function MyCard() {
  return (
    <>
      <div className="h-8 w-screen bg-blue-300 relative"></div>
      <section
        className="relative overflow-hidden w-screen h-fit py-12 md:py-48 bg-blue-300 flex flex-col md:flex-row items-center justify-center 
      bg-gradient-to-b from-blue-300 from-5% via-blue-100 via-50% to-blue-300 to-95%"
      >
        <div className="relative flex w-svw max-w-56 h-fit align-middle justify-center z-30 photo_appear opacity-0">
          <div className="h-[140px] w-[140px] md:h-[190px] md:w-[190px] rounded-full overflow-hidden">
            <div className="absolute m-auto rounded-full border-2 h-[142px] w-[142px] md:h-[192px] md:w-[192px] border-blue-400 animate-[ping_1300ms_linear_3000ms_infinite] ping_bezier pointer-events-none z-10"></div>
            <Image
              alt="My cartooned photo"
              src="/avatar_small.webp"
              width={190}
              height={190}
            ></Image>
          </div>
        </div>
        <div className="h-28 w-96 flex items-center justify-center select-none z-30 pointer-events-none">
          <IoIosArrowBack className="h-7 w-7 md:h-9 md:w-9 arrow_appear_right opacity-0 " />
          <span className="text-slate-900 text-lg md:text-3xl font-bold leading-none mr-1 slash_appear_right opacity-0">
            {"/"}
          </span>
          <div className="flex flex-col items-end">
            <span className="text-slate-900 text-lg md:text-2xl font-bold leading-none mr-1 opacity-0 text_appear_right">
              Jorge
            </span>
            <span className="text-slate-900 text-lg md:text-2xl font-bold leading-none mr-1 opacity-0 text_appear_right">
              Balsamo
            </span>
          </div>
          <div className="h-[40%] md:h-[50%] md:w-1 w-0.5 bg-slate-900 rounded-t-sm rounded-b-sm line_appear opacity-0"></div>
          <div className="flex flex-col">
            <span className="text-slate-900 text-lg md:text-2xl font-bold leading-none ml-1 opacity-0 text_appear_left">
              Web
            </span>
            <span className="text-slate-900 text-lg md:text-2xl font-bold leading-none ml-1 opacity-0 text_appear_left">
              Developer
            </span>
          </div>
          <IoIosArrowForward className="h-7 w-7 md:h-9 md:w-9 arrow_appear_left opacity-0" />
        </div>
        <FaReact className="absolute -bottom-[100px] -right-[100px] md:h-[350px] md:w-[350px] h-[280px] w-[280px] text-blue-200/50 hover:scale-125 hover:text-[#00e3f738] hover:-rotate-45 duration-500"></FaReact>
        <FaNodeJs className="absolute top-[8%] md:right-[30%] right-[10%] md:h-[75px] md:w-[75px] h-[60px] w-[60px] text-blue-200/50 hover:scale-125 hover:text-[#71b15649] duration-500"></FaNodeJs>
        <SiTailwindcss className="absolute top-[10%] left-[10%] md:h-[75px] md:w-[75px] h-[60px] w-[60px] text-blue-200/50 hover:scale-125 hover:text-[#38bff880] duration-500"></SiTailwindcss>
        <SiMongodb className="absolute bottom-[7%] left-[2%] h-[100px] w-[100px] text-blue-200/50 hover:scale-110 hover:text-[#11614944] duration-500"></SiMongodb>
      </section>
    </>
  );
}
