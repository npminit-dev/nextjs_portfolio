import { nunito } from "@/utils/font_classes"

export default function Presentation() {
  return (
    <article className={`px-2 py-2 w-full ${nunito.className} relative antialiased leading-tight py-2 md:px-8 md:py-8 z-30 flex flex-col items-center justify-between`}>
      <h2 className="w-[100%] my-2 font-bold md:my-4 text-xl md:text-2xl text-center leading-tight md:leading-normal dark:text-slate-300">Projects</h2>
      <p className="my-2 text-sm text-center md:my-4 md:max-w-[1000px] md:text-base leading-tight md:leading-normal dark:text-slate-300">
        These are some of the personal projects I have been working on, whether for learning, personal challenge or both.
      </p>
      <p className="my-2 text-sm text-center md:my-4 md:max-w-[1000px] md:text-base leading-tight md:leading-normal dark:text-slate-300">
        It should be noted that probably I would not do the older ones in the same way with my current knowledge.
      </p>
      <p className="my-2 text-sm text-center md:my-4 md:max-w-[1000px] md:text-base leading-tight md:leading-normal dark:text-slate-300">
        On my computer I have a folder where I usually save various projects where I delve into some concept, some technology, algorithm practice and so on.
      </p>
      <p className="my-2 text-sm text-center md:my-4 md:max-w-[1000px] md:text-base leading-tight md:leading-normal dark:text-slate-300">
        For the sake of brevity, I have left only those that seem relevant to me as complete projects (in terms of solo projects) to present in this resume, in reality there are many mini-projects and exercises that I have done and continue to do.
      </p>
    </article>
  )
}