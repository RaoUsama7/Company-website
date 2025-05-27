
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Palette, Eye, Layout, PenTool, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const DesignThatClicks = () => {
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

  const fadeInFromLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  const fadeInFromRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  const services = [
    {
      title: "User Research",
      description: "We uncover insights about your users through interviews, testing, and data analysis.",
      icon: <Users className="h-8 w-8 text-tribe-blue" />,
      delay: 0.1
    },
    {
      title: "UX Design",
      description: "We craft intuitive navigation and interaction patterns that feel natural to users.",
      icon: <Layout className="h-8 w-8 text-tribe-blue" />,
      delay: 0.2
    },
    {
      title: "UI Design",
      description: "We create visual systems that are both beautiful and purposeful, enhancing usability.",
      icon: <Palette className="h-8 w-8 text-tribe-blue" />,
      delay: 0.3
    },
    {
      title: "Design Systems",
      description: "We build scalable design frameworks that maintain consistency across your product.",
      icon: <PenTool className="h-8 w-8 text-tribe-blue" />,
      delay: 0.4
    },
  ];

  const process = [
    {
      title: "Discovery",
      description: "We learn about your users, business goals, and competitive landscape to inform our design strategy.",
    },
    {
      title: "Wireframing",
      description: "We sketch the blueprint of your interface, focusing on structure, flow, and functionality.",
    },
    {
      title: "Visual Design",
      description: "We bring your interface to life with color, typography, and imagery that reflects your brand.",
    },
    {
      title: "Prototyping",
      description: "We create interactive mockups to simulate the user experience before development begins.",
    },
    {
      title: "Testing",
      description: "We validate our design decisions through user testing to ensure they meet real needs.",
    }
  ];

  const principles = [
    { title: "User-Centered", emoji: "👤" },
    { title: "Accessible", emoji: "♿" },
    { title: "Consistent", emoji: "🔄" },
    { title: "Delightful", emoji: "✨" },
    { title: "Purposeful", emoji: "🎯" },
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
              Design Excellence
            </motion.div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6">
              Design That <span className="text-tribe-blue">Clicks</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Interfaces that speak to people—not at them, creating digital experiences that feel natural and drive engagement.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button 
                className="bg-tribe-blue hover:bg-tribe-blue/90 px-8 py-6 text-lg"
                onClick={() => document.getElementById('id1')?.scrollIntoView({ behavior: 'smooth' })}
              >
                See Our Design Process <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
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
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Design That <span className="text-tribe-blue">Delivers Results</span>
            </h2>
            <p className="text-lg text-earth-600">
              We craft interfaces that don't just look pretty—they solve real problems for real users, driving engagement and conversions.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                variants={fadeIn}
                whileHover={{ 
                  y: -8, 
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                  borderColor: "#1EAEDB" 
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="w-16 h-16 rounded-full bg-tribe-blue/10 flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-earth-600">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Design Principles */}
      <section className="py-20 bg-earth-100">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block bg-tribe-blue/10 text-tribe-blue px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              Our Philosophy
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Design <span className="text-tribe-blue">Principles</span>
            </h2>
            <p className="text-lg text-earth-600 max-w-2xl mx-auto">
              Our approach is grounded in these core principles that guide every design decision we make.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ 
                  y: -8,
                  boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.1)",
                  backgroundColor: "#1EAEDB10" 
                }}
              >
                <motion.div 
                  className="text-4xl mb-3"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0] 
                  }}
                  transition={{ 
                    duration: 2,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 1],
                    repeat: Infinity,
                    repeatDelay: 2
                  }}
                >
                  {principle.emoji}
                </motion.div>
                <h3 className="text-lg font-display font-semibold">{principle.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-white overflow-hidden" id='id1'>
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block bg-tribe-blue/10 text-tribe-blue px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              Our Methodology
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              The Design <span className="text-tribe-blue">Journey</span>
            </h2>
            <p className="text-lg text-earth-600 max-w-2xl mx-auto">
              A collaborative, iterative process centered around users and business goals.
            </p>
          </motion.div>

          <div className="relative">
            {/* Connection line */}
            <div className="absolute top-0 bottom-0 left-[50%] w-px bg-tribe-blue/20"></div>

            {process.map((step, index) => (
              <div key={step.title} className="mb-12 last:mb-0">
                <motion.div 
                  className={`flex items-start ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                    <motion.div
                      variants={index % 2 === 0 ? fadeInFromLeft : fadeInFromRight}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      <h3 className="text-xl font-display font-semibold mb-2">
                        {step.title}
                      </h3>
                      <p className="text-earth-600">
                        {step.description}
                      </p>
                    </motion.div>
                  </div>
                  
                  <div className="relative">
                    <motion.div 
                      className="w-10 h-10 rounded-full bg-tribe-blue text-white flex items-center justify-center font-bold z-10 relative"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 300, 
                        damping: 20,
                        delay: index * 0.1 + 0.3
                      }}
                    >
                      {index + 1}
                    </motion.div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      {/* <section className="py-20 bg-earth-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block bg-tribe-blue/20 text-tribe-blue px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              Our Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Design That <span className="text-tribe-blue">Inspires Action</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              A selection of our work that demonstrates our approach to creating interfaces that engage and convert.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.div
                key={item}
                className="relative overflow-hidden rounded-xl group cursor-pointer"
                variants={fadeIn}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <img 
                  src={`https://picsum.photos/600/400?random=${item + 10}`} 
                  alt={`Design portfolio item ${item}`}
                  className="w-full h-64 object-cover"
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-earth-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                >
                  <div>
                    <h3 className="text-xl font-display font-semibold text-white mb-2">Project {item}</h3>
                    <p className="text-gray-300">UI/UX Design</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Button className="bg-tribe-blue hover:bg-tribe-blue/90">
                View Full Portfolio <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section> */}

      {/* CTA */}
      <section className="py-16 bg-earth-100">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto bg-white p-10 rounded-2xl shadow-lg border border-gray-100 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.1)" }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready for Design That <span className="text-tribe-blue">Truly Connects?</span>
            </h2>
            <p className="text-lg text-earth-600 mb-8 max-w-2xl mx-auto">
              Let's create interfaces that resonate with your users and drive the outcomes your business needs.
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
                  Start Your Design Project
                </Button>
              </motion.div>
              <motion.div 
                variants={fadeIn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* <Button variant="outline" className="border-earth-300 hover:bg-earth-100 px-8 py-6 text-lg w-full sm:w-auto">
                  View Our Process
                </Button> */}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DesignThatClicks;
