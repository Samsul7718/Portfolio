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
   <div className="w-full min-h-screen  bg-bodyColor text-lightText font-bodyFont">
   
    <Navbar />
    <div className='max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-6 sm:py-8 md:py-10'>
     

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
