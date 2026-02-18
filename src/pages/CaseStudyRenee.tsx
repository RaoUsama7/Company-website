
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, CheckCircle, Cpu, Shield, Globe, Zap, BarChart3, Layout, ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CaseStudyRenee = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const sliderImages = [
        "/rene/main.png",
        "/rene/4.png",
        "/rene/6.png",
        "/rene/8.png",
        "/rene/10.png",
        "/rene/12.png"
    ];

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % sliderImages.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
    };

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
                                AI / ML
                            </span>
                            <span className="px-3 py-1 rounded-full bg-tribe-blue/20 text-tribe-blue text-sm font-medium">
                                Health & Wellness
                            </span>
                            <span className="px-3 py-1 rounded-full bg-tribe-blue/20 text-tribe-blue text-sm font-medium">
                                SaaS
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6">
                            <span className="text-tribe-blue">Renée:</span> AI-powered Emotional Support Companion
                        </h1>

                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                            Providing 24/7 judgment-free emotional support through a sophisticated AI-driven platform.
                        </p>

                        <div className="relative group h-64 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-earth-900/20 border border-white/10">
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={currentIndex}
                                    src={sliderImages[currentIndex]}
                                    alt={`Renée Project Slide ${currentIndex + 1}`}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                    className="w-full h-full object-contain"
                                />
                            </AnimatePresence>

                            {/* Navigation Arrows */}
                            <button
                                onClick={prevSlide}
                                aria-label="Previous slide"
                                className="absolute left-4 top-1/2 -translate-y-1/2 bg-earth-900/40 hover:bg-earth-900/60 backdrop-blur-md p-3 rounded-full text-white transition-all opacity-0 group-hover:opacity-100 z-10 border border-white/10"
                            >
                                <ChevronLeft className="h-6 w-6" />
                            </button>
                            <button
                                onClick={nextSlide}
                                aria-label="Next slide"
                                className="absolute right-4 top-1/2 -translate-y-1/2 bg-earth-900/40 hover:bg-earth-900/60 backdrop-blur-md p-3 rounded-full text-white transition-all opacity-0 group-hover:opacity-100 z-10 border border-white/10"
                            >
                                <ChevronRight className="h-6 w-6" />
                            </button>

                            {/* Indicators */}
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                                {sliderImages.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentIndex(index)}
                                        className={`h-1.5 transition-all duration-300 rounded-full ${index === currentIndex ? 'bg-tribe-blue w-8' : 'bg-white/30 w-4 hover:bg-white/50'
                                            }`}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>

                            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
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
                                    Renée is an AI-powered emotional support companion web application providing 24/7 judgment-free emotional support. The platform offers a safe conversational space for users dealing with stress, anxiety, and personal challenges.
                                </p>
                                <p className="text-earth-700 mb-0">
                                    Supported by modern web technologies and content-driven marketing infrastructure, Renée bridges the gap between traditional therapy and immediate emotional availability.
                                </p>
                            </div>

                            <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Project Story: The Problem</h2>
                            <p className="text-earth-700 mb-6 text-lg leading-relaxed">
                                Individuals often lack immediate access to emotional support. Traditional therapy requires appointments, carries significant costs, and may involve social stigma. Users needed an accessible, always-available emotional companion for moments of stress, anxiety, or personal difficulty.
                            </p>

                            <div className="grid md:grid-cols-2 gap-8 mb-12">
                                <div className="bg-earth-50 p-6 rounded-xl">
                                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                                        <Shield className="h-5 w-5 text-tribe-blue" />
                                        Core Problem
                                    </h3>
                                    <p className="text-earth-700 text-sm">
                                        Lack of immediate, affordable, and stigma-free emotional support for individuals experiencing daily stress and mental challenges.
                                    </p>
                                </div>
                                <div className="bg-earth-50 p-6 rounded-xl">
                                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                                        <Zap className="h-5 w-5 text-tribe-blue" />
                                        Project Nature
                                    </h3>
                                    <p className="text-earth-700 text-sm">
                                        A comprehensive product launch from scratch, including high-conversion marketing, blog platform, and robust CMS integration.
                                    </p>
                                </div>
                            </div>

                            <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Project Goals</h2>
                            <div className="grid md:grid-cols-2 gap-4 mb-12">
                                {[
                                    "Drive user acquisition through a compelling landing page and waitlist system.",
                                    "Establish content marketing presence in emotional wellness through a blog platform.",
                                    "Improve SEO visibility for emotional support and wellness keywords.",
                                    "Deliver high-performance pages with strong Core Web Vitals.",
                                    "Track user behavior and optimize conversion funnels using GA4 analytics."
                                ].map((goal, i) => (
                                    <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-lg border border-earth-100">
                                        <CheckCircle className="h-5 w-5 text-tribe-blue mt-1 flex-shrink-0" />
                                        <span className="text-earth-700 text-sm">{goal}</span>
                                    </div>
                                ))}
                            </div>

                            <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Key Features & Highlights</h2>
                            <div className="grid md:grid-cols-2 gap-6 mb-12">
                                <div className="flex gap-4">
                                    <div className="bg-tribe-blue/10 p-3 rounded-lg h-fit">
                                        <Layout className="h-6 w-6 text-tribe-blue" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-earth-900">High-Conversion UX</h4>
                                        <p className="text-earth-600 text-sm">Hero section, feature highlights, and waitlist CTAs designed for maximum engagement.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="bg-tribe-blue/10 p-3 rounded-lg h-fit">
                                        <Globe className="h-6 w-6 text-tribe-blue" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-earth-900">SEO & Content</h4>
                                        <p className="text-earth-600 text-sm">Dynamic blog routing with CMS-driven content and optimized metadata/Open Graph tags.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="bg-tribe-blue/10 p-3 rounded-lg h-fit">
                                        <Zap className="h-6 w-6 text-tribe-blue" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-earth-900">Performance First</h4>
                                        <p className="text-earth-600 text-sm">Static Generation (SSG) for speed and ISR for fresh blog updates, achieving top Web Vitals.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="bg-tribe-blue/10 p-3 rounded-lg h-fit">
                                        <BarChart3 className="h-6 w-6 text-tribe-blue" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-earth-900">Data-Driven Insights</h4>
                                        <p className="text-earth-600 text-sm">Custom GA4 event tracking for precise conversion and engagement measurement.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-earth-900 text-white p-8 rounded-xl mb-12">
                                <h3 className="text-2xl font-display font-bold mb-6 text-tribe-blue">Tech Stack</h3>
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <h4 className="text-lg font-bold mb-4 text-tribe-blue/80">Frontend</h4>
                                        <ul className="space-y-2 text-sm text-gray-300">
                                            <li>Next.js 15 (App Router)</li>
                                            <li>TypeScript</li>
                                            <li>Tailwind CSS v4</li>
                                            <li>Radix UI</li>
                                            <li>Lucide React</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold mb-4 text-tribe-blue/80">Backend & CMS</h4>
                                        <ul className="space-y-2 text-sm text-gray-300">
                                            <li>Prismic Headless CMS</li>
                                            <li>Prismic Slice Machine</li>
                                            <li>GraphQL API</li>
                                            <li>Google Analytics 4 (GA4)</li>
                                            <li>Vercel Edge Network</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Conclusion</h2>
                            <p className="text-earth-700 mb-12 text-lg leading-relaxed">
                                The Renée project successfully launched a sophisticated AI emotional support platform that prioritizes user privacy, accessibility, and high performance. By leveraging Next.js 15 and Prismic CMS, we delivered a scalable solution that empowers users to seek support whenever they need it, while providing the client with a powerful content-driven marketing machine.
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
                            Looking to Build an AI-Powered Future?
                        </h2>
                        <p className="text-earth-600 mb-8 max-w-2xl mx-auto">
                            Whether it's emotional wellness or enterprise AI, we help you bring intelligent solutions to life.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact">
                                <Button className="bg-tribe-blue hover:bg-tribe-blue/90">
                                    Discuss Your AI Project
                                </Button>
                            </Link>
                            <Link to="/trail-stories">
                                <Button variant="outline" className="border-tribe-blue text-tribe-blue hover:bg-tribe-blue/10">
                                    Explore More Stories
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

export default CaseStudyRenee;
