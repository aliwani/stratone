import SEO from "@/components/SEO";
import ServicesHero from "@/components/ServicesHero";
import ServicesSection from "@/components/ServicesSection";
import React from "react";

function OurServices() {
  return (
    <div className="w-full h-full bg-[#111111] ">
      <SEO
        title="Digital Marketing, Design & Web Development Services | Stratone Studio"
        description="Stratone Studio offers social media marketing, graphic design, video editing, Shopify stores, website and app development, and SEO to grow your brand online."
        keywords="digital marketing agency, social media marketing, graphic design services, video editing, Shopify store development, website development, app development, SEO services"
        canonical="https://stratonestudio.com/services"
        ogType="website"
        ogImage="https://ik.imagekit.io/aliwani101/services-og.webp"
      />
      <ServicesHero />
      <ServicesSection />
    </div>
  );
}

export default OurServices;
