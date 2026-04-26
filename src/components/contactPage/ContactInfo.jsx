import React from "react";

function ContactInfo() {
  return (
    <div className="flex flex-col h-auto md:h-157 gap-10 justify-between items-start w-full md:w-1/2 ">
      <div className="h-auto flex flex-col md:flex-row gap-5 justify-between w-full">
        <div className="flex flex-col gap-1 md:gap-2">
          <h3 className="text-white font-clashRegular tracking-wider font-semibold uppercase text-[16px]">
            contact info
          </h3>
          <span className="font-clashLight font-semibold  text-white text-lg">
            +92 300 00 75996
          </span>
          <span className="font-clashSemi tracking-wider  text-white text-lg">
            StudioStratone@gmail.com
          </span>
        </div>
        <div className="flex flex-col md:items-center gap-1 md:gap-2">
          <h3 className="text-white font-clashRegular tracking-wider font-semibold uppercase text-[16px]">
            socials
          </h3>
          <div className="flex gap-3">
            <span className="font-clashLight font-semibold  text-white text-lg">
              Instagram
            </span>
            <span className="font-clashLight font-semibold  text-white text-lg">
              Linked In
            </span>
          </div>
          <div className="flex gap-3">
            <span className="font-clashLight font-semibold  text-white text-lg">
              Facebook
            </span>
            <span className="font-clashLight font-semibold  text-white text-lg">
              X
            </span>
          </div>
        </div>
      </div>
      <div className="w-4/5 flex flex-col gap-5">
        <span className=" text-white text-lg leading-none tracking-wider font-clashMeduim font-semibold">
          From the first meeting to final delivery, everything was seamless.
          Their design instinct is razor sharp, and they brought our vision to
          life better than we imagined.
        </span>
        <div className="flex  gap-3 w-full h-full">
          <div className="h-12.5 w-12.5 bg-[#111111] ">
            <img className="h-full w-full " src="" alt="" />
          </div>
          <div className="flex flex-col leading-none text-white">
            <span className="text-lg  font-clashSemi tracking-wider font-semibold ">Danyal Wani</span>
            <span className="text-[16px] font-clashRegular font-medium">Creative Director, Stratone Studio</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
