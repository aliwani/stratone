import React from 'react'
import SectionHeader from './SectionHeader'
import Header from './Header'

function Testimonial() {
  return (
    <div className='w-full h-full flex flex-col gap-15 bg-black overflow-hidden' >
      <SectionHeader Num="[05]" Text="echoes of trust" />
      <Header heading="What our clients say"/>
    </div>
  )
}

export default Testimonial
