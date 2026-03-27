import React from "react";
import aboutImg from "@/assets/aboutImage.jpg";
import teamData from "@/Features/team/data";
function AboutSection() {
  return (
    <section className="bg-black   w-full py-30 md:py-38 xl:py-50 px-5 border-box">
      <div className="bg-amber-200 flex items-center justify-between font-antonSC text-white">
        <span>01</span>
        <span></span>
        <span>built on vision</span>
      </div>
      <div className="relative bg-amber-400 flex flex-col items-center justify-center">
        <div className="flex items-center justify-center w-full">
          <h2 className=" font-antonSC text-white text-[64px] xl:text-[120px] leading-none">
            About Stratone
          </h2>
        </div>
        <div className="w-[500px] bg-emerald-500 flex flex-col items-center justify-center">
          <div className="h-[120px] w-full"></div>
          <div className=" h-[450px] w-full">
            <img src={aboutImg} alt="" className="h-full w-full" />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            aspernatur quasi voluptates minus necessitatibus, atque molestias
            voluptatem pariatur labore nam iusto earum nemo blanditiis totam
            quas reprehenderit vel maxime odit. Est nulla odit quas facilis
            rerum animi. Ut, dignissimos quia. Esse quidem odit nihil, in
            voluptatibus consequatur! Accusamus at vero voluptas expedita,
            explicabo sapiente repellat fugit qui natus corporis saepe.
          </p>
          <div className="flex justify-center items-center w-full bg-amber-400 text-white">
           <a href="">Instagram</a>
           <a href="">Facebook</a>
           <a href="">Linked In</a>
           <a href="">X</a>
          </div>
          {/* {teamData.map((team, idx) => (
            <span></span>
          ))} */}
          {/*
        <h5></h5>
        <div></div> */}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
