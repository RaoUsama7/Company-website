
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const serviceCategories = [
  {
    name: "Digital Products",
    services: [
      {
        title: 'Apps That Move',
        description: 'Native and cross-platform mobile applications that move with your users, wherever they go.',
        icon: '📱',
        color: 'bg-tribe-blue/10 text-tribe-blue',
        link: '/services/apps-that-move',
      },
      {
        title: 'Web, but Built to Work',
        description: 'Resilient, responsive web applications that perform as good as they look.',
        icon: '🌐',
        color: 'bg-tribe-blue/10 text-tribe-blue',
        link: '/services/web-built-to-work',
      },
      {
        title: 'Games with Soul',
        description: 'Gaming experiences that go beyond mechanics and visuals to create meaningful connections.',
        icon: '🎮',
        color: 'bg-tribe-blue/10 text-tribe-blue',
        link: '/services/games-with-soul',
      }
    ]
  },
  {
    name: "Expertise Areas",
    services: [
      {
        title: 'Your Wild Ideas, Engineered',
        description: 'Custom solutions that bring your boldest concepts to life with precision and creativity.',
        icon: '💡',
        color: 'bg-tribe-blue/10 text-tribe-blue',
        link: '/services/custom-solutions',
      },
      {
        title: 'Design that Clicks',
        description: 'Interfaces that speak to people—not at them, creating digital experiences that feel natural.',
        icon: '🎨',
        color: 'bg-tribe-blue/10 text-tribe-blue',
        link: '/services/design-that-clicks',
      },
      {
        title: 'Code That Floats',
        description: 'Cloud solutions that scale with your ambitions, keeping your operations flexible and resilient.',
        icon: '☁️',
        color: 'bg-tribe-blue/10 text-tribe-blue',
        link: '/services/code-that-floats',
      }
    ]
  },
  {
    name: "Specialized Services",
    services: [
      {
        title: 'Ideas, Tested. MVPs, Launched.',
        description: 'MVPs and POCs that help you validate ideas quickly and iterate with confidence.',
        icon: '🚀',
        color: 'bg-tribe-blue/10 text-tribe-blue',
        link: '/services/mvp-development',
      },
      {
        title: 'Guardians of Your Digital Frontier',
        description: 'Cybersecurity solutions that protect your assets and give you peace of mind.',
        icon: '🛡️',
        color: 'bg-tribe-blue/10 text-tribe-blue',
        link: '/services/cybersecurity',
      },
      {
        title: 'Shops That Sell. Systems That Scale.',
        description: 'E-commerce platforms that deliver exceptional shopping experiences and back-end efficiency.',
        icon: '🛒',
        color: 'bg-tribe-blue/10 text-tribe-blue',
        link: '/services/e-commerce',
      }
    ]
  }
];

const WhatWeBuild = () => {
  const navigate = useNavigate();
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5 } 
    }
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-earth-900 to-earth-800 text-white">
        <div className="container mx-auto px-4">
          <div 
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block bg-tribe-blue/20 text-tribe-blue px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              What We Build
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6">
              Your Vision, <span className="text-tribe-blue">Our Expertise</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              We craft digital experiences that solve real problems and create lasting impact. 
              Every service is delivered with the TTT blend of precision and personality.
            </p>
          </div>
        </div>
      </section>
      
      {/* Service Categories */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          {serviceCategories.map((category, categoryIndex) => (
            <motion.div 
              key={category.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="mb-20 last:mb-0"
            >
              <h2 className="text-2xl font-display font-semibold mb-8 border-l-4 border-tribe-blue pl-4">
                {category.name}
              </h2>
              
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
              >
                {category.services.map((service, index) => (
                  <motion.div 
                    key={service.title}
                    className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                    variants={item}
                    onClick={() => navigate(service.link)}
                  >
                    <div className={`w-12 h-12 rounded-full ${service.color} flex items-center justify-center mb-4 text-2xl`}>
                      <span>{service.icon}</span>
                    </div>
                    <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-tribe-blue transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-earth-600 mb-4">
                      {service.description}
                    </p>
                    <div 
                      className="inline-flex items-center text-tribe-blue hover:underline"
                    >
                      Learn more <ArrowRight className="ml-1 h-3 w-3" />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="inline-block p-8 rounded-xl bg-earth-100 shadow-sm">
              <h3 className="text-2xl font-display font-semibold mb-4">
                Need Something Custom?
              </h3>
              <p className="text-earth-600 mb-6 max-w-xl mx-auto">
                Don't see exactly what you're looking for? Our tribe specializes in crafting custom solutions for unique challenges.
              </p>
              <Button 
                className="bg-tribe-blue hover:bg-tribe-blue/90"
                onClick={() => navigate('/contact')}
              >
                Let's Talk About Your Needs
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Process */}
      <section className="py-20 bg-earth-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block bg-tribe-blue/10 text-tribe-blue px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-4">
              How We <span className="text-tribe-blue">Build Together</span>
            </h2>
            <p className="text-lg text-earth-600 max-w-2xl mx-auto">
              Our approach is collaborative, transparent, and focused on delivering real value at every stage.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connection line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-tribe-blue/30 -z-10 hidden lg:block"></div>
            
            {['Discovery', 'Design', 'Development', 'Delivery'].map((step, index) => (
              <div
                key={step}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 relative"
              >
                <div className="w-10 h-10 rounded-full bg-tribe-blue text-white flex items-center justify-center text-lg font-bold absolute -top-5 left-1/2 transform -translate-x-1/2">
                  {index + 1}
                </div>
                <div className="pt-4">
                  <h3 className="text-xl font-display font-semibold mb-3 text-center">
                    {step}
                  </h3>
                  <p className="text-earth-600 text-center">
                    {index === 0 && "We dig deep to understand your vision, goals, and challenges."}
                    {index === 1 && "We craft a solution that's as beautiful as it is functional."}
                    {index === 2 && "We build with precision, transparency, and continuous collaboration."}
                    {index === 3 && "We don't just ship—we ensure your product thrives in the wild."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default WhatWeBuild;
