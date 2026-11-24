import React, { useState } from "react";
import Navbar from "@/components/navbar/Navbar";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import NavDiv from "@/components/resuables/NavDiv";
import SEO from "@/components/SEO";
import { OrganizationSchema, WebSiteSchema } from "@/components/StructuredData";
import ScrollToTop from "@/components/ScrollToTop";

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <SEO />
      <OrganizationSchema />
      <WebSiteSchema />
      <ScrollToTop />
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
