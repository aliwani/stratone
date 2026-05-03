import { div } from "framer-motion/client";
import { Dice1 } from "lucide-react";
import React from "react";

function WorkCardInfoSectionRight() {
  return (
    <div className="sticky flex top-25 right-0 flex-col gap-12 w-1/4 h-fit ">
      <div className="flex flex-col w-full bg-white h-115 p-0.5 gap-px">
        <div className="flex flex-col items-start justify-between p-7 h-1/4 w-full bg-black rounded-2xl">
          <span className="font-clashRegular font-medium tracking-wider text-white text-lg">
            Category:
          </span>
          <span className="font-antonSC text-xl text-white tracking-wider">
            e-commerce platform
          </span>
        </div>
        <div className="flex flex-col items-start justify-between p-7 h-1/4 w-full bg-black rounded-2xl">
          <span className="font-clashRegular font-medium tracking-wider text-white text-lg">
            Year:
          </span>
          <span className="font-antonSC text-xl text-white tracking-wider">
            2024
          </span>
        </div>
        <div className="flex flex-col items-start justify-between p-7 h-1/4 w-full bg-black rounded-2xl">
          <span className="font-clashRegular font-medium tracking-wider text-white text-lg">
            Client:
          </span>
          <span className="font-antonSC text-xl text-white tracking-wider">
            NexArc-Studio
          </span>
        </div>
        <div className="flex flex-col items-start justify-between p-7 h-1/4 w-full bg-black rounded-2xl">
          <span className="font-clashRegular font-medium tracking-wider text-white text-lg">
            Location:
          </span>
          <span className="font-antonSC text-xl text-white tracking-wider">
            Islamabad, Pakistan
          </span>
        </div>
      </div>
      <button className="w-40 h-14 font-clashRegular uppercase px-0.5 py-px text-white text-lg bg-white">
        <div className="flex items-center justify-center bg-black rounded-lg w-full h-full">
          view live site
        </div>
      </button>
    </div>
  );
}

export default WorkCardInfoSectionRight;
