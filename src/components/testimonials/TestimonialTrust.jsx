import { motion } from "framer-motion";
import React from "react";

function TestimonialTrust() {
  return (
    <div className="relative w-full  items-start h-fit md:h-auto p-5 md:py-10 md:px-10 justify-between flex flex-col gap-10 bg-[#111111]  rounded-2xl ">
      <video
        src="/video/testimonialVideo.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        viewport={{ once: true }}
        className="relative z-10 w-40 h-10 md:w-50 md:h-25 "
      >
        <div className="absolute left-0 h-10 w-10 rounded-full bg-cyan-300" ><img src="" alt="" /></div>
        <div className="absolute left-7 h-10 w-10 rounded-full bg-red-300" ><img src="" alt="" /></div>
        <div className="absolute left-14 h-10 w-10 rounded-full bg-green-300" ><img src="" alt="" /></div>
        <div className="absolute left-21 h-10 w-10 rounded-full bg-white flex items-center justify-center" >+20</div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        viewport={{ once: true }}
        className="z-10 text-white mt-15 md:mt-0 "
      >
        <h2 className="font-antonSC uppercase text-[34px] xl:text-[60px]">
          85%
        </h2>
        <span className="font-clashRegular uppercase text-[16px] md:text-lg text-wrap">
          of users recommended awesome
        </span>
      </motion.div>
    </div>
  );
}

export default TestimonialTrust;
