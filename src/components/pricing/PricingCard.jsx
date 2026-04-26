import React from "react";
import PricingButton from "./PricingButton";
import ProjectBtn from "../resuables/ProjectBtn";
import PriceSectionBtn from "./PriceSectionBtn";
import priceData from "@/data/Pricingdata.js";

function PricingCard() {
  return (
    <div className="grid grid-col-1 min-w-15 w-full md:grid-cols-2 p-0.5 gap-0.5  md:max-w-200 xl:w-250 h-full min:h-210 md:h-133 xl:h-145 bg-white">
      { priceData.map((dets, idx) => {
        

       return <div key={dets.id} className="flex flex-col justify-between md:gap-8 xl:gap-10 w-full h-full p-5 bg-[#111111]  rounded-2xl">
          <div className="flex flex-col gap-4 xl:gap-7">
            <div className="flex flex-col gap-1">
              <h3 className="font-clashMeduim font-semibold uppercase tracking-wide text-[#EDEDED] text-[16px] md:text-lg">
                {dets.tagline}
              </h3>
              <h1 className="font-antonSC text-white text-lg md:text-3xl  tracking-wider">
                {dets.service}
              </h1>
            </div>

            <div className="flex flex-col gap-2 md:gap-3 xl:gap-5 font-clashMeduim tracking-wider text-[16px] md:text-lg">
              <span className=" text-[#EDEDED]  font-semibold  uppercase">includes</span>

              <ul className="flex flex-col items-start ">
                {dets.includes.map((dets,idx) => {
                    return                  <li key={idx} className="flex items-start gap-2">
                    <span className="pb-1 pr-2 text-white text-[27px] leading-none">
                      •
                    </span>
                    <span className="text-[#EDEDED] font-semibold ">
                      {dets}
                    </span>
                  </li>;
                })}
              </ul>
              <div></div>
            </div>
          </div>
          <PriceSectionBtn text={dets.price} />
        </div>;
      })}
    </div>
  );
}

export default PricingCard;
