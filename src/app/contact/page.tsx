"use client"

import Contact from "@/ui/contact/Contact";
import Presentation from "@/ui/contact/Presentation";
import { FaDiscord } from "react-icons/fa";
import { contactData } from "@/ui/contact/ContactData"; 
import { v4 } from "uuid";

export default function page() {
  return (
    <section className="relative w-full h-fit bg-[url('/contact.png')] bg-no-repeat bg-inherit bg-fixed bg-center">
      <div className="h-full w-full bg-gradient-to-r from-blue-400/50 via-blue-200/50 to-blue-400/50">
        <Presentation></Presentation>
        <div className="h-full w-full m-auto pb-4 md:pb-20 max-w-[700px] px-4 flex flex-col sm:flex-row sm:flex-wrap items-center justify-center">
          {
            contactData.map(data => (
              <Contact
                key={v4()}
                title={data.name} 
                description={data.description}
                url={data.url}
                children={data.icon}  
              ></Contact>
            ))
          }
        </div>
      </div>
    </section>
  )
}
