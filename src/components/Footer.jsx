import React from "react";
import FooterLeftA from "./footer/FooterLeftA";
import FooterLeftB from "./footer/FooterLeftB";
import FooterRightA from "./footer/FooterRightA";
import FooterRightB from "./footer/FooterRightB";

function Footer() {
 
  return (
    <div className="w-full mt-0 md:mt-62 xl:mt-0 h-fit flex flex-wrap py-0.5  ">
      <div className="flex p-0.5 h-fit md:h-69 flex-wrap md:flex-nowrap gap-0.5 w-full">
       <FooterLeftA/>
       <FooterLeftB/>
       
      </div>
      <div className=" flex p-0.5 h-full md:min-h-[clamp(220px,16vw,460px)] md:h-auto  flex-wrap md:flex-nowrap gap-0.5 w-full">
       <FooterRightA/>
       <FooterRightB/>
      </div>
    </div>
  );
}

export default Footer;
