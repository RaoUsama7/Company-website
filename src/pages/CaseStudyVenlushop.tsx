import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, ShoppingBag, Zap, Shield, Globe } from 'lucide-react';
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
                                Shopify Plus
                            </span>
                            <span className="px-3 py-1 rounded-full bg-tribe-blue/20 text-tribe-blue text-sm font-medium">
                                Retail
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6">
                            <span className="text-tribe-blue">Venlushop:</span> Reimagining Digital Retail
                        </h1>

                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                            A high-performance Shopify Plus storefront designed for seamless scaling, premium user experience, and optimized conversion pathways.
                        </p>

                        <div className="relative h-64 md:h-96 rounded-xl overflow-hidden shadow-2xl bg-earth-700 flex items-center justify-center border border-white/10">
                            <div className="text-center">
                                <ShoppingBag className="h-16 w-16 text-tribe-blue/20 mx-auto mb-4" />
                                <p className="text-earth-500 font-display font-medium uppercase tracking-widest">Venlushop Platform Preview</p>
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
                            <div className="bg-tribe-blue/5 p-8 rounded-xl mb-12">
                                <h2 className="text-2xl font-display font-bold mb-4 text-tribe-blue">Project Overview</h2>
                                <p className="text-earth-700 mb-0">
                                    Venlushop required a modern, scalable e-commerce solution that could handle high traffic volumes while maintaining a boutique brand feel. We leveraged Shopify's powerful ecosystem to build a custom-themed experience that bridges the gap between artisan quality and enterprise reliability.
                                </p>
                            </div>

                            <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Strategic E-commerce Approach</h2>

                            <p className="text-earth-700 mb-6 text-lg leading-relaxed">
                                Our solution focused on three core pillars: speed, story, and sales. By implementing advanced liquid optimization and a headless-ready architecture, we ensured that every interaction feels instantaneous, keeping customers engaged from discovery to checkout.
                            </p>

                            <div className="grid md:grid-cols-2 gap-8 my-12">
                                <div className="p-6 bg-earth-50 rounded-xl border border-earth-100">
                                    <h4 className="font-bold text-earth-900 mb-2">Custom Theme Architecture</h4>
                                    <p className="text-earth-600 text-sm">A lightweight, highly modular Shopify theme built from the ground up for maximum page speed and flexible content management.</p>
                                </div>
                                <div className="p-6 bg-earth-50 rounded-xl border border-earth-100">
                                    <h4 className="font-bold text-earth-900 mb-2">Omnichannel Integration</h4>
                                    <p className="text-earth-600 text-sm">Seamless synchronization across social commerce, marketplaces, and physical retail points of sale.</p>
                                </div>
                                <div className="p-6 bg-earth-50 rounded-xl border border-earth-100">
                                    <h4 className="font-bold text-earth-900 mb-2">Advanced Conversion Logic</h4>
                                    <p className="text-earth-600 text-sm">Dynamic upsells, intelligent product recommendations, and a frictionless one-page checkout experience.</p>
                                </div>
                                <div className="p-6 bg-earth-50 rounded-xl border border-earth-100">
                                    <h4 className="font-bold text-earth-900 mb-2">Global Scale-out</h4>
                                    <p className="text-earth-600 text-sm">Multi-currency, multi-language, and localized shipping logic to empower international market expansion.</p>
                                </div>
                            </div>

                            {/* Image Placeholder */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="my-16 relative aspect-video rounded-2xl overflow-hidden bg-earth-900 flex items-center justify-center border border-earth-100 shadow-2xl"
                            >
                                <div className="text-center p-8">
                                    <Zap className="h-10 w-10 text-tribe-blue mb-4 mx-auto" />
                                    <p className="text-earth-400 font-display font-medium uppercase tracking-widest text-sm">High-Performance Storefront Visualization</p>
                                </div>
                            </motion.div>

                            <div className="bg-earth-50 p-8 rounded-xl mb-12">
                                <h3 className="text-2xl font-display font-bold mb-6 text-earth-900">Core Features</h3>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {[
                                        "Custom Liquidity Optimization",
                                        "Third-party App Consolidation",
                                        "Real-time Inventory Management",
                                        "Advanced SEO Framework",
                                        "Custom Private Shopify Apps",
                                        "Headless Content Integration"
                                    ].map((feature) => (
                                        <div key={feature} className="flex items-start gap-3">
                                            <CheckCircle className="h-6 w-6 text-tribe-blue mt-1 flex-shrink-0" />
                                            <span className="font-medium text-earth-900">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Technical Stack</h2>

                            <div className="flex flex-wrap gap-3 mb-12">
                                {['Shopify Plus', 'Liquid', 'React', 'Tailwind CSS', 'Node.js', 'GraphQL', 'Klaviyo'].map((tech) => (
                                    <span key={tech} className="px-4 py-2 bg-earth-100 text-earth-700 rounded-full text-sm font-medium">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="bg-tribe-blue/5 p-8 rounded-xl mb-12">
                                <h3 className="text-2xl font-display font-bold mb-4 text-tribe-blue">Projected Impact</h3>
                                <div className="grid md:grid-cols-3 gap-6 text-center">
                                    <div>
                                        <div className="text-3xl font-bold text-tribe-blue mb-2">+45%</div>
                                        <div className="text-earth-700 text-sm">Conversion Rate</div>
                                    </div>
                                    <div>
                                        <div className="text-3xl font-bold text-tribe-blue mb-2">&lt;1.2s</div>
                                        <div className="text-earth-700 text-sm">Load Time</div>
                                    </div>
                                    <div>
                                        <div className="text-3xl font-bold text-tribe-blue mb-2">2x</div>
                                        <div className="text-earth-700 text-sm">Mobile Engagement</div>
                                    </div>
                                </div>
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
                            Ready to Scale Your Store?
                        </h2>
                        <p className="text-earth-600 mb-8 max-w-2xl mx-auto">
                            Let's build a flagship digital experience that turns browsers into lifelong customers.
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
