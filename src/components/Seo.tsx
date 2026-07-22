import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { resolveSeo, SITE } from "@/lib/seo-config";

/**
 * Dependency-free per-page <head> manager.
 *
 * Rendered once inside <BrowserRouter>; on every navigation it imperatively
 * upserts title, description, canonical, robots, Open Graph, Twitter and
 * JSON-LD. Upserts are idempotent (keyed by selector) so React 18 StrictMode's
 * double-invocation is harmless, and a puppeteer-based prerender captures the
 * resulting head in each route's static HTML.
 */
const MANAGED = "data-seo";

function upsertMeta(attr: "name" | "property", key: string, content: string): void {
  const selector = `meta[${attr}="${key}"]`;
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    el.setAttribute(MANAGED, "");
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string): void {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    el.setAttribute(MANAGED, "");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function setJsonLd(graphs: Record<string, unknown>[]): void {
  document.head
    .querySelectorAll(`script[type="application/ld+json"][${MANAGED}]`)
    .forEach((node) => node.remove());
  for (const graph of graphs) {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute(MANAGED, "");
    script.textContent = JSON.stringify(graph);
    document.head.appendChild(script);
  }
}

export default function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo = resolveSeo(pathname);

    document.title = seo.title;
    upsertMeta("name", "description", seo.description);
    upsertMeta("name", "robots", seo.noindex ? "noindex, follow" : "index, follow");
    upsertLink("canonical", seo.canonical);

    upsertMeta("property", "og:type", seo.type);
    upsertMeta("property", "og:site_name", SITE.name);
    upsertMeta("property", "og:title", seo.title);
    upsertMeta("property", "og:description", seo.description);
    upsertMeta("property", "og:url", seo.canonical);
    upsertMeta("property", "og:image", seo.ogImage);

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", seo.title);
    upsertMeta("name", "twitter:description", seo.description);
    upsertMeta("name", "twitter:image", seo.ogImage);

    setJsonLd(seo.jsonLd);
  }, [pathname]);

  return null;
}
