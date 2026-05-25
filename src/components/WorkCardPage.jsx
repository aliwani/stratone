import React from "react";
import projects from "@/data/Work";
import { useParams } from "react-router-dom";
import WorkCardInfo from "./workcard/WorkCardInfo";
import WorkCardHero from "./workcard/WorkCardHero";
function WorkCardPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);
  return (
    <div className="px-0.5 ">
      <div className="flex flex-col justify-center items-center  *: bg-[#111111] rounded-t-2xl">
        <WorkCardHero project={project} />
        <WorkCardInfo project={project} />
      </div>
    </div>
  );
}

export default WorkCardPage;
