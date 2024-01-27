"use client"

import Bot from './Bot'
import Prompt from './Prompt'

export default function Chatbot() {

  return (
    <section className='h-[400px] w-[100%] flex z-50'>
      <Bot></Bot>
      <Prompt></Prompt>
    </section>
  )
}