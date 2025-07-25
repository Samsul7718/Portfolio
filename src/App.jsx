import React from 'react'
import Navbar from "./components/navbar/Navbar"
import Banner from './components/banner/Banner'


function App() {
 

  return (
    <>
   <div className="w-full h-auto bg-bodyColor text-lightText font-bodyFont">
     
    <Navbar />
    <Banner/>
   </div>
       
      
    </>
  )
}

export default App
