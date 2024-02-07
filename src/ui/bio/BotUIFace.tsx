"use client"

import { useInView } from "react-intersection-observer"
import Output from "./Output"
import { CSSProperties, useEffect, useState } from "react";
import Input from "./Input";

export default function BotUIFace() {

  const { ref, inView } = useInView()
  const [viewed, setviewed] = useState(false);
  const [response, setresponse] = useState<string | null>(null)
  const [prompt, setprompt] = useState<string>('')
  const [loading, setloading] = useState(false);

  useEffect(() => {
    if (inView) setviewed(true)
  }, [inView]);

  const iframeStyles: CSSProperties = {
    opacity: `${loading ? '1' : '.7'}`,
    transform: `scale(${loading ? '1' : '1.1'})`,
    filter: `${loading ? 'drop-shadow(0px 0px 5px #00f73f) brightness(1.1)' : 'none'}`
  }

  const containerStyles: CSSProperties = {
    animation: 'appear 1000ms ease-out forwards'
  }

  return (
    <span className="opacity-0 min-h-100px min-w-[100vw]" ref={ref} style={viewed ? containerStyles : {}}>
      {viewed &&
        <div className="rounded-sm overflow-hidden relative h-min w-[100%] antialiased z-30">
          <span className="h-full w-full flex flex-col items-center justify-center md:scale-100 scale-[80%]">
            <span className="h-fit w-fit dark:hue-rotate-60">
              <iframe
                title='AI bot background image'
                className="border-black w-[1200px] h-[400px] bg-transparent duration-500"
                src={'chatbot_src/index.html'}
                style={iframeStyles}
                allowTransparency={true}
              ></iframe>
            </span>
            <Output {...{ loading, setloading, response, setresponse, prompt, setprompt }}></Output>
          </span>
        </div>
      }
      {viewed && <Input loading={loading} setloading={setloading} prompt={prompt} setprompt={setprompt}></Input>}
    </span>
  )
}
