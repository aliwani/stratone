import React, { useState, useEffect } from "react";

function ServiceSelect({
  scrollToCard,
  idx,
  services,
  activeText,
  setactiveText,
  activeindx,
  setactiveindx,
}) {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 809);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div key={idx} className="flex gap-2.5 md:gap-5 py-1.5 xl:py-2.5 ">
      <span className="w-6 mt-1 xl:mt-3 font-clashRegular text-white text-[16px]  md:text-lg">
        {services.num}
      </span>
      <div className="group  overflow-hidden w-full  pl-2   ">
        <div
          key={idx}
          onClick={() => {
            setactiveText(idx);
            scrollToCard();
          }}
          onMouseEnter={isDesktop ? () => setactiveindx(idx) : undefined}
          className={` grid     transition-all duration-500 ease-in-out group  ${isDesktop && activeindx === idx ? "grid-rows-[0fr_1fr]" : "grid-rows-[1fr_0fr]"}  `}
        >
          <h1
            className={`font-antonSC text-[40px] md:text-[64px] xl:text-[110px] text-wrap overflow-hidden leading-9 md:leading-14 xl:leading-25 transition-all duration-500 ${isDesktop && activeindx === idx ? "translate-y-full" : "translate-y-0"}    ${!isDesktop && activeText === idx ? "text-white " : "text-[#7F7F7F]"}`}
          >
            {services.title}
          </h1>
          <h1
            className={`font-antonSC text-[40px] md:text-[64px] xl:text-[110px] leading-9 md:leading-14 xl:leading-25 text-wrap overflow-hidden duration-500  transition-colors ${!isDesktop && activeText === idx ? "text-[#7F7F7F]" : "text-white "} `}
          >
            {services.title}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default ServiceSelect;