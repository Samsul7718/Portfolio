import React from 'react'
import ResumeCard from './ResumeCard'

const Education = () => {
  return (
    <div>
      <div>
         <div className=''>
            <p className="text-sm text-designColor tracking-[4px]">2012-2018</p>
          <h2 className="text-4xl font-bold">Education Quality</h2>
         </div>
         <div  >
          {/* className="w-full mt-14 h-[1000px] border-l-[6px] border-l-black
      border-opacity-30 flex flex-col gap-10" */}
            <ResumeCard/>
          
           {/* <ResumeCard
            title="Front-end-developer"
            subTitle="CODING NINJA (2022-2023)"
            result="React"
            des="I learned the coding language java then i move forword to HTML,CSS,JS,React.Apart from 
            this i made some project.Now I'm upgrading my self."
          /> */}
         </div>
      </div>
      <div>
         <div></div>
         <div></div>
      </div>
    </div>
  )
}

export default Education