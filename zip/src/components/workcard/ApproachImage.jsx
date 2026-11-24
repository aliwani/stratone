import { MediaItem } from "@/utils/MediaItem";
import { motion } from "framer-motion";
import React from "react";

function ApproachImage({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeOut", duration: 0.5 }}
      viewport={{ once: true }}
      className="w-full h-fit p-0.5 bg-white"
    >
      <MediaItem
        src={project.BottomSrc}
        className=" w-full h-full object-cover rounded-lg md:rounded-2xl"
      />
    </motion.div>
  );
}

export default ApproachImage;
