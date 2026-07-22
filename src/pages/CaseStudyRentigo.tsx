import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Users, CreditCard, FileText, Globe, Bell, ShieldCheck } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import SectionShot from '@/components/SectionShot';
import SectionKicker from '@/components/SectionKicker';
import CaseStudyHero from '@/components/CaseStudyHero';
import ReadingProgress from '@/components/ReadingProgress';
import Reveal, { revealContainer, revealItem } from '@/components/Reveal';

const SLIDER_IMAGES = [
    "/rentigo/main.png",
    "/rentigo/4.png",
    "/rentigo/6.png",
    "/rentigo/8.png",
    "/rentigo/10.png",
    "/rentigo/12.png"
];

const CaseStudyRentigo = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <div className="min-h-screen bg-background font-sans">
            <ReadingProgress />
            <Navbar />

            <CaseStudyHero
                tags={['Real Estate', 'Enterprise SaaS', 'FinTech']}
                titleAccent="Rentigo:"
                title="Enterprise Property Management System"
                tagline="A unified platform managing the complete property lifecycle — from listing to tenancy and financial reconciliation."
                images={SLIDER_IMAGES}
                altPrefix="Rentigo"
                url="https://rentigo.co.uk/"
                urlLabel="Visit rentigo.co.uk"
            />

            {/* Content Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="prose prose-lg max-w-none">
                            <Reveal>
                                <div className="bg-tribe-blue/5 p-8 rounded-xl mb-12 border-l-4 border-tribe-blue">
                                    <h2 className="text-2xl font-display font-bold mb-4 text-tribe-blue">Project Overview</h2>
                                    <p className="text-earth-700 mb-4">
                                        Rentigo is a comprehensive web-based platform designed to manage the complexities of rental, sales, and international properties.
                                    </p>
                                    <p className="text-earth-700 mb-0">
                                        It facilitates seamless coordination between Landlords, Tenants, Buyers, and Agents through automated workflows, integrated payments, and legal compliance tracking.
                                    </p>
                                </div>
                            </Reveal>

                            <SectionShot variant="wide" src="/rentigo-content/project-overview.webp" alt="Rentigo project overview" caption="Project overview — the Rentigo property management platform at a glance." />

                            <Reveal>
                                <SectionKicker index="01" />
                                <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">The Challenge</h2>
                                <p className="text-earth-700 mb-6 text-lg leading-relaxed">
                                    The client faced a fragmented ecosystem where property listings, tenancy agreements, maintenance requests, and payments were handled across multiple disconnected tools. This led to inefficiencies, communication gaps, and manual data reconciliation issues.
                                </p>
                            </Reveal>

                            <motion.div
                                variants={revealContainer}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, margin: '-80px' }}
                                className="grid md:grid-cols-2 gap-8 mb-12"
                            >
                                <motion.div
                                    variants={revealItem}
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    className="bg-earth-50 p-6 rounded-xl ring-1 ring-transparent transition-all duration-500 hover:ring-tribe-blue/30 hover:shadow-lg"
                                >
                                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-earth-900">
                                        <ShieldCheck className="h-5 w-5 text-tribe-blue" />
                                        Core Business Need
                                    </h3>
                                    <p className="text-earth-700 text-sm">
                                        A centralized, "single source of truth" for the property lifecycle to reduce manual overhead and ensure legal compliance.
                                    </p>
                                </motion.div>
                                <motion.div
                                    variants={revealItem}
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    className="bg-earth-50 p-6 rounded-xl ring-1 ring-transparent transition-all duration-500 hover:ring-tribe-blue/30 hover:shadow-lg"
                                >
                                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-earth-900">
                                        <Globe className="h-5 w-5 text-tribe-blue" />
                                        Project Scope
                                    </h3>
                                    <p className="text-earth-700 text-sm">
                                        Full-cycle development from scratch, including complex integrations with Rightmove, Zoopla, DocuSign, and major payment gateways.
                                    </p>
                                </motion.div>
                            </motion.div>

                            <SectionShot variant="left" src="/rentigo-content/project-stoty.webp" alt="Rentigo project story" caption="The project story — replacing a fragmented toolset with a single unified platform." />

                            <Reveal>
                                <SectionKicker index="02" />
                                <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Strategic Goals</h2>
                            </Reveal>
                            <motion.div
                                variants={revealContainer}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, margin: '-80px' }}
                                className="grid md:grid-cols-2 gap-4 mb-12"
                            >
                                {[
                                    "Centralize management of Let Only, Sales, and International properties.",
                                    "Automate complex workflows for tenancy, maintenance, and listings.",
                                    "Synchronize property data across Rightmove, Zoopla, and OnTheMarket.",
                                    "Integrate secure financial handling for Stripe and GoCardless.",
                                    "Enable legally binding e-signatures with DocuSign integration.",
                                    "Provide granular role-based access for diverse stakeholder types."
                                ].map((goal, i) => (
                                    <motion.div
                                        key={i}
                                        variants={revealItem}
                                        whileHover={{ y: -4 }}
                                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                        className="flex items-start gap-3 bg-white p-4 rounded-lg border border-earth-100 transition-all duration-300 hover:border-tribe-blue/30 hover:shadow-md"
                                    >
                                        <CheckCircle className="h-5 w-5 text-tribe-blue mt-1 flex-shrink-0" />
                                        <span className="text-earth-700 text-sm">{goal}</span>
                                    </motion.div>
                                ))}
                            </motion.div>

                            <SectionShot variant="right" src="/rentigo-content/golas-of-project.webp" alt="Rentigo goals of the project" caption="Strategic goals — centralized management, automation, and compliant financial handling." />

                            <Reveal>
                                <SectionKicker index="03" />
                                <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">The Solution</h2>
                                <p className="text-earth-700 mb-6 text-lg leading-relaxed">
                                    We replaced the client's fragmented toolset with a single, unified platform that manages the entire property lifecycle — from listing and tenancy through to financial reconciliation. Automated workflows connect Landlords, Tenants, Buyers, and Agents in one place, while native integrations with property portals, payment gateways, and e-signature services remove the manual reconciliation that slowed the old process. The result is a centralized "single source of truth" that reduces overhead and keeps every transaction legally compliant.
                                </p>
                            </Reveal>

                            <SectionShot variant="left" src="/rentigo-content/solution.webp" alt="Rentigo solution" caption="The solution — how Rentigo solved the core problem." />

                            <Reveal>
                                <SectionKicker index="04" />
                                <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Core Features</h2>
                            </Reveal>
                            <motion.div
                                variants={revealContainer}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, margin: '-80px' }}
                                className="grid md:grid-cols-2 gap-6 mb-12"
                            >
                                <motion.div
                                    variants={revealItem}
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    className="flex gap-4 p-4 rounded-xl hover:bg-earth-50 transition-colors hover:shadow-lg"
                                >
                                    <div className="bg-tribe-blue/10 p-3 rounded-lg h-fit">
                                        <Users className="h-6 w-6 text-tribe-blue" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-earth-900">Multi-Role Architecture</h4>
                                        <p className="text-earth-600 text-sm">Specific interfaces and permissions for Admin, Landlord, Tenant, Buyer, and Subscriber roles.</p>
                                    </div>
                                </motion.div>
                                <motion.div
                                    variants={revealItem}
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    className="flex gap-4 p-4 rounded-xl hover:bg-earth-50 transition-colors hover:shadow-lg"
                                >
                                    <div className="bg-tribe-blue/10 p-3 rounded-lg h-fit">
                                        <CreditCard className="h-6 w-6 text-tribe-blue" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-earth-900">Unified Payments</h4>
                                        <p className="text-earth-600 text-sm">Automatic invoicing and reconciliation using Stripe for card payments and GoCardless for Direct Debits.</p>
                                    </div>
                                </motion.div>
                                <motion.div
                                    variants={revealItem}
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    className="flex gap-4 p-4 rounded-xl hover:bg-earth-50 transition-colors hover:shadow-lg"
                                >
                                    <div className="bg-tribe-blue/10 p-3 rounded-lg h-fit">
                                        <FileText className="h-6 w-6 text-tribe-blue" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-earth-900">Digital Compliance</h4>
                                        <p className="text-earth-600 text-sm">Full DocuSign multi-signer workflows and TDS/MyDeposits integration for secure deposit protection.</p>
                                    </div>
                                </motion.div>
                                <motion.div
                                    variants={revealItem}
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    className="flex gap-4 p-4 rounded-xl hover:bg-earth-50 transition-colors hover:shadow-lg"
                                >
                                    <div className="bg-tribe-blue/10 p-3 rounded-lg h-fit">
                                        <Bell className="h-6 w-6 text-tribe-blue" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-earth-900">Real-time Syndication</h4>
                                        <p className="text-earth-600 text-sm">Automated property pushing to major portals and real-time alerts via WebSockets, Email, and SMS.</p>
                                    </div>
                                </motion.div>
                            </motion.div>

                            <SectionShot variant="wide" src="/rentigo-content/key-features-and-highligts.webp" alt="Rentigo key features and highlights" caption="Key features & highlights — multi-role access, unified payments, and digital compliance." />

                            <Reveal>
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
                            </Reveal>

                            <div className="not-prose my-12 grid gap-6 md:grid-cols-2 md:gap-8">
                                <SectionShot variant="pair" src="/rentigo-content/technologies-and-functionalies.webp" alt="Rentigo technologies and functionalities" caption="Technologies & functionalities powering the Rentigo platform." />
                                <SectionShot variant="pair" className="md:mt-14" src="/rentigo-content/teck-stack.webp" alt="Rentigo tech stack" caption="The Laravel-based tech stack behind Rentigo's integrations and workflows." />
                            </div>

                            <Reveal>
                                <SectionKicker index="05" />
                                <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Project Outcome</h2>
                                <p className="text-earth-700 mb-12 text-lg leading-relaxed">
                                    Rentigo successfully consolidated all property-related operations into a single, high-performance platform. By automating the listing and tenancy lifecycles, we significantly reduced manual workload, improved stakeholder communication times, and provided the client with robust financial tools to scale their property portfolio efficiently.
                                </p>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-earth-100">
                <div className="container mx-auto px-4">
                    <Reveal>
                        <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm max-w-4xl mx-auto text-center">
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
                        </div>
                    </Reveal>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default CaseStudyRentigo;
