import React from "react";
import "../src/index.css";
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Layout from "../pages/+Layout";

import { initLenis } from "../src/lib/lenis";

export default async function onRenderClient(pageContext) {
  const { Page } = pageContext;
  const pageProps = pageContext.pageProps || {};

  initLenis();

  hydrateRoot(
    document.getElementById("root"),
    <HelmetProvider>
      <BrowserRouter>
        <Layout>
          <Page {...pageProps} />
        </Layout>
      </BrowserRouter>
    </HelmetProvider>
  );
}
