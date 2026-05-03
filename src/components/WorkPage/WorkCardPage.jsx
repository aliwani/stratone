import React from "react";
import WorkCardHero from "./WorkCardHero";
import projects from "@/data/Work";
import { useParams } from "react-router-dom";
import { div } from "framer-motion/client";
function WorkCardPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);
  return (
    <div className="px-0.5 ">
      <div className="bg-[#111111] rounded-t-2xl">
        <WorkCardHero project={project} />
      </div>
    </div>
  );
}

export default WorkCardPage;
