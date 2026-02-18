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
import CaseStudyCaloriesCounter from "./pages/CaseStudyCaloriesCounter";
import CaseStudyLatteDelivery from "./pages/CaseStudyLatteDelivery";
import CaseStudyTalkieTotz from "./pages/CaseStudyTalkieTotz";
import CaseStudyTeam2Challenge from "./pages/CaseStudyTeam2Challenge";
import CaseStudyVenlushop from "./pages/CaseStudyVenlushop";
import CaseStudyLumeReader from "./pages/CaseStudyLumeReader";
import CaseStudyDani from "./pages/CaseStudyDani";
import CaseStudyRenee from "./pages/CaseStudyRenee";
import CaseStudyRentigo from "./pages/CaseStudyRentigo";
import CaseStudyFundreef from "./pages/CaseStudyFundreef";
import CaseStudyFreecer from "./pages/CaseStudyFreecer";
import CaseStudyExre from "./pages/CaseStudyExre";
import CaseStudyAvenir from "./pages/CaseStudyAvenir";
import CaseStudyT2CWeb from "./pages/CaseStudyT2CWeb";
import CaseStudyT2CDesign from "./pages/CaseStudyT2CDesign";
import CaseStudyHarmoniqDesign from "./pages/CaseStudyHarmoniqDesign";
import CaseStudyNexiunDesign from "./pages/CaseStudyNexiunDesign";
import CaseStudySplitTripDesign from "./pages/CaseStudySplitTripDesign";
import CaseStudyTalkieTotzDesign from "./pages/CaseStudyTalkieTotzDesign";








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
      <Route path="/case-study/nexiun-design" element={<CaseStudyNexiunDesign />} />
      <Route path="/case-study/split-trip-design" element={<CaseStudySplitTripDesign />} />
      <Route path="/case-study/talkietotz-design" element={<CaseStudyTalkieTotzDesign />} />
      <Route path="/case-study/rentigo" element={<CaseStudyRentigo />} />
      <Route path="/case-study/fundreef" element={<CaseStudyFundreef />} />
      <Route path="/case-study/freecer" element={<CaseStudyFreecer />} />
      <Route path="/case-study/exre" element={<CaseStudyExre />} />
      <Route path="/case-study/avenir" element={<CaseStudyAvenir />} />
      <Route path="/case-study/team2challenge-web" element={<CaseStudyT2CWeb />} />







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
