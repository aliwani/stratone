import React from "react";
import aboutImg from "@/assets/aboutImage.jpg";
import teamData from "@/Features/team/data";
function AboutSection() {
  return (
    <section className="bg-black   w-full py-30 md:py-38 xl:py-50 px-5 border-box overflow-hidden">
      <div className="  flex items-center justify-between font-antonSC text-white">
        <span>01</span>
        <span></span>
        <span>built on vision</span>
      </div>
      <div className="relative  flex flex-col items-center justify-center">
        <div className="flex items-center justify-center w-full">
          <h2 className=" font-antonSC text-white text-[40px] md:text-[64px] xl:text-[120px] leading-none">
            About Stratone
          </h2>
        </div>
        <div className="md:w-95 xl:w-125  flex flex-col items-center justify-center gap-5">
          <div className="hidden md:block h-30 w-full"></div>
          <div className="pt-5 md:pt-0 h-[clamp(10rem,94vw,55rem)] md:h-112.5 w-full">
            <img src={aboutImg} alt="" className="h-full w-full" />
          </div>
          <p className="font-clashRegular italic text-white text-lg text-wrap px-5 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            aspernatur quasi voluptates minus necessitatibus, atque molestias
            voluptatem pariatur labore nam iusto earum nemo blanditiis totam
            quas reprehenderit vel maxime odit. Est nulla odit quas facilis
            rerum animi. Ut, dignissimos quia. Esse quidem odit nihil, in
            voluptatibus consequatur! Accusamus at vero voluptas expedita,
            explicabo sapiente repellat fugit qui natus corporis saepe.
          </p>
          <div className="font-clashSemi    uppercase flex flex-wrap justify-center items-center gap-5 w-full leading-none  text-white text-lg">
            <a href="">Instagram.</a>
            <a href="">Facebook.</a>
            <a href="">Linked In.</a>
            <a href="">X</a>
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-2">
            <span className="font-clashSemi pt-5 text-white text-lg uppercase">
              Our team
            </span>
            <div className="bg-white grid grid-cols-2 md:flex py-0.5 px-0.5 gap-0.5 w-full h-full ">
              {teamData.map((team, idx) => {
                return <div key={idx} className="h-[clamp(10rem,55vw,390px)] w-full md:w-19 md:h-20 xl:w-25 xl:h-26 bg-black"></div>;
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
