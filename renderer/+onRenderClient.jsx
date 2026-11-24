import React from "react";
import "../src/index.css";
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { initLenis } from "../src/lib/lenis";

export default async function onRenderClient(pageContext) {
  const { Page } = pageContext;

  initLenis();

  hydrateRoot(
    document.getElementById("root"),
    <HelmetProvider>
      <BrowserRouter>
        <Page {...pageContext} />
      </BrowserRouter>
    </HelmetProvider>
  );
}
