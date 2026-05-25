import React from "react";
import MarqueeHeading from "../resuables/MarqueHeading";

function WorkCardHero({ project }) {
  console.log(project);
  
  return (
    <div
      style={{ backgroundImage: `url(${project.HeroSrc})` }}
      className={`flex items-center justify-center bg-cover bg-center w-full min-h-85    md:h-125 xl:h-188 rounded-none md:rounded-t-2xl`}
    >
      <div className="absolute h-85 md:h-125 xl:h-188 rounded-none md:rounded-t-2xl mt-0 m-0.5 inset-0 bg-black/50" />{" "}
      <MarqueeHeading project={project} />
    </div>
  );
}

export default WorkCardHero;
