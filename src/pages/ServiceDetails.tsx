import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { ArrowRight, Check, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "react-intersection-observer";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = {
  "apps-that-move": {
    title: "Apps That Move",
    subtitle: "Native and cross-platform mobile applications",
    description:
      "We craft apps that don't just sit on screens—they move with your users, wherever they go. Whether native iOS/Android or cross-platform, we build applications that feel at home on any device while solving real problems.",
    icon: "📱",
    color: "bg-tribe-blue/10 text-tribe-blue",
    features: [
      "Native iOS & Android development",
      "Cross-platform solutions (React Native, Flutter)",
      "Engaging UI with smooth animations",
      "Offline-first architecture",
      "Integration with device hardware features",
      "Push notification systems",
    ],
    tools: ["Swift", "Kotlin", "React Native", "Flutter", "Firebase"],
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.1&auto=format&fit=crop&w=800&q=60",
  },
  "web-built-to-work": {
    title: "Web, but Built to Work",
    subtitle: "Resilient, responsive web applications",
    description:
      "We build web applications that perform as good as they look. No flashy distractions—just solid, resilient products that work consistently across devices, connections, and contexts.",
    icon: "🌐",
    color: "bg-tribe-purple/10 text-tribe-blue",
    features: [
      "Progressive Web Applications (PWAs)",
      "Responsive design across all devices",
      "Performance optimization & fast loading times",
      "Accessibility compliance (WCAG)",
      "SEO-optimized architecture",
      "Cross-browser compatibility",
    ],
    tools: ["React", "Vue", "Next.js", "TypeScript", "GraphQL"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.1&auto=format&fit=crop&w=800&q=60",
  },
  "design-that-clicks": {
    title: "Design that Clicks",
    subtitle: "Intuitive user interfaces and experiences",
    description:
      "We design interfaces that speak to people—not at them. Our UX approach balances intuition with delight, creating digital experiences that feel natural, even on the first encounter.",
    icon: "🎨",
    color: "bg-tribe-orange/10 text-tribe-orange",
    features: [
      "User research & persona development",
      "Wireframing & prototyping",
      "Visual design systems",
      "Usability testing",
      "Motion & interaction design",
      "Design system implementation",
    ],
    tools: ["Figma", "Adobe XD", "Sketch", "Principle", "InVision"],
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.1&auto=format&fit=crop&w=800&q=60",
  },
  "games-with-soul": {
    title: "Games with Soul",
    subtitle: "Meaningful gaming experiences",
    description:
      "We build games that go beyond mechanics and visuals to create meaningful experiences. From casual mobile games to immersive VR adventures, we craft gaming experiences that resonate.",
    icon: "🎮",
    color: "bg-tribe-green/10 text-tribe-green",
    features: [
      "Engaging game mechanics",
      "Storytelling & narrative design",
      "Character development",
      "Cross-platform game development",
      "Monetization strategy",
      "Analytics integration",
    ],
    tools: ["Unity", "Unreal Engine", "WebGL", "PlayCanvas", "Godot"],
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.1&auto=format&fit=crop&w=800&q=60",
  },
  "code-that-floats": {
    title: "Code That Floats",
    subtitle: "Cloud solutions that scale",
    description:
      "Cloud isn't just infrastructure—it's the atmosphere where your digital ecosystem breathes and grows. We build cloud solutions that scale with your ambitions, keeping your operations both flexible and grounded.",
    icon: "☁️",
    color: "bg-tribe-blue/10 text-tribe-blue",
    features: [
      "Serverless architecture",
      "Microservices implementation",
      "Cloud migration strategies",
      "Multi-cloud deployments",
      "Auto-scaling infrastructure",
      "DevOps & CI/CD pipelines",
    ],
    tools: ["AWS", "Azure", "GCP", "Kubernetes", "Docker", "Terraform"],
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.1&auto=format&fit=crop&w=800&q=60",
  },
};

const ServiceDetailsPage = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const service = services[serviceId];

  useEffect(() => {
    if (!service) {
      navigate("/not-found");
      return;
    }

    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView, service, navigate]);

  if (!service) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Button
              variant="ghost"
              className="flex items-center text-earth-600 hover:text-earth-900"
              onClick={() => navigate("/what-we-build")}
            >
              <ChevronLeft size={16} className="mr-1" /> Back to Services
            </Button>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${service.color} mb-6`}
              >
                <span className="text-3xl">{service.icon}</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4"
              >
                {service.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-xl text-earth-600 mb-8"
              >
                {service.subtitle}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-lg text-earth-700 mb-8"
              >
                {service.description}
              </motion.p>

              <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={controls}
                className="mb-8"
              >
                <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {service.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="flex items-center gap-2"
                    >
                      <div
                        className={`w-5 h-5 rounded-full ${service.color} flex items-center justify-center shrink-0`}
                      >
                        <Check size={12} />
                      </div>
                      <span className="text-earth-600">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={controls}
              >
                <h3 className="text-xl font-semibold mb-4">
                  Tools & Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {service.tools.map((tool, index) => (
                    <motion.span
                      key={index}
                      variants={itemVariants}
                      className={`px-3 py-1 rounded-full ${service.color
                        .replace("text-", "bg-")
                        .replace("/10", "/20")} text-sm font-medium`}
                    >
                      {tool}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="mt-12"
              >
                <Button className="bg-tribe-blue hover:bg-tribe-blue/90 text-white">
                  Let's Build Something <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </div>

            <div className="lg:w-1/2">
              <div className="sticky top-24">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="rounded-2xl overflow-hidden mb-8 shadow-lg"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-72 md:h-96 object-cover"
                  />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="bg-earth-100 p-6 rounded-xl shadow-sm"
                  >
                    <h3 className="font-display text-xl font-semibold mb-3">
                      Start a Conversation
                    </h3>
                    <p className="text-earth-600 mb-4">
                      Curious about how this service can help your business?
                      Let's chat.
                    </p>
                    <Button
                      variant="outline"
                      className="w-full border-tribe-blue text-tribe-blue hover:bg-tribe-blue/10"
                    >
                      Get in Touch
                    </Button>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="bg-tribe-blue/10 p-6 rounded-xl shadow-sm"
                  >
                    <h3 className="font-display text-xl font-semibold mb-3 text-tribe-blue">
                      See Related Work
                    </h3>
                    <p className="text-earth-600 mb-4">
                      Check out our trail stories featuring this service in
                      action.
                    </p>
                    <Button
                      variant="outline"
                      className="w-full border-tribe-blue text-tribe-blue hover:bg-tribe-blue/10"
                      onClick={() => navigate("/trail-stories")}
                    >
                      View Case Studies
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetailsPage;
