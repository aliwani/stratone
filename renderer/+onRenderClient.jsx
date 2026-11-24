
import React from "react";
import "../src/index.css";
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { initLenis } from "../src/lib/lenis";

export default async function onRenderClient(pageContext) {
  const { Page, pageProps } = pageContext;

  // Initialize Lenis only in the browser
  initLenis();

  hydrateRoot(
    document.getElementById("root"),
    <BrowserRouter>
      <Page {...pageProps} />
    </BrowserRouter>
  );
}
