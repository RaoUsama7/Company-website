import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, BookOpen, Sparkles, Zap, Shield, Globe } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CaseStudyLumeReader = () => {
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
                                Social Platform
                            </span>
                            <span className="px-3 py-1 rounded-full bg-tribe-blue/20 text-tribe-blue text-sm font-medium">
                                Reading
                            </span>
                            <span className="px-3 py-1 rounded-full bg-tribe-blue/20 text-tribe-blue text-sm font-medium">
                                Mobile App
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6">
                            <span className="text-tribe-blue">Lume Reader:</span> Illuminating the Literary World
                        </h1>

                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                            A next-generation social reading platform designed to connect readers, authors, and critics through an immersive, community-driven experience.
                        </p>

                        <div className="relative h-64 md:h-96 rounded-xl overflow-hidden shadow-2xl bg-earth-700 flex items-center justify-center border border-white/10">
                            <div className="text-center">
                                <BookOpen className="h-16 w-16 text-tribe-blue/20 mx-auto mb-4" />
                                <p className="text-earth-500 font-display font-medium uppercase tracking-widest">Lume Reader Platform Preview</p>
                            </div>
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
                                    Lume Reader was born from the desire to make reading less of a solitary activity and more of a shared journey. We built a platform that combines the focus of a premium e-reader with the engagement of a modern social network, creating a digital sanctuary for book lovers.
                                </p>
                            </div>

                            <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">The Social Reading Revolution</h2>

                            <p className="text-earth-700 mb-6 text-lg leading-relaxed">
                                Our goal was to solve the fragmentation of the literary ecosystem. By integrating reading tools with discussion forums, live book clubs, and direct author interaction, Lume Reader provides a unified space where every page turn can spark a conversation.
                            </p>

                            <div className="grid md:grid-cols-2 gap-8 my-12">
                                <div className="p-6 bg-earth-50 rounded-xl border border-earth-100">
                                    <h4 className="font-bold text-earth-900 mb-2">Immersive Reading Engine</h4>
                                    <p className="text-earth-600 text-sm">A highly customizable e-reader interface that adapts to the reader's environment, preferences, and accessibility needs.</p>
                                </div>
                                <div className="p-6 bg-earth-50 rounded-xl border border-earth-100">
                                    <h4 className="font-bold text-earth-900 mb-2">Live Book Clubs</h4>
                                    <p className="text-earth-600 text-sm">Real-time discussion groups synced to specific chapters, allowing readers to share thoughts as they experience the story.</p>
                                </div>
                                <div className="p-6 bg-earth-50 rounded-xl border border-earth-100">
                                    <h4 className="font-bold text-earth-900 mb-2">Author Connect</h4>
                                    <p className="text-earth-600 text-sm">Direct channels for authors to host Q&A sessions, share exclusive drafts, and engage with their most dedicated fans.</p>
                                </div>
                                <div className="p-6 bg-earth-50 rounded-xl border border-earth-100">
                                    <h4 className="font-bold text-earth-900 mb-2">Curated Discovery</h4>
                                    <p className="text-earth-600 text-sm">AI-driven recommendations that go beyond genre, matching readers based on emotional resonance and thematic depth.</p>
                                </div>
                            </div>

                            {/* Image Placeholder */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="my-16 relative aspect-video rounded-2xl overflow-hidden bg-earth-900 flex items-center justify-center border border-earth-100 shadow-2xl"
                            >
                                <div className="text-center p-8">
                                    <Sparkles className="h-10 w-10 text-tribe-blue mb-4 mx-auto" />
                                    <p className="text-earth-400 font-display font-medium uppercase tracking-widest text-sm">Interactive Reader Interface Visualization</p>
                                </div>
                            </motion.div>

                            <div className="bg-earth-50 p-8 rounded-xl mb-12">
                                <h3 className="text-2xl font-display font-bold mb-6 text-earth-900">Core Features</h3>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {[
                                        "Cross-platform Synchronization",
                                        "Offline Reading Capabilities",
                                        "Margin Notes & Social Sharing",
                                        "Gamified Reading Goals",
                                        "In-app Literary Marketplace",
                                        "Advanced DRM Integration"
                                    ].map((feature) => (
                                        <div key={feature} className="flex items-start gap-3">
                                            <CheckCircle className="h-6 w-6 text-tribe-blue mt-1 flex-shrink-0" />
                                            <span className="font-medium text-earth-900">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Technical Stack</h2>

                            <div className="flex flex-wrap gap-3 mb-12">
                                {['React Native', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS', 'WebSockets'].map((tech) => (
                                    <span key={tech} className="px-4 py-2 bg-earth-100 text-earth-700 rounded-full text-sm font-medium">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="bg-tribe-blue/5 p-8 rounded-xl mb-12">
                                <h3 className="text-2xl font-display font-bold mb-4 text-tribe-blue">Project Impact</h3>
                                <div className="grid md:grid-cols-3 gap-6 text-center">
                                    <div>
                                        <div className="text-3xl font-bold text-tribe-blue mb-2">250k+</div>
                                        <div className="text-earth-700 text-sm">Active Readers</div>
                                    </div>
                                    <div>
                                        <div className="text-3xl font-bold text-tribe-blue mb-2">12m+</div>
                                        <div className="text-earth-700 text-sm">Pages Read Daily</div>
                                    </div>
                                    <div>
                                        <div className="text-3xl font-bold text-tribe-blue mb-2">85%</div>
                                        <div className="text-earth-700 text-sm">Retention Rate</div>
                                    </div>
                                </div>
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
                            Ready to Build a Community?
                        </h2>
                        <p className="text-earth-600 mb-8 max-w-2xl mx-auto">
                            Let's create a digital space where your audience can connect, share, and grow.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact">
                                <Button className="bg-tribe-blue hover:bg-tribe-blue/90">
                                    Start Your Project
                                </Button>
                            </Link>
                            <Link to="/trail-stories">
                                <Button variant="outline" className="border-tribe-blue text-tribe-blue hover:bg-tribe-blue/10">
                                    Return to Stories
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

export default CaseStudyLumeReader;
