import React, { useState } from 'react'
import Title from '../layouts/Title'

const Resume = () => {
    const [educationData, setEducationData] = useState(true);
  const [skillData, setSkillData] = useState(false);
  const [experienceData, setExperienceData] = useState(false);
  const [achievementData, setAchievementData] = useState(false);
  return (
    <section id='resume' className='w-full py-20 border-b-[1px] border-b-black'>
        <div className='flex justify-center items-center text-center '>
            <Title title="SEFT-TOUGHT FRONT-END DEVELOPER" des="My Resume"/>
        </div>
        <div>
            <ul className="w-full grid grid-cols-4">
                <li
                  onClick={() =>
                   setEducationData(true) &
                   setSkillData(false) &
                   setAchievementData(false) &
                   setExperienceData(false)
              }
              className={`${educationData? "border-designColor rounded-lg": "border-transparent"} resumeLi`}
                >
                     Educations
                </li>
                <li
                onClick={() =>
                   setEducationData(false) &
                   setSkillData(true) &
                   setAchievementData(false) &
                   setExperienceData(false)
              }
               className={`${
              skillData ? "border-designColor rounded-lg" : "border-transparent"
            } resumeLi`}
                >
                     Professional skills
                </li>
                <li
                
                onClick={() =>
                   setEducationData(false) &
                   setSkillData(false) &
                   setAchievementData(false) &
                   setExperienceData(true)
              }
               className={`${
              experienceData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
              >
                     Experience
                </li>
                <li
                
                onClick={() =>
                   setEducationData(false) &
                   setSkillData(false) &
                   setAchievementData(true) &
                   setExperienceData(false)
              }
               className={`${
              achievementData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
              >
                      Achievements
                </li>
               
            </ul>

        </div>
    </section>
  )
}

export default Resume