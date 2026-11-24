import { MoveRight } from "lucide-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navlinks({ to, children, setIsOpen }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link to={to} onClick={() => setIsOpen(false)}>
      <h3
        className={`group font-antonSC flex items-center justify-between text-[18px] md:text-[22px] rounded-lg px-2 py-1 tracking-wider  uppercase text-white transition-all duration-300 hover:bg-[#202020] ${isActive ? " bg-[#202020]" : "bg-none"}`}
      >
        {children}
        <MoveRight
        size={20}
          color="white"
          className={`transition-all duration-300 transform   ${isActive ? "opacity-100 scale-100" : "opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100"}`}
        />
      </h3>
    </Link>
  );
}

export default Navlinks;
