import React, { useEffect, useState } from "react";
import SectionHeader from "./resuables/SectionHeader";
import arrow from "@/assets/right.png";
import { Plus } from "lucide-react";
import faqs from "../data/Faqs";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FAQPageSchema } from "./StructuredData";

function Faqs({ Num }) {
   const navigate = useNavigate();
  const [hover, sethover] = useState(false);
  const [isOpen, setisOpen] = useState(Array(faqs.length).fill(false));
  const toggleIdx = (idx) => {
    setisOpen((prev) => prev.map((item, i) => (i === idx ? !item : item)));
  };

  return (
    <section className="w-full flex flex-col justify-between gap-20 h-fit  bg-[#111111] py-25 md:py-50" aria-labelledby="faq-heading">
      <FAQPageSchema faqs={faqs} />
      <SectionHeader Num={Num} Text="before you ask" />
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-start gap-10"
      >
        <div className="w-full md:w-1/2 flex flex-col justify-between gap-7 md:gap-10">
          <h2 id="faq-heading" className="font-antonSC uppercase leading-none text-white text-[40px] md:text-[120px]">
            Frequently Asked Questions
          </h2>
          <div
          onClick={()=>navigate("/contact")}
          className="cursor-pointer min-h-30  md:w-auto md:h-45 max-w-105 bg-[#202020] rounded-2xl p-5 flex flex-row gap-5 justify-between items-end">
            <div 
            className=" w-auto flex flex-col gap-6  items-start justify-between">
              <h3 className="font-antonSC text-white tracking-wider text-lg md:text-[26px] uppercase">
                still have a question?
              </h3>
              <span className="text-white/80 text-[16px] tracking-wider md:text-lg font-clashRegular font-meduim">
                We are here to help you!
              </span>
            </div>
            <div
            
            
              onMouseEnter={() => sethover(true)}
              onMouseLeave={() => sethover(false)}
              style={{
                transform: hover ? "rotate(-45deg)" : "rotate(0deg)",
                transition: "0.3s",
              }}
              className="bg-white flex   items-center justify-center h-8 w-8 rounded-full"
            >
              <a
               
                title="right arrow icons"
              >
                <img loading="lazy" className="h-4 w-4" src={arrow} alt="" role="presentation" />
              </a>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-fit flex flex-col justify-center gap-0.5 p-0.5 bg-white">
          {faqs.map((item, idx) => (
            <div
              key={idx}
              className=" flex justify-between flex-col  cursor-pointer bg-[#111111] w-full h-full rounded-lg "
            >
              <button
                onClick={() => toggleIdx(idx)}
                aria-expanded={isOpen[idx]}
                aria-controls={`faq-answer-${idx}`}
                className="flex justify-between w-full gap-3 items-start p-4.5 bg-transparent border-none text-left"
              >
                <span className="text-white/90 w-[90%] text-[16px] md:text-lg font-clashRegular font-medium leading-none  tracking-wider uppercase ">
                  {item.question}
                </span>
                <Plus
                  className={`transition-transform  duration-300  ${isOpen[idx] ? "rotate-45" : "rotate-0"} `}
                  color="white"
                  aria-hidden="true"
                />
              </button>
              <div
                id={`faq-answer-${idx}`}
                role="region"
                aria-labelledby={`faq-question-${idx}`}
                className={`w-full md:w-3/4 overflow-hidden transition-all duration-400 flex items-start ${isOpen[idx] ? "max-h-50" : "max-h-0"}`}
              >
                <span
                  className={`text-white/90 font-clashRegular leading-tight p-5 pt-0 font-medium text-[16px] tracking-wider  transition-all duration-400 ${isOpen[idx] ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}
                 `}
                >
                  {item.answer}
                </span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Faqs;
