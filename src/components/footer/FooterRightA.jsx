import React from "react";
import footImg from "@/assets/testerFooter.svg"

function FooterRightA() {
  return (
    <div className="bg-black flex items-center justify-center rounded-2xl w-full p-5 md:w-2/5 md:min-w-95 md:w-max-w-300  md:h-full ">
      <img src={footImg} className="h-auto w-full" alt="" />
    </div>
  );
}

export default FooterRightA;
