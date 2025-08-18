import React from 'react'
import { contactImg } from '../../assets/index.jsx'

const ContactLeft = () => {
  return (
    <div
     className="w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne
                    p-8 rounded-lg  flex flex-col gap-8 justify-center"
    >
      <img 
        className="w-full h-64 object-cover rounded-lg mb-2"
      src={contactImg} alt="contactImg" />
      <div>

      </div>
      <div>

      </div>
    </div>
  )
}

export default ContactLeft