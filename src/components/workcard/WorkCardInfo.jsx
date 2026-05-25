import React from "react";
import SectionHeader from "../resuables/SectionHeader";
import WorkCardInfoSectionLeft from "./WorkCardInfoSectionLeft";
import WorkCardInfoSectionRight from "./WorkCardInfoSectionRight";

function WorkCardInfo({project}) {
  return (
    <section className="w-full max-w-345  pb-30 md:pb-38  xl:pb-50 pt-18 md:pt-25 ">
      <div className="flex flex-col gap-12 w-full px-5 md:px-7.5 xl:px-10">
        <SectionHeader Num="[01]" Text="work info" />
        <div className="flex md:flex-row flex-col gap-15">
        <WorkCardInfoSectionLeft   project={project}/>
        <WorkCardInfoSectionRight project={project} />
        </div>
      </div>
    </section>
  );
}

export default WorkCardInfo;
