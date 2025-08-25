import React from 'react'
import ContactLeft from './ContactLeft'
import Title from '../layouts/Title'
import ContactRight from './ContactRight'

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full px-2 sm:px-6 lg:px-16 py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="WHAT YOUR QUERY" des="contact with me"/>
      </div>
      <div className='w-full'>
        <div className="w-full h-auto flex flex-wrap gap-2 sm:gap-4  justify-between gap-6">
        
          {/* grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 */}
           
          <ContactLeft />
          <ContactRight />
        </div>
      </div>

    </section>
  )
}

export default Contact