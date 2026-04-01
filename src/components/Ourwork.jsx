import React from "react";
import { Skiper16 } from "./ui/skiper-ui/skiper16";
import SectionHeader from "./resuables/SectionHeader";
import Header from "./resuables/Header";
import PricingButton from "./pricing/PricingButton";
import ProjectBtn from "./resuables/ProjectBtn";
import InfiniteScroll from "./InfiniteScroll";

function Ourwork() {
  return (
    <section className="flex flex-col gap-10 w-full py-30 md:py-40 px-5 md:px-7.5 xl:px-10 bg-black h-full">
      <SectionHeader Num="[03]" Text="Stories We’ve Told" />
      <div className="flex flex-col h-full w-full">
        <Header heading="our work" />
        <Skiper16 />
        <InfiniteScroll/>
        <div className="flex md:flex-row flex-col justify-center items-center gap-5 mt-5">
          <ProjectBtn text="view all projects" />
          <PricingButton text="contact us" />
        </div>
      </div>
    </section>
  );
}

export default Ourwork;
