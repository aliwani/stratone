import React from "react";
import SectionHeader from "./resuables/SectionHeader";
import Header from "./resuables/Header";
import TestimonialCard from "./testimonials/TestimonialCard";
import TestimonialTrust from "./testimonials/TestimonialTrust";
import testimonials from "@/data/Testimonial.js";

function Testimonial() {

  return (
    <div className="w-full h-full flex flex-col gap-8 md:gap-15 py-8 md:py-40 px-5 md:px-7.5 xl:px-10 bg-[#111111]  overflow-hidden">
      <SectionHeader Num="[05]" Text="echoes of trust" />
      <Header heading="What our clients say" />

      <div className="grid grid-cols-1 md:auto-rows-fr md:grid-cols-2 xl:grid-cols-4 md:grid-rows-2 xl:grid-rows-1 gap-0.5 p-0.5  w-full bg-white  min-h-fit md:h-auto">
        <TestimonialTrust />

        {testimonials.map((person, idx) => {
            
         return <TestimonialCard key={person.id} person={person} />;
        })}
     
      </div>
    </div>
  );
}

export default Testimonial;
