import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, ShoppingBag, Zap, Shield, Globe, Search, BarChart, Settings, Smartphone, Users } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CaseStudyVenlushop = () => {
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
                                E-commerce
                            </span>
                            <span className="px-3 py-1 rounded-full bg-tribe-blue/20 text-tribe-blue text-sm font-medium">
                                Anime Fashion
                            </span>
                            <span className="px-3 py-1 rounded-full bg-tribe-blue/20 text-tribe-blue text-sm font-medium">
                                Shopify
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6">
                            <span className="text-tribe-blue">VenluShop:</span> Anime-Inspired Global Retail
                        </h1>

                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                            A dynamic e-commerce platform bridging the gap between anime culture and high-performance activewear through a compelling, immersive storefront.
                        </p>

                        <div className="relative h-64 md:h-96 rounded-xl overflow-hidden shadow-2xl bg-earth-700">
                            <img
                                src="/venlu shop/VenluSHop.png"
                                alt="VenluShop Storefront"
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
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="prose prose-lg max-w-none"
                        >
                            <div className="bg-tribe-blue/5 p-8 rounded-xl mb-12">
                                <h2 className="text-2xl font-display font-bold mb-4 text-tribe-blue">Project Description</h2>
                                <p className="text-earth-700 mb-0">
                                    VenluShop is a dynamic online e-commerce platform selling anime-inspired gymwear, streetwear, and accessories. Built on Shopify, this platform combines clean product organization with a highly visual storefront to deliver an immersive shopping experience that connects with anime fans and activewear enthusiasts internationally.
                                </p>
                            </div>

                            <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Key Business Challenges</h2>
                            <p className="text-earth-700 mb-8">The client came to TTT with the challenge to:</p>

                            <div className="grid md:grid-cols-2 gap-6 my-12">
                                {[
                                    "Build a scalable platform for international apparel sales",
                                    "Organize complex product collections (Gymwear, Compressions, Jewelry)",
                                    "Enable dynamic filtering and category display",
                                    "Create visual product pages with multi-variant selections",
                                    "Maintain performance-optimized mobile experience",
                                    "Implement strategic marketing and subscription elements"
                                ].map((challenge, idx) => (
                                    <div key={idx} className="flex items-start gap-3 p-4 bg-earth-50 rounded-lg border border-earth-100">
                                        <div className="h-6 w-6 rounded-full bg-tribe-blue/10 flex items-center justify-center flex-shrink-0 mt-1">
                                            <span className="text-tribe-blue text-xs font-bold">{idx + 1}</span>
                                        </div>
                                        <p className="text-earth-700 text-sm font-medium mb-0">{challenge}</p>
                                    </div>
                                ))}
                            </div>

                            <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Features & Highlights</h2>

                            <div className="grid md:grid-cols-2 gap-8 my-12">
                                <div className="p-6 bg-earth-50 rounded-xl border border-earth-100">
                                    <h4 className="font-bold text-earth-900 mb-2 flex items-center gap-2">
                                        <ShoppingBag className="h-5 w-5 text-tribe-blue" />
                                        Cart & Checkout Optimization
                                    </h4>
                                    <p className="text-earth-600 text-sm">Advanced cart logic and secure payment gateway integration for frictionless transactions.</p>
                                </div>
                                <div className="p-6 bg-earth-50 rounded-xl border border-earth-100">
                                    <h4 className="font-bold text-earth-900 mb-2 flex items-center gap-2">
                                        <Users className="h-5 w-5 text-tribe-blue" />
                                        Customer Account System
                                    </h4>
                                    <p className="text-earth-600 text-sm">Dedicated customer dashboards for order tracking, profile management, and history.</p>
                                </div>
                                <div className="p-6 bg-earth-50 rounded-xl border border-earth-100">
                                    <h4 className="font-bold text-earth-900 mb-2 flex items-center gap-2">
                                        <BarChart className="h-5 w-5 text-tribe-blue" />
                                        Abandoned Cart Recovery
                                    </h4>
                                    <p className="text-earth-600 text-sm">Automated workflows to re-engage customers and recover lost sales opportunities.</p>
                                </div>
                                <div className="p-6 bg-earth-50 rounded-xl border border-earth-100">
                                    <h4 className="font-bold text-earth-900 mb-2 flex items-center gap-2">
                                        <Settings className="h-5 w-5 text-tribe-blue" />
                                        Inventory & Pricing Rules
                                    </h4>
                                    <p className="text-earth-600 text-sm">Configuration of dynamic pricing, automated discounts, and real-time inventory sync.</p>
                                </div>
                            </div>

                            <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">SEO & Growth Setup</h2>
                            <div className="bg-earth-50 p-6 rounded-xl border border-earth-100 my-8">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-tribe-blue" />
                                        <span className="text-sm font-medium">Structured Meta Architecture</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-tribe-blue" />
                                        <span className="text-sm font-medium">Technical SEO Implementation</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-tribe-blue" />
                                        <span className="text-sm font-medium">Schema Markup Strategy</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-tribe-blue" />
                                        <span className="text-sm font-medium">Optimized Product URL Structure</span>
                                    </div>
                                </div>
                            </div>

                            <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Performance Optimization</h2>
                            <div className="grid md:grid-cols-3 gap-6 my-12">
                                <div className="text-center p-4">
                                    <Zap className="h-8 w-8 text-tribe-blue mx-auto mb-3" />
                                    <h5 className="font-bold mb-1">Speed</h5>
                                    <p className="text-xs text-earth-600">Reduced script load & image compression</p>
                                </div>
                                <div className="text-center p-4">
                                    <Smartphone className="h-8 w-8 text-tribe-blue mx-auto mb-3" />
                                    <h5 className="font-bold mb-1">Mobile</h5>
                                    <p className="text-xs text-earth-600">Tailored UI/UX for hand-held shopping</p>
                                </div>
                                <div className="text-center p-4">
                                    <Globe className="h-8 w-8 text-tribe-blue mx-auto mb-3" />
                                    <h5 className="font-bold mb-1">Vitals</h5>
                                    <p className="text-xs text-earth-600">Optimized Core Web Vitals for rankings</p>
                                </div>
                            </div>

                            <div className="bg-earth-900 text-white p-8 rounded-xl mb-12 shadow-xl">
                                <h3 className="text-2xl font-display font-bold mb-6 text-tribe-blue">TTT’s Role & Responsibilities</h3>
                                <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="h-5 w-5 text-tribe-blue mt-1 flex-shrink-0" />
                                        <span className="text-gray-300">UX & Visuals alignment with brand identity</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="h-5 w-5 text-tribe-blue mt-1 flex-shrink-0" />
                                        <span className="text-gray-300">Strategy & Requirement gathering</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="h-5 w-5 text-tribe-blue mt-1 flex-shrink-0" />
                                        <span className="text-gray-300">Shopify theme setup & custom templates</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="h-5 w-5 text-tribe-blue mt-1 flex-shrink-0" />
                                        <span className="text-gray-300">Navigation & filter architecture</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="h-5 w-5 text-tribe-blue mt-1 flex-shrink-0" />
                                        <span className="text-gray-300">On-page design & catalog optimization</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="h-5 w-5 text-tribe-blue mt-1 flex-shrink-0" />
                                        <span className="text-gray-300">Responsive UI/UX delivery</span>
                                    </div>
                                </div>
                            </div>

                            <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Tech Stack</h2>
                            <div className="flex flex-wrap gap-3 mb-12">
                                {[
                                    'Shopify (Liquid Architecture)', 'Custom CSS & JavaScript',
                                    'Shopify Admin API', 'Klaviyo', 'Stripe',
                                    'Meta Pixel', 'SEO Structured Markup'
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
                            Ready to Launch Your Brand?
                        </h2>
                        <p className="text-earth-600 mb-8 max-w-2xl mx-auto">
                            Let's build a flaghsip e-commerce experience that connects your brand with a global audience.
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

export default CaseStudyVenlushop;
