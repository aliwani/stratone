import React, { useEffect, useState } from 'react'

function Navbar() {
 
  return (
    <div className='fixed z-99 top-0 w-full h-25 flex justify-between items-center px-12 border-b border-[#999] md:border-0 rounded-b-4xl '>
      <div className='font-antonSC text-white text-3xl'>
        Stratone 
      </div>
      <div className='flex items-center justify-center py-4 px-2 bg-white h-7 w-17  ' >
        <span className='bg-black rounded px-2  text-white' >MENU</span>
      </div>

    </div>
  )
}

export default Navbar
