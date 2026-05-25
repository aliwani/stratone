import React from 'react'
import SectionHeader from './resuables/SectionHeader'
import PricingCard from './pricing/PricingCard'

function Pricing({sectionRef}) {
  
  return (
    <div ref={sectionRef} className='w-full flex items-center flex-col gap-18 bg-[#111111]  py-20 md:py-40 px-5 md:px-7.5 xl:px-10'>
      <SectionHeader Num="[05]" Text="our pricing" />
      <PricingCard/>
    </div>
  )
}

export default Pricing
