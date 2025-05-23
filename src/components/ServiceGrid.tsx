import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const serviceCategories = [
  {
    name: "Digital Products",
    services: [
      {
        title: "Apps That Move",
        description:
          "Native and cross-platform mobile applications that move with your users, wherever they go.",
        icon: "📱",
        color: "bg-tribe-blue/10 text-tribe-blue",
        link: "/services/apps-that-move",
      },
      {
        title: "Web, but Built to Work",
        description:
          "Resilient, responsive web applications that perform as good as they look.",
        icon: "🌐",
        color: "bg-tribe-purple/10 text-tribe-blue",
        link: "/services/web-built-to-work",
      },
      {
        title: "Games with Soul",
        description:
          "Gaming experiences that go beyond mechanics and visuals to create meaningful connections.",
        icon: "🎮",
        color: "bg-tribe-green/10 text-tribe-green",
        link: "/services/games-with-soul",
      },
    ],
  },
  {
    name: "Expertise Areas",
    services: [
      {
        title: "Your Wild Ideas, Engineered",
        description:
          "Custom solutions that bring your boldest concepts to life with precision and creativity.",
        icon: "💡",
        color: "bg-tribe-blue/10 text-tribe-blue",
        link: "/services/custom-solutions",
      },
      {
        title: "Design that Clicks",
        description:
          "Interfaces that speak to people—not at them, creating digital experiences that feel natural.",
        icon: "🎨",
        color: "bg-tribe-orange/10 text-tribe-orange",
        link: "/services/design-that-clicks",
      },
      {
        title: "Code That Floats",
        description:
          "Cloud solutions that scale with your ambitions, keeping your operations flexible and resilient.",
        icon: "☁️",
        color: "bg-tribe-blue/10 text-tribe-blue",
        link: "/services/code-that-floats",
      },
    ],
  },
  {
    name: "Specialized Services",
    services: [
      {
        title: "Ideas, Tested. MVPs, Launched.",
        description:
          "MVPs and POCs that help you validate ideas quickly and iterate with confidence.",
        icon: "🚀",
        color: "bg-tribe-orange/10 text-tribe-orange",
        link: "/services/mvp-development",
      },
      {
        title: "Guardians of Your Digital Frontier",
        description:
          "Cybersecurity solutions that protect your assets and give you peace of mind.",
        icon: "🛡️",
        color: "bg-tribe-purple/10 text-tribe-blue",
        link: "/services/cybersecurity",
      },
      {
        title: "Shops That Sell. Systems That Scale.",
        description:
          "E-commerce platforms that deliver exceptional shopping experiences and back-end efficiency.",
        icon: "🛒",
        color: "bg-tribe-green/10 text-tribe-green",
        link: "/services/e-commerce",
      },
    ],
  },
];

const ServiceGrid = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="service-grid" className="py-24 bg-earth-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-tribe-blue/10 text-tribe-blue px-4 py-1.5 rounded-full text-sm font-medium mb-3">
            What We Build
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight mb-4">
            Your Dream, <span className="text-tribe-blue">Engineered</span>
          </h2>
          <p className="text-lg text-earth-600 max-w-2xl mx-auto">
            We don't just build software—we craft digital experiences that solve
            real problems and create lasting impact.
          </p>
        </div>

        {serviceCategories.map((category, categoryIndex) => (
          <div key={category.name} className="mb-16 last:mb-0">
            <h3 className="text-2xl font-display font-semibold mb-8 border-l-4 border-tribe-blue pl-4">
              {category.name}
            </h3>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
            >
              {category.services.map((service, index) => (
                <motion.div
                  key={service.title}
                  className="service-card group"
                  variants={item}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                >
                  <div className={cn("service-icon bg-tribe-blue/20")}>
                    <span className="text-2xl">{service.icon}</span>
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-tribe-blue transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-earth-600 mb-4">{service.description}</p>
                  <a
                    href={service.link}
                    className="inline-flex items-center text-tribe-blue hover:underline"
                  >
                    Learn more <ArrowRight className="ml-1 h-3 w-3" />
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}

        <div className="text-center mt-16">
          <div className="inline-block p-8 rounded-xl bg-white shadow-sm">
            <h3 className="text-2xl font-display font-semibold mb-4">
              Need Something Custom?
            </h3>
            <p className="text-earth-600 mb-6 max-w-xl mx-auto">
              Don't see exactly what you're looking for? Our tribe specializes
              in crafting custom solutions for unique challenges.
            </p>
            <Button className="bg-tribe-blue hover:bg-tribe-blue/90">
              Let's Talk About Your Needs
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;
