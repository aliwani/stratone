import React from "react";

function FooterRightB() {
  return (
    <div className="flex flex-col  md:flex-row justify-between gap-10 :gap-5 bg-[#111111] rounded-2xl  w-full md:w-3/5 min-h-66 md:h-full p-5  md:p-7.5 xl:p-10">
      <div className="flex flex-col  order-2 md:order-1 gap-5 justify-between w-full md:w-1/2 h-full text-white text-[16px] font-clashRegular  md:text-lg text-wrap tracking-wider leading-tight">
        <div className="flex gap-2 w-full">
          <span></span>
          <span className="w-6/7">
            Designing with clarity, culture, and craft — blending strategy with creativity for lasting impact{" "}
          </span>
        </div>
        <span>Developed by Stratone Studio</span>
      </div>
      <div className="w-full md:w-1/2 h-full order-1 md:order-2 flex flex-col gap-3 xl:gap-5 ">
        <span className="text-white text-[16px] md:text-lg font-clashSemi font-semibold tracking-wider uppercase">
          contact info
        </span>
        <address className="flex flex-col gap-1 text-white text-[16px] md:text-lg font-clashMeduim tracking-wider not-italic">
          <a href="tel:+923160865229" className="hover:underline">+92 316 086 522 9</a>
          <a href="mailto:StudioStratone@gmail.com" className="hover:underline">StudioStratone@gmail.com</a>
          <span className="leading-none">
            Muzaffarabad, AJK, Pakistan
          </span>
        </address>
      </div>
    </div>
  );
}

export default FooterRightB;
