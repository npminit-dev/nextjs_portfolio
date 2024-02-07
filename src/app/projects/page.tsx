"use client";

import Project from '@/ui/projects/Project';
import { projectswithicons } from '../../ui/projects/projectsdata'
import { v4 as uuid } from 'uuid'
import Presentation from '@/ui/projects/Presentation';

export default function ProjectsPage() {

  return (
    <section className='relative bg-gradient-to-l from-teal-200 from-1% via-teal-100 via-50% to-teal-200 to-99% w-[100vw] h-fit
      dark:from-teal-900 dark:via-teal-800 dark:to-teal-900'>
      <div className='bg-[url("/project.png")] bg-no-repeat bg-fixed bg-contain bg-center w-[100%] h-fit py-2'>
        <Presentation></Presentation>
        <div className='w-[100%] h-fit flex items-center justify-between flex-row md:flex-column flex-wrap md:justify-evenly'>
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
