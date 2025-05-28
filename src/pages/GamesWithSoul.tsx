
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Gamepad2, Heart, Users, Code, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const GamesWithSoul = () => {
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
      title: "Emotional Storytelling",
      description: "Narratives that engage players on a deeper level, creating memorable experiences that resonate.",
      icon: <Heart className="h-8 w-8 text-tribe-blue" />
    },
    {
      title: "Player-Centered Design",
      description: "Game mechanics built around your audience, delivering experiences that truly connect.",
      icon: <Users className="h-8 w-8 text-tribe-blue" />
    },
    {
      title: "Technical Excellence",
      description: "Optimized performance across platforms, ensuring smooth gameplay that keeps players immersed.",
      icon: <Code className="h-8 w-8 text-tribe-blue" />
    },
    {
      title: "Magical Interactions",
      description: "Delightful feedback systems and interactive elements that bring joy to every action.",
      icon: <Sparkles className="h-8 w-8 text-tribe-blue" />
    }
  ];

  const platforms = [
    { name: "Mobile", icon: "📱" },
    { name: "PC", icon: "🖥️" },
    { name: "Console", icon: "🎮" },
    { name: "VR/AR", icon: "🥽" },
    { name: "Web", icon: "🌐" }
  ];

  const process = [
    {
      stage: "Concept",
      description: "We explore your vision and define the core gameplay and story elements that will engage your audience.",
      color: "border-tribe-blue"
    },
    {
      stage: "Prototype",
      description: "We build playable demos to test core mechanics and refine the player experience before full production.",
      color: "border-tribe-blue"
    },
    {
      stage: "Production",
      description: "Our team brings your game to life with meticulous attention to detail and consistent quality control.",
      color: "border-tribe-blue"
    },
    {
      stage: "Polish",
      description: "We refine gameplay, balance mechanics, and add those magical touches that elevate the experience.",
      color: "border-tribe-blue"
    },
    {
      stage: "Launch & Support",
      description: "We handle the release and provide ongoing updates to keep players engaged and coming back for more.",
      color: "border-tribe-blue"
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
              Game Development
            </motion.div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6">
              Games With <span className="text-tribe-blue">Soul</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Gaming experiences that go beyond mechanics and visuals to create meaningful connections with players.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button 
                className="bg-tribe-blue hover:bg-tribe-blue/90 px-8 py-6 text-lg"
                onClick={() => {
                  const portfolioSection = document.getElementById('Portfolio');
                  if (portfolioSection) {
                    portfolioSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Explore Our Games <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-tribe-blue/10 blur-3xl"
            animate={{ 
              x: [0, 30, 0],
              y: [0, 20, 0],
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          />
          <motion.div 
            className="absolute -bottom-40 -right-20 w-96 h-96 rounded-full bg-tribe-blue/5 blur-3xl"
            animate={{ 
              x: [0, -40, 0],
              y: [0, -20, 0],
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          />
        </div>
      </section>

      {/* Features */}
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
              Games That <span className="text-tribe-blue">Connect</span>
            </h2>
            <p className="text-lg text-earth-600">
              We build games that deliver more than entertainment—they create moments that matter and communities that thrive.
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
                className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                variants={fadeIn}
                whileHover={{ 
                  y: -8, 
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                  borderColor: "#1EAEDB"
                }}
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

      {/* Game Showcase */}
      <section className="py-24 bg-earth-100 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block bg-tribe-blue/10 text-tribe-blue px-4 py-1.5 rounded-full text-sm font-medium mb-4" id='Portfolio'>
              Our Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Games That <span className="text-tribe-blue">Inspire</span>
            </h2>
            <p className="text-lg text-earth-600 max-w-2xl mx-auto">
              A glimpse into our world of game development—each project crafted with passion and technical precision.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="relative group rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1513553404607-988bf2703777?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80" 
                alt="Game Screenshot" 
                className="rounded-xl shadow-lg w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-earth-900 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-6">
                <div>
                  <h3 className="text-white text-2xl font-display font-bold mb-2">Ethereal Quest</h3>
                  <p className="text-gray-300">A fantasy RPG with a branching narrative and soul-binding choices</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-3xl font-display font-bold">
                Crafting Immersive <span className="text-tribe-blue">Worlds</span>
              </h3>
              <p className="text-lg text-earth-600">
                We build games that players get lost in—not because they're escaping reality, but because they're finding parts of themselves in our worlds.
              </p>
              
              <div className="space-y-4">
                {["Emotional Storytelling", "Captivating Visuals", "Engaging Gameplay", "Memorable Characters"].map((item, index) => (
                  <motion.div 
                    key={item}
                    className="flex items-center"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <div className="w-6 h-6 rounded-full bg-tribe-blue/20 text-tribe-blue flex items-center justify-center mr-3">
                      ✓
                    </div>
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Button className="bg-tribe-blue hover:bg-tribe-blue/90 mt-4">
                  View Game Case Study <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Platform Icons */}
          <motion.div 
            className="mt-24 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-display font-semibold mb-8">
              We Build For All <span className="text-tribe-blue">Platforms</span>
            </h3>
            
            <div className="flex flex-wrap justify-center gap-8">
              {platforms.map((platform, index) => (
                <motion.div
                  key={platform.name}
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="w-16 h-16 rounded-full bg-tribe-blue/10 flex items-center justify-center mb-2 text-2xl">
                    {platform.icon}
                  </div>
                  <span className="text-sm font-medium">{platform.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-24 bg-white" id='Process'>
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
              From Concept to <span className="text-tribe-blue">Controller</span>
            </h2>
            <p className="text-lg text-earth-600 max-w-2xl mx-auto">
              A proven development framework that delivers quality games within scope and on schedule.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {process.map((step, index) => (
              <motion.div 
                key={step.stage}
                className={`flex mb-8 last:mb-0 ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="w-1/3">
                  <motion.div 
                    className={`px-4 py-3 bg-white rounded-lg shadow-md border-l-4 ${step.color}`}
                    whileHover={{ x: index % 2 === 0 ? 5 : -5 }}
                  >
                    <h3 className="font-display font-bold text-lg">{step.stage}</h3>
                  </motion.div>
                </div>
                
                <div className="w-1/6 flex justify-center relative">
                  <div className="absolute top-0 bottom-0 w-px bg-gray-200"></div>
                  <div className="w-4 h-4 rounded-full bg-tribe-blue mt-3"></div>
                </div>
                
                <div className="w-1/2">
                  <p className="pt-2 text-earth-600">{step.description}</p>
                </div>
              </motion.div>
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
            <div className="mb-8">
              <motion.div 
                className="inline-block"
                animate={{ 
                  rotate: [0, 5, -5, 0],
                }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              >
                <Gamepad2 className="h-16 w-16 text-tribe-blue mb-4 mx-auto" />
              </motion.div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to Create a Game With <span className="text-tribe-blue">Soul?</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Let's build a gaming experience that doesn't just entertain players—it stays with them long after they've put down the controller.
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
                  Start Your Game Project
                </Button>
              </motion.div>
              <motion.div 
                variants={fadeIn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outline" 
                  className="border-white/20 hover:bg-white/10 px-8 py-6 text-lg w-full sm:w-auto text-black"
                  onClick={() => {
                    const processSection = document.getElementById('Process');
                    if (processSection) {
                      processSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Explore Our Process
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

export default GamesWithSoul;
