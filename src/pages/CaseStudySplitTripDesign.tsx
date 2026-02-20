import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, CheckCircle, Palette, Layout, Eye, Search, Map, Wallet, ChevronLeft, ChevronRight, Compass, Users, Layers } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CaseStudySplitTripDesign = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const sliderImages = [
        "/splittrip/11.png",
        "/splittrip/12.png",
        "/splittrip/13.png"
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
            title: "Safe Journeys",
            description: "Designing verified traveler profiles and real-time route maps for a secure road trip experience.",
            icon: <CheckCircle className="h-6 w-6 text-tribe-blue" />
        },
        {
            title: "Dark-Mode Foundation",
            description: "Utilizing a high-contrast dark foundation paired with vibrant action colors for high visibility and trust.",
            icon: <Palette className="h-6 w-6 text-tribe-blue" />
        },
        {
            title: "Atomic Mobility",
            description: "Building a structured and reusable Figma component system tailored for mobility interfaces.",
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
                                Travel Mobility
                            </span>
                            <span className="px-3 py-1 rounded-full bg-tribe-blue/20 text-tribe-blue text-sm font-medium">
                                Figma
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6">
                            <span className="text-tribe-blue">Split-Trip:</span> Safe & Social Road Trips
                        </h1>

                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                            A sleek, user-centered travel app interface designed to make road trips safe, social, and efficient through real-time trip listings and a modern dark-mode experience.
                        </p>

                        <div className="relative group h-64 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-earth-900/20 border border-white/10">
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={currentIndex}
                                    src={sliderImages[currentIndex]}
                                    alt={`Split-Trip Design Slide ${currentIndex + 1}`}
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
                            <h2 className="text-3xl font-display font-bold mb-4">Designing for Groups</h2>
                            <p className="text-earth-600 text-lg">How to balance individual preferences with collective planning.</p>
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
                            <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Modern Mobility Experience</h2>
                            <p className="mb-6">
                                Split-Trip's design language focuses on transparency and ease of navigation. We implemented a dark-mode foundation to provide a modern, premium feel that also reduces glare during night-time navigation, paired with vibrant accent colors to highlight critical actions.
                            </p>
                            <p className="mb-12">
                                The inclusion of verified traveler profiles and detailed route maps directly addresses user concerns about safety and efficiency. Every screen is part of a scalable project built in Figma, ensuring that the interface is as functional as it is visually striking.
                            </p>

                            <div className="bg-tribe-blue/5 p-8 rounded-2xl border-l-4 border-tribe-blue mb-12">
                                <h3 className="text-xl font-bold text-tribe-blue mb-4 text-center italic">"Travel planning should be the start of the fun, not a chore. We designed for the joy of discovery."</h3>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="rounded-2xl overflow-hidden shadow-xl mb-12 border border-earth-100"
                            >
                                <img
                                    src="/splittrip/12.png"
                                    alt="Split-Trip User Interface"
                                    className="w-full h-auto object-cover"
                                />
                                <div className="p-4 bg-earth-50 text-center text-sm text-earth-500 font-medium italic">
                                    Clean, intuitive expense sharing and itinerary planning.
                                </div>
                            </motion.div>

                            <p className="mb-12">
                                The design language focuses on transparency and ease of use. By combining social interaction with financial tools, we created a collaborative environment that makes travel planning part of the journey itself.
                            </p>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="rounded-2xl overflow-hidden shadow-xl mb-12 border border-earth-100"
                            >
                                <img
                                    src="/splittrip/13.png"
                                    alt="Split-Trip Expense Management"
                                    className="w-full h-auto object-cover"
                                />
                                <div className="p-4 bg-earth-50 text-center text-sm text-earth-500 font-medium italic">
                                    Simplifying group finances with elegant, easy-to-read visualizations.
                                </div>
                            </motion.div>

                            <div className="grid md:grid-cols-2 gap-12 mt-16 pt-16 border-t border-earth-100">
                                <section>
                                    <h3 className="text-2xl font-display font-bold mb-4 text-earth-900">UX Process</h3>
                                    <div className="space-y-4">
                                        {[
                                            { title: "Strategy", text: "Information architecture & user journey mapping for road trip logic." },
                                            { title: "Wireframing", text: "Usability-focused content placement for complex route data." },
                                            { title: "Hi-Fi UI", "text": "Pixel-perfect Figma designs with a mobile-first responsive layout." }
                                        ].map((item, i) => (
                                            <div key={i} className="flex gap-4">
                                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-tribe-blue/10 text-tribe-blue flex items-center justify-center font-bold text-sm">
                                                    {i + 1}
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-earth-900">{item.title}</h4>
                                                    <p className="text-sm text-earth-600">{item.text}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                <section>
                                    <h3 className="text-2xl font-display font-bold mb-4 text-earth-900">Usability & Accessibility</h3>
                                    <p className="text-earth-700 text-sm mb-6">
                                        Designed for high performance and accessibility in varying mobility environments.
                                    </p>
                                    <ul className="space-y-3">
                                        {[
                                            "Clear interaction feedback", "Logical navigation patterns",
                                            "Color contrast compliance", "Touch-friendly interaction spacing"
                                        ].map(item => (
                                            <li key={item} className="flex items-center gap-2 text-sm text-earth-600">
                                                <div className="w-1.5 h-1.5 rounded-full bg-tribe-blue" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </section>
                            </div>

                            <div className="mt-16 pt-16 border-t border-earth-100">
                                <h3 className="text-2xl font-display font-bold mb-6 text-earth-900 text-center">Project Expertise</h3>
                                <div className="flex flex-wrap justify-center gap-3">
                                    {["UI/UX Design", "Figma", "Travel Mobility Design", "Responsive Layouts", "Information Architecture", "Prototyping"].map(skill => (
                                        <span key={skill} className="px-5 py-2.5 bg-earth-50 text-earth-900 rounded-2xl text-[13px] font-bold border border-earth-100 shadow-sm hover:shadow-md transition-shadow">
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

export default CaseStudySplitTripDesign;
