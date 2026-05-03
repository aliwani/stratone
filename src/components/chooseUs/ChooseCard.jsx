import React from "react";

function ChooseCard({img,title,desc}) {
  return (
    <div className={`relative xl:h-full md:h-[570x] min-h-50  z-0   order-2 md:order-1 xl:order-2 px-5 leading-none gap-3 flex flex-col items-center py-7 justify-end text-[22px] md:text-[26px] xl:text-[34px] text-white rounded-lg md:rounded-3xl `}>
      <img src={img} alt=""  className="absolute top-0 left-0 -z-2 rounded-lg md:rounded-3xl h-full w-full object-cover"/>
      <div className="absolute bottom-0 left-0  bg-linear-to-t from-black to-transparent  h-3/5 w-full rounded-b-lg md:rounded-b-3xl opacity-90   -z-1"/>
      <h1 className="font-antonSC tracking-wide text-center">
        {title}
      </h1>
      <span className="font-clashRegular text-wrap text-[#dcd8d8] leading-none text-center text-[16px] md:text-xl">
       {desc}
      </span>
    </div>
  );
}

export default ChooseCard;
