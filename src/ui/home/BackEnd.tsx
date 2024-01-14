import { baskervville, raleway } from "@/utils/font_classes"
import { useEffect } from "react"
import { AiFillExperiment } from "react-icons/ai"
import { BsChatTextFill } from "react-icons/bs"
import { IoIosPhoneLandscape, IoIosPhonePortrait } from "react-icons/io"
import { PiMonitorFill } from "react-icons/pi"
import { useInView } from "react-intersection-observer"

export default function BackEnd() {
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
    <article className="h-fit min-h-96 w-screen bg-red-200">
      <span className="relative h-[100%] w-[100%] opacity-0" ref={ref}>
        <div className="relative grid h-[500px] md:h-[400px] w-[100%] grid-cols-none grid-rows-2 items-center justify-center md:grid-cols-2 md:grid-rows-none overflow-hidden">
          <div className="relative order-2 md:order-1 flex w-[100%] h-[100%] flex-col items-center justify-center self-center justify-self-center overflow-hidden px-4 md:max-w-[500px]">
            <h3
              className={
                `text-center mb-2 p-0 md:px-4 text-base/4 md:text-2xl font-bold text-slate-900 antialiased ${raleway.className}`
              }
            >
              Scalable API Rest
            </h3>
            <p
              className={
                `mt-0 text-center text-sm/4 md:text-base max-h-[200px] text-slate-800 antiliased ${baskervville.className}`
              }
            >
              Building modern and friendly websites thanks to different frameworks
              and libraries based on React such as NextJS, Redux Toolkit and
              Router-Dom. Component libraries like Ant
              Design and Semantic UI, based on utilities like TailwindCSS,
              preprocessors, and more...
            </p>
          </div>
          <div className="relative order-1 md:order-2 h-[100%] w-[100%] flex items-center justify-center bg-gradient-to-tl from-red-200 to-red-100 self-center justify-self-center">
            <div className="absolute h-[100%] w-[500px]">
              <PiMonitorFill className="absolute h-[150px] w-[150px] md:h-[200px] md:w-[200px] m-auto inset-0 text-red-300 hover:scale-105 duration-300" />
              <IoIosPhonePortrait className="absolute h-[60px] w-[60px] md:h-[110px] md:w-[110px] m-auto left-[32%] bottom-12 md:left-[21%] md:bottom-[20%] z-[25] text-red-400 hover:scale-105 duration-300" />
              <IoIosPhoneLandscape className="absolute h-[75px] w-[75px] md:h-[80px] md:w-[80px] m-auto right-[30%] bottom-8 md:right-[23%] md:bottom-[20%] z-[22] text-red-400 hover:scale-105 duration-300" />
              <BsChatTextFill className="absolute h-[30px] w-[30px] md:h-[65px] md:w-[65px] m-auto top-12 right-24 md:top-12 md:right-14 z-[22] text-red-300 hover:scale-105 duration-300" />
              <AiFillExperiment className="absolute h-[45px] w-[45px] md:h-[80px] md:w-[80px] m-auto top-12 left-24 md:top-12 md:left-14 z-[22] text-red-300 hover:scale-105 duration-300" />
            </div>
          </div>
        </div>
      </span>
    </article>
  );
}