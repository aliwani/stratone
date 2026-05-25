import { delay, motion } from "framer-motion";
import { tr } from "framer-motion/client";
import React from "react";

function SectionHeader({ Num, Text }) {
const parentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      delayChildren: 0.2,
    },
  },
};

const numVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ease: "easeOut", duration: 0.5  ,delay:0.5 },
  },
};

const hrVariants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    
    opacity: 1,
    transition: { ease: "easeOut", duration: 1.4 ,delay:1 },
  },
};

const textVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { ease: "easeOut", duration: 0.3 ,delay:2.3 },
  },
};

  return (
    <motion.div
      variants={parentVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{once:true}}
      className=" flex gap-3  items-center justify-between w-full font-antonSC text-white"
    >
      <motion.span
      variants={numVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-[16px] tracking-wider"
      >
        {Num}
      </motion.span>
      <motion.hr
       variants={hrVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{ transformOrigin: "left" }}
        className=" w-full text-[#989797]"
      />
      <motion.span 
      variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      className="text-lg tracking-wider text-nowrap">
        {Text}
      </motion.span>
    </motion.div>
  );
}

export default SectionHeader;
