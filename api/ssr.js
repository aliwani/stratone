import { renderPage } from "vike/server";

export default async function handler(req, res) {
  const { url } = req;

  if (url === undefined) {
    res.statusCode = 400;
    res.end("req.url is undefined");
    return;
  }

  try {
    const pageContextInit = { urlOriginal: url };
    const pageContext = await renderPage(pageContextInit);
    const { httpResponse } = pageContext;

    // Debug: expose pageContext error info
    if (url.includes("__debug")) {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({
        url,
        hasHttpResponse: !!httpResponse,
        statusCode: httpResponse?.statusCode,
        errorWhileRendering: pageContext.errorWhileRendering?.message,
        errorStack: pageContext.errorWhileRendering?.stack,
        is404: pageContext.is404,
        pageContextKeys: Object.keys(pageContext),
      }, null, 2));
      return;
    }

    if (!httpResponse) {
      res.statusCode = 200;
      res.end();
      return;
    }

    const { body, statusCode, headers } = httpResponse;

    res.statusCode = statusCode;
    headers.forEach(([name, value]) => res.setHeader(name, value));
    res.end(body);
  } catch (error) {
    console.error("SSR Error:", error);
    res.statusCode = 500;
    res.setHeader("Content-Type", "text/html");
    res.end(`<pre>SSR Error: ${error.message}\n\n${error.stack}</pre>`);
  }
}
