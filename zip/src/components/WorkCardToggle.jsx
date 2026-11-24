import { ArrowBigLeftDash, ArrowLeftIcon } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function WorkCardToggle() {
    const navigate = useNavigate()
  return (
    <div className='bg-white h-10 w-20 md:w-35 md:h-15 p-0.5 '>
      <div onClick={()=>{navigate("/work")}} className='cursor-pointer flex  justify-center items-center w-full h-full rounded-lg bg-[#111111]'>
        <div className=' text-white uppercase text-lg md:text-[28px] font-antonSC '>
        back
      </div>
      </div>
    </div>
  )
}

export default WorkCardToggle
