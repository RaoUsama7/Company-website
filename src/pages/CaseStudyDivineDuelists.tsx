
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, Sword, Brain, Trophy } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CaseStudyDivineDuelists = () => {
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
                Gaming
              </span>
              <span className="px-3 py-1 rounded-full bg-tribe-blue/20 text-tribe-blue text-sm font-medium">
                Strategy
              </span>
              <span className="px-3 py-1 rounded-full bg-tribe-blue/20 text-tribe-blue text-sm font-medium">
                Card Game
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6">
              <span className="text-tribe-blue">Divine Duelists:</span> Strategy Meets Power
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Category: Strategy, RPG, Card Game | Platform: Android & iOS | Engine: Unity
            </p>

            <div className="relative h-64 md:h-96 rounded-xl overflow-hidden shadow-2xl">
              <img
                src="/lovable-uploads/6d4bd372-b964-406e-9f75-bbebf64cc458.png"
                alt="Divine Duelists Card Game"
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
                <h2 className="text-2xl font-display font-bold mb-4 text-tribe-blue">📖 Project Overview</h2>
                <p className="text-earth-700 mb-0">
                  Divine Duelists is a self-published, tactical card battle RPG built entirely using Unity. It offers players a deep, strategic deck-building experience with evolving AI battles, boss challenges, and card synergies. Designed for fans of collectible card games (CCGs) and turn-based RPGs, this game emphasizes strategic thinking, deck customization, and replayability in an ever-evolving battlefield.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="text-center p-6 bg-gradient-to-b from-red-50 to-red-100 rounded-xl">
                  <Sword className="h-12 w-12 text-red-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-red-800 mb-2">Tactical Combat</h3>
                  <p className="text-sm text-red-700">Deep turn-based strategy with card synergies</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-b from-purple-50 to-purple-100 rounded-xl">
                  <Brain className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-purple-800 mb-2">Evolving AI</h3>
                  <p className="text-sm text-purple-700">Adaptive opponents that learn from player strategies</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-b from-yellow-50 to-yellow-100 rounded-xl">
                  <Trophy className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-yellow-800 mb-2">Competitive Ladder</h3>
                  <p className="text-sm text-yellow-700">Ranked play with seasonal rewards and tournaments</p>
                </div>
              </div>

              <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Game Design Philosophy</h2>

              <p className="text-earth-700 mb-6 text-lg leading-relaxed">
                Divine Duelists was designed from the ground up to challenge the conventions of mobile card games. Instead of relying on pay-to-win mechanics or simple match-3 gameplay, we created a strategic experience that rewards skill, planning, and deck-building mastery.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">Core Design Principles</h3>
                <ul className="list-disc pl-6 text-blue-700 space-y-2">
                  <li><strong>Strategy over luck</strong> - Every card draw and move should matter</li>
                  <li><strong>Balanced progression</strong> - Skill progression through gameplay, not payment</li>
                  <li><strong>Evolving meta</strong> - Regular balance updates and new card releases</li>
                  <li><strong>Deep customization</strong> - Hundreds of unique deck combinations</li>
                  <li><strong>Competitive integrity</strong> - Fair matchmaking and anti-cheat systems</li>
                </ul>
              </div>

              <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Key Features & Mechanics</h2>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {[
                  {
                    title: "Deck Building System",
                    desc: "Choose from 200+ unique cards across 5 different factions with distinct playstyles",
                    icon: "🃏",
                    color: "bg-indigo-50"
                  },
                  {
                    title: "Tactical Grid Combat",
                    desc: "Position-based battles where placement and timing determine victory",
                    icon: "⚔️",
                    color: "bg-red-50"
                  },
                  {
                    title: "Evolving AI Opponents",
                    desc: "Machine learning AI that adapts to popular strategies and counter-plays",
                    icon: "🤖",
                    color: "bg-purple-50"
                  },
                  {
                    title: "Campaign Mode",
                    desc: "20-hour story campaign with boss battles and unlockable cards",
                    icon: "📖",
                    color: "bg-green-50"
                  },
                  {
                    title: "Ranked Multiplayer",
                    desc: "Competitive ladder system with monthly seasons and exclusive rewards",
                    icon: "🏆",
                    color: "bg-yellow-50"
                  },
                  {
                    title: "Card Synergy System",
                    desc: "Complex interactions between cards create emergent strategies",
                    icon: "🔮",
                    color: "bg-cyan-50"
                  }
                ].map((feature, index) => (
                  <div key={index} className={`flex items-start gap-4 p-6 ${feature.color} rounded-xl border`}>
                    <span className="text-3xl">{feature.icon}</span>
                    <div>
                      <h4 className="font-semibold text-earth-900 mb-2">{feature.title}</h4>
                      <p className="text-earth-700 text-sm">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Technical Achievement</h2>

              <p className="text-earth-700 mb-6 text-lg leading-relaxed">
                Building a competitive card game requires robust networking, real-time synchronization, and sophisticated AI systems. Divine Duelists showcases our expertise in creating scalable multiplayer experiences with Unity.
              </p>

              <div className="bg-earth-50 p-8 rounded-xl mb-12">
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <h4 className="font-semibold text-earth-900 mb-3">Game Engine</h4>
                    <ul className="space-y-1 text-sm text-earth-700">
                      <li>• Unity 3D (2023.1)</li>
                      <li>• C# & Unity NetCode</li>
                      <li>• Mirror Networking</li>
                      <li>• Scriptable Objects</li>
                      <li>• Addressable Assets</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-earth-900 mb-3">Backend Services</h4>
                    <ul className="space-y-1 text-sm text-earth-700">
                      <li>• Node.js & Socket.io</li>
                      <li>• MongoDB</li>
                      <li>• Redis for matchmaking</li>
                      <li>• AWS GameLift</li>
                      <li>• Anti-cheat validation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-earth-900 mb-3">AI & Analytics</h4>
                    <ul className="space-y-1 text-sm text-earth-700">
                      <li>• TensorFlow.NET</li>
                      <li>• Behavior Trees</li>
                      <li>• Unity Analytics</li>
                      <li>• Custom telemetry</li>
                      <li>• A/B testing framework</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Game Balance & Meta Evolution</h2>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-orange-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-orange-800 mb-4">Data-Driven Balance</h3>
                  <ul className="space-y-2 text-orange-700 text-sm">
                    <li>• Real-time win rate tracking per card</li>
                    <li>• Automated balance alerts for OP strategies</li>
                    <li>• Player feedback integration</li>
                    <li>• Monthly balance patches</li>
                  </ul>
                </div>

                <div className="bg-teal-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-teal-800 mb-4">Evolving Meta</h3>
                  <ul className="space-y-2 text-teal-700 text-sm">
                    <li>• New card releases every 6 weeks</li>
                    <li>• Seasonal mechanics and themes</li>
                    <li>• Community tournaments</li>
                    <li>• Pro player consulting program</li>
                  </ul>
                </div>
              </div>

              <div className="bg-tribe-blue/5 p-8 rounded-xl mb-12">
                <h3 className="text-2xl font-display font-bold mb-4 text-tribe-blue">Player Engagement & Success</h3>
                <div className="grid md:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-tribe-blue mb-2">45min</div>
                    <div className="text-earth-700">Average Session</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-tribe-blue mb-2">85%</div>
                    <div className="text-earth-700">7-Day Retention</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-tribe-blue mb-2">4.7★</div>
                    <div className="text-earth-700">Player Rating</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-tribe-blue mb-2">50K+</div>
                    <div className="text-earth-700">Active Players</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-100 to-red-100 p-8 rounded-xl">
                <h3 className="text-2xl font-display font-bold mb-4 text-purple-800">Community Champion</h3>
                <p className="text-purple-700 mb-4">
                  "Divine Duelists brings back the depth and strategy that made me fall in love with card games. Every match feels like a chess game where both players are constantly adapting. The AI opponents actually challenge me to improve my deck building, and the ranked system feels genuinely competitive without being pay-to-win."
                </p>
                <p className="text-sm text-purple-600 font-medium">- Marcus 'DragonLord' Chen, Top 100 Ranked Player</p>
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
              Ready to Build the Next Great Game?
            </h2>
            <p className="text-earth-600 mb-8 max-w-2xl mx-auto">
              Let's create strategic, engaging gaming experiences that challenge players and build lasting communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-tribe-blue hover:bg-tribe-blue/90">
                Start Your Game Project
              </Button>
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

export default CaseStudyDivineDuelists;
