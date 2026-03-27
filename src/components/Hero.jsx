import React from "react";
import Heroimg from "@/assets/hero1.jpg";
import { Star } from "lucide-react";
function Hero() {
  return (
    <div className="bg-black md:rounded-2xl md:gap-5 md:h-[clamp(530px,60vw,620px)] pt-28 md:pt-0  w-full xl:h-[clamp(700px,49vw,100rem)]  flex md:flex-row flex-col md:items-center justify-between  border-box overflow-hidden">
      <div className="h-[clamp(300px, calc(100cqw * 0.75), 780px)] @container bg-amber-200   md:h-full md:w-1/2 order-2 md:order-1">
        <img
          src={Heroimg}
          alt=""
          className=" md:rounded-tl-2xl h-full w-full object-contain"
        />
      </div>
      <div className="w-full md:w-1/2 md:pr-12 md:pb-0 pb-12  flex flex-col items-start justify-end h-full order-1 md:order-2  text-white font-black overflow-hidden px-5 md:px-0 @container">
        <div className="w-full flex items-start justify-between overflow-hidden">
          <span className="font-black text-[16px] text-wrap text-lg  md:text-2xl">
            From Raw Ideas to Iconic Brands
          </span>
          <div></div>
        </div>
        <div className="flex flex-col items-center gap-2 justify-center w-full overflow-hidden  h-fit border-box ">
          <h1 className="font-antonSC w-full text-[calc(100cqw*0.2)] md:text-[clamp(5rem,11vw,30rem)] xl:text-[clamp(5rem,11.5vw,32rem)]  overflow-hidden leading-[0.95]  ">
            NARRATIVE
          </h1>
          <div className="w-full flex md:flex-row flex-col gap-2  overflow-x-hidden">
            <div className=" h-[clamp(135px,46vw,280px)] p-1 md:h-[clamp(8rem,17vw,50rem)] min-[475px]:w-[420px] md:w-1/2   bg-white  text-black order-2 md:order-1 ">
            <div className="h-full overflow-hidden w-full bg-black">asdsd</div>
            </div>
            <div className=" flex  md:flex-col h-fit   min-w-0 md:w-1/2  items-start justify-start gap-1 md:gap-1 leading-none order-1 md:order-2 ">
              <h1 className="font-antonSC text-[calc(100cqw*0.19)]   md:text-[clamp(4rem,8.5vw,20rem)] w-full leading-none overflow-hidden align-middle m-0 p-0 ">
                MEETS
              </h1>
              <h1 className="font-antonSC text-[calc(100cqw*0.19)] md:text-[clamp(3.9rem,8vw,20rem)] max-w-full overflow-hidden leading-none w-full">
                DESIGN
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
