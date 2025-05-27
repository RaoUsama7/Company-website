
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Lock, Eye, AlertTriangle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Cybersecurity = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Shield,
      title: 'Security Audits',
      description: 'Comprehensive security assessments to identify vulnerabilities and strengthen defenses.'
    },
    {
      icon: Lock,
      title: 'Secure Development',
      description: 'Build security into your applications from the ground up with secure coding practices.'
    },
    {
      icon: Eye,
      title: 'Monitoring & Detection',
      description: 'Real-time threat monitoring and incident response systems.'
    },
    {
      icon: AlertTriangle,
      title: 'Risk Assessment',
      description: 'Identify and prioritize security risks across your digital infrastructure.'
    }
  ];

  const protectionAreas = [
    'Web Applications', 'Mobile Apps', 'Cloud Infrastructure', 
    'API Security', 'Data Protection', 'Network Security'
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
              Cybersecurity
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6">
              Guardians of Your <span className="text-tribe-blue">Digital Frontier</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Protect your digital assets with comprehensive cybersecurity solutions that give you peace of mind and keep threats at bay.
            </p>
            <Button 
              size="lg" 
              className="bg-tribe-blue hover:bg-tribe-blue/90"
              onClick={() => window.location.href = '/contact'}
            >
              Secure Your Assets
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Our <span className="text-tribe-blue">Security Services</span>
            </h2>
            <p className="text-lg text-earth-600 max-w-2xl mx-auto">
              Comprehensive cybersecurity solutions to protect your business from modern threats.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-earth-100 p-6 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <service.icon className="w-12 h-12 text-tribe-blue mb-4" />
                <h3 className="text-xl font-display font-semibold mb-2">{service.title}</h3>
                <p className="text-earth-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Protection Areas Section */}
      <section className="py-20 bg-earth-100">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              What We <span className="text-tribe-blue">Protect</span>
            </h2>
            <p className="text-lg text-earth-600 max-w-2xl mx-auto">
              Comprehensive security coverage across all your digital touchpoints.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {protectionAreas.map((area, index) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-4 rounded-xl text-center hover:shadow-lg transition-all duration-300"
              >
                <Shield className="w-8 h-8 text-tribe-blue mx-auto mb-2" />
                <h3 className="font-display font-semibold text-tribe-blue">{area}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cybersecurity;
