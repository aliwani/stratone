import { motion } from "framer-motion";
import PriceSectionBtn from "./PriceSectionBtn";
import priceData from "@/data/Pricingdata.js";

function PricingCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeOut", duration: 0.5 }}
      viewport={{ once: true }}
      className="grid grid-col-1 min-w-15 w-full md:grid-cols-2 p-0.5 gap-0.5  md:max-w-240 xl:w-270 h-full min:h-210 md:h-143 xl:h-155 bg-white"
    >
      {priceData.map((dets, idx) => {
        return (
          <div
            key={dets.id}
            className="flex flex-col  overflow-hidden justify-between md:gap-8 xl:gap-10 w-full h-full p-5 bg-[#111111]  rounded-2xl"
          >
            <div className="flex flex-col gap-4 xl:gap-7">
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeOut", duration: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col gap-1"
              >
                <h3 className="font-clashMeduim font-semibold uppercase tracking-wide text-[#EDEDED] text-[16px] md:text-lg">
                  {dets.tagline}
                </h3>
                <h2 className="font-antonSC text-white text-lg md:text-3xl  tracking-wider">
                  {dets.service}
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeOut", duration: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col gap-2 md:gap-3 xl:gap-5 font-clashMeduim tracking-wider text-[16px] md:text-lg"
              >
                <span className=" text-[#EDEDED]  font-semibold  uppercase">
                  includes
                </span>

                <ul className="flex flex-col items-start ">
                  {dets.includes.map((dets, idx) => {
                    return (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="pb-1 pr-2 text-white text-[27px] leading-none">
                          •
                        </span>
                        <span className="text-[#EDEDED] font-semibold ">
                          {dets}
                        </span>
                      </li>
                    );
                  })}
                </ul>
                <div></div>
              </motion.div>
            </div>
            <PriceSectionBtn text={dets.price} />
          </div>
        );
      })}
    </motion.div>
  );
}

export default PricingCard;
