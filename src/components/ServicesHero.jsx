import React from "react";
import Heading from "./Heading";

function ServicesHero() {
  return (
    <div className="relative w-full flex items-center justify-center bg-[url(https://ik.imagekit.io/aliwani101/services%20Hero%20Img.webp)] bg-cover mb-15 md:mb-20 xl:mb-30 min-h-80 md:h-120 xl:h-188 z-0 px-10">
      <div className="absolute top-0 left-0 -z-1 w-full h-full bg-linear-to-l from-black to-black opacity-50" />
      <Heading heading="Our Services" />
    </div>
  );
}

export default ServicesHero;
