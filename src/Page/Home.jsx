import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutSection from '../components/AboutSection'
import WhatWeDo from '../components/WhatWeDo'
import Ourwork from '../components/Ourwork'
import ChooseUS from '../components/ChooseUS'
import Testimonial from '../components/Testimonial'
import Pricing from '../components/Pricing'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className='h-full w-screen md:mt-0.5 pl-0.5 md:px-0.5 bg-white border-box' >
        <Navbar/>
      <Hero/>
      <AboutSection/>
      <WhatWeDo/>
      <Ourwork/>
      <ChooseUS/>
      <Testimonial/>
      <Pricing/>
      <ContactUs/>
      <Footer/>
    </div>
 
  )
}

export default Home
