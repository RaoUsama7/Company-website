import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-earth-900 via-earth-800 to-earth-900 text-white">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-tribe-blue/80 blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-20 w-80 h-80 rounded-full bg-tribe-blue/10 blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 rounded-full bg-tribe-blue/50 blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={cn(
              "mb-4 transition-all duration-700 opacity-0 -translate-y-4",
              isVisible && "opacity-100 translate-y-0"
            )}
          >
            <span className="inline-block bg-tribe-blue/20 text-tribe-blue px-4 py-1.5 rounded-full text-sm font-medium">
              Welcome to the Tribe
            </span>
          </div>

          <h1
            className={cn(
              "text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-6 transition-all duration-700 delay-300 opacity-0 -translate-y-4",
              isVisible && "opacity-100 translate-y-0"
            )}
          >
            <span className="inline-block">Building What Matters.</span>
            <br />
            <span className="text-tribe-blue inline-block">
              For Those Who Dare.
            </span>
          </h1>

          <p
            className={cn(
              "text-lg md:text-xl max-w-2xl mx-auto text-gray-300 mb-10 transition-all duration-700 delay-500 opacity-0 -translate-y-4",
              isVisible && "opacity-100 translate-y-0"
            )}
          >
            We're not just coders. We're a tribe of passionate tech builders who
            blend strategy with soul, precision with playfulness, to create
            solutions that truly matter.
          </p>

          <div
            className={cn(
              "flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-700 opacity-0 -translate-y-4",
              isVisible && "opacity-100 translate-y-0"
            )}
          >
            <Button
              size="lg"
              className="bg-tribe-blue hover:bg-tribe-blue/90 text-white"
            >
              Explore Our Craft
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 hover:bg-white/10 text-black hover:text-white"
            >
              See Our Trailmarks
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="h-14 w-8 rounded-full border-2 border-white/30 flex items-start justify-center p-1">
          <div className="h-2 w-2 bg-white rounded-full mt-2"></div>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
