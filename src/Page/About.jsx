import React from "react";
import Hero from "../components/AboutPage/Hero";
import Header from "../components/resuables/Header";
import SectionHeader from "../components/resuables/SectionHeader";
import About1 from "../components/AboutPage/About1";
import About2 from "../components/AboutPage/About2";
import About3 from "../components/AboutPage/About3";
import Faqs from "../components/AboutPage/FAQS";

function About() {
  return (
    <div className="h-full w-screen md:mt-0.5 pl-0.5 md:px-0.5 bg-white border-box overflow-hidden">
      <div className="bg-[#111111] rounded-t-2xl">
        <Hero />
        <div className="px-5 md:px-7.5 xl:px-10">
        <About1/>
        <About2/>
        <About3/>
        <Faqs/>
        </div>
      </div>
    </div>
  );
}

export default About;
