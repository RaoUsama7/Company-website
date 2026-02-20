import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, CheckCircle, Palette, Layout, Eye, Search, BarChart3, Database, ChevronLeft, ChevronRight, Monitor, Cpu, Layers } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CaseStudyNexiunDesign = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const sliderImages = [
        "/nexiun/4.png",
        "/nexiun/5.png",
        "/nexiun/6.png"
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

    const designSteps = [
        {
            title: "Real-Time Discovery",
            description: "Designing seamless flows for users to find and connect with matching profiles instantly.",
            icon: <Search className="h-6 w-6 text-tribe-blue" />
        },
        {
            title: "Soft Gradient System",
            description: "Utilizing a warm, sophisticated color palette to build user trust and emotional resonance.",
            icon: <Palette className="h-6 w-6 text-tribe-blue" />
        },
        {
            title: "Scalable UI Kit",
            description: "Building a comprehensive Figma component library for rapid iteration and consistent styling.",
            icon: <Layers className="h-6 w-6 text-tribe-blue" />
        }
    ];

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
                                UI/UX Design
                            </span>
                            <span className="px-3 py-1 rounded-full bg-tribe-blue/20 text-tribe-blue text-sm font-medium">
                                Social Networking
                            </span>
                            <span className="px-3 py-1 rounded-full bg-tribe-blue/20 text-tribe-blue text-sm font-medium">
                                AI Interactions
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6">
                            <span className="text-tribe-blue">Nexiun:</span> Meet Lasting Connections
                        </h1>

                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                            A sleek, user-centered social networking app focused on real-time discovery and AI-driven interactions, designed with a balance of warmth and sophistication.
                        </p>

                        <div className="relative group h-64 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-earth-900/20 border border-white/10">
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={currentIndex}
                                    src={sliderImages[currentIndex]}
                                    alt={`Nexiun Design Slide ${currentIndex + 1}`}
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
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Design Process */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-display font-bold mb-4">The Nexiun Experience</h2>
                            <p className="text-earth-600 text-lg">Balancing warmth and sophistication in social connectivity.</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 mb-16">
                            {designSteps.map((step, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="p-6 bg-earth-50 rounded-2xl border border-earth-100 hover:shadow-lg transition-shadow"
                                >
                                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-4">
                                        {step.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                    <p className="text-earth-600 text-sm leading-relaxed">{step.description}</p>
                                </motion.div>
                            ))}
                        </div>

                        <div className="prose prose-lg max-w-none text-earth-700">
                            <div className="mb-12 p-6 bg-earth-50 rounded-2xl border border-earth-100">
                                <p className="text-earth-900 font-medium italic text-lg leading-relaxed mb-0">
                                    "Modern, scalable UI/UX design crafted in Figma with a structured design system, responsive layouts, and developer-ready handoff — built to enhance usability and drive product growth."
                                </p>
                            </div>

                            <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">User-Centered Connectivity</h2>
                            <p className="mb-6">
                                Nexiun required a design system that could foster authentic connections while maintaining a modern, high-tech edge. We developed a soft gradient color system that creates a welcoming environment, encouraging users to engage and build trust.
                            </p>
                            <p className="mb-12">
                                From the initial onboarding screens to complex subscription models and connection requests, every interaction was crafted to be intuitive and rewarding. The use of AI-driven interactions is balanced with a human-centric layout that prioritizes ease of use and discovery.
                            </p>

                            <div className="bg-tribe-blue/5 p-8 rounded-2xl border-l-4 border-tribe-blue mb-12">
                                <h3 className="text-xl font-bold text-tribe-blue mb-4 text-center italic">"Complexity is a design challenge, clarity is the solution. Nexiun is the proof."</h3>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="rounded-2xl overflow-hidden shadow-xl mb-12 border border-blue-900/30 bg-blue-950/20"
                            >
                                <img
                                    src="/nexiun/5.png"
                                    alt="Nexiun Dashboard Interface"
                                    className="w-full h-auto object-cover"
                                />
                                <div className="p-4 bg-earth-900/50 text-center text-sm text-gray-400 font-medium italic">
                                    A futuristic approach to high-density information management.
                                </div>
                            </motion.div>

                            <p className="mb-12">
                                By prioritizing data hierarchy and visual grouping, we ensured that even the most complex datasets remain accessible. The Nexiun design language is built to evolve, providing a solid foundation for future data-driven features.
                            </p>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="rounded-2xl overflow-hidden shadow-xl mb-12 border border-blue-900/30 bg-blue-950/20"
                            >
                                <img
                                    src="/nexiun/6.png"
                                    alt="Nexiun Analytics View"
                                    className="w-full h-auto object-cover"
                                />
                                <div className="p-4 bg-earth-900/50 text-center text-sm text-gray-400 font-medium italic">
                                    Integrating real-time analytics with futuristic aesthetics.
                                </div>
                            </motion.div>

                            <div className="mt-16 pt-16 border-t border-earth-100 flex flex-col md:flex-row gap-12">
                                <div className="flex-1">
                                    <h3 className="text-2xl font-display font-bold mb-4 text-earth-900">General Results</h3>
                                    <p className="text-earth-600 leading-relaxed">
                                        The redesigned interface significantly improved usability, visual consistency, and user flow clarity. The structured design system also ensured scalability for future feature expansion and faster development cycles. Every interface decision was aligned with usability, accessibility, and business impact.
                                    </p>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-display font-bold mb-4 text-earth-900">Skillset</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {["UI/UX Design", "Social Networking Design", "Figma", "Design Systems", "Interaction Design", "Responsive Layouts", "AI Interface Design"].map(item => (
                                            <span key={item} className="px-3 py-1 bg-tribe-blue/5 text-tribe-blue border border-tribe-blue/20 rounded-full text-xs font-bold">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default CaseStudyNexiunDesign;
