"use client"

import BioParagraphs from "@/ui/bio/BioParagraphs"
import Chatbot from "@/ui/bio/Chatbot"

// @ts-ignore
export default function page() {
  return (
    <section className="w-[100vw] h-fit bg-gradient-to-b from-indigo-200 from-5% via-indigo-100 via-50% to-indigo-200 to-95% ">
      <div className="w-[100vw] h-fit bg-gradient-to-b from-indigo-200 from-5% via-indigo-100 via-50% to-indigo-200 to-95% bg-no-repeat bg-center bg-fixed" style={{ backgroundImage: 'url("data-science.png")' }}>
        <BioParagraphs></BioParagraphs>
        <Chatbot></Chatbot>
      </div>
    </section>
  )
}
