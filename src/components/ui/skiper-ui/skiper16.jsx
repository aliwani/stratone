"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import ReactLenis from "lenis/react";
import React, { useEffect, useState, useRef } from "react";
import PricingButton from "../../PricingButton";
import { div } from "framer-motion/client";

const projects = [
  {
    title: "Project 1",
    src: "https://picsum.photos/id/1015/800/600",
  },
  {
    title: "Project 2",
    src: "https://picsum.photos/id/1016/800/600",
  },
  {
    title: "Project 3",
    src: "https://picsum.photos/id/1018/800/600",
  },
  {
    title: "Project 4",
    src: "https://picsum.photos/id/1020/800/600",
  },
  {
    title: "Project 5",
    src: "https://picsum.photos/id/1024/800/600",
  },
];
const StickyCard_001 = ({ i, title, src, progress, range, targetScale }) => {
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
      className={`${isMobile ? "relative pt-5 pb-5 flex items-center justify-center" : "sticky -top-30  pb-20 flex items-center justify-center"} `}
    >
      {isMobile ? (
        <div className=" relative bg-white  p-0.5 gap-0.5 flex flex-col  md:h-130 md:w-[clamp(740px,70vw,850px)] origin-top  overflow-hidden">
          {" "}
          <div className="w-full h-full ">
            <img
              src={src}
              alt={title}
              className="h-full w-full object-cover rounded-md"
            />
          </div>
          <div className="w-full p-5 h-full gap-8 flex flex-col justify-start items-start bg-black  rounded-md ">
            <h2 className="font-antonSC text-[20px]  text-white">
              synthesis technology
            </h2>
            <div className="flex flex-col gap-5">
              <div className=" flex flex-col  text-white text-[16px]">
                <span className=" font-clashRegular text-[#dbd9d9]">
                  YEAR <span className="font-clashSemi">: 2025</span>
                </span>
                <span className=" font-clashRegular text-[#dbd9d9]">
                  CATEGORY<span className="font-clashSemi">: UI / UX</span>{" "}
                </span>
              </div>
              <PricingButton  text="view detail" />
            </div>
          </div>
        </div>
      ) : (
        <motion.div
          style={{
            scale,
            top: `calc(-5vh + ${i * 20 + 250}px)`,
          }}
          className=" relative bg-white  -top-1/4 p-1 gap-1 flex flex-row  md:h-130 md:w-[clamp(740px,70vw,850px)] origin-top  overflow-hidden"
        >
          <div className="w-3/5 h-full ">
            <img
              src={src}
              alt={title}
              className="h-full w-full object-cover rounded-2xl"
            />
          </div>
          <div className="w-2/5 p-7.5 h-full gap-20 flex flex-col justify-center bg-black  rounded-2xl ">
            <h2 className="font-antonSC text-[26px] pb-50 text-white">
              synthesis technology
            </h2>
            <div className="flex flex-col gap-5">
              <div className=" flex flex-col  text-white text-[18px]">
                <span className=" font-clashRegular text-[#dbd9d9]">
                  YEAR <span className="font-clashSemi">: 2025</span>
                </span>
                <span className=" font-clashRegular text-[#dbd9d9]">
                  CATEGORY<span className="font-clashSemi">: UI / UX</span>{" "}
                </span>
              </div>
              <PricingButton text="view detail" />
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
        {projects.map((project, i) => {
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

/**
 * Skiper 16 StickyCard_001 — React + Framer Motion
 * We respect the original creators. This is an inspired rebuild with our own taste and does not claim any ownership.
 *
 * License & Usage:
 * - Free to use and modify in both personal and commercial projects.
 * - Attribution to Skiper UI is required when using the free version.
 * - No attribution required with Skiper UI Pro.
 *
 * Feedback and contributions are welcome.
 *
 * Author: @gurvinder-singh02
 * Website: https://gxuri.in
 * Twitter: https://x.com/Gur__vi
 */
