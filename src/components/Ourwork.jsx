import React from "react";
import { Skiper16 } from "./ui/skiper-ui/skiper16";
import SectionHeader from "./resuables/SectionHeader";
import Header from "./resuables/Header";
import ProjectBtn from "./resuables/ProjectBtn";
import InfiniteScroll from "./InfiniteScroll";
import Contactbtn from "./resuables/ContactBtn";

function Ourwork() {
  return (
    <section className="flex flex-col gap-10 w-full py-30 md:py-40 px-5 md:px-7.5 xl:px-10 bg-[#111111]  h-full">
      <SectionHeader Num="[03]" Text="Stories We’ve Told" />
      <div className="flex items-center flex-col h-full w-full">
        <Header heading="our work" />
        <Skiper16 />
        <InfiniteScroll/>
        <div className="flex md:flex-row flex-col justify-center items-center gap-5 mt-5">
          <ProjectBtn text="view all projects" />
          <Contactbtn text="contact us" />
        </div>
      </div>
    </section>
  );
}

export default Ourwork;
