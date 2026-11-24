import React from "react";
import { Helmet } from "react-helmet-async";

function SEO({
  title = "Stratone Studio — Creative Agency | Web Design, Branding & Marketing",
  description = "Stratone Studio is a full-service creative agency specializing in web design, branding, Shopify development, video production, and digital marketing for ambitious brands worldwide.",
  keywords = "creative agency, web design, branding, digital marketing, Shopify development, video production, Stratone Studio",
  canonical,
  ogType = "website",
  ogImage = "https://ik.imagekit.io/aliwani101/heroImg.webp",
}) {
  const siteUrl = "https://stratonestudio.com";
  const canonicalUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Stratone Studio" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}

export default SEO;
