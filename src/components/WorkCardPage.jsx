import projects from "@/data/Work";
import { useParams } from "react-router-dom";
import WorkCardInfo from "./workcard/WorkCardInfo";
import WorkCardHero from "./workcard/WorkCardHero";
import Page404 from "@/Page/Page404";
import WorkCardToggle from "./WorkCardToggle";
function WorkCardPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);
  if (!project) {
    return <Page404 />;
  } 

  return (
    <div className=" ">
      <div className="flex flex-col justify-center items-center  *: bg-[#111111] ">
        <WorkCardHero project={project} />
        <WorkCardInfo project={project} />
      </div>
    </div>
  );
}

export default WorkCardPage;
