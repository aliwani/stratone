import React, { useState } from "react";
import Navbar from "./navbar/Navbar";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import NavDiv from "./resuables/NavDiv";
import SEO from "./SEO";
import { OrganizationSchema, WebSiteSchema } from "./StructuredData";

function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <SEO />
      <OrganizationSchema />
      <WebSiteSchema />
      <NavDiv isOpen={isOpen} setIsOpen={setIsOpen} />
      <header>
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      </header>
      <main>{children}</main>
      <ContactUs />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
