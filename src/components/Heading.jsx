import { h1 } from "framer-motion/client";
import React from "react";

function Heading({ heading }) {
  return (
    <h1 className="font-antonSC uppercase  text-white text-[60px] md:text-[110px] xl:text-[200px]">
      {heading}
    </h1>
  );
}

export default Heading;
