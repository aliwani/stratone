import { motion } from "framer-motion";
import React from "react";
function ContactInfo() {
  return (
    <div className="flex flex-col h-auto md:h-157 gap-10 justify-between items-start w-full md:w-1/2 ">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        viewport={{ once: true }}
        className="h-auto flex flex-col md:flex-row gap-5 justify-between w-full"
      >
        <div className="flex flex-col gap-1 md:gap-2">
          <h3 className="text-white font-clashRegular tracking-wider font-semibold uppercase text-[16px]">
            contact info
          </h3>
          <span className="font-clashLight font-semibold  text-white text-lg">
            +92 316 086 522 9
          </span>
          <span className="font-clashSemi tracking-wider  text-white text-lg">
            StudioStratone@gmail.com
          </span>
        </div>
        <div className="flex flex-col md:items-center gap-1 md:gap-2">
          <h3 className="text-white font-clashRegular tracking-wider font-semibold uppercase text-[16px]">
            socials
          </h3>
          <div className="flex gap-3">
            <span className="font-clashLight font-meduim  text-white text-lg">
              <a href="https://www.instagram.com/stratonestudio?igsh=ZG11dDZzcTRyb3o3&utm_source=qr">Instagram</a>
            </span>
            <span className="font-clashLight font-meduim  text-white text-lg">
              <a href="https://www.linkedin.com/company/stratonestudio">Linked In</a>
            </span>
          </div>
          <div className="flex gap-3">
            <span className="font-clashLight font-meduim  text-white text-lg">
              <a href="https://www.facebook.com/share/1D4JUbsm7V/?mibextid=wwXIfr">Facebook</a>
            </span>
            <span className="font-clashLight font-meduim  text-white text-lg">
              <a href="">X</a>
            </span>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        viewport={{ once: true }}
        className="w-4/5 flex flex-col gap-5"
      >
        <span className=" text-white text-lg leading-none tracking-wider font-clashMeduim font-semibold">
          From the first meeting to final delivery, everything was seamless.
          Their design instinct is razor sharp, and they brought our vision to
          life better than we imagined.
        </span>
        <div className="flex  gap-3 w-full h-full">
          <div className="w-15 h-15 overflow-hidden ">
            <img  loading="lazy"
              src="https://ik.imagekit.io/aliwani101/danyalImg.webp"
              alt=""
              className="w-full h-full object-cover object-top scale-150"
            />
          </div>
          <div className="flex flex-col leading-none text-white">
            <span className="text-lg  font-clashSemi tracking-wider font-semibold ">
              Danyal Wani
            </span>
            <span className="text-[16px] font-clashRegular font-medium">
              Creative Director, Stratone Studio
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default ContactInfo;
