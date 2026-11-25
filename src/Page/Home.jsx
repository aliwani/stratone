import React, { useRef } from 'react'
import Hero from '../components/Hero'
import AboutSection from '../components/AboutSection'
import WhatWeDo from '../components/WhatWeDo'
import ChooseUS from '../components/chooseUs/ChooseUS'
import Testimonial from '../components/Testimonial'
import Pricing from '../components/Pricing'
import Ourwork from '@/components/Ourwork'
import SEO from '@/components/SEO'


function Home() {
    const sectionRef = useRef(null);
    const handleScroll = () => {
    sectionRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <div className='h-full w-screen   bg-white border-box' >
      <SEO
        title="Stratone Studio | Creative Agency — Web Design, Branding & Marketing"
        description="Stratone Studio is a full-service creative agency specializing in web design, brand identity, Shopify development, and digital marketing for ambitious businesses worldwide."
        canonical="/"
      />
      <Hero/>
      <WhatWeDo handleScroll={handleScroll}/>
      <Ourwork/>
      <Testimonial/>
      <AboutSection/>
      <ChooseUS/>
      {/* <Pricing sectionRef={sectionRef}/> */}
     
    </div>
 
  )
}

export default Home
