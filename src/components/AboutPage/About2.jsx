import React, { useEffect, useState } from "react";
import SectionHeader from "../resuables/SectionHeader";
import { Skiper52 } from "../ui/skiper-ui/skiper52";
import { Skiper53 } from "../ui/skiper-ui/skiper53";

function About2() {
  const [windowWidth, setWindowWidth] = useState(1200);
  const [currentWidth, setcurrentWidth] = useState(1200);
  const isPc = currentWidth >= 809 ? true : false;
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setcurrentWidth(window.innerWidth);
    };
    handleResize(); // Initial call
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-[#111111] min-h-screen h-auto w-full flex flex-col gap-20 pb-20 ">
      <SectionHeader Text="how it works" Num="[02]" />
      {isPc ? <Skiper52 /> : <Skiper53 />}
    </div>
  );
}

export default About2;
