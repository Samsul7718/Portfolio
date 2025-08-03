import React from 'react'
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
            <ul>
                <li>
                     Educations
                </li>
                <li>
                     Professional skills
                </li>
                <li>
                     Experience
                </li>
                <li>
                      Achievements
                </li>
               
            </ul>

        </div>
    </section>
  )
}

export default Resume