import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Env-driven analytics + Search Console verification.
 *
 * Nothing is hardcoded — set these in Vercel (and .env locally):
 *   VITE_GA_MEASUREMENT_ID  — GA4 id, e.g. "G-XXXXXXXXXX" (empty = GA disabled)
 *   VITE_GSC_VERIFICATION   — google-site-verification token (empty = skipped)
 *
 * The verification <meta> is injected client-side and baked into every route's
 * static HTML by the prerender step, so Google sees it on the homepage.
 */
const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;
const GSC_TOKEN = import.meta.env.VITE_GSC_VERIFICATION as string | undefined;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

let gaInitialized = false;

function initGA(id: string): void {
  if (gaInitialized || document.getElementById("ga4-script")) return;
  const script = document.createElement("script");
  script.id = "ga4-script";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  };
  window.gtag("js", new Date());
  // Page views are sent manually on route change (SPA).
  window.gtag("config", id, { send_page_view: false });
  gaInitialized = true;
}

function upsertVerification(token: string): void {
  let el = document.head.querySelector<HTMLMetaElement>(
    'meta[name="google-site-verification"]',
  );
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", "google-site-verification");
    document.head.appendChild(el);
  }
  el.setAttribute("content", token);
}

export default function Analytics() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    if (GSC_TOKEN) upsertVerification(GSC_TOKEN);
    if (GA_ID) initGA(GA_ID);
  }, []);

  useEffect(() => {
    if (GA_ID && window.gtag) {
      window.gtag("event", "page_view", { page_path: pathname + search });
    }
  }, [pathname, search]);

  return null;
}
