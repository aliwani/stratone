import React from "react";
import SectionHeader from "./resuables/SectionHeader";
const workimg = "https://ik.imagekit.io/aliwani101/ourworkbanner.jpg?f-auto,q-80"
import Header from "./resuables/Header";
import ProjectBtn from "./resuables/ProjectBtn";
import Contactbtn from "./resuables/ContactBtn";
import { motion } from "framer-motion";

function Ourwork() {
  
  return (
    <section className="flex flex-col gap-10 w-full py-2 md:py-10 px-5 md:px-7.5 xl:px-10 bg-[#111111]  h-fit">
      <SectionHeader Num="[03]" Text="Stories We’ve Told" />
      <div className="flex items-center justify-center gap-10 flex-col h-full w-full">
        <div>
          <Header heading="our work" />
          <div className="flex flex-col mt-10 md:mt-20 gap-5 md:flex-row w-full">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ ease: "easeOut", duration: 0.8 }}
              viewport={{ once: true }}
              className="md:w-1/2 w-full text-white font-clashRegular text-sm md:text-lg "
            >
              At Stratone Studio, we help businesses grow through creative
              digital solutions. From high-converting websites and Shopify
              stores to engaging video editing and result-driven marketing
              campaigns, every project is crafted with a focus on quality,
              innovation, and measurable results. 
<br />
<br />
              We've partnered with startups, small businesses, and growing brands to deliver impactful digital solutions. Our portfolio includes custom business websites, Shopify stores, digital marketing campaigns, professional video editing, and branding projects across a variety of industries. 
            </motion.p>
            
            <div className="md:w-1/2 w-full h-full  md:h-100 bg-white">
            <img loading="lazy" className="h-full w-full object-cover" src={workimg} alt="Stratone Studio portfolio showcase — creative agency work samples" />
            </div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.8 }}
          viewport={{ once: true }}
          className="flex md:flex-row flex-col justify-center items-center gap-2 "
        >
          <ProjectBtn text="view all projects" />
          <Contactbtn text="contact us" />
        </motion.div>
      </div>
    </section>
  );
}

export default Ourwork;
