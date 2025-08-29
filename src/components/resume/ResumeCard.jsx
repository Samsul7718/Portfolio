import React from 'react'

const ResumeCard = ({title,subTitle,result,des}) => {
  return (
        <div className="w-full h-1/3 group  flex flex-col sm:flex-row ">
          <div className="w-10 h-[6px] bgOpacity mt-6 sm:mt-16 relative">
            <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center 
        items-center bg-green bg-opacity-60">
          <span className="w-3 h-3 rounded-full bg-red inline-flex
          group-hover:bg-green-600 duration-300"></span>
         </span>
          </div>
            
          <div  
          className="flex-1 bg-black bg-opacity-20  hover:bg-opacity-30 duration-300 rounded-lg
        px-6 sm:px-8 flex flex-col justify-center gap-6 shadow-shadowOne">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4">
              <div>
                <h3 className="text-lg sm:text-2xl font-semibold group-hover:text-white duration-300">
                 {title}
                </h3>
                <p className="text-xs sm:text-sm mt-1 sm:mt-2 text-gray-400 group-hover:text-white duration-300">
                
                  {subTitle}
                </p>
              </div>
              <div>
                <p   className=" w-14 sm:w-20 h-6 sm:h-10 text-designColor bg-black bg-opacity-25 rounded-lg
            flex justify-center items-center shadow-shadowOne text-xs sm:text-sm  font-medium">
                  {result}
                </p>
              </div>

            </div>
            <p className="text-xs sm:text-sm text-base font-medium text-gray-400 group-hover:text-gray-300
        duration-300">
          
              {des}
            </p>
          </div>
        </div>
      
  )
}

export default ResumeCard