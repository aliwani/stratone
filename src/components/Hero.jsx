import Heroimg from "@/assets/test1.jpeg";
import eye from "@/assets/eye.png";
import test3 from "@/assets/heroImg.png"
import test4 from "@/assets/heroImg2.png"
import { Crosshair, Star } from "lucide-react";

function Hero() {
  const isPc = window.innerWidth;
  const src = isPc > 809 ? test4 : test2;

  return (
    <div className="bg-[#111111] md:rounded-t-2xl md:gap-5 md:h-[clamp(530px,60vw,620px)] pt-35 md:pt-0  w-full xl:h-[clamp(700px,49vw,100rem)]  flex md:flex-row flex-col md:items-center justify-between  border-box overflow-hidden">
      <div className="md:h-full md:w-1/2 order-2 md:order-1">
        <img
          src={src}
          alt=""
          className="  w-full object-cover "
        />
      </div>
      <div className="w-full md:w-1/2 md:pr-12 md:pb-0 pb-12  flex flex-col items-start justify-end h-full order-1 md:order-2  text-white font-black overflow-hidden px-5 md:px-0 @container">
        <div className="w-full flex flex-col gap-4 md:gap-6 xl:flex-row items-start mb-7 justify-between overflow-hidden">

         <div className="flex items-start justify-center gap-3">
          <Crosshair size={16}/>
           <span className="font-clashLight min-w-60 leading-none text-[14px] tracking-widest text-wrap uppercase  md:text-[16px]">
           transforming ideas into Iconic Brands
          </span>
         </div>
       <div className=" flex gap-2 items-center  justify-center">
           <div className="flex">
            <Star fill="white" strokeWidth={0} size={18}/>
            <Star fill="white" strokeWidth={0} size={18}/>
            <Star fill="white" strokeWidth={0} size={18}/>
            <Star fill="white" strokeWidth={0} size={18}/>
            <Star fill="white" strokeWidth={0} size={18}/>
            </div>
            <span className="leading-none text-white text-[16px] md:text-lg min-w-40 w-45 md:w-fit font-clashExtraLight tracking-wider">Designing stories that matter</span>
       </div>

        </div>
        <div className="flex flex-col items-start gap-2 justify-center w-full overflow-hidden  h-fit border-box ">
          <h1 className="font-antonSC w-fit text-[calc(100cqw*0.2)] md:text-[clamp(5rem,12.1vw,30rem)] xl:text-[clamp(5rem,12.8vw,33rem)]  overflow-hidden leading-[0.95]  ">
            STRATEGY
          </h1>
          <div className="w-full flex md:flex-row flex-col gap-2 items-start overflow-x-hidden">
            <div className=" h-[clamp(135px,56vw,280px)] p-0.5 md:h-[clamp(8rem,17vw,50rem)] w-full min-[475px]:w-105 md:w-1/2   bg-white  text-black order-2 md:order-1 ">
              <img
                className="rounded-2xl object-cover h-full w-full"
                src={eye}
                alt=""
              />
            </div>

            <div className=" flex  md:flex-col h-fit   min-w-0 md:w-fit  items-start justify-start gap-1 md:gap-0  leading-none order-1 md:order-2 ">
              <h1 className="font-antonSC text-[calc(100cqw*0.21)] md:text-[clamp(3.9rem,8.5vw,20rem)]  xl:text-[clamp(4rem,8.9vw,20rem)] w-fit leading-none overflow-hidden   ">
                MEETS
              </h1>
              <h1 className="font-antonSC text-[calc(100cqw*0.21)] md:text-[clamp(3.9rem,8.7vw,20rem)] xl:text-[clamp(3.9rem,9vw,20rem)] w-fit overflow-hidden leading-none ">
                VISION
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
