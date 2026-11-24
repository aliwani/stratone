import React from 'react'

function FormBtn({text,disabled}) {
  return (
    <div>
      <button type='submit' disabled={disabled} className={`bg-white h-10 w-40 md:h-12.5 p-0.5`}>
        <div className="flex items-center justify-center w-full h-full bg-[#111111]  rounded-lg">
          <span className="font-clashRegular md:text-lg text-white uppercase tracking-wider">
           {text}
          </span>
        </div>
      </button>
      
    </div>
  )
}

export default FormBtn
