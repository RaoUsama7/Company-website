import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ServiceDetails from "./pages/ServiceDetails";
import TheTribe from "./pages/TheTribe";
import TrailStoriesPage from "./pages/TrailStoriesPage";
import WhatWeBuild from "./pages/WhatWeBuild";
import AppsThatMove from "./pages/AppsThatMove";
import WebBuiltToWork from "./pages/WebBuiltToWork";
import DesignThatClicks from "./pages/DesignThatClicks";
import GamesWithSoul from "./pages/GamesWithSoul";
import CodeThatFloats from "./pages/CodeThatFloats";
import CustomSolutions from "./pages/CustomSolutions";
import MvpDevelopment from "./pages/MvpDevelopment";
import Cybersecurity from "./pages/Cybersecurity";
import ECommerce from "./pages/ECommerce";
import Careers from "./pages/Careers";
import ContactPage from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiesPolicy from "./pages/CookiesPolicy";
import CaseStudyHarmoniq from "./pages/CaseStudyHarmoniq";
import CaseStudyLivelyPencil from "./pages/CaseStudyLivelyPencil";
import CaseStudyLittleDreams from "./pages/CaseStudyLittleDreams";
import CaseStudyLittleLingo from "./pages/CaseStudyLittleLingo";
import CaseStudySnapPick from "./pages/CaseStudySnapPick";
import CaseStudyCalmQuest from "./pages/CaseStudyCalmQuest";
import CaseStudyDivineDuelists from "./pages/CaseStudyDivineDuelists";
import CaseStudyIceCreamRoll from "./pages/CaseStudyIceCreamRoll";
import CaseStudyPerfectOrganizing from "./pages/CaseStudyPerfectOrganizing";

const queryClient = new QueryClient();

const AppRoutes = () => {
  useScrollToTop();
  
  return (
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
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
