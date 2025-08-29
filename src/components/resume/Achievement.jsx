import React from 'react'
import ResumeCard from './ResumeCard'
import { motion } from 'framer-motion'

const Achievement = () => {
  return (
   <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col sm:flex-row  sm:gap-6 lg:gap-10"
    >
      <div className='w-full sm:w-1/2'>
        <div className="py-8 sm:py-12 font-titleFont flex flex-col gap-3 sm:gap-4">
          <p className="text-xs sm:text-sm text-designColor  tracking-[3px] sm:tracking-[4px]">Features</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Design Achievement</h2>
        </div>
        <div
          className="w-full  mt-14 h-[1000px] border-l-[6px] border-l-black
      border-opacity-30 flex flex-col gap-10"
        >
          <ResumeCard
            title="Photoshot skill "
            subTitle="SELF-IMAGE (2018-2022)"
            result="5.4/10"
            des="I learned photoshot for self photography and selfies, and trying to modify the image quality by own."
          />
          <ResumeCard
            title="Figma design"
            subTitle="self-learning (2024)"
            result="3.9/10"
            des="I am trying to improve my figma design to build the proper development skill from yt and doc"
          />
          <ResumeCard
            title="Canva skill"
            subTitle="self learning (2024-25)"
            result="4.5/10"
            des="I learne d the canva design skill for my own social media post. to get more audience to engaged my skill."
          />
        </div>
      </div>
      <div className='w-full sm:w-1/2'>
        <div className="py-8 sm:py-12 font-titleFont flex flex-col gap-3 sm:gap-4">
          <p className="text-xs sm:text-sm text-designColor  tracking-[3px] sm:tracking-[4px]">Features</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Development Achievement</h2>
        </div>
        <div
          className="w-full mt-14 h-[1000px] border-l-[6px] border-l-black
      border-opacity-30 flex flex-col gap-10"
        >
          <ResumeCard
            title="Portfolio project"
            subTitle="Trying to explore my skill (2025-Present)"
            result="React"
            des="Trying to build a proper designing and engaging protfolio to introduce my skills to the others."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Deep learning with js (2023-Prsent)"
            result="JavaScript"
            des="Learning the basic of js and the fundamental things and trying to explore the advance topic"
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="still learning (2023-Present)"
            result="CSS"
            des="Css is very vust syllabus to learn.Trying little thing step-by-step"
          />
        </div>
      </div>
    </motion.div>
  )
}

export default Achievement