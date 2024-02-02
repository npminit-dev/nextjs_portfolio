import { montserrat, baskervville, nunito, lato, raleway } from "@/utils/font_classes"

export default function Presentation() {
  return (
    <div className={`h-fit w-full flex flex-col items-center justify-center mt-4 mb-8 md:mb-12 ${raleway.className}`}>
      <h2 className="font-semibold text-xl md:text-2xl my-2">Projects</h2>
      <p className="my-1 md:my-2 font-[400] text-[14px] leading-tight md:text-[16px] md:leading-normal max-w-[800px] text-center">
        These are some of the personal projects I have been working on, whether for learning, personal challenge or both.
      </p>
      <p className="my-1 md:my-2 font-[400] text-[14px] leading-tight md:text-[16px] md:leading-normal max-w-[800px] text-center">
        It should be noted that probably I would not do the older ones in the same way with my current knowledge.
      </p>
      <p className="my-1 md:my-2 font-[400] text-[14px] leading-tight md:text-[16px] md:leading-normal max-w-[800px] text-center">
        On my computer I have a folder where I usually save various projects where I delve into some concept, some technology, algorithm practice and so on.
      </p>
      <p className="my-1 md:my-2 font-[400] text-[14px] leading-tight md:text-[16px] md:leading-normal max-w-[800px] text-center">
        For the sake of brevity, I have left only those that seem relevant to me as complete projects (in terms of solo projects) to present in this resume, in reality there are many mini-projects and exercises that I have done and continue to do.
      </p>
    </div>
  )
}