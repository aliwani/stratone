import circleImg from "@/assets/circles.svg";
import { motion } from "framer-motion";
function Hero() {
  return (
    <motion.div 
    initial={{ opacity: 0, }}
          whileInView={{ opacity: 1, }}
          transition={{ ease: "easeOut", duration: 0.3 }}
          viewport={{ once: true }}
    className="relative flex flex-col items-center justify-center bg-[url('https://ik.imagekit.io/aliwani101/AboutHero.webp')] bg-cover w-full min-h-110    md:h-135 xl:h-188  z-0 px-10">
      {/* Overlay */}
      <div className="absolute top-0 left-0 -z-1 w-full h-full bg-linear-to-l from-black to-black opacity-50 "></div>
      <div className="h-1/2 mt-40 md:h-[55%] flex items-end xl:mb-20 ">
        <img 
        loading="lazy"
        className="h-10.5 w-17 md:h-15 md:w-24" src={circleImg} alt="" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.5,delay:0.3 }}
        viewport={{ once: true }}
        className="min-h-1/2 md:min-h-1/3  flex-1 xl:flex-0  flex items-end md:items-start xl:items-center md:justify-center md:flex-row flex-col pb-10 xl:pb-25 mt-10 xl:mt-0   gap-6 md:gap-3 "
      >
        <div className="flex md:flex-row flex-col h-auto md:h-15 items-center md:items-start justify-center w-full xl:w-fit gap-4 md:gap-3">
          <div className="relative z-0 flex items-start justify-end h-10 md:h-15 w-30 md:w-45 md:mb-40  rounded-full ">
            <img
             loading="lazy"
             src="https://ik.imagekit.io/aliwani101/Mr%20Faisal.jpeg" 
            className="absolute -z-3 left-0  h-full w-1/3 md:w-15  object-cover rounded-full" />
            <img 
             loading="lazy"
            src="https://ik.imagekit.io/aliwani101/Mr%20Khalid.jpeg"
             className="absolute -z-2 left-[22%]  h-full w-1/3 md:w-15  object-cover rounded-full" />
            <img src="https://ik.imagekit.io/aliwani101/Mr%20Tanveer.jpeg"
              loading="lazy"
             className="absolute -z-1 left-[44%]  h-full w-1/3 md:w-15   object-cover rounded-full " />
            <div className="h-10 w-10 md:h-15 md:w-15 bg-white rounded-full flex items-center justify-center">
              {" "}
              +10{" "}
            </div>
          </div>
          <div>
            <p className="font-clashRegular font-medium text-[16px] tracking-wide md:text-lg leading-tight text-white  w-full">
              Based on 10+ project reviews
            </p>
          </div>
        </div>
        <p className="text-white font-clashRegular tracking-wide font-medium text-[16px] md:text-lg leading-tight px-4 md:px-2 text-wrap w-full xl:w-2/6 text-center md:text-start">
          We’re a small, focused design agency with big ambition—specializing in
          crafting high-converting websites, bold brand identities, and
          intuitive digital experiences.
        </p>
      </motion.div>
    </motion.div>
  );
}

export default Hero;
