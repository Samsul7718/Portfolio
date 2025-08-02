import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { FaGlobe } from 'react-icons/fa'

const ProjectCard = ({title,src,des,github,live}) => {
  return (
     <div
      className=" w-full px-12 h-auto py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r
  from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900
   transition:colors duration-1000"
    >
    <div className="w-full h-[80%] overflow-hidden rounded-lg">
        <img
          className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
          src={src}
          alt="src"
        />
      </div>
      <div>
        <div>
          <div>
             <h3 className="text-base uppercase text-designColor font-normal">
              {title}
             </h3>
             <div>
              <a   
              href={github}
              target="_blank">
                  <BsGithub />
              </a>
              <a   
              href={live}
              target="_blank">
                  <FaGlobe />
              </a>
             </div>
            
          </div>

        </div>
        <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
          {des}
        </p>

      </div>

    </div>
  )
}

export default ProjectCard