import React from "react";

function SectionHeader({Num,Text}) {
  return (
    <div className=" flex gap-3  items-center justify-between w-full font-antonSC text-white">
      <span className="text-[16px] tracking-wider">{Num}</span>
      <hr className=" w-full text-[#989797]" />
      <span className="text-lg tracking-wider text-nowrap">{Text}</span>
    </div>
  );
}

export default SectionHeader;
