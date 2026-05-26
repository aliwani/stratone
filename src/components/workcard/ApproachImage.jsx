import { MediaItem } from "@/utils/MediaItem";
import React from "react";

function ApproachImage({ project }) {
  return (
    <div className="w-full h-fit p-0.5 bg-white">
      <MediaItem
        src={project.BottomSrc}
        className=" w-full h-full object-cover rounded-lg md:rounded-2xl"
      />
    </div>
  );
}

export default ApproachImage;
