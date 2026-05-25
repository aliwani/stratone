import React from "react";
import WorkCardButton from "./resuables/WorkCardButton";

function OurWorkCard({slug,year, category,title,src}) {
  return (
    <div className=" relative bg-white  p-0.5 gap-0.5 flex flex-col  md:h-130 md:w-[clamp(740px,70vw,850px)]   overflow-hidden">
      {" "}
      <div className="w-full ">
        <img
          src={src}
          alt={title}
          className=" w-full object-cover rounded-md"
        />
      </div>
      <div className="w-full p-5 h-full gap-8 flex flex-col justify-start items-start bg-[#111111]   rounded-md ">
        <h2 className="font-antonSC text-[20px] text-wrap text-white">
          {title}
        </h2>
        <div className="flex flex-col gap-5">
          <div className=" flex flex-col  text-white text-[16px]">
            <span className=" font-clashRegular text-[#dbd9d9]">
              YEAR <span className="font-clashSemi">: {year}</span>
            </span>
            <span className=" font-clashRegular text-[#dbd9d9]">
              CATEGORY<span className="font-clashSemi">: {category}</span>{" "}
            </span>
          </div>
          <WorkCardButton slug={slug} text="view detail" />
        </div>
      </div>
    </div>
  );
}

export default OurWorkCard;
