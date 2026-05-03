import React from "react";

function WorkCardHero({ project }) {
  console.log(project);

  return (
    <div
      style={{ backgroundImage: `url(${project.src})` }}
      className={` bg-cover w-full min-h-85    md:h-125 xl:h-188 rounded-none md:rounded-2xl`}
    ></div>
  );
}

export default WorkCardHero;
