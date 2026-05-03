"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import ReactLenis from "lenis/react";
import React, { useEffect, useState, useRef } from "react";
import OurWorkCard from "@/components/OurWorkCard";
import projects from "@/data/Work";
import WorkCardButton from "@/components/resuables/WorkCardButton";

const StickyCard_001 = ({ i,year,slug, category, title, src, progress, range, targetScale }) => {
  const container = useRef(null);

  const scale = useTransform(progress, range, [1, targetScale]);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 800);
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div
      ref={container}
      className={`${isMobile ? "relative pt-5 pb-5 flex items-center justify-center" : "sticky mt-40 -top-40  pb-20 flex items-center justify-center"} `}
    >
      {isMobile ? (
        <OurWorkCard slug={slug} year={year} category={category} title={title} src={src}/>
      ) : (
        <motion.div
          style={{
            scale,
            top: `calc(-5vh + ${i * 20 + 250}px)`,
          }}
          className=" relative bg-white  p-1 gap-1 flex flex-row  md:h-130 md:w-[clamp(740px,70vw,850px)] origin-top  overflow-hidden"
        >
          <div className="w-3/5 h-full ">
            <img
              src={src}
              alt={title}
              className="h-full w-full object-cover rounded-2xl"
            />
          </div>
          <div className="w-2/5 p-7.5 h-full gap-20 flex flex-col justify-center bg-[#111111]   rounded-2xl ">
            <h2 className="font-antonSC text-[26px] pb-50 text-white">
             {title}
            </h2>
            <div className="flex flex-col gap-5">
              <div className=" flex flex-col  text-white text-[18px]">
                <span className=" font-clashRegular text-[#dbd9d9]">
                  YEAR <span className="font-clashSemi">: {year}</span>
                </span>
                <span className=" font-clashRegular text-[#dbd9d9]">
                  CATEGORY<span className="font-clashSemi">: {category}</span>{" "}
                </span>
              </div>
              <WorkCardButton slug={slug} text="view detail" />
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

const Skiper16 = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <ReactLenis root>
      <main
        ref={container}
        className="relative flex w-full flex-col items-center justify-center pb-5 md:pb-62.5 "
      >
        {projects.slice(0,5).map((project, i) => {
          const targetScale = Math.max(
            0.5,
            1 - (projects.length - i - 1) * 0.1,
          );
          return (
            <StickyCard_001
              key={`p_${i}`}
              i={i}
              {...project}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </main>
    </ReactLenis>
  );
};

export { Skiper16, StickyCard_001 };
