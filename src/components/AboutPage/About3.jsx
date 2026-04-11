import React from "react";
import SectionHeader from "../resuables/SectionHeader";
import Img from "@/assets/test1.jpeg";
import teamMembers from "../../data/Team";
function About3() {
  return (
    <div className="h-full w-full ">
      <SectionHeader Num="[03]" Text="meet the team" />
      <div className="grid grid-cols-1 md:grid-cols-2 mt-12 gap-10 ">
        {teamMembers.map((member, index) => (
          <div key={member.id} className="flex w-full bg-[#222222]">
            <div className="w-[43%] md:w-60 h-70">
              <img
                className="h-full w-full object-cover"
                src={member.image}
                alt=""
              />
            </div>
            <div className="w-[57%] md:w-full h-full p-5 gap-8 flex flex-col justify-between">
              <div className="flex flex-col xl:flex-row justify-between gap-5">
                <div className="flex flex-col">
                  <span className="font-antonSC text-white text-lg md:text-[20px] uppercase tracking-wider">
                    {member.name}
                  </span>
                  <span className="text-white font-clashMeduim text-[16px] tracking-wider leading-tight font-semibold text-lg">
                    {member.designation}
                  </span>
                </div>
                <div className="flex items-center  bg-white h-7.5 md:h-10.5 w-fit py-0.5 px-0.5 gap-0.5 ">
                  {member.socials.map((social, idx) => {
                    <div className="bg-black flex items-center justify-center rounded-sm text-white text-lg h-full w-6.5 md:w-10  ">
                      {social}
                    </div>;
                  })}
                </div>
              </div>
              <div className="flex flex-row flex-wrap md:flex-col leading-tight">
                <span className="text-white font-clashRegular text-nowrap tracking-wide font-medium mr-1 md:mr-0 text-[16px] md:text-lg">
                  {member.dateOfBirth}
                </span>
                <span className="text-white font-clashRegular tracking-wide font-medium text-[16px]  md:text-lg">
                  {member.city}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About3;
