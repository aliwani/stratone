import projects from "@/data/Work";

export function onBeforePrerenderStart() {
  return projects.map((project) => ({
    url: `/work/${project.slug}`,
    pageContext: {
      routeParams: { slug: project.slug },
    },
  }));
}
