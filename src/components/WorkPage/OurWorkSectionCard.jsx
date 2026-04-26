import React from "react";
import PricingButton from "../pricing/PricingButton";

function OurWorkSectionCard({ src, title }) {
    console.log(title);
    
  return (
    <div className=" relative bg-white  p-0.5 gap-0.5 flex flex-row  md:h-130 w-full   overflow-hidden">
      <div className="w-3/5 h-full ">
        <img
          src={src}
          alt={title}
          className="h-full w-full object-cover rounded-2xl"
        />
      </div>
      <div className="w-2/5 p-7.5 h-full gap-20 flex flex-col justify-center bg-[#111111]   rounded-2xl ">
        <h2 className="font-antonSC text-[26px] pb-50 text-white">
          synthesis technology
        </h2>
        <div className="flex flex-col gap-5">
          <div className=" flex flex-col  text-white text-[18px]">
            <span className=" font-clashRegular text-[#dbd9d9]">
              YEAR <span className="font-clashSemi">: 2025</span>
            </span>
            <span className=" font-clashRegular text-[#dbd9d9]">
              CATEGORY<span className="font-clashSemi">: UI / UX</span>{" "}
            </span>
          </div>
          <PricingButton text="view detail" />
        </div>
      </div>
    </div>
  );
}

export default OurWorkSectionCard;
