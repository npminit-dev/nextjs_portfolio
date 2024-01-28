"use client"

import { InputProps } from "@/typedefs/Bio_Types"
import { lato, montserrat } from "@/utils/font_classes"
import { FormEvent, useEffect, useRef } from "react"

export default function Input({ loading, setloading }: InputProps) {

  const textareaRef = useRef<null|HTMLTextAreaElement>(null)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setloading(!loading)
  }

  useEffect(() => {
    if(loading && textareaRef.current) {
      textareaRef.current.value = ''
    }
  }, [loading]);

  return (
    <div className="h-64 w-[100%] relative my-8">
      <form onSubmit={handleSubmit} className="flex flex-col items-center justify-between">
        <textarea
          required disabled={ loading ? true : false } ref={textareaRef}
          className="h-24 md:h-36 w-[100%] text-sm md:text-base max-w-80 p-4 my-4 rounded-md border-[1px] shadow-sm focus:shadow-sky-400 focus:scale-105 outline-none bg-slate-200/50 resize-none duration-200" 
          placeholder="What is your favorite food?"
        ></textarea>
        <button 
          type="submit"
          className={`px-2 py-1 my-1 border-[1px] shadow-sm hover:shadow-sky-400 hover:scale-105 bg-slate-200/50 rounded-md focus:outline-none font-semibold outline-none duration-200 ${montserrat.className}`}  
        >submit</button>
      </form>
    </div>
  )
}