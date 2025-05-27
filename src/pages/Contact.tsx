
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import { Button } from '@/components/ui/button';

const ContactPage = () => {
  const [selectedBudget, setSelectedBudget] = useState('');
  const [selectedServices, setSelectedServices] = useState([]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const budgetRanges = [
    { value: '2k-6k', label: '$2K - $6K', description: 'Small projects & MVPs' },
    { value: '6k-15k', label: '$6K - $15K', description: 'Medium complexity apps' },
    { value: '15k-50k', label: '$15K - $50K', description: 'Enterprise solutions' },
    { value: '50k-100k', label: '$50K - 100K', description: 'Large-scale platforms' },
    { value: 'discuss', label: 'Let\'s Discuss', description: 'Custom requirements' }
  ];

  const serviceOptions = [
    { id: 'mobile', name: 'Mobile Apps', icon: '📱' },
    { id: 'web', name: 'Web Applications', icon: '🌐' },
    { id: 'design', name: 'UI/UX Design', icon: '🎨' },
    { id: 'games', name: 'Game Development', icon: '🎮' },
    { id: 'cloud', name: 'Cloud Solutions', icon: '☁️' },
    { id: 'ai', name: 'AI Integration', icon: '🤖' },
    { id: 'mvp', name: 'MVP Development', icon: '🚀' },
    { id: 'ecommerce', name: 'E-commerce', icon: '🛒' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: '🛡️' },
    { id: 'custom', name: 'Custom Solutions', icon: '💡' }
  ];

  const toggleService = (serviceId) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const projectTypes = [
    {
      title: 'Startup MVP',
      description: 'Validate your idea with a minimal viable product',
      features: ['Fast development', 'Core features only', 'Market validation'],
      timeline: '4-8 weeks',
      bestFor: 'New ventures, proof of concept'
    },
    {
      title: 'Business Application',
      description: 'Custom software to streamline your operations',
      features: ['Workflow automation', 'Data management', 'Team collaboration'],
      timeline: '8-16 weeks',
      bestFor: 'Growing businesses, process optimization'
    },
    {
      title: 'Consumer Product',
      description: 'User-facing applications with high engagement',
      features: ['Beautiful design', 'Performance focus', 'User analytics'],
      timeline: '12-24 weeks',
      bestFor: 'B2C products, high user volume'
    },
    {
      title: 'Enterprise Solution',
      description: 'Large-scale, mission-critical applications',
      features: ['Enterprise security', 'Scalable architecture', 'Integration ready'],
      timeline: '16+ weeks',
      bestFor: 'Large organizations, complex requirements'
    }
  ];

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-earth-900 to-earth-800 text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6">
              Let's Build Something <span className="text-tribe-blue">Amazing</span> Together
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Ready to transform your ideas into reality? We're here to help you every step of the way.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Planning Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Plan Your <span className="text-tribe-blue">Project</span>
              </h2>
              <p className="text-lg text-earth-600 max-w-2xl mx-auto">
                Help us understand your vision so we can provide the most accurate timeline and budget estimate.
              </p>
            </div>

            {/* Project Types */}
            <div className="mb-16">
              <h3 className="text-2xl font-display font-semibold mb-8 text-center">What Type of Project Are You Planning?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {projectTypes.map((type, index) => (
                  <motion.div
                    key={type.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                    className="bg-earth-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 cursor-pointer hover:bg-tribe-blue/5"
                  >
                    <h4 className="text-xl font-semibold mb-3 text-tribe-blue">{type.title}</h4>
                    <p className="text-earth-600 mb-4 text-sm">{type.description}</p>
                    <div className="space-y-2 mb-4">
                      {type.features.map((feature, i) => (
                        <div key={i} className="flex items-center text-sm text-earth-700">
                          <CheckCircle className="h-4 w-4 text-tribe-blue mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <div className="border-t pt-3 text-xs text-earth-500">
                      <div><strong>Timeline:</strong> {type.timeline}</div>
                      <div><strong>Best for:</strong> {type.bestFor}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Services Selection */}
            <div className="mb-16">
              <h3 className="text-2xl font-display font-semibold mb-8 text-center">What Services Do You Need?</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {serviceOptions.map((service) => (
                  <motion.button
                    key={service.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => toggleService(service.id)}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                      selectedServices.includes(service.id)
                        ? 'border-tribe-blue bg-tribe-blue/10 text-tribe-blue'
                        : 'border-earth-200 hover:border-tribe-blue/50 hover:bg-earth-50'
                    }`}
                  >
                    <div className="text-2xl mb-2">{service.icon}</div>
                    <div className="text-sm font-medium">{service.name}</div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Budget Selection */}
            <div className="mb-16">
              <h3 className="text-2xl font-display font-semibold mb-8 text-center">What's Your Estimated Budget?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {budgetRanges.map((budget) => (
                  <motion.button
                    key={budget.value}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedBudget(budget.value)}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                      selectedBudget === budget.value
                        ? 'border-tribe-blue bg-tribe-blue/10'
                        : 'border-earth-200 hover:border-tribe-blue/50 hover:bg-earth-50'
                    }`}
                  >
                    <div className="font-semibold text-lg mb-1">{budget.label}</div>
                    <div className="text-sm text-earth-600">{budget.description}</div>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-earth-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Ready to <span className="text-tribe-blue">Get Started?</span>
              </h2>
              <p className="text-lg text-earth-600">
                Share your project details and we'll get back to you within 24 hours with a detailed proposal.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <Contact />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-12">
              Why Choose <span className="text-tribe-blue">Tech Trailblazers?</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-tribe-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
                <p className="text-earth-600">We deliver quality products quickly without compromising on excellence.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-tribe-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Focused Approach</h3>
                <p className="text-earth-600">We focus on building what matters most for your business success.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-tribe-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
                <p className="text-earth-600">Our track record speaks for itself with successful projects across industries.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
