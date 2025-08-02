import React from 'react'
import Title from '../layouts/Title'
import ProjectCard from './ProjectCard'
import { projectOne } from '../../assets'

const project = () => {
  return (
    <section
      id="project"
      className="w-full py-20 border-b-[1px] border-b-black">
        
      <div className="flex justify-center items-center text-center">
        <Title 
        title="VISIT MY PORTFOLIO AND GIVE YOUR FEEDBACK"
          des="My Projects" />
      </div>
      <div>
        <ProjectCard
        title="React Portfolio"
        des="A modern, fully responsive portfolio website built with React and Tailwind CSS. Features include 
          smooth animations, dynamic project showcase, and a contact form integration."
        src={projectOne}
        github="https://github.com/Samsul7718/Sam_Portfolio"
        live="https://sam-portfolio-zeta.vercel.app/"

        />
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
      </div>
    </section>
  )
}

export default project