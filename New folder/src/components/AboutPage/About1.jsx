import React from "react";
import SectionHeader from "../resuables/SectionHeader";
import { motion } from "framer-motion";

function About1() {
  return (
    <div className="w-full  h-auto flex flex-col  pt-17.5 md:pt-25 mb-30">
      <SectionHeader Num="[01]" Text="built on vision" />
      <div className="flex flex-col pt-15 md:pt-30 xl:pt-50 gap-10 justify-center items-center h-full w-full">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
          viewport={{ once: true }}
          className="font-antonSC text-white text-7xl md:text-9xl"
        >
          who are we
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
          viewport={{ once: true }}
          className="text-white font-clashRegular w-full md:w-3/4 font-medium text-[16px] md:text-lg"
        >
          Since day one, we’ve been more than just a design service. We’re
          collaborators, problem-solvers, and creative thinkers who work
          side-by-side with ambitious founders, marketing teams, and product
          leaders. Whether you’re building from scratch or scaling what already
          works, we bring a fresh perspective and a hands-on approach to every
          project. We combine clear communication, modern tools, and fast
          execution to build not just beautiful visuals — but functional
          experiences that convert, scale, and grow your business.
        </motion.p>
      </div>
    </div>
  );
}

export default About1;
