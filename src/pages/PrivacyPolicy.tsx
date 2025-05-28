
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
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
              Privacy <span className="text-tribe-blue">Policy</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Your privacy matters. Here's how we protect it.
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
              <h2 className="text-2xl font-display font-bold mb-6">Information We Collect</h2>
              <p className="mb-6">
                At Tech Trailblazers Tribe, we collect information you provide directly to us, 
                such as when you contact us through our website, subscribe to our newsletter, 
                or inquire about our services.
              </p>

              <h2 className="text-2xl font-display font-bold mb-6 mt-12">How We Use Your Information</h2>
              <p className="mb-6">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you newsletters and marketing communications (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 className="text-2xl font-display font-bold mb-6 mt-12">Information Sharing</h2>
              <p className="mb-6">
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except as described in this policy or as required by law.
              </p>

              <h2 className="text-2xl font-display font-bold mb-6 mt-12">Data Security</h2>
              <p className="mb-6">
                We implement appropriate security measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction.
              </p>

              <h2 className="text-2xl font-display font-bold mb-6 mt-12">Contact Us</h2>
              <p className="mb-6">
                If you have any questions about this Privacy Policy, please contact us at:
                <br />
                <a href="mailto:ttt@the-tech-tribe.com" className="text-tribe-blue hover:underline">
                  info@the-tech-tribe.com
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

export default PrivacyPolicy;
