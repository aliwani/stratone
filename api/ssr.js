import { renderPage } from "vike/server";

export default async function handler(req, res) {
  const { url } = req;

  if (url === undefined) {
    res.statusCode = 400;
    res.end("req.url is undefined");
    return;
  }

  const pageContextInit = { urlOriginal: url };
  const pageContext = await renderPage(pageContextInit);
  const { httpResponse } = pageContext;

  if (!httpResponse) {
    res.statusCode = 200;
    res.end();
    return;
  }

  const { body, statusCode, headers } = httpResponse;

  res.statusCode = statusCode;
  headers.forEach(([name, value]) => res.setHeader(name, value));
  res.end(body);
}
