import React from "react";
import { ROUTES } from "@/configs/route.js";
import FooterLinks from "./FooterLinks";
function FooterLeftA() {
  const firstCol = ROUTES.slice(0, 5);
  const secondCol = ROUTES.slice(5);
  return (
    <div className="bg-black rounded-2xl w-full md:w-3/5    h-54 md:h-full  p-5 md:p-7.5 xl:p-10">
      <div className="flex flex-col w-full md:w-fit gap-3">
        <span className="font-clashSemi tracking-wider text-white text-[16px] md:text-lg uppercase font-bold">
          pages link
        </span>
        <div className="flex justify-between  w-fit md:w-full md:gap-40 ">
          <div className="flex flex-col gap-1 md:gap-2  w-[clamp(3.2rem,42vw,12.5rem)]  md:w-fit text-white text-[16px] md:text-[18px] font-clashMeduim ">
            {firstCol.map((route, idx) => {
              return (
                <FooterLinks key={idx} to={route.path}>
                  {route.name}
                </FooterLinks>
              );
            })}
          </div>
          <div className="flex flex-col gap-1 md:gap-2 w-[clamp(3.2rem,42vw,12.5rem)] md:w-fit text-white text-[16px] md:text-[18px] font-clashMeduim ">
            {secondCol.map((route, idx) => {
              return (
                <FooterLinks key={idx} to={route.path}>
                  {route.name}
                </FooterLinks>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterLeftA;
