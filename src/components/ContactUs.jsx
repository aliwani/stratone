import React from "react";
import { ArrowRight } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function ContactUs() {
  const isPC = window.innerWidth > 809;
  const navigate = useNavigate();
  const { pathname } = useLocation();
  if (pathname === "/404") return null;

  return (
    <div className="relative bg flex-col h-133 md:h-195 xl:h-287.5  w-full z-0  py-40 px-5 md:px-7.5 xl:px-10 overflow-hidden   ">
      <motion.img
        initial={{ scale: 1.3 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeIn" }}
        src="https://ik.imagekit.io/aliwani101/contact.jpg?updatedAt=1785492498703"
        className="absolute  top-0 -z-1 left-0 h-full w-full   object-cover"
        alt=""
      />
      <div className="absolute inset-0 -z-1  bg-linear-to-l h-full bg-[#111111]  opacity-50" />

      <div className="flex flex-col   font-antonSC leading-none   text-white text-[60px] md:text-[110px] xl:text-[200px]">
        <div className="overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, y: isPC ? 100 : 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className=""
          >
            let's build
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: isPC ? 100 : 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex overflow-hidden items-end justify-end gap-0.5 md:gap-1 xl:gap-2 h-15 max-w-100 md:h-25 xl:h-50  md:max-w-190 xl:max-w-335"
          >
            <h1>s</h1>
            <div
              className={`h-11 w-12 md:h-22 md:w-24 xl:h-38 xl:w-40  mb-1.5 xl:mb-3.5   `}
            >
              <img src="https://ik.imagekit.io/aliwani101/3.png?updatedAt=1785492489913" className="h-full w-full" alt="" />
            </div>
            <h1>mething</h1>
          </motion.div>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, y: isPC ? 100 : 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="md:pl-25 xl:pl-44"
          >
            timeless
          </motion.h1>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: isPC ? 200 : 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="h-15 md:h-26 cursor-pointer  xl:h-32.5 max-w-100 md:max-w-190 xl:max-w-315 flex items-center justify-center mt-5"
      >
        <div
          onClick={() => navigate("/Contact")}
          className="group bg-white flex p-0.5 md:p-1 h-full gap-0.5 md:gap-1 w-62.5 md:w-95 xl:w-117"
        >
          <div className="group-hover:rounded-none duration-400 transition-all  font-antonSC text-[36px] md:text-[42px] xl:text-[60px] flex items-center justify-center text-white bg-[#111111] w-3/4 rounded-sm md:rounded-lg xl:rounded-xl h-full">
            get in touch
          </div>
          <div className="group-hover:rounded-none duration-400 transition-all  flex items-center justify-center bg-[#111111]  w-1/4 rounded-sm md:rounded-lg xl:rounded-xl  h-full">
            <ArrowRight size={45} color="white" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default ContactUs;
