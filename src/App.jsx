import React from 'react'
import Navbar from "./components/navbar/Navbar"
import Banner from './components/banner/Banner'
import Features from './components/features/Features'
import Project from './components/projects/project'
import Resume from './components/resume/Resume'


function App() {
 

  return (
    <>
   <div className="w-full h-auto bg-bodyColor text-lightText font-bodyFont">
     
    <Navbar />
    <div className='max-w-screen-2xl mx-auto px-4 sm:px-0 md:px-6 lg:px-16'>
       <Banner/>
       <Features/>
       <Project/>
       <Resume/>
    </div>
    
   </div>
       
      
    </>
  )
}

export default App
