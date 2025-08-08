import React from 'react'
import ResumeCard from './ResumeCard'

const Achievement = () => {
  return (
    <div>
      <div>
        <div className="py-12 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px]">Features</p>
          <h2 className="text-4xl font-bold">Design Experience </h2>
        </div>
        <div  className="w-full mt-14 h-[1000px] border-l-[6px] border-l-black
      border-opacity-30 flex flex-col gap-10">
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
    </div>
  )
}

export default Achievement