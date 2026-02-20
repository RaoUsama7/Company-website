import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, CheckCircle, Palette, Layout, Eye, Users, MousePointer2, Layers, ChevronLeft, ChevronRight, Search, Compass, PenTool, Zap } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CaseStudyT2CDesign = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const sliderImages = [
        "/t2c design/1.png",
        "/t2c design/2.png",
        "/t2c design/3.png"
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
            title: "Discovery & Research",
            description: "Stakeholder alignment and competitive analysis to define key user pain points and goals.",
            icon: <Search className="h-6 w-6 text-tribe-blue" />
        },
        {
            title: "Experience Strategy",
            description: "Architecting information architecture and user journey mapping for a scalable product roadmap.",
            icon: <Compass className="h-6 w-6 text-tribe-blue" />
        },
        {
            title: "High-Fidelity Design",
            description: "Pixel-perfect UI in Figma using a scalable component system and responsive design structures.",
            icon: <PenTool className="h-6 w-6 text-tribe-blue" />
        },
        {
            title: "Prototyping & Validation",
            description: "Interactive prototypes and micro-interactions for early validation and user testing refinements.",
            icon: <Zap className="h-6 w-6 text-tribe-blue" />
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
                                Sports Management
                            </span>
                            <span className="px-3 py-1 rounded-full bg-tribe-blue/20 text-tribe-blue text-sm font-medium">
                                Figma Design System
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6">
                            <span className="text-tribe-blue">T2C Design:</span> Streamlining Sports Team Coordination
                        </h1>

                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                            A dynamic sports team management platform designed to streamline match scheduling, team coordination, and player communication through an energetic stadium-inspired visual identity.
                        </p>

                        <div className="relative group h-64 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-earth-900/20 border border-white/10">
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={currentIndex}
                                    src={sliderImages[currentIndex]}
                                    alt={`T2C Design Slide ${currentIndex + 1}`}
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
                            <h2 className="text-3xl font-display font-bold mb-4">The Design Strategy</h2>
                            <p className="text-earth-600 text-lg">Beyond aesthetics: How we solved complex utility with intuitive design.</p>
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
                            <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Stadium-Inspired Visual Identity</h2>
                            <p className="mb-6">
                                The T2C design language is built around an energetic stadium-inspired visual identity. We chose a high-performance palette that conveys energy and professional focus, ensuring that athletes, parents, and coaches feel part of a professional community.
                            </p>
                            <p className="mb-12">
                                Every part of the structured dashboard system was designed to ensure clarity, speed, and usability across both mobile and web platforms. By streamlining match scheduling and team coordination, we've created a platform that reduces administrative friction and enhances player communication.
                            </p>

                            <div className="bg-tribe-blue/5 p-8 rounded-2xl border-l-4 border-tribe-blue mb-12">
                                <h3 className="text-xl font-bold text-tribe-blue mb-4 text-center italic">"Great design isn't just how it looks, but how it empowers the community to grow."</h3>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="rounded-2xl overflow-hidden shadow-xl mb-12 border border-earth-100"
                            >
                                <img
                                    src="/t2c design/2.png"
                                    alt="T2C Design Interaction"
                                    className="w-full h-auto object-cover"
                                />
                                <div className="p-4 bg-earth-50 text-center text-sm text-earth-500 font-medium italic">
                                    Showcasing the seamless integration of scheduling and social interaction.
                                </div>
                            </motion.div>

                            <p className="mb-12">
                                Our focus was on creating a system that reduces cognitive load while maintaining a high level of feature richness. The result is a platform where users can move between management tasks and social interaction without missing a beat.
                            </p>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="rounded-2xl overflow-hidden shadow-xl mb-12 border border-earth-100"
                            >
                                <img
                                    src="/t2c design/3.png"
                                    alt="T2C Design System"
                                    className="w-full h-auto object-cover"
                                />
                                <div className="p-4 bg-earth-50 text-center text-sm text-earth-500 font-medium italic">
                                    A robust design system built for consistency and scale.
                                </div>
                            </motion.div>

                            <div className="grid md:grid-cols-2 gap-8 mt-16 pt-16 border-t border-earth-100">
                                <div>
                                    <h3 className="text-2xl font-display font-bold mb-4 text-earth-900">UI Philosophy</h3>
                                    <ul className="space-y-2 text-earth-600">
                                        <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-tribe-blue" /> Minimalism with purpose</li>
                                        <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-tribe-blue" /> Clear visual hierarchy</li>
                                        <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-tribe-blue" /> Modern typography & contrast</li>
                                        <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-tribe-blue" /> Conversion-oriented layout</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-display font-bold mb-4 text-earth-900">Project Expertise</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {["UI/UX Design", "User Experience Strategy", "Figma", "Wireframing", "Prototyping", "Design Systems", "Responsive Design", "Mobile App Design"].map(skill => (
                                            <span key={skill} className="px-3 py-1 bg-earth-50 text-earth-600 rounded-lg text-xs font-bold border border-earth-100">
                                                {skill}
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

export default CaseStudyT2CDesign;
