
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const CookiesPolicy = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      
      <section className="py-20 bg-gradient-to-b from-earth-900 to-earth-800 text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6">
              Cookies <span className="text-tribe-blue">Policy</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              How we use cookies to improve your experience.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h2 className="text-2xl font-display font-bold mb-6">What Are Cookies</h2>
              <p className="mb-6">
                Cookies are small text files that are stored on your device when you visit our website. 
                They help us provide you with a better user experience.
              </p>

              <h2 className="text-2xl font-display font-bold mb-6 mt-12">How We Use Cookies</h2>
              <p className="mb-6">We use cookies for:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Essential website functionality</li>
                <li>Analytics and performance monitoring</li>
                <li>Remembering your preferences</li>
                <li>Improving user experience</li>
              </ul>

              <h2 className="text-2xl font-display font-bold mb-6 mt-12">Types of Cookies</h2>
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Essential Cookies</h3>
                <p className="mb-4">These cookies are necessary for the website to function properly.</p>
                
                <h3 className="text-lg font-semibold mb-2">Analytics Cookies</h3>
                <p className="mb-4">Help us understand how visitors interact with our website.</p>
                
                <h3 className="text-lg font-semibold mb-2">Functional Cookies</h3>
                <p className="mb-4">Remember your preferences and provide enhanced features.</p>
              </div>

              <h2 className="text-2xl font-display font-bold mb-6 mt-12">Managing Cookies</h2>
              <p className="mb-6">
                You can control and manage cookies through your browser settings. 
                However, disabling cookies may affect the functionality of our website.
              </p>

              <h2 className="text-2xl font-display font-bold mb-6 mt-12">Contact Us</h2>
              <p className="mb-6">
                If you have questions about our use of cookies, contact us at:
                <br />
                <a href="mailto:ttt@the-tech-tribe.com" className="text-tribe-blue hover:underline">
                  ttt@the-tech-tribe.com
                </a>
              </p>

              <p className="text-sm text-gray-600 mt-12">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default CookiesPolicy;
