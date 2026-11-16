import { motion } from "framer-motion";
import React from "react";

function Header({heading}) {
  return (
    <div className="flex items-center justify-center  w-full">
      <motion.h2
      initial={{opacity: 0, y:50}}
      whileInView={{opacity: 1, y:0}}
      viewport={{once:true}}
      transition={{ ease: [0.25, 0.1, 0.25, 1], duration:0.5}}
      className=" font-antonSC text-white text-[40px] md:text-[64px] xl:text-[120px] leading-none">
        {heading}
      </motion.h2>
    </div>
  );
}

export default Header;
