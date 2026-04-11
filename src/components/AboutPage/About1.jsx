import React from "react";
import SectionHeader from "../resuables/SectionHeader";
import Header from "../resuables/Header";

function About1() {
  return (
    <div className="w-full min-h-screen h-auto flex flex-col gap-10 pt-17.5 md:pt-25 mb-30">
      <SectionHeader Num="[01]" Text="built on vision" />
      <div className="flex flex-col justify-start items-start h-full w-3/4">
        <h1 className="font-antonSC text-white text-9xl">who are we</h1>
        <p className="text-white font-clashRegular font-medium text-[16px] md:text-lg">
          Since day one, we’ve been more than just a design service. We’re
          collaborators, problem-solvers, and creative thinkers who work
          side-by-side with ambitious founders, marketing teams, and product
          leaders. Whether you’re building from scratch or scaling what already
          works, we bring a fresh perspective and a hands-on approach to every
          project. We combine clear communication, modern tools, and fast
          execution to build not just beautiful visuals — but functional
          experiences that convert, scale, and grow your business.
        </p>
      </div>

    </div>
  );
}

export default About1;
