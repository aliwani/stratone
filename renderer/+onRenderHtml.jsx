import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { HelmetProvider } from "react-helmet-async";
import {
  escapeInject,
  dangerouslySkipEscape,
} from "vike/server";
import Layout from "../pages/+Layout";

export default async function onRenderHtml(pageContext) {
  const { Page, urlPathname } = pageContext;
  const pageProps = pageContext.pageProps || {};

  const helmetContext = {};

  const pageHtml = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={urlPathname}>
        <Layout>
          <Page
            {...pageProps}
            routeParams={pageContext.routeParams}
            helmetContext={helmetContext}
          />
        </Layout>
      </StaticRouter>
    </HelmetProvider>
  );

  const helmet = helmetContext.helmet;

  // Only use fallback if helmet didn't extract anything
  // helmet.title.toString() returns a full <title> tag, or empty string
  const helmetTitle = helmet?.title?.toString();
  const title =
    helmetTitle && helmetTitle.length > 0
      ? helmetTitle
      : "<title>Stratone Studio — Creative Agency | Web Design, Branding & Marketing</title>";

  const helmetMeta = helmet?.meta?.toString();
  const meta =
    helmetMeta && helmetMeta.length > 0
      ? helmetMeta
      : `<meta name="description" content="Stratone Studio is a full-service creative agency specializing in web design, branding, Shopify development, video production, and digital marketing for ambitious brands worldwide." />`;

  const link = helmet?.link?.toString() || "";

  const script = helmet?.script?.toString() || "";

  return escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#111111" />
        <meta name="robots" content="index, follow" />

        <link rel="preload" href="/fonts/AntonSC-Regular.woff2" as="font" type="font/woff2" crossorigin />
        <link rel="preload" href="/fonts/ClashGrotesk-Variable.woff2" as="font" type="font/woff2" crossorigin />

        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Stratone" />

        ${dangerouslySkipEscape(title)}
        ${dangerouslySkipEscape(meta)}
        ${dangerouslySkipEscape(link)}
        ${dangerouslySkipEscape(script)}
      </head>

      <body>
        <div id="root">
          ${dangerouslySkipEscape(pageHtml)}
        </div>
      </body>
    </html>`;
}
