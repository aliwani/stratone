import React from "react";
import FooterLeftA from "./footer/FooterLeftA";
import FooterLeftB from "./footer/FooterLeftB";
import FooterRightA from "./footer/FooterRightA";
import FooterRightB from "./footer/FooterRightB";

function Footer() {
 
  return (
    <div className="w-full h-fit flex flex-wrap gap-0.5  ">
      <div className="flex p-0.5 pb-0 h-fit md:h-69 flex-wrap md:flex-nowrap gap-0.5 w-full">
       <FooterLeftA/>
       <FooterLeftB/>
       
      </div>
      <div className=" flex p-0.5 pt-0 h-full md:min-h-[clamp(220px,16vw,460px)] md:h-auto  flex-wrap md:flex-nowrap gap-0.5 w-full">
       <FooterRightA/>
       <FooterRightB/>
      </div>
    </div>
  );
}

export default Footer;
