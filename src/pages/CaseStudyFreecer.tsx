
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, ShoppingCart, Zap, Search, Globe, Layout, BarChart, Shield } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CaseStudyFreecer = () => {
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
                                Shopify
                            </span>
                            <span className="px-3 py-1 rounded-full bg-tribe-blue/20 text-tribe-blue text-sm font-medium">
                                Luxury Branding
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6">
                            <span className="text-tribe-blue">Freecer.at:</span> Next-Gen E-commerce Excellence
                        </h1>

                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                            A high-performance, luxury-branded shopping experience optimized for conversion, SEO, and global scale.
                        </p>

                        <div className="relative h-64 md:h-96 rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-gray-800/50 flex items-center justify-center">
                            <div className="text-center p-8">
                                <ShoppingCart className="h-16 w-16 text-tribe-blue mx-auto mb-4 opacity-50" />
                                <p className="text-tribe-blue font-display text-2xl font-bold">Freecer.at Storefront</p>
                                <p className="text-gray-400 mt-2">Premium Retail Experience</p>
                            </div>
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
                                <h2 className="text-2xl font-display font-bold mb-4 text-tribe-blue">Project Overview</h2>
                                <p className="text-earth-700 mb-4">
                                    FREECER.AT is an advanced e-commerce platform designed to provide a seamless and efficient online shopping experience. It combines robust backend functionality with a user-friendly frontend interface.
                                </p>
                                <p className="text-earth-700 mb-0">
                                    Built to be scalable, secure, and responsive, the platform ensures accessibility across all devices while maintaining a high-impact, luxury aesthetic.
                                </p>
                            </div>

                            <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Key Functionalities</h2>

                            <div className="grid md:grid-cols-2 gap-8 mb-12">
                                <div className="bg-earth-50 p-6 rounded-xl">
                                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-earth-900">
                                        <ShoppingCart className="h-5 w-5 text-tribe-blue" />
                                        eCommerce Core
                                    </h3>
                                    <ul className="text-earth-700 text-sm space-y-2 list-none p-0">
                                        <li className="flex items-center gap-2"><CheckCircle className="h-3 w-3 text-tribe-blue" /> Advanced Cart & Checkout Optimization</li>
                                        <li className="flex items-center gap-2"><CheckCircle className="h-3 w-3 text-tribe-blue" /> Secure Payment Gateway (Stripe)</li>
                                        <li className="flex items-center gap-2"><CheckCircle className="h-3 w-3 text-tribe-blue" /> Abandoned Cart Recovery (Klaviyo)</li>
                                        <li className="flex items-center gap-2"><CheckCircle className="h-3 w-3 text-tribe-blue" /> Persistent Cart Across Sessions</li>
                                    </ul>
                                </div>
                                <div className="bg-earth-50 p-6 rounded-xl">
                                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-earth-900">
                                        <Zap className="h-5 w-5 text-tribe-blue" />
                                        Performance & Vitals
                                    </h3>
                                    <ul className="text-earth-700 text-sm space-y-2 list-none p-0">
                                        <li className="flex items-center gap-2"><CheckCircle className="h-3 w-3 text-tribe-blue" /> Lazy Loading Optimization</li>
                                        <li className="flex items-center gap-2"><CheckCircle className="h-3 w-3 text-tribe-blue" /> Image Compression Strategy</li>
                                        <li className="flex items-center gap-2"><CheckCircle className="h-3 w-3 text-tribe-blue" /> Reduced Script Load</li>
                                        <li className="flex items-center gap-2"><CheckCircle className="h-3 w-3 text-tribe-blue" /> Core Web Vitals Excellence</li>
                                    </ul>
                                </div>
                            </div>

                            <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Growth & Global Reach</h2>
                            <div className="grid md:grid-cols-2 gap-6 mb-12">
                                <div className="flex gap-4 p-4 rounded-xl hover:bg-earth-50 transition-colors">
                                    <div className="bg-tribe-blue/10 p-3 rounded-lg h-fit">
                                        <Search className="h-6 w-6 text-tribe-blue" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-earth-900">SEO Architecture</h4>
                                        <p className="text-earth-600 text-sm">Structured meta architecture, Schema implementation, and optimized product URLs for maximum visibility.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-4 rounded-xl hover:bg-earth-50 transition-colors">
                                    <div className="bg-tribe-blue/10 p-3 rounded-lg h-fit">
                                        <Globe className="h-6 w-6 text-tribe-blue" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-earth-900">Internationalization</h4>
                                        <p className="text-earth-600 text-sm">Multi-language support with region-based currency detection and geo-targeted content display.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-4 rounded-xl hover:bg-earth-50 transition-colors">
                                    <div className="bg-tribe-blue/10 p-3 rounded-lg h-fit">
                                        <Layout className="h-6 w-6 text-tribe-blue" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-earth-900">Luxury Branding</h4>
                                        <p className="text-earth-600 text-sm">Conversion-focused product pages with scroll-based animations and custom Liquid theme enhancements.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-4 rounded-xl hover:bg-earth-50 transition-colors">
                                    <div className="bg-tribe-blue/10 p-3 rounded-lg h-fit">
                                        <Shield className="h-6 w-6 text-tribe-blue" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-earth-900">Secure Operations</h4>
                                        <p className="text-earth-600 text-sm">Inventory management, dynamic pricing rules, and location-based tax automation for seamless global trade.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-900 text-white p-8 rounded-xl mb-12 shadow-lg">
                                <h3 className="text-2xl font-display font-bold mb-6 text-tribe-blue">Technical Stack</h3>
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <h4 className="text-lg font-bold mb-4 text-tribe-blue/80">E-commerce Platform</h4>
                                        <ul className="space-y-2 text-sm text-gray-300">
                                            <li>Shopify (Liquid Theme Architecture)</li>
                                            <li>Shopify Admin API</li>
                                            <li>Custom CSS & JavaScript Enhancements</li>
                                            <li>MERN Stack (Hybrid/Migration Context)</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold mb-4 text-tribe-blue/80">Growth & Integrations</h4>
                                        <ul className="space-y-2 text-sm text-gray-300">
                                            <li>Klaviyo (Email Marketing)</li>
                                            <li>Stripe (Payments)</li>
                                            <li>Meta Pixel (Analytics)</li>
                                            <li>SEO Structured Markup</li>
                                            <li>Cloudinary (Image Strategy)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Conclusion</h2>
                            <p className="text-earth-700 mb-12 text-lg leading-relaxed">
                                The Freecer.at transformation resulted in a high-speed, luxury storefront that perfectly balances aesthetics with performance. By implementing a custom Shopify architecture with advanced SEO and internationalization features, we provided a scalable foundation for global growth, significantly improving the brand's digital presence and conversion potential.
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
                            Elevate Your E-commerce Brand
                        </h2>
                        <p className="text-earth-600 mb-8 max-w-2xl mx-auto">
                            From custom Shopify themes to complex MERN storefronts, we build high-converting retail experiences.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact">
                                <Button className="bg-tribe-blue hover:bg-tribe-blue/90">
                                    Discuss Your Online Store
                                </Button>
                            </Link>
                            <Link to="/trail-stories">
                                <Button variant="outline" className="border-tribe-blue text-tribe-blue hover:bg-tribe-blue/10">
                                    View More Success Stories
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

export default CaseStudyFreecer;
