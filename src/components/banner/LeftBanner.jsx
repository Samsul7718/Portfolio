import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiMui } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";

const LeftBanner = () => {
  return (
    <div className='w-full flex flex-col gap-20'>
        <div className='flex flex-col gap-5'>
            <h4 className='text-lg font-normal'>WEL COME TO MY WORLD</h4>
            <h1 className='text-6xl font-bold text-bold'>
                Hi I'm
                <span className='text-designColor capitalize'>Samsul Alam</span>
                </h1>
                <h2>hello cursior</h2>
                <p>
          Proficient front-end developer with a passion for immersive digital
          experiences and a solid foundation in HTML,CSS,Tailwind CSS, JavaScript,
          ReactJS, Redux,Material UI, Nodejs and Firebase . Committed to staying
          updated and collaborating with talented teams to bring innovative
          ideas to life, I contribute creatively with dedication and attention
          to detail,making a meaningful impact in front-end development.
                </p>
        </div>
        <div className='flex justify-between items-end'>
            <div>
                <h2 className='text-base uppercase font-titleFont mb-4'>Find me in</h2>
                <div  className="flex gap-4">
                    <span className='bannerIcon'>
                        <a href="https://www.linkedin.com/in/samsul-alam-427a0a19a/">
                            <FaLinkedin/>
                        </a>
                    </span>
                    <span className='bannerIcon'>
                        <a href="https://www.instagram.com/samsul1934/">
                            <FaInstagramSquare/>
                        </a>
                    </span>
                    <span className='bannerIcon'>
                        <a href="https://twitter.com/samsula32423150">
                            <FaSquareXTwitter/>
                        </a>
                    </span>
                </div>
            </div>
            <div>
                <h2 className="text-base uppercase font-titleFont mb-4">
                Best Skill On
               </h2>
               <div className='flex gap-4'>
                    <span className='bannerIcon'>
                        <FaHtml5/>
                    </span>
                    <span className='bannerIcon'>
                        <IoLogoJavascript/>
                    </span>
                    <span className='bannerIcon'>
                        <FaReact/>
                    </span>
                    <span className='bannerIcon'>
                        <SiMui/>
                    </span>
               </div>
            </div>
        </div>
    </div>
  )
}

export default LeftBanner