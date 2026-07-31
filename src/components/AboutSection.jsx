import aboutImg from "@/assets/test/aboutimg.png";
import teamMembers from "../data/Team";
import SectionHeader from "./resuables/SectionHeader";
import Header from "./resuables/Header";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { TbBrandFacebookFilled } from "react-icons/tb";
import { LuLinkedin } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

function AboutSection() {
  const [currentWidth, setcurrentWidth] = useState(1200);
  const isPc = currentWidth >= 809 ? true : false;
  useEffect(() => {
    const handleResize = () => {
      setcurrentWidth(window.innerWidth);
    };
    handleResize(); // Initial call
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <section className="bg-[#111111]  flex flex-col gap-10 md:gap-18 xl:gap-20   w-full py-30 md:py-38 xl:py-50 px-5 md:px-7.5 xl:px-10 border-box overflow-hidden">
      <SectionHeader Num="[01]" Text="Built on vision" />
      <div className="relative  flex flex-col items-center justify-center">
        <Header heading="about stratone" />
        <div className="md:w-95 xl:w-125  flex flex-col items-center justify-center gap-5">
          <div className="hidden md:block h-10 w-full"></div>
          <div className="pt-5 overflow-hidden md:pt-0 h-full  w-full">
            <motion.img
              initial={{ scale: 1.2 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.2 }}
              viewport={{ once: true }}
              src={aboutImg}
              alt=""
              className="h-full object-cover w-full"
            />
          </div>
          <p className="font-clashRegular antialiased mb-3 tracking-wider text-white/90 leading-none px-7 md:px-0  text-[16px] md:text-[20px] text-wrap  md:text-center">
            Stratone is a full-service creative agency built for brands that
            refuse to be ordinary. We combine strategic thinking with bold
            execution to craft identities, digital experiences, and
            high-performing assets from websites and Shopify stores to video
            content and marketing campaigns. Founded on the belief that every
            brand deserves world-class creative work, our team brings together
            developers, designers, editors, and strategists who are obsessed
            with one thing: building your brand from the ground up and making it
            impossible to ignore.
          </p>
          <div className="font-clashSemi  tracking-wider  uppercase flex flex-wrap justify-center items-center gap-5 w-full leading-none  text-white text-[16px] md:text-lg">
            <a href="">Instagram.</a>
            <a href="">Facebook.</a>
            <a href="">LinkedIn.</a>
            <a href="">X.</a>
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-2">
            <span className="font-clashSemi pt-5 text-white text-[18px] md:text-lg uppercase">
              Our team
            </span>
            <div className="bg-white grid grid-cols-2 md:flex py-0.5 px-0.5 gap-0.5 w-full h-fit ">
              {teamMembers.slice(2, 6).map((team, idx) => {
                return (
                  <div
                    key={idx}
                    className="h-full overflow-x-hidden w-full md:w-19 md:h-20 xl:w-25 xl:h-26 bg-[#111111]"
                  >
                    <motion.img
                      initial={{ scale: 1.2 }}
                      whileInView={{ scale: 1 }}
                      transition={{ ease: "easeOut", duration: 0.8 }}
                      viewport={{ once: true }}
                      className="h-auto  md:h-full  w-full object-contain md:object-cover  "
                      src={team.image}
                      alt=""
                    />
                    {!isPc && (
                      <div className="w-full h-fit bg- flex gap-3 items-center  justify-between py-4 flex-col ">
                        <div className="h-fit flex gap-2">
                          {team.socials?.linkedin && (
                            <a
                              href={team.socials.linkedin}
                              className=" h-full w-full flex items-center justify-center"
                            >
                              <LuLinkedin color="white" size={17} />
                            </a>
                          )}
                          {team.socials?.instagram && (
                            <a
                              href={team.socials.instagram}
                              className=" h-full w-full flex items-center justify-center"
                            >
                              <RiInstagramFill color="white" size={17} />
                            </a>
                          )}

                          {team.socials?.facebook && (
                            <a
                              href={team.socials.facebook}
                              className=" h-full w-full rounded-full flex items-center justify-center"
                            >
                              <TbBrandFacebookFilled color="white" size={17} />
                            </a>
                          )}
                          {team.socials?.x && (
                            <a
                              href={team.socials.x}
                              className=" h-full w-full rounded-full flex items-center justify-center"
                            >
                              <FaXTwitter color="white" size={17} />
                            </a>
                          )}
                        </div>
                        <div>
                          <h3 className="text-wrap leading-tight flex items-center justify-center text-center px-5 text-white text-sm tracking-widest font-clashRegular font-semibold uppercase">
                            {team.name},{" "}
                          </h3>
                          <h4 className="text-wrap leading-tight flex items-center justify-center text-center px-5 text-white text-xs tracking-wider font-clashMeduim font-extrabold uppercase">
                            {team.designation}
                          </h4>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}

              <Link
                to="/about#team"
                className="cursor-pointer flex px-2 h-10 col-span-2  md:w-19 md:h-20 text-xl flex-row gap-1 md:flex-col  xl:w-24 xl:h-26 rounded-xs md:rounded-lg leading-none text-white uppercase font-Meduim w-full items-center justify-center bg-black"
              >
                <span>View </span>
                <span>team</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
