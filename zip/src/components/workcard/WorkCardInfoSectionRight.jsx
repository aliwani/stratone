import { motion } from "framer-motion";
import React from "react";

function WorkCardInfoSectionRight({project}) {
  return (
    <motion.div 
    initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
          viewport={{ once: true }}
    className=" md:sticky flex order-1 md:order-2 top-25 right-0 flex-col gap-12 md:w-1/4 w-full  h-fit ">
      <div className="grid grid-cols-2 md:grid-cols-1  w-full bg-white h-fit p-0.5 gap-px">
        <div className="flex flex-col  items-start p-4 md:p-7 h-full  w-full bg-[#111111] rounded-lg md:rounded-2xl">
          <span className="font-clashRegular font-medium tracking-wider text-white text-lg">
            Category:
          </span>
          <span className="font-antonSC text-lg md:text-xl text-white tracking-wider text-wrap">
           {project.category}
          </span>
        </div>
        <div className="flex flex-col items-start p-4 md:p-7 h-full  w-full bg-[#111111] rounded-lg md:rounded-2xl">
          <span className="font-clashRegular font-medium tracking-wider text-white text-lg">
            Year:
          </span>
          <span className="font-antonSC text-lg md:text-xl text-white tracking-wider">
            {project.year}
          </span>
        </div>
        <div className="flex flex-col items-start p-4 md:p-7 h-full  w-full bg-[#111111] rounded-lg md:rounded-2xl">
          <span className="font-clashRegular font-medium tracking-wider text-white text-lg">
            Client:
          </span>
          <span className="font-antonSC text-lg md:text-xl text-white tracking-wider">
            {project.client}
          </span>
        </div>
        <div className="flex flex-col items-start p-4 md:p-7 h-full  w-full bg-[#111111] rounded-lg md:rounded-2xl">
          <span className="font-clashRegular font-medium tracking-wider text-white text-lg">
            Location:
          </span>
          <span className="font-antonSC text-lg md:text-xl text-white tracking-wider">
            {project.location}
          </span>
        </div>
      </div>
      <button className="w-40 h-14 font-clashRegular uppercase px-0.5 py-px text-white text-lg bg-white">
        <div className="flex items-center justify-center bg-black rounded-lg w-full h-full">
          view live site
        </div>
      </button>
    </motion.div>
  );
}

export default WorkCardInfoSectionRight;
