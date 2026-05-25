import React from "react";
import ProjectOverview from "./ProjectOverview";
import OverviewImage from "./OverviewImage";
import OurApproach from "./OurApproach";
import ApproachImage from "./ApproachImage";
import ApproachResult from "./ApproachResult";

function WorkCardInfoSectionLeft({project}) {
  return (
    <div className="flex order-2 md:order-1 flex-col gap-20 w-full md:w-3/4">
      
      <div className="flex flex-col gap-10">
        <ProjectOverview project={project} />
        <OverviewImage project={project} />
      </div>
      <div className="flex flex-col gap-10">
        <OurApproach project={project} />
        <ApproachImage project={project} />
      </div>
      <div>
        <ApproachResult project={project}/>
      </div>
    </div>
  );
}

export default WorkCardInfoSectionLeft;
