// Build-time prerender step.
// Serves the freshly-built dist/ locally, drives a headless browser over every
// route in the sitemap, and writes each route's fully-rendered HTML (including
// the <head> tags set by src/components/Seo.tsx) to dist/<route>/index.html.
//
// This is intentionally NON-FATAL: if the headless browser can't launch (e.g.
// Chromium missing in a build environment), it logs a warning and exits 0 so
// the deploy still succeeds, falling back to the client-rendered SPA.
import { readFileSync, writeFileSync, mkdirSync, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { join, dirname, extname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const DIST = join(ROOT, "dist");
const SITE_URL = "https://techtrailblazerstribe.com";
const PORT = 4477;

const MIME = {
  ".html": "text/html", ".js": "text/javascript", ".mjs": "text/javascript",
  ".css": "text/css", ".json": "application/json", ".svg": "image/svg+xml",
  ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg",
  ".webp": "image/webp", ".gif": "image/gif", ".ico": "image/x-icon",
  ".xml": "application/xml", ".txt": "text/plain", ".mp4": "video/mp4",
  ".woff": "font/woff", ".woff2": "font/woff2", ".ttf": "font/ttf",
};

async function main() {
  if (!existsSync(join(DIST, "index.html"))) {
    console.warn("[prerender] dist/index.html not found — skipping prerender.");
    return;
  }

  // Puppeteer is a build-only tool; import lazily so a missing install can't
  // break the build (we just skip prerendering).
  let puppeteer;
  try {
    puppeteer = (await import("puppeteer")).default;
  } catch (e) {
    console.warn("[prerender] puppeteer not available — skipping prerender:", e.message);
    return;
  }

  // Route list from the generated sitemap (single source of truth).
  const sitemap = readFileSync(join(DIST, "sitemap.xml"), "utf8");
  const routes = Array.from(sitemap.matchAll(/<loc>([^<]+)<\/loc>/g))
    .map((m) => m[1].replace(SITE_URL, ""))
    .map((p) => (p === "" ? "/" : p));

  // Minimal static server for dist/ with SPA fallback to index.html.
  const server = createServer((req, res) => {
    const urlPath = decodeURIComponent((req.url || "/").split("?")[0]);
    const candidate = join(DIST, urlPath);
    if (extname(candidate) && existsSync(candidate) && statSync(candidate).isFile()) {
      res.setHeader("Content-Type", MIME[extname(candidate)] || "application/octet-stream");
      res.end(readFileSync(candidate));
    } else {
      res.setHeader("Content-Type", "text/html");
      res.end(readFileSync(join(DIST, "index.html")));
    }
  });
  await new Promise((r) => server.listen(PORT, r));

  let browser;
  try {
    browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
    });
  } catch (e) {
    console.warn("[prerender] could not launch headless browser — skipping prerender:", e.message);
    server.close();
    return;
  }

  let done = 0;
  for (const route of routes) {
    const page = await browser.newPage();
    try {
      await page.goto(`http://localhost:${PORT}${route}`, {
        waitUntil: "networkidle0",
        timeout: 30000,
      });
      // Wait until the app has rendered content into #root.
      await page
        .waitForFunction(
          () => document.getElementById("root") && document.getElementById("root").children.length > 0,
          { timeout: 15000 },
        )
        .catch(() => {});
      const html = "<!DOCTYPE html>\n" + (await page.content()).replace(/^<!DOCTYPE[^>]*>/i, "").trimStart();
      const outDir = route === "/" ? DIST : join(DIST, route);
      mkdirSync(outDir, { recursive: true });
      writeFileSync(join(outDir, "index.html"), html, "utf8");
      done += 1;
    } catch (e) {
      console.warn(`[prerender] failed for ${route}: ${e.message}`);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  server.close();
  console.log(`[prerender] wrote ${done}/${routes.length} routes.`);
}

main().catch((e) => {
  // Never fail the build because of prerendering.
  console.warn("[prerender] skipped due to error:", e.message);
});
