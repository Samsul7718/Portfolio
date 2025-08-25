import React from 'react'
import LeftBanner from './LeftBanner'

const Banner = () => {
  return (
    <section
    id='home'
        className="w-full px-4  pt-26 pb-20 border-b-[1px] 
      font-titleFont border-b-black overflow-x-hidden"
      >
        <div  className="flex w-full mx-auto ">
           <LeftBanner/>
        </div>
    </section>
  )
}

export default Banner