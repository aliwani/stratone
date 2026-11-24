import { readdirSync, existsSync } from "fs";
import { join } from "path";

export default function handler(req, res) {
  const cwd = process.cwd();
  const info = {
    cwd,
    nodeVersion: process.version,
    distServerExists: existsSync(join(cwd, "dist/server")),
    distClientExists: existsSync(join(cwd, "dist/client")),
    entryExists: existsSync(join(cwd, "dist/server/entry.mjs")),
  };

  try {
    info.cwdFiles = readdirSync(cwd);
  } catch (e) {
    info.cwdFilesError = e.message;
  }

  try {
    info.distServerFiles = readdirSync(join(cwd, "dist/server"));
  } catch (e) {
    info.distServerFilesError = e.message;
  }

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(info, null, 2));
}
