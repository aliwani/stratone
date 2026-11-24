import React from 'react'
import { useNavigate } from 'react-router-dom'

function ProjectBtn({text }) {
  const navigate = useNavigate()
  return (
      <div>
      <button onClick={()=>navigate("/work")} className={`cursor-pointer  bg-white h-10 w-50 md:w-58 md:h-12.5 p-0.5`}>
        <div className="flex items-center justify-center w-full h-full bg-[#111111] hover:rounded-none transition-all duration-500  rounded-lg">
          <span className="font-clashRegular font-semibold md:text-lg text-white uppercase tracking-wider">
           {text}
          </span>
        </div>
      </button>
      
    </div>
  )
}

export default ProjectBtn
