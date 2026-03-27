import React, { useEffect, useState } from 'react'

function Navbar() {
 
  return (
    <div className='fixed top-0 w-full h-25 flex justify-between items-center px-12 border border-[#999] md:border-0 rounded-b-4xl '>
      <div className='font-bold text-2xl'>
        Stratone 
      </div>
      <div className='flex items-center justify-center py-4 px-2 bg-white h-7 w-17  ' >
        <span className='bg-black rounded px-2  text-white' >MENU</span>
      </div>

    </div>
  )
}

export default Navbar
