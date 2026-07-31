import { motion } from "framer-motion";
import React from "react";

function ApproachResult({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeOut", duration: 0.5 }}
      viewport={{ once: true }}
      className="w-full max-w-180"
    >
      <h2 className="font-antonSC text-white leading-none tracking-wider xl:text-[26px]">
        the results
      </h2>
      <p className="font-clashRegular pt-5 text-white tracking-wider leading-tight xl:text-lg">
        {project.Results}
      </p>
    </motion.div>
  );
}

export default ApproachResult;
