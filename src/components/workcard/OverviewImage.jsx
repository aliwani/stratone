import { MediaItem } from "@/utils/MediaItem";
import React from "react";

function OverviewImage({ project }) {
  return (
    <div className="w-full flex flex-col gap-1  h-fit p-1 bg-white">
      <div className=" overflow-hidden w-fit h-fit flex gap-1">
        <img
          className="w-1/2 h-full cover rounded-2xl"
          src={project.LeftSrc}
          alt=""
        />
        
        <img
          className="w-1/2 h-full cover rounded-2xl"
          src={project.RightSrc}
          alt=""
        />
      </div>
      <div className="h-fit w-fit overflow-hidden rounded-2xl">
        <img
          className="w-fit h-fit cover rounded-2xl"
          src={project.TopSrc}
          alt=""
        />
      </div>
    </div>
  );
}

export default OverviewImage;
