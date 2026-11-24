import React from "react";
import WorkCardButton from "../resuables/WorkCardButton";

function OurWorkSectionCard({ slug, year, category, src, title }) {
  return (
    <a
      href={`/work/${slug}`}
      className="cursor-pointer relative bg-white  p-0.5 gap-0.5 flex flex-row  md:h-130 w-full   overflow-hidden"
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <div className="w-3/5 h-full ">
        <img  loading="lazy"
          src={src}
          alt={title}
          className="h-full w-full object-cover rounded-2xl"
        />
      </div>
      <div className="w-2/5 p-7.5 h-full gap-20 flex flex-col justify-between bg-[#111111]   rounded-2xl ">
        <h2 className="font-antonSC text-[26px]  text-white">{title}</h2>
        <div className="flex flex-col gap-5">
          <div className=" flex flex-col  text-white text-[18px]">
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
    </a>
  );
}

export default OurWorkSectionCard;
