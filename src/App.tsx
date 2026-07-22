import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import Seo from "@/components/Seo";
import Analytics from "@/components/Analytics";
import Index from "./pages/Index";

// Every non-home route is code-split into its own chunk so the initial bundle
// stays small. Prerendering still captures full content (the headless browser
// waits for these chunks to load).
const NotFound = lazy(() => import("./pages/NotFound"));
const ServiceDetails = lazy(() => import("./pages/ServiceDetails"));
const TheTribe = lazy(() => import("./pages/TheTribe"));
const TrailStoriesPage = lazy(() => import("./pages/TrailStoriesPage"));
const WhatWeBuild = lazy(() => import("./pages/WhatWeBuild"));
const AppsThatMove = lazy(() => import("./pages/AppsThatMove"));
const WebBuiltToWork = lazy(() => import("./pages/WebBuiltToWork"));
const DesignThatClicks = lazy(() => import("./pages/DesignThatClicks"));
const GamesWithSoul = lazy(() => import("./pages/GamesWithSoul"));
const CodeThatFloats = lazy(() => import("./pages/CodeThatFloats"));
const CustomSolutions = lazy(() => import("./pages/CustomSolutions"));
const MvpDevelopment = lazy(() => import("./pages/MvpDevelopment"));
const Cybersecurity = lazy(() => import("./pages/Cybersecurity"));
const ECommerce = lazy(() => import("./pages/ECommerce"));
const Careers = lazy(() => import("./pages/Careers"));
const ContactPage = lazy(() => import("./pages/Contact"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const CookiesPolicy = lazy(() => import("./pages/CookiesPolicy"));
const CaseStudyHarmoniq = lazy(() => import("./pages/CaseStudyHarmoniq"));
const CaseStudyLivelyPencil = lazy(() => import("./pages/CaseStudyLivelyPencil"));
const CaseStudyLittleDreams = lazy(() => import("./pages/CaseStudyLittleDreams"));
const CaseStudyLittleLingo = lazy(() => import("./pages/CaseStudyLittleLingo"));
const CaseStudySnapPick = lazy(() => import("./pages/CaseStudySnapPick"));
const CaseStudyCalmQuest = lazy(() => import("./pages/CaseStudyCalmQuest"));
const CaseStudyDivineDuelists = lazy(() => import("./pages/CaseStudyDivineDuelists"));
const CaseStudyIceCreamRoll = lazy(() => import("./pages/CaseStudyIceCreamRoll"));
const CaseStudyPerfectOrganizing = lazy(() => import("./pages/CaseStudyPerfectOrganizing"));
const CaseStudyCaloriesCounter = lazy(() => import("./pages/CaseStudyCaloriesCounter"));
const CaseStudyLatteDelivery = lazy(() => import("./pages/CaseStudyLatteDelivery"));
const CaseStudyTalkieTotz = lazy(() => import("./pages/CaseStudyTalkieTotz"));
const CaseStudyTeam2Challenge = lazy(() => import("./pages/CaseStudyTeam2Challenge"));
const CaseStudyVenlushop = lazy(() => import("./pages/CaseStudyVenlushop"));
const CaseStudyLumeReader = lazy(() => import("./pages/CaseStudyLumeReader"));
const CaseStudyDani = lazy(() => import("./pages/CaseStudyDani"));
const CaseStudyRenee = lazy(() => import("./pages/CaseStudyRenee"));
const CaseStudyRentigo = lazy(() => import("./pages/CaseStudyRentigo"));
const CaseStudyFundreef = lazy(() => import("./pages/CaseStudyFundreef"));
const CaseStudyFreecer = lazy(() => import("./pages/CaseStudyFreecer"));
const CaseStudyExre = lazy(() => import("./pages/CaseStudyExre"));
const CaseStudyAvenir = lazy(() => import("./pages/CaseStudyAvenir"));
const CaseStudyT2CWeb = lazy(() => import("./pages/CaseStudyT2CWeb"));
const CaseStudyT2CDesign = lazy(() => import("./pages/CaseStudyT2CDesign"));
const CaseStudyHarmoniqDesign = lazy(() => import("./pages/CaseStudyHarmoniqDesign"));
const CaseStudySplitTripDesign = lazy(() => import("./pages/CaseStudySplitTripDesign"));
const CaseStudyTalkieTotzDesign = lazy(() => import("./pages/CaseStudyTalkieTotzDesign"));
const CaseStudyMasslos = lazy(() => import("./pages/CaseStudyMasslos"));
const CaseStudyRingba = lazy(() => import("./pages/CaseStudyRingba"));
const CaseStudyThumbnailAI = lazy(() => import("./pages/CaseStudyThumbnailAI"));
const CaseStudyNeolohnDesign = lazy(() => import("./pages/CaseStudyNeolohnDesign"));
const CaseStudyNexiunApp = lazy(() => import("./pages/CaseStudyNexiunApp"));
const CaseStudySpotifyToApple = lazy(() => import("./pages/CaseStudySpotifyToApple"));

const RouteFallback = () => (
  <div className="flex min-h-screen items-center justify-center bg-earth-50">
    <div className="h-10 w-10 animate-spin rounded-full border-2 border-tribe-blue/30 border-t-tribe-blue" />
  </div>
);

const queryClient = new QueryClient();

const AppRoutes = () => {
  useScrollToTop();

  return (
    <Suspense fallback={<RouteFallback />}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/the-tribe" element={<TheTribe />} />
        <Route path="/what-we-build" element={<WhatWeBuild />} />
        <Route path="/trail-stories" element={<TrailStoriesPage />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/cookies-policy" element={<CookiesPolicy />} />
        <Route path="/services/:serviceId" element={<ServiceDetails />} />
        <Route path="/services/apps-that-move" element={<AppsThatMove />} />
        <Route path="/services/web-built-to-work" element={<WebBuiltToWork />} />
        <Route path="/services/design-that-clicks" element={<DesignThatClicks />} />
        <Route path="/services/games-with-soul" element={<GamesWithSoul />} />
        <Route path="/services/code-that-floats" element={<CodeThatFloats />} />
        <Route path="/services/custom-solutions" element={<CustomSolutions />} />
        <Route path="/services/mvp-development" element={<MvpDevelopment />} />
        <Route path="/services/cybersecurity" element={<Cybersecurity />} />
        <Route path="/services/e-commerce" element={<ECommerce />} />
        <Route path="/case-study/harmoniq" element={<CaseStudyHarmoniq />} />
        <Route path="/case-study/lively-pencil" element={<CaseStudyLivelyPencil />} />
        <Route path="/case-study/little-dreams" element={<CaseStudyLittleDreams />} />
        <Route path="/case-study/little-lingo" element={<CaseStudyLittleLingo />} />
        <Route path="/case-study/snappick" element={<CaseStudySnapPick />} />
        <Route path="/case-study/calm-quest" element={<CaseStudyCalmQuest />} />
        <Route path="/case-study/divine-duelists" element={<CaseStudyDivineDuelists />} />
        <Route path="/case-study/ice-cream-roll" element={<CaseStudyIceCreamRoll />} />
        <Route path="/case-study/perfect-organizing" element={<CaseStudyPerfectOrganizing />} />
        <Route path="/case-study/calories-counter" element={<CaseStudyCaloriesCounter />} />
        <Route path="/case-study/latte-delivery" element={<CaseStudyLatteDelivery />} />
        <Route path="/case-study/talkie-totz" element={<CaseStudyTalkieTotz />} />
        <Route path="/case-study/team2challenge" element={<CaseStudyTeam2Challenge />} />
        <Route path="/case-study/venlushop" element={<CaseStudyVenlushop />} />
        <Route path="/case-study/lume-reader" element={<CaseStudyLumeReader />} />
        <Route path="/case-study/dani" element={<CaseStudyDani />} />
        <Route path="/case-study/renee" element={<CaseStudyRenee />} />
        <Route path="/case-study/team2challenge-design" element={<CaseStudyT2CDesign />} />
        <Route path="/case-study/harmoniq-design" element={<CaseStudyHarmoniqDesign />} />
        <Route path="/case-study/split-trip-design" element={<CaseStudySplitTripDesign />} />
        <Route path="/case-study/talkietotz-design" element={<CaseStudyTalkieTotzDesign />} />
        <Route path="/case-study/rentigo" element={<CaseStudyRentigo />} />
        <Route path="/case-study/fundreef" element={<CaseStudyFundreef />} />
        <Route path="/case-study/freecer" element={<CaseStudyFreecer />} />
        <Route path="/case-study/exre" element={<CaseStudyExre />} />
        <Route path="/case-study/avenir" element={<CaseStudyAvenir />} />
        <Route path="/case-study/team2challenge-web" element={<CaseStudyT2CWeb />} />
        <Route path="/case-study/masslos" element={<CaseStudyMasslos />} />
        <Route path="/case-study/ringba-dashboard" element={<CaseStudyRingba />} />
        <Route path="/case-study/thumbnail-ai" element={<CaseStudyThumbnailAI />} />
        <Route path="/case-study/neolohn-design" element={<CaseStudyNeolohnDesign />} />
        <Route path="/case-study/nexiun-app" element={<CaseStudyNexiunApp />} />
        <Route path="/case-study/spotify-to-apple-music" element={<CaseStudySpotifyToApple />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Seo />
        <Analytics />
        <AppRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
