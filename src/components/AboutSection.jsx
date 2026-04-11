import React from "react";
import aboutImg from "@/assets/aboutImage.jpg";
import teamMembers from "../data/Team";
import SectionHeader from "./resuables/SectionHeader";
import Header from "./resuables/Header";
function AboutSection() {
  return (
    <section className="bg-black flex flex-col gap-10 md:gap-18 xl:gap-20   w-full py-30 md:py-38 xl:py-50 px-5 md:px-7.5 xl:px-10 border-box overflow-hidden">
    <SectionHeader Num="[01]" Text="Built on vision" />
      <div className="relative  flex flex-col items-center justify-center">
       <Header heading="about stratone" />
        <div className="md:w-95 xl:w-125  flex flex-col items-center justify-center gap-5">
          <div className="hidden md:block h-10 w-full"></div>
          <div className="pt-5 md:pt-0 h-[clamp(10rem,94vw,55rem)] md:h-112.5 w-full">
            <img src={aboutImg} alt="" className="h-full w-full" />
          </div>
          <p className="font-clashRegular antialiased italic text-white leading-none px-7 md:px-0 text-lg text-wrap  text-center">
           Stratone is a creative agency built at the intersection of brand, design, and culture. We partner with visionary teams to build identities, systems, and stories that move people and markets. Our mission is to shape meaningful experiences that are rooted in strategy and refined through design.
          </p>
          <div className="font-clashSemi  subpixel-antialiased  uppercase flex flex-wrap justify-center items-center gap-5 w-full leading-none  text-white text-[16px] md:text-lg">
            <a href="">Instagram.</a>
            <a href="">Facebook.</a>
            <a href="">Linked In.</a>
            <a href="">X</a>
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-2">
            <span className="font-clashSemi pt-5 text-white text-[16px] md:text-lg uppercase">
              Our team
            </span>
            <div className="bg-white grid grid-cols-2 md:flex py-0.5 px-0.5 gap-0.5 w-full h-full ">
              {teamMembers.map((team, idx) => {
                return <div key={idx} className="h-[clamp(10rem,68vw,390px)] w-full md:w-19 md:h-20 xl:w-25 xl:h-26 bg-black"></div>;
              })}
              <div className="hidden md:block h-6 w-full md:w-19 md:h-20  xl:w-24 xl:h-26 rounded-2xl bg-black"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutSection;
