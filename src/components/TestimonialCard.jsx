import React from 'react'
import img from "@/assets/hero1.jpg";

function TestimonialCard({person}) {
    
    
  return (
    <div className="flex flex-col justify-start gap-5  bg-black rounded-2xl p-5 xl:p-8  w-full">
             <div className="flex items-start   justify-between   gap-3">
               <div className="h-11 w-11 md:h-12 md:w-12  bg-white rounded-full  overflow-hidden shrink-0">
                 <img className="h-full w-full object-cover" src={person.img} alt="" />
               </div>
               <div className="text-white w-full rounded-2xl tracking-none leading-none md:tracking-wider md:leading-tight flex flex-col gap-2 p-5 bg-[#282727]">
                 <span className="text-[16px] md:text-lg tracking-wider  font-clashSemi  font-semibold uppercase">
                  {person.name}
                 </span>
                 <p className="font-clashLight font-semibold  text-white text-[16px] md:text-[18px] text-wrap  ">
                  {person.text}
                 </p>
               </div>
             </div>
             <div className="flex items-start justify-between  gap-3">
               <div className="text-white w-full rounded-2xl flex flex-col  p-5 bg-[#282727]">
                 <p className="font-clashLight font-semibold text-[16px] xl:text-[18px] text-wrap tracking-none leading-none md:tracking-wide md:leading-snug">
                   {person.reply}
                 </p>
               </div>
               <div className="h-12 w-12  bg-white rounded-full  overflow-hidden shrink-0">
                 <img className="h-full w-full object-cover" src={person.img} alt="" />
               </div>
             </div>
           </div>
  )
}

export default TestimonialCard
