import React from 'react'

function ProjectBtn({text }) {
  return (
      <div>
      <button className={`bg-white h-10 w-60 md:w-58 md:h-12.5 p-0.5`}>
        <div className="flex items-center justify-center w-full h-full bg-black rounded-lg">
          <span className="font-clashRegular md:text-lg text-white uppercase tracking-wider">
           {text}
          </span>
        </div>
      </button>
      
    </div>
  )
}

export default ProjectBtn
