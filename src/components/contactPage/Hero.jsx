import React from "react";
import Heading from "../Heading";

function Hero() {
  return (
    <div className="relative flex flex-col items-center justify-center    bg-[url(@/assets/AboutHero.jpg)] bg-cover mb-15 md:mb-20 xl:mb-30 w-full min-h-80    md:h-120 xl:h-188 rounded-2xl z-0 px-10">
      <div className="absolute top-0 left-0 -z-1 w-full h-full bg-linear-to-l from-black to-black opacity-50 rounded-2xl"></div>
      <Heading heading="get in touch" />
    </div>
  );
}

export default Hero;
