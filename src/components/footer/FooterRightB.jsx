import React from "react";

function FooterRightB() {
  return (
    <div className="flex flex-col  md:flex-row justify-between gap-10 :gap-5 bg-black rounded-2xl  w-full md:w-3/5 min-h-66 md:h-full p-5  md:p-7.5 xl:p-10">
      <div className="flex flex-col  order-2 md:order-1 gap-5 justify-between w-full md:w-1/2 h-full text-white text-[16px] font-clashRegular  md:text-lg text-wrap tracking-wider leading-tight">
        <div className="flex gap-2 w-full">
          <span>ali</span>
          <span className="w-6/7">
            Dorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            quod, deleniti accusamus{" "}
          </span>
        </div>
        <span>Designed by stratone studio</span>
      </div>
      <div className="w-full md:w-1/2 h-full order-1 md:order-2 flex flex-col gap-3 xl:gap-5 ">
        <span className="text-white text-[16px] md:text-lg font-clashSemi font-semibold tracking-wider uppercase">
          contact info
        </span>
        <div className="flex flex-col gap-1 text-white text-[16px] md:text-lg font-clashMeduim tracking-wider">
          <span>03000075996</span>
          <span>stratone@gmail.com</span>
          <span className="leading-none">
            Near Pm House, Jalalabad, Muzaffarabad, AJK{" "}
          </span>
        </div>
      </div>
    </div>
  );
}

export default FooterRightB;
