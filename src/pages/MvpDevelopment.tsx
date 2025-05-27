
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Rocket, Clock, Target, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const MvpDevelopment = () => {
  const navigate = useNavigate();

  const benefits = [
    {
      icon: Clock,
      title: 'Fast to Market',
      description: 'Get your ideas tested quickly with rapid development cycles and lean methodology.'
    },
    {
      icon: Target,
      title: 'Risk Validation',
      description: 'Minimize risk by testing core assumptions before full-scale development.'
    },
    {
      icon: TrendingUp,
      title: 'Data-Driven Decisions',
      description: 'Make informed decisions based on real user feedback and market validation.'
    },
    {
      icon: Rocket,
      title: 'Scalable Foundation',
      description: 'Build MVPs with architecture that can evolve into full products.'
    }
  ];

  const mvpTypes = [
    { title: 'Web Applications', description: 'Responsive web-based MVPs for quick market entry' },
    { title: 'Mobile Apps', description: 'Native or cross-platform mobile MVPs' },
    { title: 'API Services', description: 'Backend-focused MVPs for B2B solutions' },
    { title: 'E-commerce Platforms', description: 'Minimal viable stores to test market demand' }
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
              MVP Development
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6">
              Ideas, Tested. <span className="text-tribe-blue">MVPs, Launched</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Validate your ideas quickly and iterate with confidence. We build MVPs that help you learn fast and fail cheap.
            </p>
            <Button 
              size="lg" 
              className="bg-tribe-blue hover:bg-tribe-blue/90"
              onClick={() => window.location.href = '/#contact'}
            >
              Launch Your MVP
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Why <span className="text-tribe-blue">MVP First?</span>
            </h2>
            <p className="text-lg text-earth-600 max-w-2xl mx-auto">
              Test your assumptions, validate your market, and build confidence before full investment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-earth-100 p-6 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <benefit.icon className="w-12 h-12 text-tribe-blue mb-4" />
                <h3 className="text-xl font-display font-semibold mb-2">{benefit.title}</h3>
                <p className="text-earth-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MVP Types Section */}
      <section className="py-20 bg-earth-100">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Types of <span className="text-tribe-blue">MVPs We Build</span>
            </h2>
            <p className="text-lg text-earth-600 max-w-2xl mx-auto">
              From web apps to mobile solutions, we create MVPs across all platforms.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mvpTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-display font-semibold mb-2 text-tribe-blue">{type.title}</h3>
                <p className="text-earth-600">{type.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MvpDevelopment;
