import React from 'react'
import SectionHeader from '../resuables/SectionHeader'
import { Skiper52 } from '../ui/skiper-ui/skiper52'

function About2() {
  return (
    <div className='bg-[#111111] min-h-screen h-auto w-full flex flex-col gap-20 '>
      <SectionHeader Text="how it works" Num="[02]"/>
      <Skiper52/>
    </div>
  )
}

export default About2
