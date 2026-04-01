import { a } from "framer-motion/client";
import React from "react";
import { Link, useLocation } from "react-router-dom";

function FooterLinks({ to, children }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return <Link
  to={to}
  className="relative inline-block text-white font-clashRegular font-medium group"
>
  <span className="relative inline-block">
    {children}
    <span
      className={`absolute left-0 bottom-1 h-[1.5px] bg-white 
        transition-all duration-500 ease-in-out
        ${isActive ? "w-full opacity-100" : "w-0 opacity-0"} 
        group-hover:w-full group-hover:opacity-100`}
    ></span>
  </span>
</Link>
}

export default FooterLinks;
