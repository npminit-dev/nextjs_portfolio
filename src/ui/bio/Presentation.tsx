"use client"

import { roboto, baskervville, lato, montserrat, nunito, raleway } from "@/utils/font_classes"
import Image from 'next/image'

export default function Presentation() {
  return (
    <article className={`px-2 py-2 w-full ${nunito.className} relative antialiased leading-tight py-2 md:px-8 md:py-8 z-30 flex flex-col items-center justify-between`}>
      <h2 className="w-[100%] my-2 font-bold md:my-4 text-xl md:text-2xl text-center leading-tight md:leading-normal dark:text-slate-300">A little about me...</h2>
      <p className="my-2 text-sm text-center md:my-3 md:max-w-[1000px] md:text-base leading-tight md:leading-normal dark:text-slate-300">
        I have been a developer since 2019, where I started this path from university, there I learned the basics of computing (although I have liked computers and IT since I was a child), mathematical logic, computer architecture, applied technology, imperative programming, algorithms and data structures with C, OOP and design patterns with JAVA and relational databases with managers such as PostgreSQL.      </p>
      <p className="my-2 text-sm text-center md:my-3 md:max-w-[1000px] md:text-base leading-tight md:leading-normal dark:text-slate-300">
        Then I took a self-taught path where I went towards the branch of web development with HTML, CSS and JavaScript/TypeScript where I have dedicated most of my effort. I have specialized in building interfaces with NextJS, React and various libraries that are normally used together (Redux Toolkit, React-Router-Rom, React-Query, useForm, PropTypes), I also use class-based style libraries such as Tailwind and Bootstrap or component-based like AntDesign or Semantic-UI-React, although I have no problem reading documentation and incorporating any necessary utilities into an application.
      </p>
      <p className="my-2 text-sm text-center md:my-3 md:max-w-[1000px] md:text-base leading-tight md:leading-normal dark:text-slate-300">
        My curiosity about NodeJS arose from knowing how libraries like React work {'under the hood'} and that led me to the REST APIs and the Express library. By having all these tools I am able to build Full Stack applications.
      </p>
      <p className="my-2 text-sm text-center md:my-3 md:max-w-[1000px] md:text-base leading-tight md:leading-normal dark:text-slate-300">
        My personal and professional goal is to enter the IT market where I can establish and expand my knowledge and skills in an experienced company.
      </p>
      <p className="my-2 text-sm text-center md:my-3 md:max-w-[1000px] md:text-base leading-tight md:leading-normal dark:text-slate-300">
        Do you want to know more about me? Ask my <strong><a href="#chatbot" className="hover:underline font-[800]">AI-Bot</a></strong> to find out more!      
      </p>
    </article>
  )
}