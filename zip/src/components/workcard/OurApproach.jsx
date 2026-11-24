import { motion } from "framer-motion";
import React from "react";

function OurApproach({ project }) {
  return (
    <motion.div 
    initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
          viewport={{ once: true }}
    className="w-full max-w-180">
      <h2 className="font-antonSC text-white leading-none tracking-wider xl:text-[26px]">
        our approach
      </h2>
      <p className="font-clashRegular pt-5 text-white leading-tight tracking-wider xl:text-lg">
        {project.approach}
      </p>
      <ul className="px-4 list-disc font-clashRegular pt-5 text-white leading-tight tracking-wider xl:text-lg">
        {project.approachPoints.map((li, idx) => (
          <li key={idx}>{li}</li>
        ))}
      </ul>
    </motion.div>
  );
}

export default OurApproach;
