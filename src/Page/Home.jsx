import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutSection from '../components/AboutSection'
import WhatWeDo from '../components/WhatWeDo'
import Ourwork from '../components/Ourwork'
import ChooseUS from '../components/ChooseUS'
import Testimonial from '../components/Testimonial'

function Home() {
  return (
    <div className='h-full w-screen md:mt-1 pl-0.5 md:px-1 bg-white border-box' >
        <Navbar/>
      <Hero/>
      <AboutSection/>
      <WhatWeDo/>
      <Ourwork/>
      <ChooseUS/>
      <Testimonial/>
    </div>
 
  )
}

export default Home
