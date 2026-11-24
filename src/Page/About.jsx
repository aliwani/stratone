import React from "react";
import Hero from "../components/AboutPage/Hero";
import Header from "../components/resuables/Header";
import SectionHeader from "../components/resuables/SectionHeader";
import About1 from "../components/AboutPage/About1";
import About2 from "../components/AboutPage/About2";
import About3 from "../components/AboutPage/About3";
import Faqs from "../components/FAQS";
import SEO from "../components/SEO";

function About() {

  return (
    <div className="h-full w-screen  bg-white border-box overflow-hidden">
      <SEO
        title="About Stratone Studio | Our Story, Mission & Creative Team"
        description="Learn about Stratone Studio — a full-service creative agency building bold brands, high-converting websites, and impactful marketing campaigns for ambitious businesses worldwide."
        canonical="/about"
      />
      <div className="bg-[#111111]">
        <Hero />
        <div className="px-5 md:px-7.5 xl:px-10">
        <About1/>
        <About2/>
        <About3/>
        <Faqs Num="[04]" />
        </div>
      </div>
    </div>
  );
}

export default About;
