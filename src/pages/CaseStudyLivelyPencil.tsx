
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CaseStudyLivelyPencil = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

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
            className="max-w-4xl mx-auto"
          >
            <Link to="/trail-stories" className="inline-flex items-center text-tribe-blue hover:underline mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Case Studies
            </Link>
            
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 rounded-full bg-tribe-blue/20 text-tribe-blue text-sm font-medium">
                Social Media
              </span>
              <span className="px-3 py-1 rounded-full bg-tribe-blue/20 text-tribe-blue text-sm font-medium">
                React Native
              </span>
              <span className="px-3 py-1 rounded-full bg-tribe-blue/20 text-tribe-blue text-sm font-medium">
                Literary Platform
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6">
              <span className="text-tribe-blue">Lively Pencil:</span> A Frontend Rebuild that Unlocked a Social Platform
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              What do you do when an app built to empower creators is held back by its own frontend? You rebuild it—cleanly, scalably, and with confidence.
            </p>
            
            <div className="relative h-64 md:h-96 rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="/lovable-uploads/eda53215-87db-46b6-9dc6-e564e4de3a33.png" 
                alt="Lively Pencil App" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="prose prose-lg max-w-none"
            >
              <div className="bg-tribe-blue/5 p-8 rounded-xl mb-12">
                <h2 className="text-2xl font-display font-bold mb-4 text-tribe-blue">Project Overview</h2>
                <p className="text-earth-700 mb-4">
                  Lively Pencil is an ambitious social platform for the literary and blogging community. Think: book lovers, microbloggers, and digital creators, all in one vibrant space—built on React Native and powered by a modern backend.
                </p>
                <p className="text-earth-700 mb-0">
                  But while the vision was strong, the frontend architecture was a bottleneck.
                </p>
              </div>

              <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">The Challenge</h2>
              
              <p className="text-earth-700 mb-6 text-lg leading-relaxed">
                When the team brought us in, they were dealing with a frontend that was holding back their ambitious literary platform. The app had great potential but was struggling with:
              </p>

              <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
                <h3 className="text-lg font-semibold text-red-800 mb-3">Critical Issues</h3>
                <ul className="list-disc pl-6 text-red-700 space-y-2">
                  <li>Unstable user interface with frequent crashes</li>
                  <li>Poor performance affecting user engagement</li>
                  <li>Inconsistent design patterns across the app</li>
                  <li>Difficulty adding new features due to technical debt</li>
                  <li>Limited scalability for the growing user base</li>
                </ul>
              </div>

              <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Our Approach</h2>
              
              <p className="text-earth-700 mb-6 text-lg leading-relaxed">
                We didn't just patch the problems—we reimagined the entire frontend architecture. Our goal was to create a platform that would grow with the literary community and provide a seamless experience for writers, readers, and bloggers.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-earth-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-earth-900 mb-4">Phase 1: Analysis & Planning</h3>
                  <ul className="space-y-2 text-earth-700">
                    <li>• Comprehensive code audit</li>
                    <li>• User experience analysis</li>
                    <li>• Architecture planning</li>
                    <li>• Technology stack evaluation</li>
                  </ul>
                </div>
                
                <div className="bg-earth-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-earth-900 mb-4">Phase 2: Rebuild & Optimize</h3>
                  <ul className="space-y-2 text-earth-700">
                    <li>• Complete frontend rewrite</li>
                    <li>• Modern component architecture</li>
                    <li>• Performance optimization</li>
                    <li>• Testing implementation</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Key Features Delivered</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {[
                  { title: "Seamless Reading Experience", desc: "Optimized text rendering and smooth scrolling for long-form content" },
                  { title: "Social Interactions", desc: "Like, comment, and share features built for the literary community" },
                  { title: "Content Creation Tools", desc: "Intuitive writing interface with rich text editing capabilities" },
                  { title: "Discovery Engine", desc: "Personalized content recommendations for readers and writers" },
                  { title: "Community Features", desc: "Book clubs, discussion groups, and author following" },
                  { title: "Cross-Platform Sync", desc: "Seamless experience across all devices and platforms" }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-tribe-blue/5 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-tribe-blue mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-earth-900 mb-2">{feature.title}</h4>
                      <p className="text-earth-700 text-sm">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-tribe-blue/5 p-8 rounded-xl mb-12">
                <h3 className="text-2xl font-display font-bold mb-4 text-tribe-blue">Impact & Results</h3>
                <div className="grid md:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-tribe-blue mb-2">85%</div>
                    <div className="text-earth-700">Performance Improvement</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-tribe-blue mb-2">95%</div>
                    <div className="text-earth-700">Crash Reduction</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-tribe-blue mb-2">60%</div>
                    <div className="text-earth-700">Faster Development</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-tribe-blue mb-2">4.8★</div>
                    <div className="text-earth-700">App Store Rating</div>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Technologies Used</h2>
              
              <div className="flex flex-wrap gap-3 mb-12">
                {['React Native', 'TypeScript', 'Redux Toolkit', 'React Query', 'Styled Components', 'Flipper', 'CodePush', 'Firebase'].map((tech) => (
                  <span key={tech} className="px-4 py-2 bg-earth-100 text-earth-700 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-earth-100">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="bg-white p-8 md:p-12 rounded-xl shadow-sm max-w-4xl mx-auto text-center"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
              Need a Frontend Rebuild?
            </h2>
            <p className="text-earth-600 mb-8 max-w-2xl mx-auto">
              Let's transform your app's frontend into a scalable, performant platform that users love.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-tribe-blue hover:bg-tribe-blue/90">
                  Discuss Your Project
                </Button>
              </Link>
              <Link to="/trail-stories">
                <Button variant="outline" className="border-tribe-blue text-tribe-blue hover:bg-tribe-blue/10">
                  View More Case Studies
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default CaseStudyLivelyPencil;
