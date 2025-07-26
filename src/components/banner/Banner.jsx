import React from 'react'
import LeftBanner from './LeftBanner'

const Banner = () => {
  return (
    <section
    id='home'
        className="w-full px-4 sm:px-6 lg:px-16  pt-32 pb-20 border-b-[1px] 
      font-titleFont border-b-black overflow-hidden"
    >
        <div  className="flex w-full max-w-screen-2xl mx-auto">
           <LeftBanner/>
        </div>
    </section>
  )
}

export default Banner