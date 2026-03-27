import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutSection from '../components/AboutSection'

function Home() {
  return (
    
    <div className='h-full w-screen md:mt-1 px-1 bg-white border-box' >
        <Navbar/>
      <Hero/>
      {/* <AboutSection/> */}
    </div>
 
  )
}

export default Home
