import React, { useEffect, useState } from "react";
import SectionHeader from "./SectionHeader";
import servicesData from "../Features/services/data";
import ServiceSelect from "./ServiceSelect";
import WorkCard from "./WorkCard";
import PricingButton from "./PricingButton";
function WhatWeDo() {
  const [activeindx, setactiveindx] = useState(1);
  const [activeText, setactiveText] = useState(1);
  const isDesktop = window.innerWidth > 809;

  const activeService = isDesktop
    ? servicesData[activeindx - 1] || servicesData[0]
    : servicesData[activeText - 1] || servicesData[0];
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
            <PricingButton width="37.5" text="see pricing" />
          </div>
          <WorkCard img={activeService.img} list={activeService.list} />
        </div>
      </section>
    </div>
  );
}

export default WhatWeDo;
