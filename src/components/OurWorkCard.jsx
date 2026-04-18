import React from "react";
import PricingButton from "./pricing/PricingButton";

function OurWorkCard({title,src}) {
  return (
    <div className=" relative bg-white  p-0.5 gap-0.5 flex flex-col  md:h-130 md:w-[clamp(740px,70vw,850px)] origin-top  overflow-hidden">
      {" "}
      <div className="w-full h-full ">
        <img
          src={src}
          alt={title}
          className="h-full w-full object-cover rounded-md"
        />
      </div>
      <div className="w-full p-5 h-full gap-8 flex flex-col justify-start items-start bg-black  rounded-md ">
        <h2 className="font-antonSC text-[20px]  text-white">
          synthesis technology
        </h2>
        <div className="flex flex-col gap-5">
          <div className=" flex flex-col  text-white text-[16px]">
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

export default OurWorkCard;
