import React from "react";

function WorkCardHero({ project }) {
  console.log(project);

  return (
    <div
      style={{ backgroundImage: `url(${project.src})` }}
      className={` bg-contain w-full min-h-110    md:h-135 xl:h-188 rounded-2xl  px-10`}
    ></div>
  );
}

export default WorkCardHero;
