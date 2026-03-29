import React, { useEffect, useState } from "react";
import SectionHeader from "./SectionHeader";
import servicesData from "../Features/services/data";
import ServiceSelect from "./ServiceSelect";
import WorkCard from "./WorkCard";
function WhatWeDo() {
  const [activeindx, setactiveindx] = useState(1);
  const [activeText, setactiveText] = useState(0);

  const activeService = servicesData[activeindx - 1] || servicesData[0];
  return (
    <div className="relative z-0 w-full h-full  bg-black px-5 md:px-7.5 xl:px-10">
      <video
        src="/video/tester.mp4"
        type="video/mp4"
        className="absolute -z-10 top-0 left-0 h-full w-full object-cover  "
        autoPlay
        loop
        muted
        preload="none"
      />
      <section className="z-10 flex flex-col py-40 gap-8 h-full">
        <SectionHeader Num="[02]" Text="What we do" />
        <div className="flex flex-col md:flex-row justify-between gap-10  md:gap-5 ">
          <div className="w-auto h-full flex flex-col gap-12">
            <div className="py-1.5 ">
              {servicesData.map((services, idx) => (
                <ServiceSelect
                  setactiveText={setactiveText}
                  activeText={activeText}
                  activeindx={activeindx}
                  setactiveindx={setactiveindx}
                  key={services.id}
                  services={services}
                  idx={services.id + 1}
                />
              ))}
            </div>
            <button  className="bg-white h-10 w-37.5 md:w-45 md:h-12.5 p-0.5">
              <div className="flex items-center justify-center w-full h-full bg-black rounded-lg">
                <span className="font-clashRegular md:text-lg text-white uppercase tracking-wider">
                  see pricing
                </span>
              </div>
            </button>
          </div>
          <WorkCard img={activeService.img} list={activeService.list} />
        </div>
      </section>
    </div>
  );
}

export default WhatWeDo;
