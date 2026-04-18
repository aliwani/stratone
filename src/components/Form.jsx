import React from "react";
import ProjectBtn from "./resuables/ProjectBtn";
import FormBtn from "./resuables/FormBtn";

function Form() {
  return (
    <div className="w-full md:w-1/2 h-157 bg-white p-0.5 ">
      <div className=" w-full h-full flex flex-col gap-5 text-white p-5 md:p-7.5 xl:p-12.5 text-lg font-clashRegular tracking-wider font-meduim rounded-2xl bg-[#111111]">
        <div className="flex flex-col gap-2">
          <label for="name">Name*</label>
          <input className="placeholder:text-sm py-2 font-clashMeduim   px-4 rounded-sm bg-[#202020]" placeholder="Riley Brooks" type="text" id="name" />
        </div>
        <div className="flex flex-col gap-2">
          <label for="email">Email address*</label>
          <input className=" placeholder:text-sm py-2 font-clashMeduim   px-4 rounded-sm bg-[#202020]" placeholder="example@example.com" type="email" id="email" />
        </div>
        <div className="flex flex-col gap-2">
          <label for="subject">Subject*</label>
          <input className=" placeholder:text-sm py-2 font-clashMeduim   px-4 rounded-sm bg-[#202020]" placeholder="Whats' the subject" type="text" id="subject" />
        </div>
        <div className="flex flex-col gap-2">
          <label for="message">Message</label>
          <textarea className=" placeholder:text-sm py-2 font-clashMeduim   px-4 h-25 rounded-sm bg-[#202020]" placeholder="Tell us the purpose" type="" id="message" />
        </div>
        <FormBtn text="Submit"/>
      </div>
    </div>
  );
}

export default Form;
