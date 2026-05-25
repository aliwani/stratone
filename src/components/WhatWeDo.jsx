import React, { useEffect, useState } from "react";
import SectionHeader from "./resuables/SectionHeader";
import servicesData from "../Features/services/data";
import WorkSectionCard from "./WorkSectionCard";
import PricingButton from "./pricing/PricingButton";
import ServiceSelect from "./ServiceSelect";
import { motion } from "framer-motion";
import ProjectBtn from "./resuables/ProjectBtn";
function WhatWeDo({ handleScroll }) {
  const [activeindx, setactiveindx] = useState(1);
  const [activeText, setactiveText] = useState(1);
  const isDesktop = window.innerWidth > 809;

  const activeService = isDesktop
    ? servicesData[activeindx - 1] || servicesData[0]
    : servicesData[activeText - 1] || servicesData[0];

  return (
    <div className="relative z-0 w-full h-full  bg-[#111111]  px-5 md:px-7.5 xl:px-10">
      <video
        src="/video/tester.mp4"
        type="video/mp4"
        className="absolute -z-10 top-0 left-0 h-full w-full object-cover  "
        autoPlay
        loop
        muted
        playsInline
        webkit-playsinline="true"
        disablePictureInPicture
        controls={false}
        style={{
          pointerEvents: "none",
          userSelect: "none",
          WebkitUserSelect: "none",
        }}
      />

      <section className="z-10 flex flex-col py-20 md:py-40 gap-8 h-full">
        <SectionHeader Num="[02]" Text="What we do" />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col md:flex-row justify-between gap-8  md:gap-5 "
        >
          <div className="w-auto h-full flex flex-col gap-7 md:gap-12">
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
            <div className="flex gap-4">
              <PricingButton
                handleScroll={handleScroll}
                width="37.5"
                text="see pricing"
              />
              <ProjectBtn text="view work" />
            </div>
          </div>
          <WorkSectionCard img={activeService.img} list={activeService.list} />
        </motion.div>
      </section>
    </div>
  );
}

export default WhatWeDo;
