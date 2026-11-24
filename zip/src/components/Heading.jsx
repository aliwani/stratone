import { motion } from "framer-motion";
import React from "react";

function Heading({ heading }) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeOut", duration: 0.5 }}
      viewport={{ once: true }}
      className="font-antonSC uppercase  text-white text-[60px] md:text-[110px] xl:text-[200px]"
    >
      {heading}
    </motion.h2>
  );
}

export default Heading;
