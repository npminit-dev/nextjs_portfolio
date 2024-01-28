"use client"

import { useRouter } from 'next/navigation'
import { nunito, lato } from "@/utils/font_classes"
import { BsFileEarmarkPdf, BsFileEarmarkPdfFill } from "react-icons/bs"
import { FaDownload } from "react-icons/fa6"

export default function CV() {

  const router = useRouter()

  return (
    <div className="flex flex-col md:flex-row justify-center items-center my-8">
      <a 
        className="h-20 w-52 pl-4 rounded-md grid grid-cols-2 cursor-pointer bg-indigo-100/75 shadow-sm hover:shadow-md hover:bg-indigo-100 hover:scale-105 duration-200"
        onClick={() => router.push('/Jorge_Antonio_Balsamo_Nuevo.pdf')}
      >
        <span className='self-center justify-self-center text-center'>See my CV</span>
        <BsFileEarmarkPdfFill className='self-center justify-self-center text-red-800 h-10 w-10'></BsFileEarmarkPdfFill>
      </a>
      <h2 className={`my-2 md:mx-12 text-xl ${lato.className}`}>or</h2>
      <a 
        className="h-20 w-52 pl-4 rounded-md grid grid-cols-2 cursor-pointer bg-indigo-100/75 shadow-sm hover:shadow-md hover:bg-indigo-100 hover:scale-105 duration-200"
        href={'/Jorge_Antonio_Balsamo_Nuevo.pdf'} 
        download={'JorgeBalsamoCV.pdf'} 
      >
        <span className='self-center justify-self-center text-center'>just download it</span>
        <FaDownload className='self-center justify-self-center text-slate-950 h-10 w-10'></FaDownload>
      </a>
    </div>
  )
}