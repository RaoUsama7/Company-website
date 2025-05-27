
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TermsOfService = () => {
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
              Terms of <span className="text-tribe-blue">Service</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              The terms that govern our relationship with you.
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
              <h2 className="text-2xl font-display font-bold mb-6">Acceptance of Terms</h2>
              <p className="mb-6">
                By accessing and using the Tech Trailblazers Tribe website and services, 
                you accept and agree to be bound by the terms and provision of this agreement.
              </p>

              <h2 className="text-2xl font-display font-bold mb-6 mt-12">Services</h2>
              <p className="mb-6">
                Tech Trailblazers Tribe provides technology consulting, development, 
                and digital transformation services. We reserve the right to modify 
                or discontinue any service at any time.
              </p>

              <h2 className="text-2xl font-display font-bold mb-6 mt-12">User Responsibilities</h2>
              <p className="mb-6">
                You agree to use our services in compliance with all applicable laws 
                and regulations. You are responsible for:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Providing accurate and complete information</li>
                <li>Maintaining the confidentiality of your account</li>
                <li>Notifying us of any unauthorized use</li>
                <li>Respecting intellectual property rights</li>
              </ul>

              <h2 className="text-2xl font-display font-bold mb-6 mt-12">Intellectual Property</h2>
              <p className="mb-6">
                All content, trademarks, and intellectual property on this website 
                are owned by Tech Trailblazers Tribe or our licensors.
              </p>

              <h2 className="text-2xl font-display font-bold mb-6 mt-12">Limitation of Liability</h2>
              <p className="mb-6">
                Tech Trailblazers Tribe shall not be liable for any indirect, incidental, 
                special, or consequential damages arising from the use of our services.
              </p>

              <h2 className="text-2xl font-display font-bold mb-6 mt-12">Contact Us</h2>
              <p className="mb-6">
                For questions about these Terms of Service, contact us at:
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

export default TermsOfService;
