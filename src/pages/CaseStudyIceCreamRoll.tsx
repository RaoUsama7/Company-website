
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, Gamepad2, Smartphone, Zap } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CaseStudyIceCreamRoll = () => {
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
                Gamification
              </span>
              <span className="px-3 py-1 rounded-full bg-tribe-blue/20 text-tribe-blue text-sm font-medium">
                Simulation
              </span>
              <span className="px-3 py-1 rounded-full bg-tribe-blue/20 text-tribe-blue text-sm font-medium">
                Unity
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6">
              <span className="text-tribe-blue">Ice Cream Roll:</span> A Delightful Dessert Simulation Game
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Creating an Engaging, Visually Rich Dessert Simulation for Broad Audience Appeal
            </p>

            <div className="relative h-64 md:h-96 rounded-xl overflow-hidden shadow-2xl">
              <img
                src="/lovable-uploads/0a80d8ac-9a2b-447d-9e61-23b6e38e5353.png"
                alt="Ice Cream Roll Game"
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
                  Ice Cream Roll is a highly engaging, visually rich dessert simulation game that appeals to a broad audience—from kids to casual players. Built with Unity, it offers scalable and creative mobile gameplay where users can design desserts, experiment with ingredients, and enjoy hands-on play mechanics while ensuring monetization-ready performance.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="text-center p-6 bg-gradient-to-b from-pink-50 to-pink-100 rounded-xl">
                  <Gamepad2 className="h-12 w-12 text-pink-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-pink-800 mb-2">Simulation Gaming</h3>
                  <p className="text-sm text-pink-700">Rich dessert creation and decoration mechanics</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-b from-purple-50 to-purple-100 rounded-xl">
                  <Smartphone className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-purple-800 mb-2">Cross-Platform</h3>
                  <p className="text-sm text-purple-700">Optimized for Android and iOS devices</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-b from-orange-50 to-orange-100 rounded-xl">
                  <Zap className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-orange-800 mb-2">Performance</h3>
                  <p className="text-sm text-orange-700">Lightweight assets for all device types</p>
                </div>
              </div>

              <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">🧩 Problem Statement</h2>

              <p className="text-earth-700 mb-6 text-lg leading-relaxed">
                The client approached us with a clear vision: to create a highly engaging, visually rich dessert simulation game that appeals to a broad audience—from kids to casual players. They needed a scalable and creative mobile game where users could design desserts, experiment with ingredients, and enjoy hands-on play mechanics while ensuring the app is monetization-ready, performant, and engaging from day one.
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
                <h3 className="text-lg font-semibold text-yellow-800 mb-3">Key Challenges</h3>
                <ul className="list-disc pl-6 text-yellow-700 space-y-2">
                  <li>Developing rich yet intuitive UI/UX for a young audience</li>
                  <li>Enabling complex interactions (frosting, slicing, decorating) without performance drops</li>
                  <li>Creating visually stunning yet lightweight assets suitable for mid to low-end devices</li>
                  <li>Seamless integration of monetization and engagement tools without breaking immersion</li>
                </ul>
              </div>

              <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Our Solution</h2>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {[
                  {
                    title: "Intuitive Dessert Creation",
                    desc: "Drag-and-drop interface for ice cream rolling, frosting, and decoration with realistic physics",
                    icon: "🍦"
                  },
                  {
                    title: "Visual Excellence",
                    desc: "High-quality 3D graphics optimized for performance across all mobile devices",
                    icon: "✨"
                  },
                  {
                    title: "Progressive Difficulty",
                    desc: "Unlockable ingredients, tools, and challenges that keep players engaged long-term",
                    icon: "🎯"
                  },
                  {
                    title: "Monetization Integration",
                    desc: "Unity Ads and IAP seamlessly integrated without disrupting gameplay flow",
                    icon: "💰"
                  },
                  {
                    title: "Multi-Device Optimization",
                    desc: "Scalable graphics and performance settings for smooth play on any device",
                    icon: "📱"
                  },
                  {
                    title: "Engaging Mechanics",
                    desc: "Satisfying tactile interactions with realistic ice cream physics and visual feedback",
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
                    <h4 className="font-semibold text-earth-900 mb-3">Game Engine</h4>
                    <ul className="space-y-1 text-sm text-earth-700">
                      <li>• Unity 3D</li>
                      <li>• C# Scripting</li>
                      <li>• Physics Simulation</li>
                      <li>• Animation System</li>
                      <li>• Particle Effects</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-earth-900 mb-3">Monetization</h4>
                    <ul className="space-y-1 text-sm text-earth-700">
                      <li>• Unity Ads</li>
                      <li>• Unity IAP</li>
                      <li>• Reward Videos</li>
                      <li>• Premium Unlocks</li>
                      <li>• Analytics Integration</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-earth-900 mb-3">Optimization</h4>
                    <ul className="space-y-1 text-sm text-earth-700">
                      <li>• Asset Compression</li>
                      <li>• LOD Systems</li>
                      <li>• Memory Management</li>
                      <li>• Texture Streaming</li>
                      <li>• Performance Profiling</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-tribe-blue/5 p-8 rounded-xl mb-12">
                <h3 className="text-2xl font-display font-bold mb-4 text-tribe-blue">Results & Impact</h3>
                <div className="grid md:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-tribe-blue mb-2">4.6★</div>
                    <div className="text-earth-700">App Store Rating</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-tribe-blue mb-2">85%</div>
                    <div className="text-earth-700">User Retention</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-tribe-blue mb-2">50K+</div>
                    <div className="text-earth-700">Downloads</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-tribe-blue mb-2">2.3min</div>
                    <div className="text-earth-700">Avg Session</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-pink-100 to-purple-100 p-8 rounded-xl">
                <h3 className="text-2xl font-display font-bold mb-4 text-pink-800">Player Feedback</h3>
                <p className="text-pink-700 mb-4">
                  "My daughter absolutely loves this game! The ice cream rolling is so satisfying and the graphics are beautiful. It's educational too - she's learning about colors and patterns while having fun. Definitely worth downloading!"
                </p>
                <p className="text-sm text-pink-600 font-medium">- Jessica L., Parent & Player</p>
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
              Ready to Create Engaging Games?
            </h2>
            <p className="text-earth-600 mb-8 max-w-2xl mx-auto">
              Let's build a game that captivates players and drives engagement across all platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-tribe-blue hover:bg-tribe-blue/90">
                  Start Your Game Project
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

export default CaseStudyIceCreamRoll;
