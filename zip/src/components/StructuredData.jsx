import React from "react";
import { Helmet } from "react-helmet-async";

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Stratone Studio",
    url: "https://stratonestudio.com",
    logo: "https://ik.imagekit.io/aliwani101/2.png?updatedAt=1785492490542",
    description:
      "Full-service creative agency specializing in web design, branding, Shopify development, video production, and digital marketing.",
    email: "StudioStratone@gmail.com",
    telephone: "+923160865229",
    sameAs: [
      "https://www.instagram.com/stratonestudio",
      "https://www.facebook.com/share/1D4JUbsm7V/",
      "https://www.linkedin.com/company/stratonestudio",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+923160865229",
      contactType: "customer service",
      email: "StudioStratone@gmail.com",
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Stratone Studio",
    url: "https://stratonestudio.com",
    description:
      "Full-service creative agency crafting bold brands, high-converting websites, and impactful digital marketing campaigns.",
    publisher: {
      "@type": "Organization",
      name: "Stratone Studio",
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

export function FAQPageSchema({ faqs }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
