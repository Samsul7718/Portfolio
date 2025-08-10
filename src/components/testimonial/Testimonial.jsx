
import React from 'react'
import Title from  '../layouts/Title'
import { testimonialOne } from '../../assets/index.jsx'
import { quote } from '../../assets/index.jsx'

const Testimonial = () => {
  return (
    <section
    id='testimonial'
      className="w-full py-20 border-b-[1px] border-b-black"
    >
        <div className="flex justify-center items-center text-center">
        <Title title="WHAT CLIENT SAY" des="TESTIMONIAL" />
        </div>
      <div className='max-w-6xl mx-auto'>
        <div className='w-full'>
            <div className="w-full h-[500px] flex justify-between">
                <div
                className="w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne
              p-8 rounded-lg flex flex-col gap-8 justify-center"
              >
                 <img
                  className="h-72 rounded-lg object-cover"
                  src={testimonialOne}
                  alt="testimonialOne"
                />
                  <div>
                  <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                    Bound - Trolola
                  </p>
                  <h3 className="text-2xl font-bold">John Down Joe</h3>
                  <p className="text-base tracking-wide text-gray-500">CEO</p>
                </div>
              </div>
               <div className="w-[60%] h-full flex flex-col justify-between">
                <img className="w-[20%]" src={quote} alt="quote" />
                <div
                  className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne
               rounded-lg p-8 flex flex-col justify-center gap-8"
                >
                  <div className="flex justify-between items-center py-6 border-b-2 border-b-gray-900">
                    <div>
                      <h3 className="text-2xl font-medium tracking-wide">
                        travel mobile app design
                      </h3>
                      <p className=" text-base text-gray-400 mt-3">
                        via upwork mar 15,2024 - aug 30, 2024 test
                      </p>
                    </div>
                    <div className="text-yellow-500 flex gap-1">
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </div>
                  </div>
                  <div className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                    <p>
                      Lorem ipsum, dolor sit amet consectetur cupiditate
                      explicabo veniam molestias laudantium soluta qui omnis!
                      Quod.Lorem ipsum, dolor sit amet consectetur cupiditate
                      explicabo veniam molestias laudantium soluta qui omnis!
                      Quod.
                    </p>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
    
  )
}

export default Testimonial