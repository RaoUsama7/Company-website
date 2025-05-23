import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const advantages = [
  {
    title: "Elite, Invested Team",
    description:
      "A compact, elite team that's as invested in your vision as you are.",
    icon: "🦅",
    delay: 0,
  },
  {
    title: "Clarity Over Complexity",
    description: "We bring clarity where others bring code.",
    icon: "💎",
    delay: 100,
  },
  {
    title: "Bold When It Matters",
    description:
      "We're precise when it counts, bold when it matters, and honest always.",
    icon: "⚡",
    delay: 200,
  },
  {
    title: "Partners, Not Vendors",
    description: "We're not just builders — we're partners in your journey.",
    icon: "🤝",
    delay: 300,
  },
];

const WhyChooseUs = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll(".advantage-card");
    cards.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      cards.forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section
      id="why-choose-us"
      className="py-24 bg-gradient-to-b from-white to-earth-100"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-tribe-blue/10 text-tribe-blue px-4 py-1.5 rounded-full text-sm font-medium mb-3">
            Trailblazers, Not Followers
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight mb-4">
            Why the Bold <span className="text-tribe-blue">Choose TTT</span>
          </h2>
          <p className="text-lg text-earth-600 max-w-2xl mx-auto">
            You've got options. So why choose us? Because we're not just
            builders — we're partners. We bring clarity where others bring code.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={advantage.title}
              className={cn(
                "advantage-card opacity-0",
                "transition-all duration-500"
              )}
              style={{ transitionDelay: `${advantage.delay}ms` }}
            >
              <div className="advantage-icon bg-tribe-blue/20">
                <span className="text-3xl">{advantage.icon}</span>
              </div>
              <h3 className="text-xl font-display font-semibold mb-2 text-tribe-blue">
                {advantage.title}
              </h3>
              <p className="text-earth-600">{advantage.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center p-8 rounded-xl bg-tribe-blue/5 border border-tribe-blue/20">
            <p className="text-xl font-display font-medium text-earth-900">
              <span className="text-tribe-blue font-semibold">
                Built Different.
              </span>{" "}
              For a Reason.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
