import projects from "@/data/Work";
import WorkCardInfo from "@/components/workcard/WorkCardInfo";
import WorkCardHero from "@/components/workcard/WorkCardHero";
import Page404 from "@/Page/Page404";
import SEO from "@/components/SEO";

export default function WorkDetailPage({ routeParams }) {
  const { slug } = routeParams || {};
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return <Page404 />;
  }

  return (
    <div>
      <SEO
        title={`${project.title} — ${project.category} | Stratone Studio`}
        description={project.desc}
        canonical={`/work/${project.slug}`}
        ogImage={project.HeroSrc}
      />
      <div className="flex flex-col justify-center items-center bg-[#111111]">
        <WorkCardHero project={project} />
        <WorkCardInfo project={project} />
      </div>
    </div>
  );
}
