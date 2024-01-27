"use client"

import Iframe from "react-iframe"

export default function Bot() {
  
  return (
    <div className="rounded-sm overflow-hidden relative h-min w-min">
      <Iframe
        className="border-black z-50 contrast-50 w-[500px] h-[300px]"
        url={'chatbot_src/index.html'}
        frameBorder={0}
      ></Iframe>
    </div>
  )
}