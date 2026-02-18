
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, CheckCircle, ShoppingBag, Palette, Search, Zap, Layout, BarChart3, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CaseStudyAvenir = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const sliderImages = [
        "/avenenir/main.png",
        "/avenenir/4.png",
        "/avenenir/6.png",
        "/avenenir/8.png",
        "/avenenir/10.png",
        "/avenenir/12.png"
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
                                Lifestyle E-commerce
                            </span>
                            <span className="px-3 py-1 rounded-full bg-tribe-blue/20 text-tribe-blue text-sm font-medium">
                                Shopify Plus
                            </span>
                            <span className="px-3 py-1 rounded-full bg-tribe-blue/20 text-tribe-blue text-sm font-medium">
                                Home Decor
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6">
                            <span className="text-tribe-blue">Avenir:</span> A Premium Home & Decor Destination
                        </h1>

                        <p className="text-xl text-stone-300 mb-8 leading-relaxed">
                            Transforming a curated vision of furniture and lifestyle into a high-performance, conversion-driven Shopify ecosystem.
                        </p>

                        <div className="relative group h-64 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-earth-900/20 border border-white/10">
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={currentIndex}
                                    src={sliderImages[currentIndex]}
                                    alt={`Avenir Project Slide ${currentIndex + 1}`}
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
                                    Avenir.pk is a premium online lifestyle destination offering a curated selection of home decor, furniture, and premium accessories.
                                </p>
                                <p className="text-earth-700 mb-0">
                                    TTT partnered with Avenir to build a fully functional Shopify-powered platform that simplifies scalable catalog management while delivering a modern, intuitive shopping UI.
                                </p>
                            </div>

                            <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Key Business Challenges</h2>
                            <p className="text-earth-700 mb-6 text-lg leading-relaxed">
                                The objective was to create a robust storefront that could showcase a diverse range of categories—from furniture and mirrors to lighting—without compromising on performance or visual clarity.
                            </p>

                            <div className="grid md:grid-cols-2 gap-8 mb-12">
                                <div className="bg-stone-50 p-6 rounded-xl">
                                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-stone-900">
                                        <Layout className="h-5 w-5 text-tribe-blue" />
                                        Catalog Complexity
                                    </h3>
                                    <p className="text-earth-700 text-sm">
                                        Organizing diverse product lines into intuitive collections for easy navigation and sophisticated filtering.
                                    </p>
                                </div>
                                <div className="bg-stone-50 p-6 rounded-xl">
                                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-stone-900">
                                        <Star className="h-5 w-5 text-tribe-blue" />
                                        Premium Branding
                                    </h3>
                                    <p className="text-earth-700 text-sm">
                                        Creating a visually engaging experience that mirrors Avenir's high-end lifestyle brand through custom UI elements.
                                    </p>
                                </div>
                            </div>

                            <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Core Features & Solutions</h2>
                            <div className="grid md:grid-cols-2 gap-6 mb-12">
                                <div className="flex gap-4 p-4 rounded-xl hover:bg-stone-50 transition-colors">
                                    <div className="bg-tribe-blue/10 p-3 rounded-lg h-fit">
                                        <Palette className="h-6 w-6 text-tribe-blue" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-stone-900">Custom Theme Dev</h4>
                                        <p className="text-earth-600 text-sm">Bespoke Liquid-based architecture tailored for high-impact product presentations and clean, minimal layouts.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-4 rounded-xl hover:bg-stone-50 transition-colors">
                                    <div className="bg-tribe-blue/10 p-3 rounded-lg h-fit">
                                        <Zap className="h-6 w-6 text-tribe-blue" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-stone-900">Performance First</h4>
                                        <p className="text-earth-600 text-sm">Optimized script loading and image compression to ensure fast load times and strong Core Web Vitals.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-4 rounded-xl hover:bg-stone-50 transition-colors">
                                    <div className="bg-tribe-blue/10 p-3 rounded-lg h-fit">
                                        <Search className="h-6 w-6 text-tribe-blue" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-stone-900">SEO Architecture</h4>
                                        <p className="text-earth-600 text-sm">Structured data schema implementation and optimized URL hierarchies for organic search dominance.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-4 rounded-xl hover:bg-stone-50 transition-colors">
                                    <div className="bg-tribe-blue/10 p-3 rounded-lg h-fit">
                                        <BarChart3 className="h-6 w-6 text-tribe-blue" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-stone-900">Conversion Focus</h4>
                                        <p className="text-earth-600 text-sm">Optimized user flows and abandoned cart recovery systems designed to maximize revenue and retention.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-stone-900 text-white p-8 rounded-xl mb-12 shadow-lg">
                                <h3 className="text-2xl font-display font-bold mb-6 text-tribe-blue">Stack & Responsibilities</h3>
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <h4 className="text-lg font-bold mb-4 text-tribe-blue/80">Platform Tech</h4>
                                        <ul className="space-y-2 text-sm text-stone-300">
                                            <li>Shopify E-commerce Engine</li>
                                            <li>Custom Liquid Templates</li>
                                            <li>Advanced CSS Interactivity</li>
                                            <li>Mobile-First Responsive UI</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold mb-4 text-tribe-blue/80">TTT Delivery</h4>
                                        <ul className="space-y-2 text-sm text-stone-300">
                                            <li>End-to-End Storefront Setup</li>
                                            <li>UX/UI Product Design</li>
                                            <li>Custom Collection Logic</li>
                                            <li>SEO & Performance Tuning</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Project Outcome</h2>
                            <p className="text-earth-700 mb-12 text-lg leading-relaxed">
                                The Avenir.pk launch established a significant digital footprint for the brand. By providing a scalable catalog structure and a high-performance shopping interface, we enabled Avenir to present their premium products with the elegance they deserve, resulting in improved user engagement and high sales conversion rates.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-stone-100">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.7 }}
                        className="bg-white p-8 md:p-12 rounded-xl shadow-sm max-w-4xl mx-auto text-center"
                    >
                        <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
                            Building a Premium Retail Business?
                        </h2>
                        <p className="text-stone-600 mb-8 max-w-2xl mx-auto">
                            We help lifestyle brands scale through custom Shopify solutions and conversion-focused design.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact">
                                <Button className="bg-tribe-blue hover:bg-tribe-blue/90">
                                    Consult Your Store Idea
                                </Button>
                            </Link>
                            <Link to="/trail-stories">
                                <Button variant="outline" className="border-tribe-blue text-tribe-blue hover:bg-tribe-blue/10">
                                    Explore More Results
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

export default CaseStudyAvenir;
