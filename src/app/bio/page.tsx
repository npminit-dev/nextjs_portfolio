"use client"

import Presentation from "@/ui/bio/Presentation"
import CV from "@/ui/bio/CV"
import BotContainer from "@/ui/bio/BotContainer"

// @ts-ignore
export default function page() {
  return (
    <section className="h-fit bg-gradient-to-r from-indigo-200 from-5% via-indigo-100 via-50% to-indigo-200 to-95% ">
      <div className="h-fit bg-gradient-to-r from-indigo-200 from-5% via-indigo-100 via-50% to-indigo-200 to-95% bg-no-repeat bg-center bg-fixed" style={{ backgroundImage: 'url("data-science.png")' }}>
        <Presentation></Presentation>
        <CV></CV>
        <BotContainer></BotContainer>
      </div>
    </section>
  )
}
