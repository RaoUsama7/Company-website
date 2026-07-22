// Build-time sitemap generator.
// Extracts every static route from src/App.tsx and writes public/sitemap.xml.
// Wired into `npm run build` so the sitemap stays in sync with the routes.
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const SITE_URL = "https://techtrailblazerstribe.com";

const app = readFileSync(join(ROOT, "src", "App.tsx"), "utf8");

// Collect route paths, dropping the catch-all ("*") and dynamic (":param") ones.
const paths = Array.from(app.matchAll(/path="([^"]+)"/g))
  .map((m) => m[1])
  .filter((p) => p !== "*" && !p.includes(":"));

const unique = Array.from(new Set(paths)).sort();

const priority = (p) => {
  if (p === "/") return "1.0";
  if (["/privacy-policy", "/terms-of-service", "/cookies-policy"].includes(p)) return "0.3";
  if (p.startsWith("/case-study/")) return "0.7";
  return "0.8";
};

const changefreq = (p) => (p === "/" || p === "/trail-stories" ? "weekly" : "monthly");

const lastmod = new Date().toISOString().split("T")[0];

const body = unique
  .map((p) => {
    const loc = `${SITE_URL}${p === "/" ? "/" : p}`;
    return [
      "  <url>",
      `    <loc>${loc}</loc>`,
      `    <lastmod>${lastmod}</lastmod>`,
      `    <changefreq>${changefreq(p)}</changefreq>`,
      `    <priority>${priority(p)}</priority>`,
      "  </url>",
    ].join("\n");
  })
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;

writeFileSync(join(ROOT, "public", "sitemap.xml"), xml, "utf8");
console.log(`sitemap.xml written with ${unique.length} URLs`);
