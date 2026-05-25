import React from "react";

function ProjectOverview({project}) {
  return (
    <div className="w-full max-w-180 ">
      <h2 className="font-antonSC text-white leading-none tracking-wider xl:text-[26px]">
        project overview
      </h2>
      <p className="font-clashRegular pt-5 text-white tracking-wider leading-tight xl:text-lg">
        {project.desc}
      </p>
      <p className="font-clashRegular pt-5 text-white tracking-wider leading-tight xl:text-lg">
       {project.desc2}
      </p>
    </div>
  );
}

export default ProjectOverview;
