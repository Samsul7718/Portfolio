import React from 'react'

const ContactRight = () => {
  return (
    <div className='w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne
                    p-8 rounded-lg  flex flex-col gap-8'
                    >
      <form action="https://getform.io/f/apjnnzja" 
       method="post"
       className="w-full flex flex-col gap-6 py-5"
       >
        <div className='w-full flex gap-6'>
          <div className='w-1/2 flex flex-col gap-4'>
              <p className="text-sm text-gray-400 uppercase tracking-wide">
              YOUR NAME
            </p>
            <input name='username' type="text" 
            className={`${
                errMsg === "username is Required!" && "outline-designColor"
              } contactInput`}
            />
          </div>
            <div className='w-1/2 flex flex-col gap-4'>
              <p className="text-sm text-gray-400 uppercase tracking-wide">
              Phone Number
            </p>
            <input name='phoneNumber' type="text" 
            className=''
            />
          </div>
            </div>
            <div className='w-1/2 flex flex-col gap-4'>
              <p className="text-sm text-gray-400 uppercase tracking-wide">Email</p>
            <input name='email' type="text" 
            className=''
            />
          </div>
           <div className='w-1/2 flex flex-col gap-4'>
              <p className="text-sm text-gray-400 uppercase tracking-wide">
              Subject
            </p>
            <input name='subject' type="text" 
            className=''
            />
          </div>
          <div className='w-1/2 flex flex-col gap-4'>
              <p className="text-sm text-gray-400 uppercase tracking-wide">
              Message
            </p>
           <textarea 
           name="message" 
            cols="30"
            rows="10"
            className=''
           >

           </textarea>
          </div>
          <div>
            <button
            type='submit'
            >
              Send Message
            </button>
          </div>
      
      </form>
    </div>
  )
}

export default ContactRight