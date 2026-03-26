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
      <div className="w-1/2 pr-5 text-white font-black overflow-hidden">
        <div className="flex items-center justify-between">
          <span className="font-black text-2xl">
            From Raw Ideas to Iconic Brands
          </span>
          <div></div>
        </div>
        <h1 className="text-[clamp(5rem,8vw,30rem)] leading-48">NARRATIVE</h1>
        <div className="flex justify-center items-center">
          <div className="w-1/2 h-60 bg-white ">follow</div>
          <div>
            <h1 className="text-[clamp(5rem,8vw,30rem)] ">MEETS</h1>
            <h1 className="text-[clamp(5rem,8vw,30rem)] ">DESIGN</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
