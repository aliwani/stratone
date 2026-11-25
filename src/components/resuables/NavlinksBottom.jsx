import React from "react";
import { useLocation } from "react-router-dom";

function NavlinksBottom({ to, children, setIsOpen }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <a href={to} onClick={() => setIsOpen(false)}>
      <span
        className={` font-clashMeduim flex items-center justify-between text-[16px] md:text-[18px] rounded-lg px-2 py-1 tracking-widest   text-white transition-all duration-300 `}
      >
        {children}

      </span>
    </a>
  );
}

export default NavlinksBottom;
