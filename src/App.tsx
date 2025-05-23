
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import Careers from "./pages/Careers";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/the-tribe" element={<TheTribe />} />
          <Route path="/what-we-build" element={<WhatWeBuild />} />
          <Route path="/trail-stories" element={<TrailStoriesPage />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/services/:serviceId" element={<ServiceDetails />} />
          <Route path="/services/apps-that-move" element={<AppsThatMove />} />
          <Route path="/services/web-built-to-work" element={<WebBuiltToWork />} />
          <Route path="/services/design-that-clicks" element={<DesignThatClicks />} />
          <Route path="/services/games-with-soul" element={<GamesWithSoul />} />
          <Route path="/services/code-that-floats" element={<CodeThatFloats />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
