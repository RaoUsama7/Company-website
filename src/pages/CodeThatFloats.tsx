
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Cloud, Shield, BarChart3, Settings, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const CodeThatFloats = () => {
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

  const floatCloud = {
    y: [0, -15, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const services = [
    {
      title: "Cloud Architecture",
      description: "Scalable, resilient infrastructure designs that grow with your business needs.",
      icon: <Cloud className="h-8 w-8 text-tribe-blue" />
    },
    {
      title: "Serverless Solutions",
      description: "Event-driven applications that scale automatically and only charge you when they run.",
      icon: <Zap className="h-8 w-8 text-tribe-blue" />
    },
    {
      title: "DevOps Implementation",
      description: "Automated pipelines that streamline development and ensure reliable deployments.",
      icon: <Settings className="h-8 w-8 text-tribe-blue" />
    },
    {
      title: "Cloud Security",
      description: "Comprehensive protection strategies that keep your data and applications safe.",
      icon: <Shield className="h-8 w-8 text-tribe-blue" />
    },
    {
      title: "Performance Optimization",
      description: "Fine-tuned systems that deliver speed while controlling costs.",
      icon: <BarChart3 className="h-8 w-8 text-tribe-blue" />
    },
    {
      title: "Migration Services",
      description: "Smooth transitions from on-premise to cloud with minimal disruption.",
      icon: <ArrowRight className="h-8 w-8 text-tribe-blue" />
    }
  ];

  const platforms = [
    { name: "AWS", logo: "☁️" },
    { name: "Azure", logo: "☁️" },
    { name: "Google Cloud", logo: "☁️" },
    { name: "Kubernetes", logo: "☸️" },
    { name: "Docker", logo: "🐳" },
  ];

  const benefits = [
    {
      title: "Scalability",
      description: "Infrastructure that grows with you, handling traffic spikes with ease.",
      icon: "📈",
      delay: 0.1
    },
    {
      title: "Cost Efficiency",
      description: "Pay only for what you use, with optimization strategies to minimize waste.",
      icon: "💰",
      delay: 0.2
    },
    {
      title: "Global Reach",
      description: "Deploy worldwide in minutes with edge locations that bring your app closer to users.",
      icon: "🌎",
      delay: 0.3
    },
    {
      title: "Reliability",
      description: "Redundant systems and automatic failover to ensure maximum uptime.",
      icon: "🛡️",
      delay: 0.4
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-earth-900 to-earth-800 text-white overflow-hidden relative">
        <div className="container mx-auto px-4 relative z-10">
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
              Cloud Expertise
            </motion.div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6">
              Code That <span className="text-tribe-blue">Floats</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Cloud solutions that scale with your ambitions, keeping your operations flexible and resilient.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button 
                className="bg-tribe-blue hover:bg-tribe-blue/90 px-8 py-6 text-lg"
                onClick={() => window.location.href = '/contact'}
              >
                Elevate Your Infrastructure <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated clouds */}
        <motion.div 
          className="absolute top-20 left-10 w-40 h-40 opacity-20"
          animate={floatCloud}
        >
          <Cloud className="w-full h-full text-tribe-blue" />
        </motion.div>
        
        <motion.div 
          className="absolute bottom-10 right-10 w-32 h-32 opacity-10"
          animate={floatCloud}
          transition={{ 
            delay: 1,
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        >
          <Cloud className="w-full h-full text-white" />
        </motion.div>
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
              Our Cloud Services
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Solutions That <span className="text-tribe-blue">Scale</span>
            </h2>
            <p className="text-lg text-earth-600">
              We architect cloud environments that combine performance, security, and cost-efficiency to power your digital ambitions.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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

      {/* Cloud Platforms */}
      <section className="py-20 bg-earth-100">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block bg-tribe-blue/10 text-tribe-blue px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              Technology Partners
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Built On The Best <span className="text-tribe-blue">Platforms</span>
            </h2>
            <p className="text-lg text-earth-600 max-w-2xl mx-auto">
              We leverage industry-leading cloud providers and technologies to deliver reliable, scalable solutions.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center text-4xl mb-3">
                  {platform.logo}
                </div>
                <p className="font-medium">{platform.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block bg-tribe-blue/10 text-tribe-blue px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                Why Choose Cloud
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                The Power of <span className="text-tribe-blue">Cloud-Native</span>
              </h2>
              <p className="text-lg text-earth-600 mb-8">
                Modern cloud architecture delivers advantages that traditional infrastructure simply can't match, giving your business the agility it needs to thrive.
              </p>
              
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {benefits.map((benefit) => (
                  <motion.div
                    key={benefit.title}
                    className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm"
                    variants={fadeIn}
                    whileHover={{ 
                      scale: 1.03,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" 
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="text-3xl mb-3">{benefit.icon}</div>
                    <h3 className="text-lg font-display font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-earth-600 text-sm">{benefit.description}</p>
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
              <motion.div
                className="rounded-xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.03 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80" 
                  alt="Cloud Infrastructure" 
                  className="w-full h-[400px] object-cover"
                />
              </motion.div>
              
              {/* Floating cloud elements */}
              <motion.div 
                className="absolute -top-10 -right-10 w-32 h-32"
                animate={{ 
                  y: [0, -15, 0],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              >
                <Cloud className="w-full h-full text-tribe-blue opacity-20" />
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-5 -left-5 w-24 h-24"
                animate={{ 
                  y: [0, -10, 0],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <Cloud className="w-full h-full text-tribe-blue opacity-20" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-earth-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block bg-tribe-blue/20 text-tribe-blue px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              Our Approach
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Elevating Your <span className="text-tribe-blue">Infrastructure</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              A methodical process that ensures your cloud architecture is built for performance, security, and long-term success.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {["Assess", "Architect", "Implement", "Optimize", "Scale"].map((step, index) => (
              <motion.div
                key={step}
                className="relative flex items-center mb-16 last:mb-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <motion.div 
                  className="w-16 h-16 rounded-full bg-tribe-blue text-white flex items-center justify-center text-xl font-bold mr-8 shrink-0"
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: "0 0 20px rgba(30, 174, 219, 0.5)" 
                  }}
                >
                  {index + 1}
                </motion.div>
                
                <div>
                  <h3 className="text-2xl font-display font-semibold mb-2">{step}</h3>
                  <p className="text-gray-300">
                    {index === 0 && "We evaluate your current infrastructure and requirements to identify the optimal cloud strategy."}
                    {index === 1 && "We design a cloud architecture that aligns with your business goals, emphasizing security and scalability."}
                    {index === 2 && "We build and deploy your cloud infrastructure using infrastructure-as-code for consistency and repeatability."}
                    {index === 3 && "We fine-tune your environment for performance and cost-efficiency through continuous monitoring and analysis."}
                    {index === 4 && "We establish automated scaling systems that grow with your needs, ensuring you're always ready for what's next."}
                  </p>
                </div>
                
                {index < 4 && (
                  <div className="absolute top-16 left-8 h-16 w-px bg-tribe-blue/30"></div>
                )}
              </motion.div>
            ))}
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
            <motion.div
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut" 
              }}
              className="inline-block mb-6"
            >
              <Cloud className="h-16 w-16 text-tribe-blue mx-auto" />
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready for Code That <span className="text-tribe-blue">Floats?</span>
            </h2>
            <p className="text-lg text-earth-600 mb-8 max-w-2xl mx-auto">
              Let's elevate your infrastructure to the cloud and give your business the foundation it needs to soar.
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
                  Start Your Cloud Journey
                </Button>
              </motion.div>
              <motion.div 
                variants={fadeIn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                variant="outline"
                className="border-earth-300 hover:bg-earth-100 px-8 py-6 text-lg w-full sm:w-auto"
                onClick={() => window.location.href = '/contact'}
                >
                  Schedule a Cloud Assessment
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

export default CodeThatFloats;
