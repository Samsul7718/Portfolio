import React from 'react'
import Title from '../layouts/Title';
import FeatureCard from './FeatureCard';
import { SiAntdesign, SiProgress, SiSemanticweb } from 'react-icons/si';
import { AiFillAppstore } from 'react-icons/ai';
import { FaGlobe, FaMobile } from 'react-icons/fa';

const Features = () => {
  return (
    <section
     id="features"
      className="w-full pt-10 py-20 border-b-[1px] border-b-black">
        <Title title="Features" des="What i Do" />
        <div className="grid grid-cols-3 gap-20">
          <FeatureCard
          title="Web Development"
          des="Building modern, responsive, and high-performance web applications using the latest technologies
           like React, JavaScript, HTML, CSS, and more."
          icon={<SiSemanticweb />}
          />
          <FeatureCard
          title="App Development"
          des="Designing and developing high-performance mobile and web applications using modern frameworks
           like React Native, Flutter, and Progressive Web Apps (PWA)."
          icon={<AiFillAppstore />}
          />
          <FeatureCard
            title="SEO Optimization"
          des="Enhancing website visibility with advanced SEO strategies, including keyword optimization, 
          technical SEO, performance improvements, and on-page/off-page SEO techniques."
          icon={<SiProgress />}
          />
          <FeatureCard
          title="Mobile Development"
          des="Creating high-performance, cross-platform mobile applications using React Native and Flutter, 
          ensuring seamless user experiences on iOS and Android devices."
          icon={<FaMobile />}
          />
          <FeatureCard
         title="UX Design"
          des="Crafting intuitive and engaging user experiences through research-driven design, wireframing,
           prototyping, and usability testing for web and mobile applications."
          icon={<SiAntdesign />}
          />
          <FeatureCard
           title="Hoisting Websites"
          des="Providing reliable and secure web hosting solutions with fast performance, domain management, 
          and scalable server options for seamless website deployment."
          icon={<FaGlobe />}
          />
         
        </div>

    </section>
  )
}

export default Features