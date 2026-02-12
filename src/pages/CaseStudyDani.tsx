import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, ShoppingBag, Zap, Shield, Globe, Sparkles, Smartphone, BarChart, Settings, Gem } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CaseStudyDani = () => {
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
                                Luxury Retail
                            </span>
                            <span className="px-3 py-1 rounded-full bg-tribe-blue/20 text-tribe-blue text-sm font-medium">
                                Shopify Plus
                            </span>
                            <span className="px-3 py-1 rounded-full bg-tribe-blue/20 text-tribe-blue text-sm font-medium">
                                E-commerce
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6">
                            <span className="text-tribe-blue">DANI by Daniel K:</span> Elevating Luxury Retail Online
                        </h1>

                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                            A premium, custom-built Shopify e-commerce platform designed to bridge the gap between artisan jewelry craftsmanship and high-performance digital retail.
                        </p>

                        <div className="relative h-64 md:h-96 rounded-xl overflow-hidden shadow-2xl bg-earth-700 flex items-center justify-center border border-white/10 group">
                            <div className="absolute inset-0 bg-gradient-to-t from-earth-900/80 to-transparent z-10" />
                            <div className="text-center relative z-20 transition-transform group-hover:scale-110 duration-500">
                                <Gem className="h-16 w-16 text-tribe-blue/40 mx-auto mb-4" />
                                <p className="text-earth-500 font-display font-medium uppercase tracking-widest">Luxury Boutique Experience</p>
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
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="prose prose-lg max-w-none"
                        >
                            <div className="bg-tribe-blue/5 p-8 rounded-xl mb-12">
                                <h2 className="text-2xl font-display font-bold mb-4 text-tribe-blue">Project Description</h2>
                                <p className="text-earth-700 mb-0">
                                    DANI by Daniel K is a custom Shopify-built luxury jewelry e-commerce platform designed to elevate brand presence, optimize conversion, and support international shopping. TTT transformed the brand's online experience into a premium, scalable storefront with custom theme development, advanced cart logic, and conversion-driven UI/UX.
                                </p>
                            </div>

                            <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">The Problem</h2>
                            <p className="text-earth-700 mb-8 font-medium">When the client approached TTT, the core challenges included:</p>

                            <div className="grid md:grid-cols-2 gap-4 my-8">
                                {[
                                    "Low conversion due to unclear categorization",
                                    "Weak mobile experience & responsiveness",
                                    "No multi-language support for global growth",
                                    "Slow page speed & unoptimized assets",
                                    "Lack of SEO structure for visibility",
                                    "Complicated checkout for luxury buyers"
                                ].map((problem, idx) => (
                                    <div key={idx} className="flex items-center gap-3 p-3 bg-red-50/50 rounded-lg border border-red-100/50">
                                        <div className="h-2 w-2 rounded-full bg-red-400 flex-shrink-0" />
                                        <p className="text-earth-700 text-sm mb-0">{problem}</p>
                                    </div>
                                ))}
                            </div>

                            <h2 className="text-3xl font-display font-bold mb-6 text-earth-900 italic">The Solution</h2>
                            <p className="text-earth-700 mb-6">We implemented a custom Shopify solution designed to drive conversion and support long-term growth:</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
                                <div className="p-6 bg-earth-50 rounded-xl border border-earth-100 flex flex-col items-center text-center">
                                    <Zap className="h-8 w-8 text-tribe-blue mb-4" />
                                    <h5 className="font-bold mb-1">Custom Theme</h5>
                                    <p className="text-xs text-earth-600">Built from scratch for speed, not just a template install.</p>
                                </div>
                                <div className="p-6 bg-earth-50 rounded-xl border border-earth-100 flex flex-col items-center text-center">
                                    <Globe className="h-8 w-8 text-tribe-blue mb-4" />
                                    <h5 className="font-bold mb-1">Global Expansion</h5>
                                    <p className="text-xs text-earth-600">Multi-language setup and geo-targeted readiness.</p>
                                </div>
                                <div className="p-6 bg-earth-50 rounded-xl border border-earth-100 flex flex-col items-center text-center">
                                    <Sparkles className="h-8 w-8 text-tribe-blue mb-4" />
                                    <h5 className="font-bold mb-1">Product Story</h5>
                                    <p className="text-xs text-earth-600">UX focused on high-impact jewelry presentation.</p>
                                </div>
                            </div>

                            <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Features & Highlights</h2>

                            {/* Feature Grid */}
                            <div className="grid md:grid-cols-2 gap-8 my-12">
                                <section>
                                    <h4 className="font-bold text-earth-900 mb-4 uppercase tracking-tighter text-sm">Internationalization</h4>
                                    <ul className="space-y-2 list-none p-0">
                                        {["Multi-language implementation", "Region-based currency detection", "Geo-targeted content display", "Location-based tax automation"].map(item => (
                                            <li key={item} className="text-earth-700 text-sm flex items-start gap-2">
                                                <CheckCircle className="h-4 w-4 text-tribe-blue mt-0.5 flex-shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </section>
                                <section>
                                    <h4 className="font-bold text-earth-900 mb-4 uppercase tracking-tighter text-sm">UI/UX & Branding</h4>
                                    <ul className="space-y-2 list-none p-0">
                                        {["Scroll-based animations", "Mobile-first responsive design", "Conversion-focused product pages", "High-impact hero banners"].map(item => (
                                            <li key={item} className="text-earth-700 text-sm flex items-start gap-2">
                                                <CheckCircle className="h-4 w-4 text-tribe-blue mt-0.5 flex-shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </section>
                            </div>

                            <div className="bg-earth-50 p-8 rounded-xl border border-earth-100 my-12">
                                <h4 className="font-bold text-earth-900 mb-6 flex items-center gap-2">
                                    <Smartphone className="h-5 w-5 text-tribe-blue" />
                                    E-Commerce Functionality
                                </h4>
                                <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                                    <div className="flex items-center gap-3">
                                        <Shield className="h-4 w-4 text-tribe-blue flex-shrink-0" />
                                        <span className="text-sm font-medium">Advanced Cart & Checkout Funnels</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Shield className="h-4 w-4 text-tribe-blue flex-shrink-0" />
                                        <span className="text-sm font-medium">Secure Payment Integration</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Shield className="h-4 w-4 text-tribe-blue flex-shrink-0" />
                                        <span className="text-sm font-medium">Abandoned Cart Recovery</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Shield className="h-4 w-4 text-tribe-blue flex-shrink-0" />
                                        <span className="text-sm font-medium">Dynamic Pricing & Discounts</span>
                                    </div>
                                </div>
                            </div>

                            <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Tech Stack</h2>
                            <div className="flex flex-wrap gap-3 mb-12">
                                {[
                                    'Shopify (Liquid)', 'Custom CSS/JS', 'Shopify Admin API',
                                    'Klaviyo', 'Stripe', 'Meta Pixel', 'SEO Structured Markup'
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
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.7 }}
                        className="bg-white p-8 md:p-12 rounded-xl shadow-sm max-w-4xl mx-auto text-center"
                    >
                        <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
                            Ready for Your Flagship Store?
                        </h2>
                        <p className="text-earth-600 mb-8 max-w-2xl mx-auto">
                            Let's transform your brand into a high-performance digital leader with custom-built e-commerce solutions.
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

export default CaseStudyDani;
