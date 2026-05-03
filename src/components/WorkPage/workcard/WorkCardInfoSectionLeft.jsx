import React from "react";
import ProjectOverview from "./ProjectOverview";
import OverviewImage from "./OverviewImage";
import OurApproach from "./OurApproach";
import ApproachImage from "./ApproachImage";
import ApproachResult from "./ApproachResult";

function WorkCardInfoSectionLeft() {
  return (
    <div className="flex flex-col gap-20 w-3/4">
      <div className="flex flex-col gap-10">
        <ProjectOverview />
        <OverviewImage />
      </div>
      <div className="flex flex-col gap-10">
        <OurApproach />
        <ApproachImage />
      </div>
      <div>
        <ApproachResult/>
      </div>
    </div>
  );
}

export default WorkCardInfoSectionLeft;
