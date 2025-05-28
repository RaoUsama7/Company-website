
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Smartphone, Laptop, TabletSmartphone, Code, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import path from 'path';

const AppsThatMove = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const features = [
    {
      title: "Cross-Platform Excellence",
      description: "Native performance on iOS, Android, and beyond with code that adapts, not compromises.",
      icon: <TabletSmartphone className="h-8 w-8 text-tribe-blue" />
    },
    {
      title: "Offline First Design",
      description: "Apps that work even when connectivity doesn't, with seamless state synchronization.",
      icon: <Smartphone className="h-8 w-8 text-tribe-blue" />
    },
    {
      title: "Fluid Interactions",
      description: "Motion design that guides, delights, and creates intuitive experiences users love.",
      icon: <Laptop className="h-8 w-8 text-tribe-blue" />
    },
    {
      title: "Scalable Architecture",
      description: "Foundations built to grow with your user base, from MVP to market leader.",
      icon: <Code className="h-8 w-8 text-tribe-blue" />
    }
  ];

  const technologies = [
    { name: "React Native", level: 95 },
    { name: "Flutter", level: 90 },
    { name: "Swift/SwiftUI", level: 85 },
    { name: "Kotlin", level: 80 },
    { name: "Progressive Web Apps", level: 95 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-earth-900 to-earth-800 text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <motion.div 
              className="inline-block bg-tribe-blue/20 text-tribe-blue px-4 py-1.5 rounded-full text-sm font-medium mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Mobile Expertise
            </motion.div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6">
              Apps That <span className="text-tribe-blue">Move</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Native and cross-platform mobile applications that move with your users, 
              wherever they go, with performance that feels like magic.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button className="bg-tribe-blue hover:bg-tribe-blue/90 px-8 py-6 text-lg" onClick={() => window.location.href = '/contact'}>
                Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block bg-tribe-blue/10 text-tribe-blue px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Mobile Excellence <span className="text-tribe-blue">Delivered</span>
            </h2>
            <p className="text-lg text-earth-600">
              We build apps that don't just work—they adapt, perform, and delight users across every device and platform.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                variants={fadeIn}
                whileHover={{ y: -8, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="w-16 h-16 rounded-full bg-tribe-blue/10 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">
                  {feature.title}
                </h3>
                <p className="text-earth-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mobile Mockups */}
      <section className="py-20 bg-earth-100 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block bg-tribe-blue/10 text-tribe-blue px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                Our Process
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                From Concept <span className="text-tribe-blue">to App Store</span>
              </h2>
              <p className="text-lg text-earth-600 mb-8">
                We guide your mobile application from initial wireframes to successful launch with a proven, transparent development workflow.
              </p>

              <motion.div 
                className="space-y-4"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {["Discovery & Planning", "UX/UI Design", "Development & Testing", "Launch & Growth"].map((step, index) => (
                  <motion.div 
                    key={step} 
                    className="flex items-center"
                    variants={fadeIn}
                  >
                    <div className="w-10 h-10 rounded-full bg-tribe-blue flex items-center justify-center text-white font-semibold mr-4">
                      {index + 1}
                    </div>
                    <p className="text-lg font-medium">{step}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative z-10">
                <motion.img 
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1334&q=80" 
                  alt="Mobile App UI" 
                  className="rounded-xl shadow-2xl"
                  initial={{ y: 0 }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 3,
                    ease: "easeInOut" 
                  }}
                />
              </div>
              <motion.div 
                className="absolute -bottom-10 -right-10 z-0"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-40 h-40 rounded-full bg-tribe-blue/20 backdrop-blur-lg"></div>
              </motion.div>
              <motion.div 
                className="absolute -top-5 -left-5 z-0"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-28 h-28 rounded-full bg-tribe-blue/10 backdrop-blur-lg"></div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block bg-tribe-blue/10 text-tribe-blue px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              Our Tech Stack
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Tools That <span className="text-tribe-blue">Power Movement</span>
            </h2>
            <p className="text-lg text-earth-600 max-w-2xl mx-auto">
              Expertise across the mobile spectrum, with technologies chosen to match your specific needs and goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {technologies.map((tech, index) => (
              <HoverCard key={tech.name}>
                <HoverCardTrigger asChild>
                  <motion.div
                    className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 text-center cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ y: -5, borderColor: "#1EAEDB" }}
                  >
                    <h3 className="text-lg font-display font-semibold mb-2">{tech.name}</h3>
                  </motion.div>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">{tech.name} Expertise</h4>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-tribe-blue h-2.5 rounded-full" 
                        style={{ width: `${tech.level}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-right text-gray-500">{tech.level}%</p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-earth-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to Build an App That <span className="text-tribe-blue">Moves?</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Let's craft mobile experiences your users won't be able to put down. Start the conversation today.
            </p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div 
                variants={fadeIn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  className="bg-tribe-blue hover:bg-tribe-blue/90 px-8 py-6 text-lg w-full sm:w-auto"
                  onClick={() => window.location.href = '/contact'}
                >
                  Start a Project
                </Button>
              </motion.div>
              <motion.div 
                variants={fadeIn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline" className="border-white/20 hover:bg-white/10 px-8 py-6 text-lg w-full sm:w-auto text-black">
                  View Case Studies
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AppsThatMove;
