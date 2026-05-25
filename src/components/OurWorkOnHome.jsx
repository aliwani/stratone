import React from "react";
import { useState } from "react";
import { AnimatePresence, motion, number } from "framer-motion";
import projects from "@/data/Work";

function OurWorkOnHome() {
  const [current, setCurrent] = useState(0);
  const numbers = ["01", "02", "03", "04"];
  return (
    <div className="h-screen text-white w-full">
      <div>
        <div className="h-5 overflow-hidden relative">
          <AnimatePresence mode="popLayout">
            <motion.span
              key={current}
              initial={{ y: "100%" }} // neeche se aaye
              animate={{ y: "0%" }} // apni jagah aaye
              exit={{ y: "-100%" }} // upar jaake nikle
              transition={{ ease: "easeOut", duration: 0.4 }}
              className="h-5 flex items-center absolute"
            >
              {numbers[current]}
            </motion.span>
          </AnimatePresence>
        </div>

        <button
          onClick={() => setCurrent((prev) => (prev + 1) % numbers.length)}
        >
          Next
        </button>
        <div className="h-60 w-0.5 bg-[#414040]">
          <motion.div
            animate={{ height: `${((current + 1) / numbers.length) * 100}%` }}
            transition={{ ease: "easeOut", duration: 0.4 }}
            className="w-full bg-amber-50"
          />
        </div>
        <div>04</div>
      </div>
      <div>
        {
            projects.map((project,idx)=>(
                <div>
                    <h1></h1>
                </div>
              
            ))
        }
      </div>
    </div>
  );
}

export default OurWorkOnHome;
