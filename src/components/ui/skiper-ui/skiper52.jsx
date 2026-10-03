"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import images from "@/data/AboutWorkPhaseData";
const Skiper52 = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeOut", duration: 0.5 }}
      viewport={{ once: true }}
      className="flex h-full w-full items-center justify-center overflow-hidden bg-white py-0.5 mb-30"
    >
      <HoverExpand_001 imageData={images} />
    </motion.div>
  );
};

const HoverExpand_001 = ({ imageData, className }) => {
  const [activeImage, setActiveImage] = useState(0);
  const [windowWidth, setWindowWidth] = useState(1200);
  const [currentWidth, setcurrentWidth] = useState(1200);
  // Window width track karna
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setcurrentWidth(window.innerWidth);
    };
    handleResize(); // Initial call
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Responsive dimensions calculate karna
  const getDimensions = () => {
    if (windowWidth < 1920) {
      // 1200px - 1920px
      const progress = (windowWidth - 1200) / 720; // 0 to 1
      const activeWidth = 43 + progress * 25; // 30rem to 45rem
      return {
        activeW: `${activeWidth}rem`,
        inactiveW: "15rem",
        height: `${30 + progress * 10}rem`, // 30rem to 40rem
        titleSize: "text-3xl",
        descSize: "text-lg",
      };
    } else if (windowWidth < 3000) {
      // 1920px - 3000px
      const progress = (windowWidth - 1920) / 1080; // 0 to 1
      const activeWidth = 70 + progress * 25; // 45rem to 60rem
      return {
        activeW: `${activeWidth}rem`,
        inactiveW: "29rem",
        height: `${40 + progress * 10}rem`, // 40rem to 50rem
        titleSize: "text-4xl",
        descSize: "text-xl",
      };
    } else {
      // 3000px+
      return {
        activeW: "60rem",
        inactiveW: "14rem",
        height: "50rem",
        titleSize: "text-5xl",
        descSize: "text-2xl",
      };
    }
  };

  const dims = getDimensions();

  return (
    <div className="w-full h-full">
      {/* {isPc ? ( */}
      <motion.div
        initial={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className={cn("relative w-full px-0.5", className)}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="w-full "
        >
          <div className="flex w-full items-center justify-center gap-0.5 ">
            {imageData.map((image, index) => (
              <motion.div
                key={index}
                className="relative cursor-pointer bg-[#111111] flex flex-col items-start justify-between overflow-hidden rounded-xl md:rounded-2xl py-6 px-10"
                initial={{ width: "2.5rem", height: "20rem" }}
                animate={{
                  width: activeImage === index ? dims.activeW : dims.inactiveW,
                  height: dims.height,
                }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                onClick={() => setActiveImage(index)}
                onHoverStart={() => setActiveImage(index)}
              >
                <span className="text-white text-lg font-clashMeduim uppercase tracking-wide ">
                  {image.alt}
                </span>
                <AnimatePresence>
                  {activeImage === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="absolute inset-0 flex flex-col items-start justify-start mt-10 gap-8 px-10 py-6 z-20"
                    >
                      <div className="h-3/5 w-full rounded-2xl">
                        <img  loading="lazy"
                          className="w-full h-full object-cover rounded-2xl"
                          src={image.src}
                          alt=""
                        />
                      </div>
                      <div className="flex flex-row items-start justify-center gap-6">
                        <span className="text-white font-clashRegulartext-[16px]">
                          {image.code}
                        </span>
                        <div className="flex flex-col items-start justify-center gap-7 ">
                          <div className="flex flex-col items-start justify-center">
                            <h1
                              className={cn(
                                "text-white font-antonSC text-[40px] tracking-wide mb-2 leading-tight",
                                dims.titleSize,
                              )}
                            >
                              {image.title}
                            </h1>
                            <p
                              className={cn(
                                "text-white/90 font-clashRegular font-medium tracking-wide max-w-lg text-lg leading-tight",
                              )}
                            >
                              {image.description}
                            </p>
                          </div>
                          
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
      {/* ) : (
        <div className="grid grid-cols-1 md:grid-cols-2  w-full px-0.5 gap-0.5 bg-white">
          {imageData.map((image, index) => (
            <div className="h-full w-full flex flex-col gap-8 bg-black rounded-2xl px-5 py-6" key={index}>
              <div className="h-[clamp(2rem,35vw,15rem)] md:h-50 w-full ">
                <img  loading="lazy"
                  className="w-full h-full object-cover rounded-2xl"
                  src={image.src}
                  alt=""
                />
              </div>
              <div className="flex flex-col items-start justify-center gap-3">
                <span className="text-white font-clashRegular text-[16px]">
                  {image.code}
                </span>
                <div className="flex flex-col items-start justify-center gap-5 ">
                  <div className="flex flex-col items-start justify-center">
                    <h1
                      className={cn(
                        "text-white font-antonSC text-[40px] tracking-wide mb-2 leading-tight",
                        dims.titleSize,
                      )}
                    >
                      {image.title}
                    </h1>
                    <p
                      className={cn(
                        "text-white/90 font-clashRegular font-medium tracking-wide max-w-xl text-lg leading-tight",
                      )}
                    >
                      {image.description}
                    </p>
                  </div>
                  <div className="flex flex-col items-start justify-center gap-3 ">
                    <span className="font-clashSemi font-semibold tracking-wide text-white text-[16px] uppercase">
                      included:
                    </span>
                    <div className="flex items-start justify-start gap-2  flex-wrap ">
                      <span className="text-white font-clashMeduim font-regular  leading-tight text-[16px] tracking-wide">
                        Creative brief
                      </span>
                      <span className="text-white text-lg leading-tight">•</span>
                      <span className="text-white font-clashMeduim font-regular leading-tight text-[16px] tracking-wide">
                        Creative brief
                      </span>
                      <span className="text-white text-lg leading-tight">•</span>
                      <span className="text-white font-clashMeduim font-regular leading-tight text-[16px] tracking-wide">
                        Creative brief
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )} */}
    </div>
  );
};

export { Skiper52, HoverExpand_001 };
