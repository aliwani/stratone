import React from "react";
import SectionHeader from "./SectionHeader";
import Header from "./Header";
import { Rocket } from "lucide-react";

function ChooseUS() {
  return (
    <div className="h-full w-full overflow-hidden flex flex-col gap-15 bg-black px-5 md:px-7.5 xl:px-10">
      <SectionHeader Num="[04]" Text="What Sets Us Apart" />
      <div className="w-full flex flex-col gap-18 rounded-3xl">
        <Header heading="Why choose us" />

        <div className="grid grid-cols-2 xl:grid-cols-3 mb-20 gap-0.5 min-h-[713px] md:h-212 xl:h-185 w-full bg-white p-0.5">

          <div className="xl:h-full md:h-70 min-h-[168px] md:col-span-2 xl:col-span-1 order-1  px-5 md:order-3 xl:order-1 flex flex-col items-center py-7 justify-end text-[22px] md:text-[26px] xl:text-[34px] text-white rounded-3xl bg-black">
            <h1 className="font-antonSC tracking-wide">strategy approach</h1>
            <span className="font-clashRegular text-xl text-center text-wrap">
              Brands built on research and insight
            </span>
          </div>

          <div className="xl:h-full md:h-[570x] min-h-[168px] order-2 md:order-1 xl:order-2 px-5  flex flex-col items-center py-7 justify-end text-[22px] md:text-[26px] xl:text-[34px] text-white rounded-3xl bg-black">
            <h1 className="font-antonSC tracking-wide">strategy approach</h1>
            <span className="font-clashRegular text-wrap text-center text-xl">
              Brands built on research and insight
            </span>
          </div>

          <div className="xl:h-full md:h-[570x] col-span-2 md:col-span-1 order-3 md:order-2 xl:order-3 flex flex-col gap-0.5  ">

            <div className="w-full h-[178px] md:h-[185px] xl:h-1/3 p-7.5 flex flex-col justify-center md:gap-3 xl:gap-8 text-white bg-black rounded-3xl">
              <div>
                <Rocket xl:size={60} size={50} />
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-antonSC text-lg md:text-xl xl:text-[24px] tracking-wider">SEO & Speed Optimized</span>
                <span className="font-clashRegular leading-none text-wrap text-[#dcd8d8] text-[16px] md:text-lg">
                  Websites are built lightning-fast, SEO-ready, and crafted for
                  higher ranking visibility online.
                </span>
              </div>
            </div>
          
            <div className="w-full h-[178px] md:h-[185px] xl:h-1/3 p-7.5 flex flex-col justify-center md:gap-3 xl:gap-8 text-white bg-black rounded-3xl">
              <div>
                <Rocket xl:size={60} size={50} />
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-antonSC text-lg md:text-xl xl:text-[24px] tracking-wider">SEO & Speed Optimized</span>
                <span className="font-clashRegular leading-none text-wrap text-[#dcd8d8] text-[16px] md:text-lg">
                  Websites are built lightning-fast, SEO-ready, and crafted for
                  higher ranking visibility online.
                </span>
              </div>
            </div>
          
            <div className="w-full h-[178px] md:h-[185px] xl:h-1/3 p-7.5 flex flex-col justify-center md:gap-3 xl:gap-8 text-white bg-black rounded-3xl">
              <div>
                <Rocket xl:size={60} size={50}  />
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-antonSC text-lg md:text-xl xl:text-[24px] tracking-wider">SEO & Speed Optimized</span>
                <span className="font-clashRegular leading-none text-wrap text-[#dcd8d8] text-[16px] md:text-lg">
                  Websites are built lightning-fast, SEO-ready, and crafted for
                  higher ranking visibility online.
                </span>
              </div>
          
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChooseUS;
