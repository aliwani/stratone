"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import images from "@/data/AboutWorkPhaseData";

const Skiper53 = () => {
  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden bg-white py-0.5 mb-30">
      <HoverExpand_002 className="" imageData={images} />
    </div>
  );
};

export { Skiper53 };

const HoverExpand_002 = ({ imageData, className }) => {
  const [activeImage, setActiveImage] = useState(0);

  return (
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
        className="w-full"
      >
        <div className="flex w-full flex-col items-center justify-center gap-0.5">
          {imageData.map((image, index) => (
            <motion.div
              key={index}
              className="relative cursor-pointer bg-[#111111] flex flex-col items-start justify-between overflow-hidden rounded-xl w-full px-6 py-5"
              initial={{ height: "3.5rem" }}
              animate={{
                height: activeImage === index ? "32rem" : "3.5rem",
              }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              onClick={() => setActiveImage(index)}
              onHoverStart={() => setActiveImage(index)}
            >
              {/* Always visible label */}
              <span className="text-white text-base font-clashMeduim uppercase tracking-wide shrink-0">
                {image.alt}
              </span>

              <AnimatePresence>
                {activeImage === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="absolute inset-0 flex flex-col items-start justify-end gap-5 px-6 py-5 z-20"
                  >
                    {/* Image */}
                    <div className="h-[55%] w-full rounded-2xl overflow-hidden">
                      <img
                        className="w-full h-full object-cover rounded-2xl"
                        src={image.src}
                        alt=""
                      />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col items-start justify-center gap-4 w-full">
                      <span className="text-white font-clashRegular text-sm">
                        {image.code}
                      </span>

                      <div className="flex flex-col items-start justify-center gap-2">
                        <h1 className="text-white font-antonSC text-2xl tracking-wide leading-tight">
                          {image.title}
                        </h1>
                        <p className="text-white/90 font-clashRegular font-medium tracking-wide text-sm leading-snug">
                          {image.description}
                        </p>
                      </div>

                      <div className="flex flex-col items-start gap-2">
                        <span className="font-clashSemi font-semibold tracking-wide text-white text-sm uppercase">
                          included:
                        </span>
                        <div className="flex items-center flex-wrap gap-2">
                          <span className="text-white font-clashMeduim text-sm tracking-wide">
                            Creative brief
                          </span>
                          <span className="text-white text-sm">•</span>
                          <span className="text-white font-clashMeduim text-sm tracking-wide">
                            Creative brief
                          </span>
                          <span className="text-white text-sm">•</span>
                          <span className="text-white font-clashMeduim text-sm tracking-wide">
                            Creative brief
                          </span>
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
  );
};

export { HoverExpand_002 };