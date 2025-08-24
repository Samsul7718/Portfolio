import React from 'react'
import LeftBanner from './LeftBanner'

const Banner = () => {
  return (
    <section
    id='home'
        className="w-full px-4 sm:px-6 lg:px-16  pt-26 pb-20 border-b-[1px] 
      font-titleFont border-b-black overflow-hidden"
      
    >
      {/* flex w-full max-w-screen-2xl mx-auto */}
        <div  className="  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        
           <LeftBanner/>
        </div>
    </section>
  )
}

export default Banner