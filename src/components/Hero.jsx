import { Crosshair, Star } from "lucide-react";
import {  motion } from "framer-motion";

function Hero() {
  const isPc = window.innerWidth;
  const isMobile = window.innerWidth < 768
  const src = isPc > 809 && "https://ik.imagekit.io/aliwani101/heroImg.webp?updatedAt=1789726695648" ;
  const container = {
    hidden: {},
    show: {
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.25,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 300,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.12, 1, 0.7, 1],
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: isMobile ? 0 : 1}}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`bg-[#111111]   md:rounded-t-2xl md:gap-5 md:h-[clamp(530px,60vw,620px)] pt-35 md:pt-0  w-full xl:h-[clamp(700px,49vw,100rem)]  flex md:flex-row flex-col md:items-center justify-between  border-box overflow-hidden`}
    >
    
      {isPc > 809 && (
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="md:h-full md:w-1/2 order-2 md:order-1 overflow-hidden"
        >
          <motion.img
            initial={{ scale: 1.2 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            src={src}
            alt=""
            className="  w-full object-cover "
          />
        </motion.div>
      )}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
        className="w-full md:w-1/2 md:pr-12 md:pb-0 pb-12  flex flex-col items-start justify-end h-full order-1 md:order-2  text-white font-black overflow-hidden px-5 md:px-0 @container"
      >
        <motion.div
          initial={{ opacity: 0, y: window.innerWidth < 809 ? 200 : -200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 0.75 }}
          viewport={{ once: true }}
          className="w-full flex flex-col gap-4 md:gap-6 xl:flex-row items-start mb-7 justify-between overflow-hidden"
        >
          <div className="flex items-start justify-center gap-3">
            <Crosshair size={16} />
            <span className="font-clashLight min-w-60 leading-none text-[14px] tracking-widest text-wrap uppercase  md:text-[16px]">
              transforming ideas into Iconic Brands
            </span>
          </div>
          <div className=" flex gap-2 items-center  justify-center">
            <div className="flex">
              <Star fill="white" strokeWidth={0} size={18} />
              <Star fill="white" strokeWidth={0} size={18} />
              <Star fill="white" strokeWidth={0} size={18} />
              <Star fill="white" strokeWidth={0} size={18} />
              <Star fill="white" strokeWidth={0} size={18} />
            </div>
            <span className="leading-none text-white text-[16px] md:text-lg min-w-40 w-45 md:w-fit font-clashExtraLight tracking-wider">
              Designing stories that matter
            </span>
          </div>
        </motion.div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col items-start gap-2 justify-center w-full overflow-hidden  h-fit border-box "
        >
          <motion.div className="h-fit w-fit overflow-hidden">
            <motion.h1
              variants={item}
              className="font-antonSC w-fit text-[calc(100cqw*0.2)] md:text-[clamp(5rem,12.1vw,30rem)] xl:text-[clamp(5rem,12.8vw,33rem)]   leading-[0.95]  "
            >
              STRATEGY
            </motion.h1>
          </motion.div>
          <div className="w-full flex md:flex-row flex-col gap-2 items-start md:items-end overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              viewport={{ once: true }}
              className=" h-[clamp(135px,56vw,280px)] overflow-hidden p-0.5 md:h-[clamp(8rem,17vw,50rem)] w-full min-[475px]:w-105 md:w-1/2   bg-white   text-black order-2 md:order-1 "
            >
              <motion.div className="h-full w-full rounded-2xl overflow-hidden">
                <motion.img
                  initial={{ scale: 1.3 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="  object-cover h-full w-full "
                  src="https://ik.imagekit.io/aliwani101/eye.png?updatedAt=1785492586073"
                  alt=""
                />
              </motion.div>
            </motion.div>

            <div className=" flex  md:flex-col h-fit min-w-0 md:w-fit  items-start justify-between gap-1 md:gap-2 xl:gap-3   order-1 md:order-2 ">
              <motion.div className="overflow-hidden">
                <motion.h1
                  variants={item}
                  className="font-antonSC h-fit text-[calc(100cqw*0.21)] md:text-[clamp(3.9rem,8.5vw,20rem)]  xl:text-[clamp(4rem,8.9vw,20rem)] w-fit leading-none md:leading-[clamp(3.9rem,8.1vw,20rem)] overflow-hidden   "
                >
                  MEETS
                </motion.h1>
              </motion.div>
              <motion.div className="overflow-hidden">
                <motion.h1
                  variants={item}
                  className="font-antonSC h-fit text-[calc(100cqw*0.21)] md:text-[clamp(3.9rem,8.7vw,20rem)] xl:text-[clamp(3.9rem,9vw,20rem)] w-fit leading-none overflow-hidden md:leading-[clamp(3.9rem,8.1vw,20rem)] "
                >
                  VISION
                </motion.h1>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Hero;
