import React, { useRef } from 'react'
import Hero from '../components/Hero'
import AboutSection from '../components/AboutSection'
import WhatWeDo from '../components/WhatWeDo'
import Ourwork from '../components/Ourwork'
import ChooseUS from '../components/chooseUs/ChooseUS'
import Testimonial from '../components/Testimonial'
import Pricing from '../components/Pricing'


function Home() {
    const sectionRef = useRef(null);
    const handleScroll = () => {
    sectionRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <div className='h-full w-screen md:mt-0.5 pl-0.5 md:px-0.5   bg-white border-box' >
      <Hero/>
      <AboutSection/>
      <WhatWeDo handleScroll={handleScroll}/>
      <Ourwork/>
      <ChooseUS/>
      <Testimonial/>
      <Pricing sectionRef={sectionRef}/>
     
    </div>
 
  )
}

export default Home
