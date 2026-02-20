import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, CheckCircle, Palette, Layout, Eye, Search, BookOpen, Sparkles, ChevronLeft, ChevronRight, Baby, GraduationCap } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CaseStudyTalkieTotzDesign = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const sliderImages = [
        "/talkitotz design/7.png",
        "/talkitotz design/8.png",
        "/talkitotz design/9.png",
        "/talkitotz design/10.png"
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
            title: "Emotional Warmth",
            description: "Designing an interface that focuses on emotional connection and intuitive interaction for young learners.",
            icon: <Sparkles className="h-6 w-6 text-tribe-blue" />
        },
        {
            title: "Growth Identity",
            description: "Implementing a soft green visual identity that symbolizes growth, mirroring the child's learning journey.",
            icon: <Palette className="h-6 w-6 text-tribe-blue" />
        },
        {
            title: "Structured Design",
            description: "Using a scalable Figma design system to ensure consistency across all learning modules and interactions.",
            icon: <Layout className="h-6 w-6 text-tribe-blue" />
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
                                Early Learning
                            </span>
                            <span className="px-3 py-1 rounded-full bg-tribe-blue/20 text-tribe-blue text-sm font-medium">
                                Figma
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6">
                            <span className="text-tribe-blue">TalkieTotz:</span> Enhancing Early Language Learning
                        </h1>

                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                            A modern, child-friendly mobile app interface designed to enhance early language learning through a soft green visual identity that symbolizes growth and development.
                        </p>

                        <div className="relative group h-64 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-earth-900/20 border border-white/10">
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={currentIndex}
                                    src={sliderImages[currentIndex]}
                                    alt={`TalkieTotz Design Slide ${currentIndex + 1}`}
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
                            <h2 className="text-3xl font-display font-bold mb-4">Designing for Play</h2>
                            <p className="text-earth-600 text-lg">Creating an educational platform that feels like an adventure.</p>
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
                            <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Psychology of Growth</h2>
                            <p className="mb-6">
                                TalkieTotz required a design strategy that prioritizes emotional warmth and clarity. We chose a soft green visual identity to symbolize growth and development, creating an environment where children feel encouraged and safe to explore language.
                            </p>
                            <p className="mb-12">
                                Every layout is built with intuitive interaction in mind, ensuring that both children and parents can navigate the platform with ease. Progress-driven feedback is integrated throughout the journey, celebrating every small win in the learning process.
                            </p>

                            <div className="bg-tribe-blue/5 p-8 rounded-2xl border-l-4 border-tribe-blue mb-12">
                                <h3 className="text-xl font-bold text-tribe-blue mb-4 text-center italic">"We didn't just design an app; we designed a bridge for families to learn together."</h3>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="rounded-2xl overflow-hidden shadow-xl mb-12 border border-earth-100"
                            >
                                <img
                                    src="/talkitotz design/9.png"
                                    alt="TalkieTotz Playful Interface"
                                    className="w-full h-auto object-cover"
                                />
                                <div className="p-4 bg-earth-50 text-center text-sm text-earth-500 font-medium italic">
                                    Vibrant, high-contrast layouts designed for maximum engagement for young learners.
                                </div>
                            </motion.div>

                            <p className="mb-12">
                                We chose a color palette that is stimulating but not overwhelming, ensuring that the primary educational content always remains the center of attention. Every button, icon, and illustration was crafted to be friendly and approachable.
                            </p>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="rounded-2xl overflow-hidden shadow-xl mb-12 border border-earth-100"
                            >
                                <img
                                    src="/talkitotz design/10.png"
                                    alt="TalkieTotz Progress Dashboard"
                                    className="w-full h-auto object-cover"
                                />
                                <div className="p-4 bg-earth-50 text-center text-sm text-earth-500 font-medium italic">
                                    Intelligent progress tracking for parents, made simple and visual.
                                </div>
                            </motion.div>

                            <div className="grid md:grid-cols-2 gap-12 mt-16 pt-16 border-t border-earth-100">
                                <div>
                                    <h3 className="text-2xl font-display font-bold mb-4 text-earth-900">UI Philosophy</h3>
                                    <p className="text-earth-700 text-sm mb-6 leading-relaxed">
                                        The visual direction focused on conversion-oriented layout structures and frictionless user navigation, ensuring every interface decision was aligned with usability and accessibility.
                                    </p>
                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-3 text-sm text-earth-600 font-medium italic">
                                            <div className="w-1.5 h-1.5 rounded-full bg-tribe-blue" /> "Human-centered design methodology"
                                        </li>
                                        <li className="flex items-center gap-3 text-sm text-earth-600 font-medium italic">
                                            <div className="w-1.5 h-1.5 rounded-full bg-tribe-blue" /> "Performance-oriented layouts"
                                        </li>
                                        <li className="flex items-center gap-3 text-sm text-earth-600 font-medium italic">
                                            <div className="w-1.5 h-1.5 rounded-full bg-tribe-blue" /> "Minimalism with purpose"
                                        </li>
                                    </ul>
                                </div>

                                <div className="p-6 bg-earth-50 rounded-2xl border border-earth-100 shadow-inner">
                                    <h3 className="text-xl font-display font-bold mb-4 text-earth-900">Agency-Ready Handoff</h3>
                                    <p className="text-earth-600 text-sm mb-4">
                                        Reducing development friction through organized developer documentation and named components.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {[
                                            "Auto-layout enabled", "Design tokens", "Figma Inspect ready", "Responsive breakdown"
                                        ].map(item => (
                                            <span key={item} className="px-3 py-1 bg-white border border-earth-100 rounded-lg text-[10px] font-bold uppercase tracking-wider text-earth-400">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-16 pt-16 border-t border-earth-100">
                                <h3 className="text-2xl font-display font-bold mb-6 text-earth-900 text-center">Project Expertise</h3>
                                <div className="flex flex-wrap justify-center gap-2">
                                    {["UI/UX Design", "Figma", "Early Learning UX", "Prototyping", "Design Systems", "Mobile App Design", "Information Architecture"].map(skill => (
                                        <span key={skill} className="px-4 py-2 bg-tribe-blue/5 text-tribe-blue border border-tribe-blue/10 rounded-xl text-xs font-bold">
                                            {skill}
                                        </span>
                                    ))}
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

export default CaseStudyTalkieTotzDesign;
