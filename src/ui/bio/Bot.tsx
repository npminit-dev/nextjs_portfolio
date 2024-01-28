"use client"

import { useInView } from "react-intersection-observer"
import Output from "./Output"
import { CSSProperties, useEffect, useState } from "react";
import Input from "./Input";

export default function Bot() {

  const { ref, inView } = useInView()
  const [viewed, setviewed] = useState(false);
  const [response, setresponse] = useState<string|null>(null)
  const [loading, setloading] = useState(false);

  useEffect(() => {
    if (inView) setviewed(true)
  }, [inView]);

  const iframeStyles: CSSProperties = {
    opacity: `${loading ? '1' : '.5'}`, 
    transform: `scale(${loading ? '1' : '1.1'})`,
    filter: `${loading ? 'drop-shadow(0px 0px 5px #00f73f)' : 'none'}`
  }

  const containerStyles: CSSProperties = {
    animation: 'appear 5000ms ease-out 200ms forwards'
  }

  return (
    <span className="opacity-0" style={viewed ? containerStyles : {}}>
      <div className="rounded-sm overflow-hidden relative h-min w-[100%] flex flex-col items-center justify-center z-30" ref={ref}>            
        <iframe
          title='AI bot background U+000A image'
          className="border-black w-[1200px] h-[400px] bg-transparent duration-500"
          src={'chatbot_src/index.html'}
          style={iframeStyles}
        ></iframe>
        <Output {...{ loading, setloading, response, setresponse }}></Output>
      </div>
      { viewed && <Input loading={loading} setloading={setloading}></Input> }
    </span>
  )
}
