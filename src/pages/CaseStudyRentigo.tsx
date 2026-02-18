
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, Building2, Users, CreditCard, FileText, Globe, Bell, Search, ShieldCheck } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CaseStudyRentigo = () => {
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
                                Real Estate
                            </span>
                            <span className="px-3 py-1 rounded-full bg-tribe-blue/20 text-tribe-blue text-sm font-medium">
                                Enterprise SaaS
                            </span>
                            <span className="px-3 py-1 rounded-full bg-tribe-blue/20 text-tribe-blue text-sm font-medium">
                                FinTech
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6">
                            <span className="text-tribe-blue">Rentigo:</span> Enterprise Property Management System
                        </h1>

                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                            A unified platform managing the complete property lifecycle — from listing to tenancy and financial reconciliation.
                        </p>

                        <div className="relative h-64 md:h-96 rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-blue-950/50">
                            <img
                                src="/rentigo/rentigo.png"
                                alt="Rentigo Property Management"
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
                            <div className="bg-tribe-blue/5 p-8 rounded-xl mb-12 border-l-4 border-tribe-blue">
                                <h2 className="text-2xl font-display font-bold mb-4 text-tribe-blue">Project Overview</h2>
                                <p className="text-earth-700 mb-4">
                                    Rentigo is a comprehensive web-based platform designed to manage the complexities of rental, sales, and international properties.
                                </p>
                                <p className="text-earth-700 mb-0">
                                    It facilitates seamless coordination between Landlords, Tenants, Buyers, and Agents through automated workflows, integrated payments, and legal compliance tracking.
                                </p>
                            </div>

                            <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">The Challenge</h2>
                            <p className="text-earth-700 mb-6 text-lg leading-relaxed">
                                The client faced a fragmented ecosystem where property listings, tenancy agreements, maintenance requests, and payments were handled across multiple disconnected tools. This led to inefficiencies, communication gaps, and manual data reconciliation issues.
                            </p>

                            <div className="grid md:grid-cols-2 gap-8 mb-12">
                                <div className="bg-earth-50 p-6 rounded-xl">
                                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-earth-900">
                                        <ShieldCheck className="h-5 w-5 text-tribe-blue" />
                                        Core Business Need
                                    </h3>
                                    <p className="text-earth-700 text-sm">
                                        A centralized, "single source of truth" for the property lifecycle to reduce manual overhead and ensure legal compliance.
                                    </p>
                                </div>
                                <div className="bg-earth-50 p-6 rounded-xl">
                                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-earth-900">
                                        <Globe className="h-5 w-5 text-tribe-blue" />
                                        Project Scope
                                    </h3>
                                    <p className="text-earth-700 text-sm">
                                        Full-cycle development from scratch, including complex integrations with Rightmove, Zoopla, DocuSign, and major payment gateways.
                                    </p>
                                </div>
                            </div>

                            <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Strategic Goals</h2>
                            <div className="grid md:grid-cols-2 gap-4 mb-12">
                                {[
                                    "Centralize management of Let Only, Sales, and International properties.",
                                    "Automate complex workflows for tenancy, maintenance, and listings.",
                                    "Synchronize property data across Rightmove, Zoopla, and OnTheMarket.",
                                    "Integrate secure financial handling for Stripe and GoCardless.",
                                    "Enable legally binding e-signatures with DocuSign integration.",
                                    "Provide granular role-based access for diverse stakeholder types."
                                ].map((goal, i) => (
                                    <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-lg border border-earth-100">
                                        <CheckCircle className="h-5 w-5 text-tribe-blue mt-1 flex-shrink-0" />
                                        <span className="text-earth-700 text-sm">{goal}</span>
                                    </div>
                                ))}
                            </div>

                            <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Core Features</h2>
                            <div className="grid md:grid-cols-2 gap-6 mb-12">
                                <div className="flex gap-4 p-4 rounded-xl hover:bg-earth-50 transition-colors">
                                    <div className="bg-tribe-blue/10 p-3 rounded-lg h-fit">
                                        <Users className="h-6 w-6 text-tribe-blue" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-earth-900">Multi-Role Architecture</h4>
                                        <p className="text-earth-600 text-sm">Specific interfaces and permissions for Admin, Landlord, Tenant, Buyer, and Subscriber roles.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-4 rounded-xl hover:bg-earth-50 transition-colors">
                                    <div className="bg-tribe-blue/10 p-3 rounded-lg h-fit">
                                        <CreditCard className="h-6 w-6 text-tribe-blue" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-earth-900">Unified Payments</h4>
                                        <p className="text-earth-600 text-sm">Automatic invoicing and reconciliation using Stripe for card payments and GoCardless for Direct Debits.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-4 rounded-xl hover:bg-earth-50 transition-colors">
                                    <div className="bg-tribe-blue/10 p-3 rounded-lg h-fit">
                                        <FileText className="h-6 w-6 text-tribe-blue" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-earth-900">Digital Compliance</h4>
                                        <p className="text-earth-600 text-sm">Full DocuSign multi-signer workflows and TDS/MyDeposits integration for secure deposit protection.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-4 rounded-xl hover:bg-earth-50 transition-colors">
                                    <div className="bg-tribe-blue/10 p-3 rounded-lg h-fit">
                                        <Bell className="h-6 w-6 text-tribe-blue" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-earth-900">Real-time Syndication</h4>
                                        <p className="text-earth-600 text-sm">Automated property pushing to major portals and real-time alerts via WebSockets, Email, and SMS.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-blue-900 text-white p-8 rounded-xl mb-12 shadow-lg">
                                <h3 className="text-2xl font-display font-bold mb-6 text-tribe-blue">Technical Implementation</h3>
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <h4 className="text-lg font-bold mb-4 text-tribe-blue/80">Frontend & UX</h4>
                                        <ul className="space-y-2 text-sm text-blue-100">
                                            <li>Laravel Blade & Livewire</li>
                                            <li>Alpine.js for Interactivity</li>
                                            <li>Tailwind CSS 3 Styling</li>
                                            <li>Real-time Echo/Pusher Alerts</li>
                                            <li>Advanced Search & Filters</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold mb-4 text-tribe-blue/80">Backend & Integrations</h4>
                                        <ul className="space-y-2 text-sm text-blue-100">
                                            <li>Laravel 8 (PHP 8+)</li>
                                            <li>MySQL with Repository Pattern</li>
                                            <li>Broadcasting/Webhooks Support</li>
                                            <li>Spatie Role Management</li>
                                            <li>Multi-channel API Services</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Project Outcome</h2>
                            <p className="text-earth-700 mb-12 text-lg leading-relaxed">
                                Rentigo successfully consolidated all property-related operations into a single, high-performance platform. By automating the listing and tenancy lifecycles, we significantly reduced manual workload, improved stakeholder communication times, and provided the client with robust financial tools to scale their property portfolio efficiently.
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
                            Building the Future of PropTech?
                        </h2>
                        <p className="text-earth-600 mb-8 max-w-2xl mx-auto">
                            From enterprise SaaS to specialized property portals, we build systems that scale with your business.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact">
                                <Button className="bg-tribe-blue hover:bg-tribe-blue/90">
                                    Start Your Project
                                </Button>
                            </Link>
                            <Link to="/trail-stories">
                                <Button variant="outline" className="border-tribe-blue text-tribe-blue hover:bg-tribe-blue/10">
                                    View More Case Studies
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

export default CaseStudyRentigo;
