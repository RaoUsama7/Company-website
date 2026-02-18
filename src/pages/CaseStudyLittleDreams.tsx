
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, Brain, Zap, Shield } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CaseStudyLittleDreams = () => {
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
                AI/ML
              </span>
              <span className="px-3 py-1 rounded-full bg-tribe-blue/20 text-tribe-blue text-sm font-medium">
                Mobile App
              </span>
              <span className="px-3 py-1 rounded-full bg-tribe-blue/20 text-tribe-blue text-sm font-medium">
                Storytelling
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6">
              <span className="text-tribe-blue">Little Dreams:</span> AI-Powered Bedtime Magic
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              How TTT Engineered a Personalized Storytelling App That Scales Imagination and Revenue
            </p>

            <div className="relative h-64 md:h-96 rounded-xl overflow-hidden shadow-2xl">
              <img
                src="/lovable-uploads/f6b70bdc-127d-42e9-979e-4de34287c471.png"
                alt="Little Dreams App"
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
                  Little Dreams blends AI, UX, and payment systems into one seamless storytelling experience for children and parents. Our challenge? Bring this vision to life with ChatGPT, real-time token logic, secure auth, and smooth payments—all wrapped in an intuitive, kid-friendly interface.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="text-center p-6 bg-gradient-to-b from-purple-50 to-purple-100 rounded-xl">
                  <Brain className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-purple-800 mb-2">AI-Powered</h3>
                  <p className="text-sm text-purple-700">ChatGPT integration for personalized stories</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-b from-blue-50 to-blue-100 rounded-xl">
                  <Zap className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-blue-800 mb-2">Real-Time</h3>
                  <p className="text-sm text-blue-700">Instant story generation and token management</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-b from-green-50 to-green-100 rounded-xl">
                  <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-green-800 mb-2">Secure</h3>
                  <p className="text-sm text-green-700">Safe authentication and payment processing</p>
                </div>
              </div>

              <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">🧩 Problem Statement</h2>

              <p className="text-earth-700 mb-6 text-lg leading-relaxed">
                The founders of Little Dreams had a powerful idea: <strong>Use AI to create personalized bedtime stories that adapt to a child's age and interests.</strong>
              </p>

              <p className="text-earth-700 mb-8 text-lg leading-relaxed">
                But the execution needed to be seamless—from story generation to storage, from token management to secure payments. They needed a platform that felt magical to kids and effortless to parents, while maintaining low latency, high reliability, and a sustainable business model powered by subscriptions and in-app coins.
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
                <h3 className="text-lg font-semibold text-yellow-800 mb-3">Key Challenges</h3>
                <ul className="list-disc pl-6 text-yellow-700 space-y-2">
                  <li>Integrate ChatGPT API for real-time story generation</li>
                  <li>Implement token-based system for story purchases</li>
                  <li>Create child-safe authentication and parental controls</li>
                  <li>Design intuitive UI for both children and parents</li>
                  <li>Build scalable payment and subscription system</li>
                  <li>Ensure fast, reliable story delivery</li>
                </ul>
              </div>

              <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Our Solution</h2>

              <p className="text-earth-700 mb-6 text-lg leading-relaxed">
                We built Little Dreams as a comprehensive platform that seamlessly integrates AI storytelling with user management and monetization:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {[
                  {
                    title: "AI Story Engine",
                    desc: "ChatGPT integration with custom prompts for age-appropriate, personalized bedtime stories",
                    icon: "🤖"
                  },
                  {
                    title: "Token System",
                    desc: "Flexible coin-based economy allowing parents to purchase story credits",
                    icon: "🪙"
                  },
                  {
                    title: "Parental Dashboard",
                    desc: "Complete control over child profiles, story preferences, and spending limits",
                    icon: "👨‍👩‍👧‍👦"
                  },
                  {
                    title: "Story Library",
                    desc: "Personal collection of generated stories with favorites and sharing options",
                    icon: "📚"
                  },
                  {
                    title: "Payment Integration",
                    desc: "Secure Stripe integration for subscriptions and one-time purchases",
                    icon: "💳"
                  },
                  {
                    title: "Child-Safe Design",
                    desc: "Colorful, intuitive interface designed specifically for young users",
                    icon: "🎨"
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

              <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Technical Architecture</h2>

              <div className="bg-earth-50 p-8 rounded-xl mb-12">
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <h4 className="font-semibold text-earth-900 mb-3">Frontend</h4>
                    <ul className="space-y-1 text-sm text-earth-700">
                      <li>• Flutter (iOS/Android)</li>
                      <li>• TypeScript</li>
                      <li>• Redux Toolkit</li>
                      <li>• React Query</li>
                      <li>• Lottie Animations</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-earth-900 mb-3">Backend</h4>
                    <ul className="space-y-1 text-sm text-earth-700">
                      <li>• Node.js & Express</li>
                      <li>• OpenAI GPT-4 API</li>
                      <li>• PostgreSQL</li>
                      <li>• Redis Cache</li>
                      <li>• JWT Authentication</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-earth-900 mb-3">Services</h4>
                    <ul className="space-y-1 text-sm text-earth-700">
                      <li>• Stripe Payments</li>
                      <li>• AWS S3 Storage</li>
                      <li>• Push Notifications</li>
                      <li>• Analytics</li>
                      <li>• Content Moderation</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-tribe-blue/5 p-8 rounded-xl mb-12">
                <h3 className="text-2xl font-display font-bold mb-4 text-tribe-blue">Results & Impact</h3>
                <div className="grid md:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-tribe-blue mb-2">10K+</div>
                    <div className="text-earth-700">Stories Generated</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-tribe-blue mb-2">95%</div>
                    <div className="text-earth-700">Parent Satisfaction</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-tribe-blue mb-2">2.3s</div>
                    <div className="text-earth-700">Avg Story Generation</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-tribe-blue mb-2">4.9★</div>
                    <div className="text-earth-700">App Store Rating</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-8 rounded-xl">
                <h3 className="text-2xl font-display font-bold mb-4 text-purple-800">The Magic in Action</h3>
                <p className="text-purple-700 mb-4">
                  "My daughter Emma asks for her 'dream stories' every night now. The app somehow knows she loves unicorns and adventures, and every story feels like it was written just for her. As a parent, I love that I can set limits and she's learning to read along with the audio!"
                </p>
                <p className="text-sm text-purple-600 font-medium">- Sarah M., Parent & Beta Tester</p>
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
              Ready to Build AI-Powered Magic?
            </h2>
            <p className="text-earth-600 mb-8 max-w-2xl mx-auto">
              Let's create an AI-powered experience that delights users and drives revenue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-tribe-blue hover:bg-tribe-blue/90">
                  Start Your AI Project
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

export default CaseStudyLittleDreams;
