import React from 'react'
import {portfolio} from '../../assets/index'
import { useTypewriter,Cursor} from 'react-simple-typewriter';
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiMui } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";

const LeftBanner = () => {
      const [port]=useTypewriter({
        words:['PORTFOLIO.',"LOGO"],
        loop: true,
        typeSpeed: 30,
        deleteSpeed: 10,
        delaySpeed: 2000,
    })
    const [text]=useTypewriter({
        words:['Front-end Developer.','React Developer.','Web Designer.'],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
    })
  return (
    <div className='w-full flex flex-col gap-20'>
        <div className='flex flex-col gap-5'>
            <h4 className='text-lg font-normal'>WEL COME TO MY   <span>{port === "LOGO" ? (
        <img src={portfolio} alt="logo" className="w-12 h-12 inline-block" />
      ) : (
        port
      )}</span></h4>
            <h1 className='text-6xl font-bold text-bold'>
                Hi, I'm {''}
                <span className='text-designColor capitalize'>Samsul Alam</span>
                </h1>
                <h2 className="text-4xl font-bold text-white">
                    a <span>{text}</span>
                    <Cursor
                    cursorBlinking="false"
                    cursorStyle="</>"
                    cursorColor="#2dd53eff"
                    />
                </h2>
                <p className="text-base font-bodyFont leading-6 tracking-wide">
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
                        <a href="https://drive.google.com/file/d/1o9_E_rxmBVvXFF8T6E9CWAWA-rLeZQmf/view?usp=sharing">
                           <IoLogoJavascript/>
                        </a>
                       
                    </span>
                    <span className='bannerIcon'>
                        <a href="https://drive.google.com/file/d/1rzxMlI7TwAhGPgoHsFdde32sS2V_rgfX/view?usp=sharing">
                            <FaReact/> 
                        </a>
                       
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