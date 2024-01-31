"use client"

import BotUIFace from './BotUIFace'

export default function BotContainer() {

  return (
    <section className='min-h-[100px] w-[100%] flex flex-col z-50 mt-32' id='chatbot'>
      <BotUIFace></BotUIFace>
    </section>
  )
}