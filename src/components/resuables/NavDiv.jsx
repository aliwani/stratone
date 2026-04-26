import React from "react";
import { ROUTES } from "@/configs/route";
import Navlinks from "./Navlinks";
import NavlinksBottom from "./NavlinksBottom";
function NavDiv({ setIsOpen, isOpen }) {
  const firstCol = ROUTES.slice(0, 5);
  const secondCol = ROUTES.slice(5);

  return (
    <div
      className={`fixed top-0 left-0 z-90 inset-0 bg-black/50 backdrop-blur-lg h-full w-screen transition-all duration-500 ${
        isOpen ? "opacity-100  " : "opacity-0  pointer-events-none"
      } `}
    >
      <div className="h-fit w-70 flex flex-col md:flex-row md:h-85 md:w-160 absolute top-19 right-5 md:right-7.5 xl:right-10 p-0.5  gap-0.5 bg-white">
        <div className=" h-65 md:h-full w-full md:w-3/5 flex flex-col  p-5  bg-black  rounded-lg  justify-between gap-1 ">
          <div className="flex flex-col  justify-between">
            {firstCol.map((link, idx) => {
              return (
                <Navlinks
                  setIsOpen={setIsOpen}
                  isOpen={isOpen}
                  key={idx}
                  to={link.path}
                >
                  {link.name}
                </Navlinks>
              );
            })}
          </div>
          <hr className="border-[#202020] border rounded-2xl mx-1.5 " />
          <div className="flex items-center justify-start gap-5">
            {secondCol.map((link, idx) => {
              return (
                <NavlinksBottom
                  setIsOpen={setIsOpen}
                  isOpen={isOpen}
                  key={idx}
                  to={link.path}
                >
                  {link.name}
                </NavlinksBottom>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col justify-between  h-30 md:h-full w-full rounded-lg md:w-2/5 p-5 bg-black">
          <img className="h-8 md:h-10 w-full" src="" alt="" />
          <div className="flex flex-col gap-1">
            <h4 className="text-[16px] md:text-lg leading-none text-white font-clashRegular tracking-wider">
              Email on
            </h4>
            <h5 className="text-white text-sm md:text-md leading-none font-clashSemi text-wrap">
              StudioStratone@gmail.com
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavDiv;
