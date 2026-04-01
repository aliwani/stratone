import React from "react";
import img from "@/assets/contact.jpg";
import { ArrowRight } from "lucide-react";
function ContactUs() {
  return (
    <div className="relative  flex-col h-133 md:h-[195] xl:h-287.5  w-full z-0  py-40 px-5 md:px-7.5 xl:px-10    ">
      <img
        src={img}
        className="absolute  top-0 -z-1 left-0 h-133 md:h-195 xl:h-287.5 w-full object-cover"
        alt=""
      />
      <div className="absolute inset-0 -z-1 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

      <div className="flex flex-col   font-antonSC leading-none   text-white text-[60px] md:text-[110px] xl:text-[200px]">
        <h1 className="">let's build</h1>
        <div className="flex items-end justify-end gap-0.5 md:gap-1 xl:gap-2 h-15 max-w-100 md:h-25 xl:h-50  md:max-w-190 xl:max-w-335">
          <h1>s</h1>
          <div className="h-11 w-10 md:h-22 md:w-30 xl:h-38 xl:w-40  mb-1.5 xl:mb-3.5   bg-white"></div>
          <h1>mething</h1>
        </div>
        <h1 className="md:pl-25 xl:pl-44">timeless</h1>
      </div>

      <div className="h-15 md:h-26 cursor-pointer  xl:h-32.5 max-w-100 md:max-w-190 xl:max-w-315 flex items-center justify-center mt-5">
        <div className="bg-white flex p-0.5 md:p-1 h-full gap-0.5 md:gap-1 w-62.5 md:w-95 xl:w-117">
          <div className="font-antonSC text-[36px] md:text-[42px] xl:text-[60px] flex items-center justify-center text-white bg-black w-3/4 rounded-sm md:rounded-lg xl:rounded-xl h-full">
            get in touch
          </div>
          <div className="flex items-center justify-center bg-black w-1/4 rounded-sm md:rounded-lg xl:rounded-xl  h-full">
            <ArrowRight size={45} color="white" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
