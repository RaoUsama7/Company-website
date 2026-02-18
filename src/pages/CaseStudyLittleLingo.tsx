
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, Globe, Users, BookOpen } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CaseStudyLittleLingo = () => {
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
                Education
              </span>
              <span className="px-3 py-1 rounded-full bg-tribe-blue/20 text-tribe-blue text-sm font-medium">
                Language Learning
              </span>
              <span className="px-3 py-1 rounded-full bg-tribe-blue/20 text-tribe-blue text-sm font-medium">
                Mobile App
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6">
              <span className="text-tribe-blue">Little Lingo:</span> Language Learning That Grows With Kids
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              How TTT Revamped a Buggy Codebase into a Vibrant, Multilingual EdTech Platform
            </p>

            <div className="relative h-64 md:h-96 rounded-xl overflow-hidden shadow-2xl">
              <img
                src="/lovable-uploads/ede72a27-07fd-482a-8246-02db292f3af7.png"
                alt="Little Lingo App"
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
                <p className="text-earth-700 mb-0">
                  Little Lingo makes early language learning fun, safe, and scalable. Designed for kids and their parents, it delivers colorful, interactive flashcards with multilingual audio across 30+ languages. The challenge? The initial build was buggy, incomplete, and missing key features.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="text-center p-6 bg-gradient-to-b from-green-50 to-green-100 rounded-xl">
                  <Globe className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-green-800 mb-2">30+ Languages</h3>
                  <p className="text-sm text-green-700">Multilingual flashcards with native audio</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-b from-blue-50 to-blue-100 rounded-xl">
                  <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-blue-800 mb-2">Parental Controls</h3>
                  <p className="text-sm text-blue-700">Safe learning environment with progress tracking</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-b from-purple-50 to-purple-100 rounded-xl">
                  <BookOpen className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-purple-800 mb-2">Interactive Learning</h3>
                  <p className="text-sm text-purple-700">Gamified vocabulary building for children</p>
                </div>
              </div>

              <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">❗️ Problem Statement</h2>

              <p className="text-earth-700 mb-6 text-lg leading-relaxed">
                The client approached us with an exciting vision—a playful, multilingual vocabulary learning app for children. But the codebase was incomplete, unstable, and feature-incomplete.
              </p>

              <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
                <h3 className="text-lg font-semibold text-red-800 mb-3">Critical Issues Blocking Release</h3>
                <ul className="list-disc pl-6 text-red-700 space-y-2">
                  <li><strong>Missing parental controls</strong> - No way for parents to monitor progress or set restrictions</li>
                  <li><strong>Broken audio playback</strong> - Multilingual pronunciation features not working</li>
                  <li><strong>Unimplemented decks</strong> - Flashcard system was incomplete and non-functional</li>
                  <li><strong>No analytics integration</strong> - Impossible to track user engagement or learning progress</li>
                  <li><strong>Unstable architecture</strong> - Frequent crashes and poor performance</li>
                </ul>
              </div>

              <p className="text-earth-700 mb-8 text-lg leading-relaxed">
                They needed a full-stack intervention: feature completion, bug resolution, analytics integration, and a scalable backend to support new languages and flashcards in real time.
              </p>

              <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Our Comprehensive Solution</h2>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-earth-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-earth-900 mb-4">Phase 1: Stabilization</h3>
                  <ul className="space-y-2 text-earth-700">
                    <li>• Code audit and bug fixing</li>
                    <li>• Performance optimization</li>
                    <li>• Memory leak resolution</li>
                    <li>• Crash prevention measures</li>
                  </ul>
                </div>

                <div className="bg-earth-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-earth-900 mb-4">Phase 2: Feature Development</h3>
                  <ul className="space-y-2 text-earth-700">
                    <li>• Complete flashcard system</li>
                    <li>• Multilingual audio integration</li>
                    <li>• Parental control dashboard</li>
                    <li>• Progress tracking system</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Key Features Delivered</h2>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {[
                  {
                    title: "Interactive Flashcard System",
                    desc: "Colorful, engaging flashcards with swipe gestures and audio pronunciation",
                    icon: "🎴"
                  },
                  {
                    title: "30+ Language Support",
                    desc: "Native audio recordings and culturally appropriate imagery for each language",
                    icon: "🌍"
                  },
                  {
                    title: "Parental Dashboard",
                    desc: "Complete oversight of learning progress, time limits, and content access",
                    icon: "👨‍👩‍👧‍👦"
                  },
                  {
                    title: "Progress Analytics",
                    desc: "Detailed learning analytics with visual progress reports for parents",
                    icon: "📊"
                  },
                  {
                    title: "Offline Mode",
                    desc: "Download flashcard decks for learning without internet connection",
                    icon: "📱"
                  },
                  {
                    title: "Gamification",
                    desc: "Rewards, streaks, and achievements to motivate young learners",
                    icon: "🎮"
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-4 p-6 bg-tribe-blue/5 rounded-xl">
                    <span className="text-3xl">{feature.icon}</span>
                    <div>
                      <h4 className="font-semibold text-earth-900 mb-2">{feature.title}</h4>
                      <p className="text-earth-700 text-sm">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Technical Implementation</h2>

              <div className="bg-earth-50 p-8 rounded-xl mb-12">
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <h4 className="font-semibold text-earth-900 mb-3">Mobile App</h4>
                    <ul className="space-y-1 text-sm text-earth-700">
                      <li>• React Native</li>
                      <li>• TypeScript</li>
                      <li>• React Query</li>
                      <li>• React Navigation</li>
                      <li>• React Native Sound</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-earth-900 mb-3">Backend</h4>
                    <ul className="space-y-1 text-sm text-earth-700">
                      <li>• Node.js & Express</li>
                      <li>• MongoDB</li>
                      <li>• AWS S3 (Audio Files)</li>
                      <li>• Redis Cache</li>
                      <li>• JWT Authentication</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-earth-900 mb-3">Analytics</h4>
                    <ul className="space-y-1 text-sm text-earth-700">
                      <li>• Google Analytics</li>
                      <li>• Custom Learning Metrics</li>
                      <li>• Crash Reporting</li>
                      <li>• Performance Monitoring</li>
                      <li>• A/B Testing</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-tribe-blue/5 p-8 rounded-xl mb-12">
                <h3 className="text-2xl font-display font-bold mb-4 text-tribe-blue">Results & Impact</h3>
                <div className="grid md:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-tribe-blue mb-2">30+</div>
                    <div className="text-earth-700">Languages Supported</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-tribe-blue mb-2">95%</div>
                    <div className="text-earth-700">Crash Reduction</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-tribe-blue mb-2">80%</div>
                    <div className="text-earth-700">User Retention</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-tribe-blue mb-2">4.8★</div>
                    <div className="text-earth-700">App Store Rating</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-100 to-blue-100 p-8 rounded-xl">
                <h3 className="text-2xl font-display font-bold mb-4 text-green-800">Parent & Educator Feedback</h3>
                <p className="text-green-700 mb-4">
                  "Little Lingo has transformed how my 5-year-old learns languages. The app is intuitive enough for her to use independently, but I love having complete control over her learning time and progress. The multilingual audio is incredibly clear and helps with proper pronunciation."
                </p>
                <p className="text-sm text-green-600 font-medium">- Maria Rodriguez, Bilingual Educator & Parent</p>
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
              Ready to Build Educational Excellence?
            </h2>
            <p className="text-earth-600 mb-8 max-w-2xl mx-auto">
              Let's create an educational platform that engages learners and delivers measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-tribe-blue hover:bg-tribe-blue/90">
                  Start Your EdTech Project
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

export default CaseStudyLittleLingo;
