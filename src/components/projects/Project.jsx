import React from 'react'
import Title from '../layouts/Title'
import ProjectCard from './ProjectCard'
import {  projectOne,projectTwo,projectThree,projectFour,projectFive,projectSix } from '../../assets'

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
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 lg:gap-20'>
        <ProjectCard
        title="React Portfolio"
        des="A modern, fully responsive portfolio website built with React and Tailwind CSS. Features include 
          smooth animations, dynamic project showcase, and a contact form integration."
        src={projectOne}
        github="https://github.com/Samsul7718/Sam_Portfolio"
        live="https://sam-portfolio-zeta.vercel.app/"

        />
        <ProjectCard
         title="User Data Management"
          des="A user data management system built with React, Tailwind, and Firebase. Features include user 
          informatio with real time data, user authentication, and a clean, intuitive UI."
          src={projectTwo}
          github="https://github.com/Samsul7718/user_management"
          live="https://user-management-eight-tau.vercel.app/"
        />
        <ProjectCard
        title="React Todo App"
          des="A simple and efficient task management app built with React. Allows users to  add tasks,
          track progress, and stay organized with an intuitive interface."
          src={projectThree}
          github="https://github.com/Samsul7718/React-ToDoList"
          live="https://react-to-do-list-ten-eta.vercel.app/"
        />
        <ProjectCard
         title="Weather App"
          des="A real-time weather application built with React and OpenWeather API. Displays current weather 
          conditions, temperature, and forecasts for any location with a clean, responsive UI."
          src={projectFour}
          github="https://github.com/Samsul7718/weather-app.git"
          live="https://samsul7718-weather-app.netlify.app/"
        />
        <ProjectCard
         title="React Calculator"
          des="A simple and interactive calculator built with React. Supports basic arithmetic operations, 
          keyboard input, and a sleek, responsive design for all devices."
          src={projectFive}
          github="https://github.com/Samsul7718/react-calculator-app.git"
          live="https://react-calculator-app1.netlify.app/"
        />
        <ProjectCard
        title="React Task App"
          des="A simple and interactive Task Tracker built with React. Manage your tasks with ease using 
          features like task addition, deletion, and completion toggling, all within a sleek, responsive 
          design that works seamlessly across all devices."
          src={projectSix}
          github="https://github.com/Samsul7718/react-task-tracker"
          live="https://react-task-tracker12.netlify.app/"
        />
      </div>
    </section>
  )
}

export default project