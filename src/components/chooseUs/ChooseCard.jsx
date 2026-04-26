import React from "react";

function ChooseCard() {
  return (
    <div className="xl:h-full md:h-[570x] min-h-50  order-2 md:order-1 xl:order-2 px-5 leading-none gap-3 flex flex-col items-center py-7 justify-end text-[22px] md:text-[26px] xl:text-[34px] text-white rounded-lg md:rounded-3xl bg-[#111111] ">
      <h1 className="font-antonSC tracking-wide text-center">
        strategy approach
      </h1>
      <span className="font-clashRegular text-wrap text-[#dcd8d8] leading-none text-center text-[16px] md:text-xl">
        Brands built on research and insight
      </span>
    </div>
  );
}

export default ChooseCard;
