import Faqs from "@/components/FAQS";
import FormSection from "@/components/contactPage/FormSection";
import Hero from "@/components/contactPage/Hero";
import SEO from "@/components/SEO";
import React from "react";

function Contact() {
  return (
    <div className="h-full w-screen bg-white   border-box overflow-hidden">
      <SEO
        title="Contact Stratone Studio | Get a Free Consultation"
        description="Ready to elevate your brand? Contact Stratone Studio for web design, branding, Shopify development, and digital marketing services. Let's build something great together."
        canonical="/contact"
      />
      <div className="h-full w-full  bg-[#111111]">
        <Hero />
        <div className="px-5 md:px-7.5 xl:px-10">
          <FormSection />
          <Faqs Num="[02]" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
