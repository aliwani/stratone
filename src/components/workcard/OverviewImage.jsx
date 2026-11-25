import { MediaItem } from "@/utils/MediaItem";
import { motion } from "framer-motion";
import React from "react";

function OverviewImage({ project }) {
  return (
    <motion.div
    initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
          viewport={{ once: true }}
    className="w-full relative flex flex-col gap-1  h-fit p-1 bg-white">
      <div className=" overflow-hidden w-fit h-fit flex gap-1">
       <MediaItem
          src={project.LeftSrc}
          className=" w-1/2 h-full object-cover rounded-lg md:rounded-2xl"
        />

      <MediaItem
          src={project.RightSrc}
          className=" w-1/2 h-full object-cover rounded-lg md:rounded-2xl"
        />
      </div>
      <div className=" h-fit w-fit overflow-hidden rounded-lg md:rounded-2xl">
        {/* <img  loading="lazy"
          className="w-fit h-fit cover rounded-2xl"
          src={project.TopSrc}
          alt={project.title}
        /> */}
        <MediaItem
          src={project.TopSrc}
          className=" w-full h-full object-cover rounded-lg md:rounded-2xl"
        />
      </div>
    </motion.div>
  );
}

export default OverviewImage;
