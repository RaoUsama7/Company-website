
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Lightbulb, Zap, Rocket, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const CustomSolutions = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Lightbulb,
      title: 'Idea Validation',
      description: 'We help validate your concepts through research, prototyping, and market analysis.'
    },
    {
      icon: Zap,
      title: 'Rapid Prototyping',
      description: 'Quick turnaround on proof-of-concepts to test your wildest ideas.'
    },
    {
      icon: Target,
      title: 'Custom Architecture',
      description: 'Tailored technical solutions designed specifically for your unique requirements.'
    },
    {
      icon: Rocket,
      title: 'Scalable Development',
      description: 'Built to grow with your vision, from MVP to enterprise-level solutions.'
    }
  ];

  const process = [
    { step: '01', title: 'Discovery', description: 'Deep dive into your vision and requirements' },
    { step: '02', title: 'Design', description: 'Craft the perfect technical architecture' },
    { step: '03', title: 'Develop', description: 'Build your solution with precision and care' },
    { step: '04', title: 'Deploy', description: 'Launch and support your custom solution' }
  ];

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-earth-900 via-earth-800 to-tribe-blue text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block bg-tribe-blue/20 text-tribe-blue px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              Custom Solutions
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6">
              Your Wild Ideas, <span className="text-tribe-blue">Engineered</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Transform your boldest concepts into reality with custom solutions that push boundaries and create lasting impact.
            </p>
            <Button 
              size="lg" 
              className="bg-tribe-blue hover:bg-tribe-blue/90"
              onClick={() => window.location.href = '/#contact'}
            >
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              How We <span className="text-tribe-blue">Engineer Dreams</span>
            </h2>
            <p className="text-lg text-earth-600 max-w-2xl mx-auto">
              Every wild idea deserves expert execution. We combine creativity with technical excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-earth-100 p-6 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <feature.icon className="w-12 h-12 text-tribe-blue mb-4" />
                <h3 className="text-xl font-display font-semibold mb-2">{feature.title}</h3>
                <p className="text-earth-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-earth-100">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Our <span className="text-tribe-blue">Process</span>
            </h2>
            <p className="text-lg text-earth-600 max-w-2xl mx-auto">
              From wild idea to engineered reality in four focused phases.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-tribe-blue text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-display font-semibold mb-2">{item.title}</h3>
                <p className="text-earth-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CustomSolutions;
