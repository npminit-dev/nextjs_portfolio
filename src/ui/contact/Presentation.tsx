import { nunito } from "@/utils/font_classes";

export default function Presentation() {
  return (
    <article className={`px-2 py-2 w-full ${nunito.className} relative antialiased leading-tight py-2 md:px-8 md:py-8 z-30 flex flex-col items-center justify-between`}>
      <h2 className="w-[100%] my-2 font-bold md:my-4 text-xl md:text-2xl text-center leading-tight md:leading-normal">Contact me!</h2>
      <p className="my-2 text-sm text-center md:my-4 md:max-w-[1000px] md:text-base leading-tight md:leading-normal">
        Here are my contact channels to talk to me and my profiles on different platforms. Contact me with just 1 click.
      </p>
    </article>
  )
}