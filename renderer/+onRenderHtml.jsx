import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { escapeInject, dangerouslySkipEscape } from "vike/server";

export default async function onRenderHtml(pageContext) {
  const { Page, urlPathname } = pageContext;

  const helmetContext = {};

  const pageHtml = renderToString(
    <StaticRouter location={urlPathname}>
      <Page {...pageContext} helmetContext={helmetContext} />
    </StaticRouter>
  );

  const helmet = helmetContext.helmet;

  const title =
    helmet?.title?.toString() ||
    "<title>Stratone Studio | Creative Digital & Marketing Agency</title>";

  const meta =
    helmet?.meta?.toString() ||
    `<meta name="description" content="Stratone Studio helps businesses grow through creative branding, digital marketing, Shopify development, web development and video editing." />`;

  const link = helmet?.link?.toString() || "";

  return escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        ${dangerouslySkipEscape(title)}
        ${dangerouslySkipEscape(meta)}
        ${dangerouslySkipEscape(link)}
      </head>

      <body>
        <div id="root">
          ${dangerouslySkipEscape(pageHtml)}
        </div>
      </body>
    </html>`;
}
