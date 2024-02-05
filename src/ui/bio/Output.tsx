"use client"

import { OutputProps } from "@/typedefs/Bio_Types"
import { CSSProperties, useContext, useEffect, useRef } from "react"
import { sleep } from "@/utils/utilities"
import { aicontext } from "@/contexts/AIContext"
import { nunito } from "@/utils/font_classes"

export default function Output({ loading, setloading, prompt, setprompt }: OutputProps) {

  const { client, thread, response, setresponse } = useContext(aicontext)
  const responseRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (thread && prompt && client) {
      setprompt('');
      (async () => {
        try {
          setloading(true)
          setresponse('creating message')
          await client.beta.threads.messages.create(thread.id,
            { role: "user", content: prompt }
          );
          setresponse('sending message')
          const run = await client.beta.threads.runs.create(thread.id, { assistant_id: process.env.NEXT_PUBLIC_assistantID || '' })
          let runStatus = await client.beta.threads.runs.retrieve(thread.id, run.id);
          setresponse('processing response')
          let future = Date.now() + 10000
          while (runStatus.status !== 'completed') {
            await sleep(1500)
            runStatus = await client.beta.threads.runs.retrieve(thread.id, run.id);
            if (runStatus.status === 'failed') throw new Error('response processing failed.')
            if (runStatus.status === 'expired') throw new Error('response processing expired.')
            if(Date.now() >= future) throw new Error('The response took too long to process, so it has been aborted.')
          };
          setresponse('retrieving response')
          let msg: any = await fetch(`https://api.openai.com/v1/threads/${thread.id}/messages?order=desc&limit=1`, {
            headers: {
              "Authorization": `Bearer ${process.env.NEXT_PUBLIC_GPTBot_key}`,
              "OpenAI-Beta": "assistants=v1"
            }
          })
          msg = await msg.json()
          setresponse(msg.data[0].content[0].text.value)
          setloading(false)
        } catch (err) {
          setloading(false)
          if (err instanceof Error) {
            setresponse(`Internal error: ${err.message} Try again later`)
          }
        }
      })()
    }
  }, [prompt])

  useEffect(() => {
    responseRef.current?.getAnimations().forEach(anim => anim.play())
  }, [response])

  const outputStyles: CSSProperties = {
    transform: `scale(${loading ? '.9' : '1'})`,
    filter: `opacity(${loading ? '100%' : '70%'})`
  }

  return (
    <>
      <div className="absolute h-fit w-fit shadow-sm rounded-full duration-500 bg-[url(/chatgptbackground.webp)] bg-no-repeat bg-center bg-cover z-20" style={outputStyles}>
        <div className='h-[300px] w-[300px] rounded-full duration-500 bg-[#008b10]/40 z-30'></div>
      </div>
      <p
        className={`absolute h-[300px] w-[350px] text-center flex items-center justify-center z-50 font-semibold text-slate-950 text-[17px] overflow-auto animate-none ia_text_appear leading-tight ${nunito.className}`}
        ref={responseRef}
      >
        { response && response }</p>
    </>
  )
}

