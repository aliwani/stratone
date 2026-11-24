import React from "react";
import { Rocket } from "lucide-react";

function ChooseSmallSingle({title,desc}) {
  return (
    <div className="w-full h-44.5 md:h-full xl:h-1/3 p-7.5 flex flex-col justify-center md:gap-3 xl:gap-8 text-white bg-[#111111]  rounded-lg md:rounded-3xl">
      
      <div className="flex flex-col gap-2">
        <span className="font-antonSC text-lg md:text-xl xl:text-[24px] tracking-wider">
         {title}
        </span>
        <span className="font-clashRegular leading-none text-wrap text-[#dcd8d8] text-[16px] md:text-lg">
          {desc}
        </span>
      </div>
    </div>
  );
}

export default ChooseSmallSingle;
