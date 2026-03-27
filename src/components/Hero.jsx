import React from "react";
import Heroimg from "@/assets/aboutImage.jpg";
import { Star } from "lucide-react";
function Hero() {
  return (
    <div className="bg-black rounded-2xl gap-10  w-full  h-[clamp(530px,55vw,1500px)]  flex items-center justify-between  ">
      <div className="w-1/2  h-full ">
        <img
          src={Heroimg}
          alt=""
          className="rounded-tl-2xl h-full w-full object-cover"
        />
      </div>
      <div className="w-1/2 pr-7 flex flex-col items-end justify-start text-white font-black overflow-hidden">
        <div className="flex items-start justify-between">
          <span className="font-black text-2xl">
            From Raw Ideas to Iconic Brands
          </span>
          <div></div>
        </div>
        <h1  className=" m-0 p-0 font-light text-[clamp(5rem,12vw,30rem)] leading-[0.95] ">NARRATIVE</h1>
        <div className="flex h-fit w-full justify-center items-center">
          <div className="w-1/2 h-60 bg-white "></div>
          <div className=" flex flex-col h-full w-1/2 items-start justify-between leading-none">
            <h1 className="text-[clamp(6rem,7.5vw,32rem)] leading-[0.8] align-middle m-0 p-0 tracking-tight">MEETS</h1>
            <h1 className="text-[clamp(5rem,6.6vw,30rem)] leading-[0.8] align-middle m-0 p-0 tracking-tight">DESIGN</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
