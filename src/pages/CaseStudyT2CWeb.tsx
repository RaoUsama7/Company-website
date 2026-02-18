import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CaseStudyT2CWeb = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const sliderImages = [
        "/t2c latest.png",
        "/t2c/t2c main.png",
        "/t2c/4.png",
        "/t2c/6.png",
        "/t2c/8.png",
        "/t2c/10.png",
        "/t2c/12.png",
        "/t2c/14.png",
        "/t2c/16.png",
        "/t2c/18.png",
        "/t2c/20.png"
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
                                Sports Community
                            </span>
                            <span className="px-3 py-1 rounded-full bg-tribe-blue/20 text-tribe-blue text-sm font-medium">
                                Web Platform
                            </span>
                            <span className="px-3 py-1 rounded-full bg-tribe-blue/20 text-tribe-blue text-sm font-medium">
                                SaaS
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6">
                            <span className="text-tribe-blue">Team2Challenge (Web):</span> The Complete Club Dashboard
                        </h1>

                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                            A powerful web-based administration dashboard that simplifies how clubs, coaches, and administrators manage large-scale sports communities.
                        </p>

                        <div className="relative group h-64 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-earth-900/20 border border-white/10">
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={currentIndex}
                                    src={sliderImages[currentIndex]}
                                    alt={`T2C Project Slide ${currentIndex + 1}`}
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
                            <div className="bg-tribe-blue/5 p-8 rounded-xl mb-12">
                                <h2 className="text-2xl font-display font-bold mb-4 text-tribe-blue">Web Platform Overview</h2>
                                <p className="text-earth-700 mb-0">
                                    The T2C Web Dashboard provides the administrative spine for the entire ecosystem. While the mobile app focuses on real-time engagement for members and parents, the web platform empowers club owners and admins with deep analytical insights and complex management tools.
                                </p>
                            </div>

                            <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Administrative Control</h2>

                            <p className="text-earth-700 mb-6 text-lg leading-relaxed">
                                The web application handles the heavy lifting of roster management, bulk data imports, and financial tracking. Administrators can oversee every team within their organization, monitor attendance trends, and broadcast announcements across the entire platform from a central command center.
                            </p>

                            <div className="grid md:grid-cols-2 gap-8 my-12">
                                <div className="p-6 bg-earth-50 rounded-xl border border-earth-100">
                                    <h4 className="font-bold text-earth-900 mb-2">Centralized Roster Control</h4>
                                    <p className="text-earth-600 text-sm">Manage thousands of members across dozens of teams. Upload player rosters via CSV/Excel and automate welcome invitations.</p>
                                </div>
                                <div className="p-6 bg-earth-50 rounded-xl border border-earth-100">
                                    <h4 className="font-bold text-earth-900 mb-2">Advanced Analytics</h4>
                                    <p className="text-earth-600 text-sm">Visualize attendance trends, member growth, and engagement metrics to make data-driven decisions for your club.</p>
                                </div>
                                <div className="p-6 bg-earth-50 rounded-xl border border-earth-100">
                                    <h4 className="font-bold text-earth-900 mb-2">Global Content Management</h4>
                                    <p className="text-earth-600 text-sm">A full CMS for club-wide news, sponsor banners, and legal documents. Ensure every member has access to current information.</p>
                                </div>
                                <div className="p-6 bg-earth-50 rounded-xl border border-earth-100">
                                    <h4 className="font-bold text-earth-900 mb-2">Club-Level Customization</h4>
                                    <p className="text-earth-600 text-sm">Customize domains, branding, and role permissions to suit the specific governance model of your sports organization.</p>
                                </div>
                            </div>

                            <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Web Technical Stack</h2>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
                                <div className="p-6 bg-earth-50 rounded-xl border border-earth-100">
                                    <h4 className="font-bold text-earth-900 mb-2">Next.js 15</h4>
                                    <p className="text-earth-600 text-xs">Utilizing Server Components and Server Actions for high-performance administrative workflows.</p>
                                </div>
                                <div className="p-6 bg-earth-50 rounded-xl border border-earth-100">
                                    <h4 className="font-bold text-earth-900 mb-2">Redux Toolkit</h4>
                                    <p className="text-earth-600 text-xs">Robust state management for complex, multi-page administrative forms and data tables.</p>
                                </div>
                                <div className="p-6 bg-earth-50 rounded-xl border border-earth-100">
                                    <h4 className="font-bold text-earth-900 mb-2">RTK Query</h4>
                                    <p className="text-earth-600 text-xs">Efficient caching and synchronization with the NestJS backend to ensure real-time data accuracy.</p>
                                </div>
                                <div className="p-6 bg-earth-50 rounded-xl border border-earth-100">
                                    <h4 className="font-bold text-earth-900 mb-2">Tailwind CSS</h4>
                                    <p className="text-earth-600 text-xs">A responsive design system ensuring the dashboard is fully functional on both high-res monitors and tablets.</p>
                                </div>
                                <div className="p-6 bg-earth-50 rounded-xl border border-earth-100">
                                    <h4 className="font-bold text-earth-900 mb-2">Sanity & Prismic</h4>
                                    <p className="text-earth-600 text-xs">Integration with headless CMS for dynamic content delivery across multilingual club pages.</p>
                                </div>
                                <div className="p-6 bg-earth-50 rounded-xl border border-earth-100">
                                    <h4 className="font-bold text-earth-900 mb-2">Security</h4>
                                    <p className="text-earth-600 text-xs">Enterprise-grade RBAC (Role-Based Access Control) ensuring sensitive data is only accessible to authorized officials.</p>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-3 mb-12">
                                {[
                                    'Next.js 15', 'TypeScript', 'Redux Toolkit', 'RTK Query',
                                    'Tailwind CSS', 'Lucide Icons', 'NestJS Backend', 'PostgreSQL',
                                    'Sanity CMS', 'Prismic CMS', 'AWS Hosting'
                                ].map((tech) => (
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
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.7 }}
                        className="bg-white p-8 md:p-12 rounded-xl shadow-sm max-w-4xl mx-auto text-center"
                    >
                        <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
                            Ready to Modernize Your Club's Operations?
                        </h2>
                        <p className="text-earth-600 mb-8 max-w-2xl mx-auto">
                            Let's build a central command center that gives your administrators the tools they need to succeed.
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

export default CaseStudyT2CWeb;
