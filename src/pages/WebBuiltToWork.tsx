
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Star, Server, Zap, LineChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const WebBuiltToWork = () => {
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

  const technologies = [
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "Vue", icon: "🟩" },
    { name: "Angular", icon: "🅰️" },
    { name: "Node.js", icon: "🟢" },
    { name: "GraphQL", icon: "◼️" },
  ];

  const features = [
    {
      title: "Performance First",
      description: "Blazing fast load times with optimized code and modern compression techniques.",
      icon: <Zap className="h-8 w-8 text-tribe-blue" />
    },
    {
      title: "Responsive Design",
      description: "Pixel-perfect interfaces that adapt beautifully across all devices and screen sizes.",
      icon: <Globe className="h-8 w-8 text-tribe-blue" />
    },
    {
      title: "Scalable Architecture",
      description: "Systems built to handle growth, from hundreds to millions of users without breaking a sweat.",
      icon: <Server className="h-8 w-8 text-tribe-blue" />
    },
    {
      title: "Analytics Integration",
      description: "Comprehensive tracking and insights to measure performance and user behavior.",
      icon: <LineChart className="h-8 w-8 text-tribe-blue" />
    },
  ];

  const processes = [
    {
      title: "Discovery",
      description: "We dive deep to understand your users, goals, and unique challenges.",
      number: "01",
    },
    {
      title: "Architecture",
      description: "We design a technical foundation built to perform and scale with your needs.",
      number: "02",
    },
    {
      title: "Development",
      description: "We bring the design to life with clean, efficient, and maintainable code.",
      number: "03",
    },
    {
      title: "Testing",
      description: "We rigorously test across devices and use cases to ensure flawless operation.",
      number: "04",
    },
    {
      title: "Launch & Support",
      description: "We handle deployment and provide ongoing support to ensure your continued success.",
      number: "05",
    },
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
              Web Excellence
            </motion.div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6">
              Web, but <span className="text-tribe-blue">Built to Work</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Resilient, responsive web applications that perform as good as they look, built to handle real-world demands.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button className="bg-tribe-blue hover:bg-tribe-blue/90 px-8 py-6 text-lg">
                Explore Our Approach <ArrowRight className="ml-2 h-5 w-5" />
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
              Our Approach
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Web Applications That <span className="text-tribe-blue">Deliver</span>
            </h2>
            <p className="text-lg text-earth-600">
              We build web experiences that combine stunning design with technical excellence for results that stand the test of time.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {features.map((feature) => (
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

      {/* Tech Stack */}
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
              Technology Stack
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Built With <span className="text-tribe-blue">Modern Tools</span>
            </h2>
            <p className="text-lg text-earth-600 max-w-2xl mx-auto">
              We leverage cutting-edge technologies that provide the best foundation for performance, security and scalability.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md border border-transparent hover:border-tribe-blue/20 transition-all duration-300"
                variants={fadeIn}
                whileHover={{ y: -5, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="text-4xl mb-3">{tech.icon}</div>
                <p className="font-medium">{tech.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block bg-tribe-blue/10 text-tribe-blue px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              How We <span className="text-tribe-blue">Craft Excellence</span>
            </h2>
            <p className="text-lg text-earth-600 max-w-2xl mx-auto">
              A time-tested approach that ensures quality, transparency, and results at every stage.
            </p>
          </motion.div>

          <div className="relative">
            {/* Connection line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 transform md:translate-x-0"></div>

            {/* Process steps */}
            {processes.map((process, index) => (
              <motion.div 
                key={process.number}
                className={`relative mb-16 last:mb-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:ml-0' : 'md:pl-12 md:ml-auto'}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div 
                  className={`absolute top-0 ${index % 2 === 0 ? 'md:right-0' : 'md:left-0'} w-8 h-8 rounded-full bg-tribe-blue text-white flex items-center justify-center font-bold transform md:translate-x-1/2`}
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
                
                <motion.div 
                  className="bg-white p-6 rounded-xl border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="bg-tribe-blue/10 text-tribe-blue font-display font-semibold inline-block px-3 py-1 rounded mb-4">
                    {process.number}
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-3">{process.title}</h3>
                  <p className="text-earth-600">{process.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Teaser */}
      <section className="py-20 bg-earth-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block bg-tribe-blue/20 text-tribe-blue px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                Success Stories
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Our Work <span className="text-tribe-blue">Speaks Volumes</span>
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Discover how we've helped businesses transform their web presence with performant, beautiful applications that deliver real results.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Button className="bg-tribe-blue hover:bg-tribe-blue/90">
                  View Case Studies <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {[1, 2, 3, 4].map((item) => (
                <motion.div 
                  key={item}
                  className="overflow-hidden rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <img 
                    src={`https://picsum.photos/400/300?random=${item}`}
                    alt="Case Study Preview"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

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
              Ready for Web That <span className="text-tribe-blue">Actually Works?</span>
            </h2>
            <p className="text-lg text-earth-600 mb-8 max-w-2xl mx-auto">
              Let's build a web application that performs as beautifully as it looks. Your users—and your business metrics—will thank you.
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
                <Button className="bg-tribe-blue hover:bg-tribe-blue/90 px-8 py-6 text-lg w-full sm:w-auto">
                  Start Your Project
                </Button>
              </motion.div>
              <motion.div 
                variants={fadeIn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline" className="border-earth-300 hover:bg-earth-100 px-8 py-6 text-lg w-full sm:w-auto">
                  Schedule a Consultation
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

export default WebBuiltToWork;
