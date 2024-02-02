"use client";

import Project from '@/ui/projects/Project';
import { projectswithicons } from '../../ui/projects/projectsdata'
import { v4 as uuid } from 'uuid'
import Presentation from '@/ui/projects/Presentation';

export default function ProjectsPage() {

  return (
    <section className='relative bg-blue-200 w-[100vw] h-fit'>
      <div className='bg-[url("/project.png")] bg-no-repeat bg-fixed bg-cover bg-center bg-transparent w-[100%] h-fit py-2'>
        <Presentation></Presentation>
        <div className='w-[100%] h-fit flex items-center justify-between md:flex-row md:flex-wrap md:justify-evenly'>
          { projectswithicons.map(elem => (
            <Project 
              key={uuid()}  
              {...elem}
            />
          )) }
        </div>
      </div>
    </section>
  );
}
