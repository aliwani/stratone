import React from "react";

function Hero() {
  return (
    <div className="relative flex flex-col items-center justify-center    bg-[url(@/assets/AboutHero.jpg)] bg-cover w-full min-h-110    md:h-135 xl:h-188 rounded-2xl z-0 px-10">
      <div className="absolute top-0 left-0 -z-1 w-full h-full bg-linear-to-l from-black to-black opacity-50 rounded-2xl"></div>

      <div className="min-h-1/2 md:min-h-1/3  flex-1 xl:flex-0  flex items-end md:items-start xl:items-center md:justify-center md:flex-row flex-col pb-10 xl:pb-25 mt-10 xl:mt-0   gap-6 md:gap-3 ">
        <div className="flex md:flex-row flex-col h-auto md:h-15 items-center md:items-start justify-center w-full xl:w-fit gap-4 md:gap-3">
          <div className="relative z-0 flex items-start justify-end h-10 md:h-15 w-30 md:w-45 md:mb-40  rounded-full ">
            <div className="absolute -z-3 left-0  h-full w-1/3 md:w-15 bg-amber-500 rounded-full" />
            <div className="absolute -z-2 left-[22%]  h-full w-1/3 md:w-15 bg-emerald-500 rounded-full" />
            <div className="absolute -z-1 left-[44%]  h-full w-1/3 md:w-15 bg-red-500 rounded-full " />
            <div className="h-10 w-10 md:h-15 md:w-15 bg-white rounded-full flex items-center justify-center">
              {" "}
              +54{" "}
            </div>
          </div>
          <div>
            <p className="font-clashRegular font-medium text-[16px] tracking-wide md:text-lg leading-tight text-white  w-full">
              Based on 54+ project reviews
            </p>
          </div>
        </div>
        <p className="text-white font-clashRegular tracking-wide font-medium text-[16px] md:text-lg leading-tight px-4 md:px-2 text-wrap w-full xl:w-2/6 text-center md:text-start">
          We’re a small, focused design agency with big ambition—specializing in
          crafting high-converting websites, bold brand identities, and
          intuitive digital experiences.
        </p>
      </div>
    </div>
  );
}

export default Hero;
