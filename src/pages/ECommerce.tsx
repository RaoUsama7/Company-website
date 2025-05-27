
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShoppingCart, CreditCard, Truck, BarChart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const ECommerce = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: ShoppingCart,
      title: 'User Experience',
      description: 'Intuitive shopping experiences that convert visitors into customers.'
    },
    {
      icon: CreditCard,
      title: 'Payment Integration',
      description: 'Secure payment processing with multiple gateway options.'
    },
    {
      icon: Truck,
      title: 'Order Management',
      description: 'Streamlined order processing and fulfillment systems.'
    },
    {
      icon: BarChart,
      title: 'Analytics & Insights',
      description: 'Comprehensive analytics to understand your customers and optimize sales.'
    }
  ];

  const platforms = [
    'Custom E-commerce Solutions',
    'Shopify Development',
    'WooCommerce Integration',
    'Marketplace Solutions',
    'B2B E-commerce Platforms',
    'Mobile Commerce Apps'
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
              E-commerce Solutions
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6">
              Shops That Sell. <span className="text-tribe-blue">Systems That Scale</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Create exceptional shopping experiences with e-commerce platforms that drive sales and deliver operational efficiency.
            </p>
            <Button 
              size="lg" 
              className="bg-tribe-blue hover:bg-tribe-blue/90"
              onClick={() => window.location.href = '/#contact'}
            >
              Build Your Store
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
              E-commerce That <span className="text-tribe-blue">Converts</span>
            </h2>
            <p className="text-lg text-earth-600 max-w-2xl mx-auto">
              Every element designed to maximize sales and deliver exceptional customer experiences.
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

      {/* Platforms Section */}
      <section className="py-20 bg-earth-100">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              E-commerce <span className="text-tribe-blue">Solutions</span>
            </h2>
            <p className="text-lg text-earth-600 max-w-2xl mx-auto">
              From custom builds to platform integrations, we deliver the right solution for your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300"
              >
                <ShoppingCart className="w-8 h-8 text-tribe-blue mx-auto mb-4" />
                <h3 className="font-display font-semibold text-tribe-blue">{platform}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ECommerce;
