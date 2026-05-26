import React from "react";
import MarqueeHeading from "../resuables/MarqueHeading";
import { isVideo } from "@/utils/MediaItem";
function WorkCardHero({ project }) {
  console.log(project);

  return (
    <div
      className={`relative flex items-center justify-center bg-cover bg-center w-full min-h-85    md:h-125 xl:h-188 rounded-none md:rounded-t-2xl`}
    >
        {isVideo(project.HeroSrc) ? (
    <video
      src={project.HeroSrc}
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 w-full h-full object-cover"
    />
  ) : (
    <div
      style={{ backgroundImage: `url(${project.HeroSrc})` }}
      className="absolute inset-0 w-full h-full bg-cover bg-center"
    />
  )}
      <div className="absolute h-85 md:h-125 xl:h-188 rounded-none md:rounded-t-2xl mt-0 m-0.5 inset-0 bg-black/50" />{" "}
      <MarqueeHeading project={project} />
    </div>
  );
}

export default WorkCardHero;
