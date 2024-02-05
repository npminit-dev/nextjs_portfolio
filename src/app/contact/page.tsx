"use client"

import Contact from "@/ui/contact/Contact";
import Presentation from "@/ui/contact/Presentation";
import { FaDiscord } from "react-icons/fa";
import { contactData } from "@/ui/contact/ContactData"; 

export default function page() {
  return (
    <section className="relative w-full h-fit bg-[url('/contact.png')] bg-no-repeat bg-inherit bg-fixed bg-center">
      <Presentation></Presentation>
      {
        contactData.map(data => (
          <Contact
          title={data.name} 
          description={data.description}
          url={data.url}
          children={data.icon}  
          ></Contact>
        ))
      }
    </section>
  )
}
