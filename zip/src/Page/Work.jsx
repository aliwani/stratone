import Heading from "@/components/Heading";
import React, { useEffect, useState } from "react";
import projects from "@/data/Work";
import OurWorkSectionCard from "@/components/WorkPage/OurWorkSectionCard";
import OurWorkCard from "@/components/OurWorkCard";
import { Outlet, useParams } from "react-router-dom";
import { motion } from "framer-motion";

function Work() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 800);
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-white h-full w-screen">
      <section className="bg-[#111111] flex flex-col items-center py-35 md:py-50">
        <Heading heading="our work" />
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
          viewport={{ once: true }}
          className=" mt-15 md:mt-35 px-5 md:px-7.5 xl:px-10"
        >
          {!isMobile ? (
            <div className="grid grid-cols-1 col-span-2 gap-10 xl:grid-cols-2 ">
              {projects.map((project, idx) => (
                <OurWorkSectionCard
                  key={idx}
                  slug={project.slug}
                  title={project.title}
                  src={project.PreviewSrc}
                  year={project.year}
                  category={project.category}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-5  ">
              {projects.map((project, idx) => (
                <OurWorkCard
                  slug={project.slug}
                  key={idx}
                  title={project.title}
                  src={project.PreviewSrc}
                  year={project.year}
                  category={project.category}
                />
              ))}
            </div>
          )}
        </motion.div>
      </section>
      <Outlet />
    </div>
  );
}

export default Work;
