import { ArrowBigLeftDash, ArrowLeftIcon } from 'lucide-react'
import React from 'react'

function WorkCardToggle() {
  return (
    <div className='bg-white h-10 w-20 md:w-35 md:h-15 p-0.5 '>
      <a href="/work" className='cursor-pointer flex  justify-center items-center w-full h-full rounded-lg bg-[#111111]'>
        <div className=' text-white uppercase text-lg md:text-[28px] font-antonSC '>
        back
      </div>
      </a>
    </div>
  )
}

export default WorkCardToggle
