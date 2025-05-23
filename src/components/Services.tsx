import React from "react";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Your Wild Ideas, Engineered",
    description:
      "Custom solutions that bring your boldest concepts to life with precision and creativity.",
    icon: "💡",
    color: "bg-tribe-blue/10 text-tribe-blue",
  },
  {
    title: "Ideas, Tested. MVPs, Launched.",
    description:
      "MVPs and POCs that help you validate ideas quickly and iterate with confidence.",
    icon: "🚀",
    color: "bg-tribe-orange/10 text-tribe-orange",
  },
  {
    title: "Sky-Level Infrastructure. Grounded in Scale.",
    description:
      "Cloud solutions that scale with your needs, keeping your operations flexible and resilient.",
    icon: "☁️",
    color: "bg-tribe-blue/10 text-tribe-blue",
  },
  {
    title: "Guardians of Your Digital Frontier",
    description:
      "Cybersecurity solutions that protect your assets and give you peace of mind.",
    icon: "🛡️",
    color: "bg-tribe-purple/10 text-tribe-blue",
  },
  {
    title: "Shops That Sell. Systems That Scale.",
    description:
      "E-commerce platforms that deliver exceptional shopping experiences and back-end efficiency.",
    icon: "🛒",
    color: "bg-tribe-green/10 text-tribe-green",
  },
  {
    title: "Tech Therapy, the Good Kind",
    description:
      "Consultation that brings clarity to your technology challenges and opportunities.",
    icon: "🧠",
    color: "bg-tribe-orange/10 text-tribe-orange",
  },
  {
    title: "Apps That Move",
    description:
      "Native and cross-platform mobile applications that move with your users, wherever they go.",
    icon: "📱",
    color: "bg-tribe-blue/10 text-tribe-blue",
  },
  {
    title: "Web, but Built to Work",
    description:
      "Resilient, responsive web applications that perform as good as they look.",
    icon: "🌐",
    color: "bg-tribe-purple/10 text-tribe-blue",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-earth-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-tribe-blue/10 text-tribe-blue px-4 py-1.5 rounded-full text-sm font-medium mb-3">
            Our Craft
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight mb-4">
            Your Dream, <span className="text-tribe-blue">Engineered</span>
          </h2>
          <p className="text-lg text-earth-600 max-w-2xl mx-auto">
            We don't just build software—we craft digital experiences that solve
            real problems and create lasting impact. Each service is delivered
            with the TTT blend of precision and personality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={service.title} className="service-card group">
              <div className={cn("service-icon bg-tribe-blue/20")}>
                <span className="text-2xl">{service.icon}</span>
              </div>
              <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-tribe-blue transition-colors">
                {service.title}
              </h3>
              <p className="text-earth-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
