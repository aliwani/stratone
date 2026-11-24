import { motion } from "framer-motion";
import React from "react";

function PriceSectionBtn({ text }) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeOut", duration: 0.7,delay:0.4 }}
      viewport={{ once: true }}
      className={`bg-white h-10 md:h-13 w-full p-0.5`}
    >
      <div className="flex items-center justify-center w-full h-full bg-[#111111]  rounded-lg">
        <span className="font-clashRegular font-semibold md:text-lg text-white uppercase tracking-wider">
          {text}
        </span>
      </div>
    </motion.button>
  );
}

export default PriceSectionBtn;
