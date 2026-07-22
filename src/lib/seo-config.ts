// Centralized SEO configuration for every route.
// A single <Seo/> component (src/components/Seo.tsx) reads the current pathname
// and renders the matching <title>, meta, canonical, Open Graph, Twitter, and
// JSON-LD tags — so we get per-page SEO without editing all 50 page files.

export const SITE = {
  url: "https://techtrailblazerstribe.com",
  name: "Tech Trailblazers Tribe",
  defaultTitle: "Tech Trailblazers Tribe | Building What Matters",
  description:
    "Tech Trailblazers Tribe builds web, mobile, AI, and game products with soul and strategy for businesses that want to make an impact.",
  // NOTE: the logo filename contains a space; percent-encoded so scrapers accept it.
  ogImage: "https://techtrailblazerstribe.com/LOGO%203.png",
  logo: "https://techtrailblazerstribe.com/LOGO%203.png",
  socials: [
    "https://www.facebook.com/Tech.tribee",
    "https://www.linkedin.com/company/t-t-t",
    "https://www.instagram.com/the.tech.tribe/",
  ],
} as const;

export interface ResolvedSeo {
  title: string;
  description: string;
  canonical: string;
  ogImage: string;
  type: "website" | "article";
  noindex: boolean;
  jsonLd: Record<string, unknown>[];
}

interface PageMeta {
  title: string;
  description: string;
}

interface CaseStudyMeta {
  slug: string;
  title: string;
  description: string;
  category: string;
}

// ---- Main, service and legal pages (path -> meta) ----------------------------

const PAGES: Record<string, PageMeta> = {
  "/": {
    title: SITE.defaultTitle,
    description: SITE.description,
  },
  "/the-tribe": {
    title: "About Us — The Tribe | Tech Trailblazers Tribe",
    description:
      "Meet Tech Trailblazers Tribe — the team building web, mobile, AI, and game products with soul and strategy for businesses that dare to make an impact.",
  },
  "/what-we-build": {
    title: "What We Build — Services | Tech Trailblazers Tribe",
    description:
      "Web apps, mobile apps, AI products, games, e-commerce, and custom software — explore the full range of what Tech Trailblazers Tribe designs and builds.",
  },
  "/trail-stories": {
    title: "Trail Stories — Case Studies & Portfolio | Tech Trailblazers Tribe",
    description:
      "Explore our portfolio of 30+ shipped products across web, mobile, AI, games, e-commerce, and UI/UX design — real projects with measurable results.",
  },
  "/careers": {
    title: "Careers — Join the Tribe | Tech Trailblazers Tribe",
    description:
      "Join Tech Trailblazers Tribe. Explore open roles and help us build technology with soul and strategy for ambitious businesses worldwide.",
  },
  "/contact": {
    title: "Contact Us | Tech Trailblazers Tribe",
    description:
      "Get in touch with Tech Trailblazers Tribe to start your web, mobile, AI, or game project. Let's build what matters, together.",
  },
  "/privacy-policy": {
    title: "Privacy Policy | Tech Trailblazers Tribe",
    description:
      "Read the Tech Trailblazers Tribe privacy policy to understand how we collect, use, and protect your personal information.",
  },
  "/terms-of-service": {
    title: "Terms of Service | Tech Trailblazers Tribe",
    description:
      "Review the terms of service governing your use of the Tech Trailblazers Tribe website and services.",
  },
  "/cookies-policy": {
    title: "Cookies Policy | Tech Trailblazers Tribe",
    description:
      "Learn how Tech Trailblazers Tribe uses cookies and similar technologies on our website.",
  },
  // Service pages
  "/services/apps-that-move": {
    title: "Mobile App Development — Apps That Move | Tech Trailblazers Tribe",
    description:
      "Native and cross-platform mobile app development (React Native, Flutter) — from MVP to scalable, production-ready apps for iOS and Android.",
  },
  "/services/web-built-to-work": {
    title: "Web Development — Web Built to Work | Tech Trailblazers Tribe",
    description:
      "High-performance web apps and websites built with Next.js, React, and modern stacks — fast, scalable, SEO-ready, and conversion-focused.",
  },
  "/services/design-that-clicks": {
    title: "UI/UX Design — Design That Clicks | Tech Trailblazers Tribe",
    description:
      "Product-focused UI/UX design and design systems in Figma — interfaces that are beautiful, usable, and built to convert.",
  },
  "/services/games-with-soul": {
    title: "Game Development — Games With Soul | Tech Trailblazers Tribe",
    description:
      "Mobile and casual game development with Unity and modern engines — engaging, polished games from concept to launch.",
  },
  "/services/code-that-floats": {
    title: "Cloud & DevOps — Code That Floats | Tech Trailblazers Tribe",
    description:
      "Cloud architecture, DevOps, and scalable infrastructure — reliable, secure, and cost-efficient deployments built to grow with you.",
  },
  "/services/custom-solutions": {
    title: "Custom Software Solutions | Tech Trailblazers Tribe",
    description:
      "Bespoke software tailored to your business — custom platforms, integrations, and tools built to solve your specific challenges.",
  },
  "/services/mvp-development": {
    title: "MVP Development | Tech Trailblazers Tribe",
    description:
      "Turn your idea into a market-ready MVP fast — validated, scalable, and built to attract users and investors.",
  },
  "/services/cybersecurity": {
    title: "Cybersecurity Services | Tech Trailblazers Tribe",
    description:
      "Security audits, code reviews, and hardening — protect your product and data with Tech Trailblazers Tribe's cybersecurity expertise.",
  },
  "/services/e-commerce": {
    title: "E-Commerce Development — Shopify & More | Tech Trailblazers Tribe",
    description:
      "Custom Shopify and headless e-commerce storefronts — high-performance, conversion-focused online stores built to scale globally.",
  },
};

// ---- Case studies (path is /case-study/<slug>) -------------------------------

const CASE_STUDIES: CaseStudyMeta[] = [
  { slug: "team2challenge-design", title: "Team2Challenge (Design)", category: "Design", description: "A dynamic sports team management platform designed to streamline match scheduling, team coordination, and player communication." },
  { slug: "harmoniq-design", title: "Harmoniq (Design)", category: "Design", description: "A sleek, immersive music app interface that blends streaming with social engagement, featuring a bold dark theme and vibrant accents." },
  { slug: "split-trip-design", title: "Split-Trip (Design)", category: "Design", description: "A sleek, user-centered travel app interface designed to make road trips safe, social, and efficient with real-time trip listings." },
  { slug: "talkietotz-design", title: "TalkieTotz (Design)", category: "Design", description: "A modern, child-friendly mobile app interface designed to enhance early language learning with an emphasis on clarity and warmth." },
  { slug: "harmoniq", title: "Harmoniq", category: "Mobile", description: "From Lagging App to Scalable Product: How TTT Transformed a React Native iOS App Into a Modern, Future-Proof Platform." },
  { slug: "talkie-totz", title: "TalkieTotz", category: "Mobile", description: "Launching a Lesson-Based App for Parents: From Figma to Functional MVP. A complete educational platform for bilingual families." },
  { slug: "lively-pencil", title: "Lively Pencil", category: "Mobile", description: "A Frontend Rebuild that Unlocked a Social Platform for Readers & Bloggers. Clean, scalable architecture for the literary community." },
  { slug: "little-dreams", title: "Little Dreams", category: "Mobile", description: "AI-Powered Bedtime Magic: How TTT Engineered a Personalized Storytelling App That Scales Imagination and Revenue." },
  { slug: "little-lingo", title: "Little Lingo", category: "Mobile", description: "Language Learning That Grows With Kids: How TTT Revamped a Buggy Codebase into a Vibrant, Multilingual EdTech Platform." },
  { slug: "calories-counter", title: "Calories Counter", category: "Mobile", description: "Your Smart Guide to Food & Fitness: AI-powered calorie tracking with personalized nutrition insights and recipe recommendations." },
  { slug: "latte-delivery", title: "Latte Delivery", category: "Mobile", description: "End-to-End Food Delivery Ecosystem: Complete multi-app platform with real-time tracking and seamless vendor management." },
  { slug: "snappick", title: "SnapPick", category: "Mobile", description: "Augmented Reality-Powered Warehouse Management System that revolutionizes logistics with AR-driven navigation and intelligent picking automation." },
  { slug: "calm-quest", title: "Calm Quest", category: "Game", description: "A Journey Into Digital Serenity: An immersive mobile wellness application that merges casual gaming with mindfulness and stress relief." },
  { slug: "divine-duelists", title: "Divine Duelists", category: "Game", description: "Strategy Meets Power in a Tactical Card RPG: A deep, strategic deck-building experience with evolving AI battles and card synergies." },
  { slug: "ice-cream-roll", title: "Ice Cream Roll", category: "Game", description: "A Delightful Dessert Simulation Game with engaging, visually rich gameplay that appeals to a broad audience from kids to casual players." },
  { slug: "perfect-organizing", title: "Perfect Organizing", category: "Game", description: "Calming Sorting & Puzzle Game designed for stress relief with simple yet satisfying gameplay and mindful activities." },
  { slug: "team2challenge", title: "Team2Challenge (Mobile)", category: "Mobile", description: "The T2C Platform is a comprehensive digital ecosystem built to simplify how clubs, coaches, parents, and players connect, organize, and grow together." },
  { slug: "team2challenge-web", title: "Team2Challenge (Web)", category: "Web", description: "The T2C Web Dashboard provides the administrative spine for the entire ecosystem, empowering club owners with deep analytical insights and complex management tools." },
  { slug: "venlushop", title: "VenluShop", category: "Web", description: "Anime-Inspired Global Retail: A dynamic Shopify Plus storefront bridging the gap between anime culture and high-performance activewear." },
  { slug: "lume-reader", title: "Lume Reader", category: "Mobile", description: "The Distraction-Free Reading App: A production-ready Flutter MVP solving usability gaps with a reader-first UI and offline-first sync." },
  { slug: "dani", title: "DANI by Daniel K", category: "Web", description: "Luxury Jewelry E-Commerce: A custom-built Shopify Plus storefront with internationalization and conversion-driven UI/UX." },
  { slug: "renee", title: "Renée", category: "Web", description: "AI-Powered Emotional Support: A 24/7 judgment-free therapeutic companion built with Next.js 15 and Prismic CMS for mental wellness." },
  { slug: "rentigo", title: "Rentigo", category: "Web", description: "Enterprise Property Management: A complete lifecycle PMS with multi-role access, financial automation, and portal syndication." },
  { slug: "fundreef", title: "Fundreef", category: "Web", description: "AI-Powered Fundraising: An intelligent platform matching startups with investors using Gemini AI, Meilisearch, and real-time CRM tools." },
  { slug: "freecer", title: "Freecer.at", category: "Web", description: "Premium Luxury E-commerce: A high-performance Shopify storefront with advanced SEO, global reach, and conversion-focused design." },
  { slug: "exre", title: "EXRE", category: "Web", description: "Professional Agency Platform: A multilingual, high-performance website built with Next.js and Sanity CMS for brand authority and lead generation." },
  { slug: "avenir", title: "Avenir", category: "Web", description: "Luxury Home Decor E-commerce: A premium Shopify storefront with curated collection designs, performance tuning, and high-conversion UX." },
  { slug: "masslos", title: "Masslos", category: "Web", description: "A role-based digital platform for a made-to-measure shirt business, covering measurements, guided ordering, payments, and factory-ready production PDFs." },
  { slug: "ringba-dashboard", title: "PPC Analytics Dashboard", category: "Web", description: "A real-time PPC performance and call-tracking analytics platform with live dashboards, a CPA/profitability engine, and automated Telegram alerting." },
  { slug: "nexiun-app", title: "Nexiun", category: "Mobile", description: "An AI-powered social platform merging creativity, real-time interaction, and social commerce — AI-generated profiles, themed stories, Loops, and instant shopping on iOS & Android." },
  { slug: "spotify-to-apple-music", title: "Spotify to Apple Music", category: "Web", description: "A SaaS that migrates songs and playlists from Spotify to Apple Music with ISRC-accurate matching, real-time progress tracking, and secure Stripe-powered accounts." },
  { slug: "thumbnail-ai", title: "Thumbnail AI", category: "Web", description: "An AI-powered SaaS that turns text prompts into on-brand YouTube thumbnails, with Brand DNA, surgical AI editing, and credit-based billing." },
  { slug: "neolohn-design", title: "NEOLOHN (Design)", category: "Design", description: "A minimalist, Apple-inspired HR & payroll dashboard where restraint, whitespace, and precise typography turn dense workforce data into calm, effortless clarity." },
];

const caseStudyBySlug: Record<string, CaseStudyMeta> = Object.fromEntries(
  CASE_STUDIES.map((cs) => [cs.slug, cs]),
);

// ---- JSON-LD builders --------------------------------------------------------

const shortName = (title: string): string => title.split(" | ")[0];

const organizationSchema = (): Record<string, unknown> => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  url: SITE.url,
  logo: SITE.logo,
  description: SITE.description,
  sameAs: SITE.socials,
});

const websiteSchema = (): Record<string, unknown> => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE.name,
  url: SITE.url,
});

interface Crumb {
  name: string;
  path: string;
}

const breadcrumbSchema = (crumbs: Crumb[]): Record<string, unknown> => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: crumbs.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: c.name,
    item: `${SITE.url}${c.path === "/" ? "" : c.path}`,
  })),
});

const caseStudySchema = (cs: CaseStudyMeta, canonical: string): Record<string, unknown> => ({
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: cs.title,
  headline: `${cs.title} — Case Study`,
  description: cs.description,
  url: canonical,
  genre: cs.category,
  image: SITE.ogImage,
  author: { "@type": "Organization", name: SITE.name, url: SITE.url },
  publisher: { "@type": "Organization", name: SITE.name, url: SITE.url },
});

const serviceSchema = (name: string, description: string, canonical: string): Record<string, unknown> => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name,
  description,
  url: canonical,
  provider: { "@type": "Organization", name: SITE.name, url: SITE.url },
});

// ---- Resolver ----------------------------------------------------------------

const normalize = (pathname: string): string =>
  pathname !== "/" ? pathname.replace(/\/+$/, "") : "/";

const absolute = (path: string): string => `${SITE.url}${path === "/" ? "/" : path}`;

export function resolveSeo(pathname: string): ResolvedSeo {
  const path = normalize(pathname);
  const canonical = absolute(path);
  const siteWide = [organizationSchema(), websiteSchema()];

  // Known main / service / legal page
  const page = PAGES[path];
  if (page) {
    const jsonLd = [...siteWide];
    if (path.startsWith("/services/")) {
      jsonLd.push(
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "What We Build", path: "/what-we-build" },
          { name: shortName(page.title), path },
        ]),
        serviceSchema(shortName(page.title), page.description, canonical),
      );
    } else if (path !== "/") {
      jsonLd.push(
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: shortName(page.title), path },
        ]),
      );
    }
    return {
      title: page.title,
      description: page.description,
      canonical,
      ogImage: SITE.ogImage,
      type: "website",
      noindex: false,
      jsonLd,
    };
  }

  // Case study
  if (path.startsWith("/case-study/")) {
    const slug = path.slice("/case-study/".length);
    const cs = caseStudyBySlug[slug];
    if (cs) {
      return {
        title: `${cs.title} — Case Study | ${SITE.name}`,
        description: cs.description,
        canonical,
        ogImage: SITE.ogImage,
        type: "article",
        noindex: false,
        jsonLd: [
          ...siteWide,
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Trail Stories", path: "/trail-stories" },
            { name: cs.title, path },
          ]),
          caseStudySchema(cs, canonical),
        ],
      };
    }
  }

  // Unknown route -> soft 404: keep it out of the index.
  return {
    title: `Page Not Found | ${SITE.name}`,
    description: SITE.description,
    canonical,
    ogImage: SITE.ogImage,
    type: "website",
    noindex: true,
    jsonLd: siteWide,
  };
}
