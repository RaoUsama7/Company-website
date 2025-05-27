import React from "react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-tribe-blue/10 text-tribe-blue px-4 py-1.5 rounded-full text-sm font-medium mb-3">
              The Tribe
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight mb-6">
              Meet the Builders
            </h2>
            <p className="text-lg text-earth-600 mb-6">
              We're not your average tech agency. TTT is a collective of
              passionate technologists, designers, and strategists who believe
              in building technology with purpose and personality.
            </p>
            <p className="text-lg text-earth-600 mb-6">
              Founded in the belief that technology should be both powerful and
              approachable, our tribe brings together diverse perspectives,
              unconventional thinking, and deep expertise—blending precision
              with playfulness, strategy with soul.
            </p>
            <p className="text-lg text-earth-600 mb-8">
              Whether you're a startup looking to disrupt or an established
              brand seeking reinvention, we're the tribe that builds what
              matters—for those who dare to dream big.
            </p>
            <div className="flex flex-wrap gap-4">
              {/* <Button className="bg-tribe-blue hover:bg-tribe-blue/90 text-white">
                Our Values
              </Button> */}
              <Button 
                variant="outline" 
                onClick={() => window.location.href = '/contact'}
              >
                Join the Tribe
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-earth-200 rounded-xl h-64 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-tribe-blue/20 to-tribe-blue/20 flex items-center justify-center">
                    <span className="text-5xl">👾</span>
                  </div>
                </div>
                <div className="bg-earth-200 rounded-xl h-40 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-tribe-green/20 to-tribe-blue/20 flex items-center justify-center">
                    <span className="text-5xl">🚀</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-earth-200 rounded-xl h-40 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-tribe-orange/20 to-tribe-blue/20 flex items-center justify-center">
                    <span className="text-5xl">🔥</span>
                  </div>
                </div>
                <div className="bg-earth-200 rounded-xl h-64 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-tribe-blue/20 to-tribe-orange/20 flex items-center justify-center">
                    <span className="text-5xl">🧠</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-tribe-blue/20 flex items-center justify-center text-white text-xl">
              🏕️
            </div>
            <div className="absolute -bottom-6 -right-6 w-12 h-12 rounded-full bg-tribe-orange flex items-center justify-center text-white text-xl">
              🔥
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
