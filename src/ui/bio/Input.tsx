"use client"

import { InputProps } from "@/typedefs/Bio_Types"
import { lato, montserrat } from "@/utils/font_classes"
import { FormEvent, useState } from "react"

export default function Input({ loading, setloading, setprompt }: InputProps) {

  const [value, setvalue] = useState<string>('')

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setprompt(value)
  }

  return (
    <div className="h-fit w-[100%] relative my-8">
      <form onSubmit={handleSubmit} className="flex flex-col items-center justify-between">
        <textarea
          maxLength={200} minLength={10}
          required disabled={ loading ? true : false }
          className="h-24 md:h-36 w-[100%] text-sm md:text-base max-w-80 p-4 my-4 rounded-md border-[1px] shadow-sm focus:shadow-sky-400 focus:scale-105 outline-none bg-slate-200/50 resize-none duration-200" 
          placeholder="What is your favorite food?"
          onChange={({ currentTarget }) => setvalue(currentTarget.value)}
        ></textarea>
        <button 
          disabled={loading ? true : false}
          type="submit"
          className={`px-2 py-1 my-1 border-[1px] shadow-sm hover:shadow-sky-400 hover:scale-105 bg-slate-200/50 rounded-md focus:outline-none font-semibold outline-none duration-200 ${montserrat.className}`}  
        >submit</button>
      </form>
    </div>
  )
}