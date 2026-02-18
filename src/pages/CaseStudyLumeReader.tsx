import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, BookOpen, Sparkles, Zap, Shield, Globe, Smartphone, Cloud, Layers, Cpu } from 'lucide-react';
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
                                Study
                            </span>
                            <span className="px-3 py-1 rounded-full bg-tribe-blue/20 text-tribe-blue text-sm font-medium">
                                Education
                            </span>
                            <span className="px-3 py-1 rounded-full bg-tribe-blue/20 text-tribe-blue text-sm font-medium">
                                Flutter
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6">
                            <span className="text-tribe-blue">Lume Reader:</span> The Distraction-Free Reading App
                        </h1>

                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                            A production-ready MVP designed to deliver a clean, fast, and consistent reading experience across iOS and Android.
                        </p>

                        <div className="relative h-64 md:h-96 rounded-xl overflow-hidden shadow-2xl bg-earth-700">
                            <img
                                src="/lume reader/Lume Reader.png"
                                alt="Lume Reader Interface"
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
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="prose prose-lg max-w-none"
                        >
                            <div className="bg-tribe-blue/5 p-8 rounded-xl mb-12">
                                <h2 className="text-2xl font-display font-bold mb-4 text-tribe-blue">Project Description</h2>
                                <p className="text-earth-700 mb-0">
                                    Lume Reader is a mobile eBook reader application designed to deliver a clean, fast, and distraction-free experience. Developed by TTT as a production-ready MVP, it validates the core idea of a modern reading app while staying lean, scalable, and technically future-proof.
                                </p>
                            </div>

                            <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Problems We Solved</h2>
                            <p className="text-earth-700 mb-8">Lume Reader addresses common usability gaps found in existing eBook apps:</p>

                            <div className="grid md:grid-cols-2 gap-6 my-12">
                                {[
                                    { title: "Minimal UI", desc: "A reader-first interface with zero distractions." },
                                    { title: "Reliable Sync", desc: "Cross-device activity tracking for progress and highlights." },
                                    { title: "Offline-First", desc: "Local storage for uninterrupted access anywhere." },
                                    { title: "Cross-Platform", desc: "Consistent performance on Android & iOS using a single codebase." }
                                ].map((solution, idx) => (
                                    <div key={idx} className="p-5 bg-earth-50 rounded-xl border border-earth-100">
                                        <h4 className="font-bold text-earth-900 mb-2">{solution.title}</h4>
                                        <p className="text-earth-600 text-sm mb-0">{solution.desc}</p>
                                    </div>
                                ))}
                            </div>

                            <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Core Features & MVP Scope</h2>

                            <div className="space-y-8 my-12">
                                <div className="p-6 rounded-xl border border-earth-100 shadow-sm transition-all hover:shadow-md">
                                    <h4 className="font-bold text-earth-900 mb-4 flex items-center gap-2">
                                        <Cpu className="h-5 w-5 text-tribe-blue" />
                                        Advanced Reading Engine
                                    </h4>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 mb-0">
                                        {["Smooth page navigation", "EPUB, PDF, and TXT support", "Pinch-to-zoom functionality", "Adjustable text size", "Light & Dark modes", "Text selection & annotation"].map((item, i) => (
                                            <li key={i} className="text-earth-700 text-sm flex items-center gap-2">
                                                <div className="h-1.5 w-1.5 bg-tribe-blue rounded-full" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="p-6 rounded-xl border border-earth-100 shadow-sm transition-all hover:shadow-md">
                                    <h4 className="font-bold text-earth-900 mb-4 flex items-center gap-2">
                                        <Cloud className="h-5 w-5 text-tribe-blue" />
                                        Authentication & Cloud Sync
                                    </h4>
                                    <p className="text-earth-600 text-sm mb-4">Secure user-specific sync via Google and Email authentication:</p>
                                    <div className="flex flex-wrap gap-2">
                                        {["Reading Progress", "Bookmarks", "Highlights", "Notes"].map((tag) => (
                                            <span key={tag} className="px-3 py-1 bg-tribe-blue/10 text-tribe-blue text-xs font-medium rounded-full">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">The Offline-First Experience</h2>
                            <p className="text-earth-700 mb-6">
                                Architected for uninterrupted reading, eBook files are stored locally. Reading activity is cached during offline sessions and automatically synced once connectivity is restored.
                            </p>

                            <div className="bg-earth-900 text-white p-8 rounded-xl mb-12 shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <Sparkles className="h-24 w-24" />
                                </div>
                                <h3 className="text-2xl font-display font-bold mb-4 text-tribe-blue">UI/UX Design Ownership</h3>
                                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                                    With no finalized design provided by the client, TTT took full ownership of the visual language.
                                </p>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <h5 className="text-tribe-blue font-bold uppercase tracking-wider text-xs">AI-Assisted Design</h5>
                                        <p className="text-gray-400 text-sm">Automated exploration of layout structures, typography hierarchy, and color balance.</p>
                                    </div>
                                    <div className="space-y-2">
                                        <h5 className="text-tribe-blue font-bold uppercase tracking-wider text-xs">TTT Curation</h5>
                                        <p className="text-gray-400 text-sm">Manual refinement and validation to ensure technical feasibility and user comfort.</p>
                                    </div>
                                </div>
                            </div>

                            <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Technical Architecture</h2>

                            <div className="grid md:grid-cols-2 gap-8 my-12">
                                <div className="p-6 bg-earth-50 rounded-xl border border-earth-100">
                                    <h4 className="font-bold text-earth-900 mb-4 flex items-center gap-2">
                                        <Smartphone className="h-5 w-5 text-tribe-blue" />
                                        Mobile Frontend
                                    </h4>
                                    <div className="space-y-2">
                                        <p className="text-earth-700 text-sm"><strong>Framework:</strong> Flutter (Dart)</p>
                                        <p className="text-earth-700 text-xs text-earth-600">Chosen for consistent cross-platform UI and native-level performance from a single codebase.</p>
                                    </div>
                                </div>
                                <div className="p-6 bg-earth-50 rounded-xl border border-earth-100">
                                    <h4 className="font-bold text-earth-900 mb-4 flex items-center gap-2">
                                        <Layers className="h-5 w-5 text-tribe-blue" />
                                        Cloud Backend
                                    </h4>
                                    <div className="space-y-2">
                                        <p className="text-earth-700 text-sm"><strong>Platform:</strong> Supabase (PostgreSQL)</p>
                                        <p className="text-earth-700 text-xs text-earth-600">Powers secure auth, real-time sync, and metadata storage with enterprise-grade reliability.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2 pt-8 border-t">
                                {["Flutter", "Dart", "Supabase", "PostgreSQL", "Google Auth", "Offline-First", "AI-Driven UX"].map(tech => (
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
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.7 }}
                        className="bg-white p-8 md:p-12 rounded-xl shadow-sm max-w-4xl mx-auto text-center"
                    >
                        <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
                            Need a Production-Ready MVP?
                        </h2>
                        <p className="text-earth-600 mb-8 max-w-2xl mx-auto">
                            Let's build a lean, scalable product that validates your idea and sets the stage for growth.
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
