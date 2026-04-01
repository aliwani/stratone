import React from "react";
import Img from "@/assets/footerimg.jpg";

function FooterLeftB() {
  return (
    <div className="relative  flex flex-col justify-between  rounded-2xl text-white w-full  md:w-2/5 md:min-w-95 md:w-max-w-300   h-59 md:h-full  p-5 md:p-7.5 xl:p-10">
      <img
        className="absolute top-0 left-0 -z-1 w-full h-full object-cover rounded-2xl"
        src={Img}
        alt=""
      />
      <div className="absolute inset-0 -z-1  bg-linear-to-l h-full bg-black opacity-50 rounded-2xl" />

      <div className="flex flex-col  gap-3 xl:gap-5 pb-7.5">
        <span
          style={{
            WebkitTextStroke: "0.5px white", // Chrome, Safari
            textStroke: "1px white", // Future-proof
          }}
          className="font-clashRegular font-semibold uppercase text-white text-[16px] tracking-wider md:text-lg"
        >
          stay in the loop
        </span>
        <input
          className="border-[0.5px] transition-colors duration-400 ease-in-out  focus:border-white focus:outline-none border-[#434242] max-w-120 h-12.5 py-2.5 pl-5 pr-11 rounded-lg bg-[#202020] placeholder:text-[16px] placeholder:font-clashRegular  placeholder:text-white "
          type="email"
          placeholder="Email your email"
        />
      </div>
      <div className="flex flex-col gap-3 xl:gap-5">
        <span
          style={{
            WebkitTextStroke: "1px white", // Chrome, Safari
            textStroke: "1px white", // Future-proof
          }}
          className="font-clashRegular  uppercase text-white text-[16px] tracking-wider md:text-lg"
        >
          join our community
        </span>
        <ul className="flex gap-2">
          <a href="">sad</a>
          <a href="">sad</a>
          <a href="">sad</a>
          <a href="">sad</a>
        </ul>
      </div>
    </div>
  );
}

export default FooterLeftB;
