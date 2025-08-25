import React from 'react'
import Navbar from "./components/navbar/Navbar"
import Banner from './components/banner/Banner'
import Features from './components/features/Features'
import Project from './components/projects/Project'
import Resume from './components/resume/Resume'
import Testimonial from './components/testimonial/Testimonial'
import Contact from './components/contact/Contact'
import FooterBottom from './components/footer/FooterBottom'


function App() {
 

  return (
    <>
   <div className="w-full h-auto bg-bodyColor text-lightText px-4">
   
    <Navbar />
    <div className='w-full overflow-hidden px-2 sm:px-4 lg:px-8'>
       <Banner/>
       <Features/>
       <Project/>
       <Resume/>
       <Testimonial/>
       <Contact/>
       <FooterBottom/>
    </div>
    
   </div>
       
      
    </>
  )
}

export default App
