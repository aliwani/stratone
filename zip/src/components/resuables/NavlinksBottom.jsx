import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavlinksBottom({ to, children, setIsOpen }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link to={to} onClick={() => setIsOpen(false)}>
      <h3
        className={` font-clashMeduim flex items-center justify-between text-[16px] md:text-[18px] rounded-lg px-2 py-1 tracking-widest   text-white transition-all duration-300 `}
      >
        {children}
       
      </h3>
    </Link>
  );
}

export default NavlinksBottom;
