
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, Search, Bot, MessageSquare, Briefcase, TrendingUp, Shield, BarChart3, Database, Layers } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CaseStudyFundreef = () => {
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
                                AI / FinTech
                            </span>
                            <span className="px-3 py-1 rounded-full bg-tribe-blue/20 text-tribe-blue text-sm font-medium">
                                Marketplace
                            </span>
                            <span className="px-3 py-1 rounded-full bg-tribe-blue/20 text-tribe-blue text-sm font-medium">
                                SaaS
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6">
                            <span className="text-tribe-blue">Fundreef:</span> The AI-Powered Fundraising Ecosystem
                        </h1>

                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                            Bridging the gap between startups and investors with intelligent discovery, AI prep tools, and structured deal flow.
                        </p>

                        <div className="relative h-64 md:h-96 rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-teal-950/50">
                            <img
                                src="/fundreef/Fundreef.png"
                                alt="Fundreef AI Fundraising"
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
                            <div className="bg-tribe-blue/5 p-8 rounded-xl mb-12 border-l-4 border-tribe-blue">
                                <h2 className="text-2xl font-display font-bold mb-4 text-tribe-blue">Project Description</h2>
                                <p className="text-earth-700 mb-4">
                                    Fundreef is a comprehensive fundraising and investor matching platform connecting startups with high-value investors.
                                </p>
                                <p className="text-earth-700 mb-0">
                                    By leveraging AI-powered fundraising tools, CRM/pipeline management, and a robust investor database, the platform streamlines the capital-raising journey for both founders and investors.
                                </p>
                            </div>

                            <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Project Story: Solving Friction</h2>
                            <p className="text-earth-700 mb-6 text-lg leading-relaxed">
                                The fundraising landscape was fragmented. Startups struggled to find relevant investors, while investors lacked efficient deal discovery tools. The process was time-consuming, opaque, and often lacked proper preparation.
                            </p>

                            <div className="grid md:grid-cols-2 gap-8 mb-12">
                                <div className="bg-earth-50 p-6 rounded-xl">
                                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-earth-900">
                                        <Shield className="h-5 w-5 text-tribe-blue" />
                                        The Problem
                                    </h3>
                                    <p className="text-earth-700 text-sm">
                                        High friction in investor discovery and startup preparation, leading to long, inefficient fundraising cycles and missed opportunities.
                                    </p>
                                </div>
                                <div className="bg-earth-50 p-6 rounded-xl">
                                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-earth-900">
                                        <Bot className="h-5 w-5 text-tribe-blue" />
                                        The Solution
                                    </h3>
                                    <p className="text-earth-700 text-sm">
                                        A full-stack ecosystem featuring an AI-driven "Fundraising Copilot" and a sophisticated two-sided CRM marketplace.
                                    </p>
                                </div>
                            </div>

                            <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Strategic Goals</h2>
                            <div className="grid md:grid-cols-2 gap-4 mb-12">
                                {[
                                    "Efficient investor discovery based on sector, stage, and geography.",
                                    "Structured deal flow and CRM pipeline management for investors.",
                                    "AI-powered preparation tools: Pitch Deck & Term Sheet analyzers.",
                                    "Creation of a low-friction, high-transparency marketplace.",
                                    "Implementation of tiered, usage-based subscription monetization.",
                                    "Maintaining a high-quality, verified investor and fund database."
                                ].map((goal, i) => (
                                    <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-lg border border-earth-100">
                                        <CheckCircle className="h-5 w-5 text-tribe-blue mt-1 flex-shrink-0" />
                                        <span className="text-earth-700 text-sm">{goal}</span>
                                    </div>
                                ))}
                            </div>

                            <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Key Features</h2>
                            <div className="grid md:grid-cols-2 gap-6 mb-12">
                                <div className="flex gap-4 p-4 rounded-xl hover:bg-earth-50 transition-colors">
                                    <div className="bg-tribe-blue/10 p-3 rounded-lg h-fit">
                                        <Search className="h-6 w-6 text-tribe-blue" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-earth-900">Intelligent Discovery</h4>
                                        <p className="text-earth-600 text-sm">Meilisearch-powered database with faceted search and typo tolerance for investor matching.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-4 rounded-xl hover:bg-earth-50 transition-colors">
                                    <div className="bg-tribe-blue/10 p-3 rounded-lg h-fit">
                                        <Bot className="h-6 w-6 text-tribe-blue" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-earth-900">AI Fundraising Suite</h4>
                                        <p className="text-earth-600 text-sm">Pitch deck analyzer, term sheet generator, and valuation calculators integrated via Gemini API.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-4 rounded-xl hover:bg-earth-50 transition-colors">
                                    <div className="bg-tribe-blue/10 p-3 rounded-lg h-fit">
                                        <Database className="h-6 w-6 text-tribe-blue" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-earth-900">CRM & Deal Flow</h4>
                                        <p className="text-earth-600 text-sm">Actionable pipeline management for investors to track interest, due diligence, and deal progress.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-4 rounded-xl hover:bg-earth-50 transition-colors">
                                    <div className="bg-tribe-blue/10 p-3 rounded-lg h-fit">
                                        <Layers className="h-6 w-6 text-tribe-blue" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-earth-900">Subscription Engine</h4>
                                        <p className="text-earth-600 text-sm">Dynamic Stripe-based monetization with real-time enforcement of usage limits and tiers.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-emerald-950 text-white p-8 rounded-xl mb-12 shadow-lg border border-emerald-800">
                                <h3 className="text-2xl font-display font-bold mb-6 text-tribe-blue">Technical Ecosystem</h3>
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <h4 className="text-lg font-bold mb-4 text-tribe-blue/80">Frontend Stack</h4>
                                        <ul className="space-y-2 text-sm text-emerald-100/80">
                                            <li>Livewire 3.5 & Blade</li>
                                            <li>Alpine.js & Tailwind CSS</li>
                                            <li>ApexCharts for Visual Analytics</li>
                                            <li>Real-time WebSockets (Chat)</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold mb-4 text-tribe-blue/80">Backend Architecture</h4>
                                        <ul className="space-y-2 text-sm text-emerald-100/80">
                                            <li>Laravel 10 (PHP 8.1+)</li>
                                            <li>Google Gemini API Integration</li>
                                            <li>Python AI Microservice</li>
                                            <li>Meilisearch (Laravel Scout)</li>
                                            <li>Redis Caching & Queue Processing</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Conclusion</h2>
                            <p className="text-earth-700 mb-12 text-lg leading-relaxed">
                                The Fundreef project redefined how startups prepare for and execute their fundraising rounds. By combining advanced AI analysis with a high-performance marketplace architecture, we successfully built a platform that not only matches capital with opportunity but provides the tools necessary for founders to succeed.
                            </p>
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
                            Developing a Complex Marketplace?
                        </h2>
                        <p className="text-earth-600 mb-8 max-w-2xl mx-auto">
                            From AI-driven matching to secure financial ecosystems, we build the foundations for your industry's next big platform.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact">
                                <Button className="bg-tribe-blue hover:bg-tribe-blue/90">
                                    Build Your Marketplace
                                </Button>
                            </Link>
                            <Link to="/trail-stories">
                                <Button variant="outline" className="border-tribe-blue text-tribe-blue hover:bg-tribe-blue/10">
                                    Explore More Case Studies
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

export default CaseStudyFundreef;
