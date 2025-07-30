import React from 'react'
import Title from '../layouts/Title';
import FeatureCard from './FeatureCard';
import { SiProgress, SiSemanticweb } from 'react-icons/si';
import { AiFillAppstore } from 'react-icons/ai';

const Features = () => {
  return (
    <section
     id="features"
      className="w-full pt-10 py-20 border-b-[1px] border-b-black">
        <Title title="Features" des="What i Do" />
        <div>
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
          title="Web Development"
          des="Building modern, responsive, and high-performance web applications using the latest technologies
           like React, JavaScript, HTML, CSS, and more."
          icon={<SiSemanticweb />}
          />
          <FeatureCard
          title="Web Development"
          des="Building modern, responsive, and high-performance web applications using the latest technologies
           like React, JavaScript, HTML, CSS, and more."
          icon={<SiSemanticweb />}
          />
          <FeatureCard
          title="Web Development"
          des="Building modern, responsive, and high-performance web applications using the latest technologies
           like React, JavaScript, HTML, CSS, and more."
          icon={<SiSemanticweb />}
          />
          <FeatureCard
          title="Web Development"
          des="Building modern, responsive, and high-performance web applications using the latest technologies
           like React, JavaScript, HTML, CSS, and more."
          icon={<SiSemanticweb />}
          />
        </div>

    </section>
  )
}

export default Features