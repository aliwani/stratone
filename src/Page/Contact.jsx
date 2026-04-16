import Faqs from '@/components/AboutPage/FAQS'
import Hero from '@/components/contactPage/Hero'
import SectionHeader from '@/components/resuables/SectionHeader'
import React from 'react'

function Contact() {
  return (
    <div className='h-full w-screen bg-[#111111]  border-box overflow-hidden'>
      <Hero/>
      <div className='px-5 md:px-7.5 xl:px-10'>
      <SectionHeader Num="[01]" Text="get in touch" />
      <Faqs Num="[02]"/>
      </div>
    </div>
  )
}

export default Contact
