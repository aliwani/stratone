import Faqs from '@/components/FAQS'
import FormSection from '@/components/contactPage/FormSection'
import Hero from '@/components/contactPage/Hero'
import React from 'react'

function Contact() {
  return (
    <div className='h-full w-screen bg-[#111111]  border-box overflow-hidden'>
      <Hero/>
      <div className='px-5 md:px-7.5 xl:px-10'>
        <FormSection/>
      <Faqs Num="[02]"/>
      </div>
    </div>
  )
}

export default Contact
