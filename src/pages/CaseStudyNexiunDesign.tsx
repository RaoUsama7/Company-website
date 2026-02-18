import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, CheckCircle, Palette, Layout, Eye, Search, BarChart3, Database, ChevronLeft, ChevronRight, Monitor, Cpu } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CaseStudyNexiunDesign = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const sliderImages = [
        "/lovable-uploads/826e8063-6d14-4d5a-a08b-97b1b84ecfa5.png",
        "/lovable-uploads/b0f6602c-d2b4-42ef-b2f8-c0b25fb03e8e.png",
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
            title: "Data Clarity",
            description: "Simplifying complex systemic data into digestible, actionable visual insights.",
            icon: <BarChart3 className="h-6 w-6 text-tribe-blue" />
        },
        {
            title: "Futuristic Canvas",
            description: "Leveraging a dark-core aesthetic with neon accents for a high-tech, authoritative feel.",
            icon: <Monitor className="h-6 w-6 text-tribe-blue" />
        },
        {
            title: "Systemic Scaling",
            description: "Building atomic design libraries that allow for rapid prototyping and consistent deployment.",
            icon: <Cpu className="h-6 w-6 text-tribe-blue" />
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
                                Dashboard Architecture
                            </span>
                            <span className="px-3 py-1 rounded-full bg-tribe-blue/20 text-tribe-blue text-sm font-medium">
                                Data Viz
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6">
                            <span className="text-tribe-blue">Nexiun:</span> Futuristic Data Visualization
                        </h1>

                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                            A deep dive into the design of high-fidelity dashboards that turn complex data into powerful, intuitive decision-making tools.
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
                            <h2 className="text-3xl font-display font-bold mb-4">The Nexiun Canvas</h2>
                            <p className="text-earth-600 text-lg">Balancing complexity and clarity in a high-density environment.</p>
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
                            <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">High-Fidelity Engineering</h2>
                            <p className="mb-6">
                                Nexiun required a design system that could handle massive data throughput while remaining visually light and responsive. We developed a proprietary spacing and sizing system that allows for maximum information density without causing cognitive overload.
                            </p>
                            <p className="mb-12">
                                The choice of a deep anthracite background with precision-tuned neon accents was more than just aesthetic—it promotes visual focus and reduces eye strain during long-term monitoring sessions. Every chart, table, and data point was custom-designed to be instantly interpretable.
                            </p>

                            <div className="bg-tribe-blue/5 p-8 rounded-2xl border-l-4 border-tribe-blue mb-12">
                                <h3 className="text-xl font-bold text-tribe-blue mb-4 text-center italic">"Complexity is a design challenge, clarity is the solution. Nexiun is the proof."</h3>
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
