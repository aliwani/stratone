import React, { useEffect, useState } from 'react'

function Navbar() {
 
  return (
    <div className='fixed z-99 top-0 w-full h-25 flex justify-between items-center px-5 md:px-7.5 xl:px-10 border-b border-[#999] md:border-0 rounded-b-4xl '>
      <div className='font-antonSC text-white text-3xl'>
        Stratone 
      </div>
      <div className='flex items-center justify-center  bg-white h-9.75 w-17  ' >
        <span className='bg-black font-clashMeduim font-semibold tracking-widest rounded px-2 py-1.5 text-[16px] text-white' >MENU</span>
      </div>

    </div>
  )
}

export default Navbar
