"use client"

import Bot from './Bot'

export default function Chatbot() {

  return (
    <section className='h-fit w-[100%] flex flex-col z-50 mt-32' id='chatbot'>
      <Bot></Bot>
    </section>
  )
}