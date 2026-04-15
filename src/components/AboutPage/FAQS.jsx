import React, { useEffect, useState } from "react";
import SectionHeader from "../resuables/SectionHeader";
import arrow from "@/assets/right.png";
import { Plus } from "lucide-react";
import faqs from "../../data/Faqs";
function Faqs() {
  const [hover, sethover] = useState(false);
  const [isOpen, setisOpen] = useState(Array(faqs.length).fill(false));
    const toggleIdx = (idx) => {
      setisOpen((prev) => prev.map((item, i) => (i === idx ? !item : item)));
    };

  return (
    <div className="w-full flex flex-col justify-between gap-20 h-fit  bg-[#111111] py-50">
      <SectionHeader Num="[04]" Text="before you ask" />
      <div className="flex flex-col md:flex-row items-start gap-10">
        <div className="w-1/2 flex flex-col justify-between gap-10">
          <h1 className="font-antonSC uppercase leading-none text-white text-[120px]">
            faq's
          </h1>
          <div className="h-45 max-w-105 bg-[#202020] rounded-2xl p-5 flex flex-col justify-between items-start">
            <h3 className="font-antonSC text-white text-[26px] uppercase">
              still have a question?
            </h3>
            <div className="w-full flex items-center justify-between">
              <span className="text-white/80 text-lg font-clashRegular font-meduim">
                We are here to help you!
              </span>
              <div
                onMouseEnter={() => sethover(true)}
                onMouseLeave={() => sethover(false)}
                style={{
                  transform: hover ? "rotate(-45deg)" : "rotate(0deg)",
                  transition: "0.3s",
                }}
                className="bg-white flex   items-center justify-center h-8 w-8 rounded-full"
              >
                <a
                  href="https://www.flaticon.com/free-icons/right-arrow"
                  title="right arrow icons"
                >
                  <img className="h-4 w-4" src={arrow} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-fit flex flex-col justify-center gap-0.5 p-0.5 bg-white">
          {faqs.map((item, idx) => (
            <div
              onClick={(()=>toggleIdx(idx))}
              key={idx}
              className=" flex justify-between flex-col  cursor-pointer bg-[#111111] w-full h-full rounded-lg "
            >
              <div className="flex justify-between items-start p-4.5">
                <span className="text-white/90 text-lg font-clashRegular font-medium  tracking-wider uppercase text-wrap">
                  {item.question}
                </span>
                <Plus color="white" />
              </div>
              <div
                style={{
                  height: !isOpen[idx] ? "50px" : '0px',
                  overflow:"hidden",
                  transition: "0.5s"
                  // display: !isOpen[idx] ? "none" : "flex"
                }}
                className="w-3/4 flex items-start "
              >
                <span className="text-white/90 font-clashRegular leading-tight p-5 pt-0 font-medium text-[16px] tracking-wider">
                  {item.answer}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Faqs;
