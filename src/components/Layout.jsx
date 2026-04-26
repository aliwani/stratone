import React, { useState } from "react";
import Navbar from "./navbar/Navbar";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import NavDiv from "./resuables/NavDiv";
import { div } from "framer-motion/client";

function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">

      <NavDiv isOpen={isOpen} setIsOpen={setIsOpen} />
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <main>{children}</main>
      <ContactUs />
      <Footer />
    </div>
  );
}

export default Layout;
