import React, { useState } from "react";
import Img from "@/assets/footerImg.jpg";
import { ArrowRight } from "lucide-react";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { LiaLinkedinIn } from "react-icons/lia";

function FooterLeftB() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/newsletter`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        },
      );

      if (response.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="relative flex flex-col justify-between rounded-2xl text-white w-full md:w-2/5 md:min-w-95 md:w-max-w-300 h-59 md:h-full p-5 md:p-7.5 xl:p-10">
      <img
        className="absolute top-0 left-0 z-0 w-full h-full object-cover rounded-2xl"
        src={Img}
        alt=""
      />
      <div className="absolute inset-0 -z-1 bg-linear-to-l h-full bg-[#111111] opacity-50 rounded-2xl" />
      <div className="z-1">
        <div className="flex flex-col gap-3 xl:gap-5 pb-7.5">
          <span
            style={{
              WebkitTextStroke: "0.5px white",
              textStroke: "1px white",
            }}
            className="font-clashRegular font-semibold uppercase text-white text-[16px] tracking-wider md:text-lg"
          >
            stay in the loop
          </span>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="flex max-w-120 flex-row gap-3"
          >
            <input
              className="border-[0.5px] transition-colors duration-400 ease-in-out focus:border-white focus:outline-none border-[#434242] w-full h-12.5 py-2.5 pl-5 pr-11 rounded-lg bg-[#202020] placeholder:text-[16px] placeholder:font-clashRegular placeholder:text-white"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={status === "loading"}
            />
            <button
              className="flex items-center p-3.5 justify-center h-full w-12 rounded-lg border-[0.5px] border-[#434242] bg-[#202020] disabled:opacity-50"
              type="submit"
              disabled={status === "loading"}
            >
              <ArrowRight size={20} />
            </button>
          </form>

          {/* Status messages */}
          {status === "success" && (
            <p className="text-green-400 text-sm">Done!</p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-sm">Try again!</p>
          )}
        </div>

        <div className="flex flex-col gap-3 xl:gap-5">
          <span
            style={{
              WebkitTextStroke: "1px white",
              textStroke: "1px white",
            }}
            className="font-clashRegular uppercase text-white text-[16px] tracking-wider md:text-lg"
          >
            join our community
          </span>
          <ul className="flex gap-2">
            <a className="h-5 w-5 " href="">
              <FaFacebookF size={20} color="white"/>

            </a>
            <a className="h-5 w-5 " href="">
              <RiInstagramFill size={20} color="white" />{" "}
            </a>
            <a className="h-5 w-5 " href="">
              <FaXTwitter size={20} color="white" />
            </a>
            <a className="h-5 w-5 " href="">
              <LiaLinkedinIn size={20} color="white" />
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FooterLeftB;
