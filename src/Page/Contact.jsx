import Faqs from '@/components/AboutPage/FAQS'
import Hero from '@/components/contactPage/Hero'
import React from 'react'

function Contact() {
  return (
    <div className='h-full w-screen bg-[#111111] px-5 md:px-7.5 xl:px-10 border-box overflow-hidden'>
      <Hero/>
      <Faqs Num="[02]"/>
    </div>
  )
}

export default Contact
