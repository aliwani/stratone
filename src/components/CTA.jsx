import { Phone } from "lucide-react";
import React from "react";

function CTA() {
  return (
    <div className="w-full flex items-center justify-between mb-7 ">
      <span className="  text-sm md:text-lg  font-clashLight leading-none tracking-normal">Let's Begin a new Journey </span>
      <a
        href="https://wa.me/923028397473"
        target="_blank"
        rel="noopener noreferrer"
        className=" group h-auto w-45 md:w-50 p-0.5  bg-white rounded-full hover:bg-[#111111]"
      >
        <div className=" h-full flex items-center justify-between px-1 py-0.5 md:py-1 text-white group-hover:text-[#111111]  rounded-full bg-[#111111] group-hover:bg-white">
          <span className="font-clashLight text-[14px] md:text-sm xs:text-md pl-1">
            Book An Intro Call
          </span>
          <span className="bg-white group-hover:bg-[#111111] rounded-2xl ">
            <Phone
              className="p-2 text-[#111111] group-hover:text-white fill-[#111111] group-hover:fill-white"
              fill="true"
              size={30}
            />
          </span>
        </div>
      </a>
    </div>
  );
}

export default CTA;
