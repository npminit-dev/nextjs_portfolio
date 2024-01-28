"use client"

import { OutputProps } from "@/typedefs/Bio_Types"
import { CSSProperties, useEffect } from "react"

export default function Output({ loading, setloading, response, setresponse }: OutputProps) {

  const outputStyles: CSSProperties = {
    backgroundColor: `${loading ? 'RGBA(0,138,14,0.85)' : 'RGBA(0,138,14,0.61)'}`,
    transform: `scale(${loading ? '.9' : '1'})`
  }

  return (
    <div className="absolute h-[300px] w-[300px] shadow-sm rounded-full duration-500" style={outputStyles}>
      <p className="h-[100%] w-[100%]"></p>
    </div>
  )
}