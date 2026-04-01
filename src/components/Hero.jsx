import Heroimg from "@/assets/test1.jpeg";
import test2 from "@/assets/text2.jpeg";
import test3 from "@/assets/sqaureCheck.jpeg";

import { Star } from "lucide-react";

function Hero() {
  const isPc = window.innerWidth;
  const src = isPc > 809 ? Heroimg : test3;

  return (
    <div className="bg-black md:rounded-t-2xl md:gap-5 md:h-[clamp(530px,60vw,620px)] pt-40 md:pt-0  w-full xl:h-[clamp(700px,49vw,100rem)]  flex md:flex-row flex-col md:items-center justify-between  border-box overflow-hidden">
      <div className="md:h-full md:w-1/2 order-2 md:order-1">
        <img
          src={src}
          alt=""
          className="  w-full object-cover "
        />
      </div>
      <div className="w-full md:w-1/2 md:pr-12 md:pb-0 pb-12  flex flex-col items-start justify-end h-full order-1 md:order-2  text-white font-black overflow-hidden px-5 md:px-0 @container">
        <div className="w-full flex items-start justify-between overflow-hidden">
          <span className="font-clashLight text-[14px] text-wrap   md:text-[18px]">
            From Raw Ideas to Iconic Brands
          </span>
          <div></div>
        </div>
        <div className="flex flex-col items-center gap-2 justify-center w-full overflow-hidden  h-fit border-box ">
          <h1 className="font-antonSC w-full text-[calc(100cqw*0.2)] md:text-[clamp(5rem,11vw,30rem)] xl:text-[clamp(5rem,11.5vw,32rem)]  overflow-hidden leading-[0.95]  ">
            NARRATIVE
          </h1>
          <div className="w-full flex md:flex-row flex-col gap-2  overflow-x-hidden">
            <div className=" h-[clamp(135px,56vw,280px)] p-1 md:h-[clamp(8rem,17vw,50rem)] min-[475px]:w-105] md:w-1/2   bg-white  text-black order-2 md:order-1 ">
              <img
                className="rounded-2xl object-cover h-full w-full"
                src={test2}
                alt=""
              />
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
