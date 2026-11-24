let renderPage;
let importError = null;

try {
  const mod = await import("vike/server");
  renderPage = mod.renderPage;
} catch (e) {
  importError = e;
}

export default async function handler(req, res) {
  const { url } = req;

  // If vike/server failed to import, show that error
  if (importError) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "text/html");
    res.end(`<pre>Import Error: ${importError.message}\n\n${importError.stack}</pre>`);
    return;
  }

  try {
    const pageContextInit = { urlOriginal: url };
    const pageContext = await renderPage(pageContextInit);
    const { httpResponse } = pageContext;

    // If there was an error while rendering, show it
    if (pageContext.errorWhileRendering) {
      res.statusCode = 500;
      res.setHeader("Content-Type", "text/html");
      const err = pageContext.errorWhileRendering;
      res.end(`<pre>Render Error: ${err.message}\n\nStack: ${err.stack}</pre>`);
      return;
    }

    if (!httpResponse) {
      res.statusCode = 200;
      res.end("No httpResponse from Vike");
      return;
    }

    const { body, statusCode, headers } = httpResponse;

    res.statusCode = statusCode;
    headers.forEach(([name, value]) => res.setHeader(name, value));
    res.end(body);
  } catch (error) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "text/html");
    res.end(`<pre>Handler Error: ${error.message}\n\n${error.stack}</pre>`);
  }
}
