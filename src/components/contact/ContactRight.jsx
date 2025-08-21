import React, { useState } from 'react'

const ContactRight = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
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
            <input 
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            name='username' 
            type="text" 
            className={`${
                errMsg === "username is Required!" && "outline-designColor"
              } contactInput`}
            />
          </div>
            <div className='w-1/2 flex flex-col gap-4'>
              <p className="text-sm text-gray-400 uppercase tracking-wide">
              Phone Number
            </p>
            <input 
            onChange={(e) => setPhoneNumber(e.target.value)}
            name='phoneNumber' 
            type="text" 
            value={phoneNumber}
             className={`${
                errMsg === "phoneNumber is Required!" && "outline-designColor"
              } contactInput`}
            />
          </div>
        </div>
            <div className='w-1/2 flex flex-col gap-4'>
              <p className="text-sm text-gray-400 uppercase tracking-wide">Email</p>
            <input 
            onChange={(e) => setEmail(e.target.value)}
            name='email' 
            type="text" 
            value={email}
             className={`${
                errMsg === "phoneNumber is Required!" && "outline-designColor"
              } contactInput`}
            />
          </div>
           <div className='w-1/2 flex flex-col gap-4'>
              <p className="text-sm text-gray-400 uppercase tracking-wide">
              Subject
            </p>
            <input 
            onChange={(e) => setSubject(e.target.value)}
            name='subject' 
            type="text" 
            value={subject}
             className={`${
                errMsg === "phoneNumber is Required!" && "outline-designColor"
              } contactInput`}
            />
          </div>
          <div className='w-1/2 flex flex-col gap-4'>
              <p className="text-sm text-gray-400 uppercase tracking-wide">
              Message
            </p>
           <textarea 
           onChange={(e) => setMessage(e.target.value)}
           value={message}
           name="message" 
            cols="30"
            rows="10"
             className={`${
                errMsg === "phoneNumber is Required!" && "outline-designColor"
              } contactInput`}
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