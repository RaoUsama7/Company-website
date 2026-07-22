import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Users, Zap, CreditCard, FileText, Sparkles, Search, Save, ShieldCheck } from 'lucide-react';
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
    "/masslos/1.png",
    "/masslos/2.png",
    "/masslos/3.png",
    "/masslos/4.png",
    "/masslos/5.png",
    "/masslos/6.png",
    "/masslos/7.png",
    "/masslos/8.png",
    "/masslos/9.png",
    "/masslos/10.png",
    "/masslos/11.png",
    "/masslos/12.png"
];

const CaseStudyMasslos = () => {
    const goals = [
        "Centralize customer measurements with edit history.",
        "Standardize order-taking through a guided shirt configurator.",
        "Make the in-store workflow crash-safe with autosave.",
        "Enforce strict role separation across three portals.",
        "Automate factory-ready production PDFs."
    ];

    const features = [
        { icon: Users, title: "Role-Based Portals", description: "Separate admin, measurer, and customer experiences, each with dedicated logins and permissions." },
        { icon: Zap, title: "In-Store Configurator with Autosave", description: "A guided shirt-building flow that saves progress locally, so a crash never loses an order." },
        { icon: CreditCard, title: "Stripe + Paid-in-Store Payments", description: "Online Stripe Checkout alongside a walk-in payment mode for in-store orders." },
        { icon: FileText, title: "Dual PDF Generation", description: "Every order automatically produces a factory production spec and an internal record." }
    ];

    const leanHighlights = [
        { icon: Search, title: "Customer Pre-Fill", description: "Type-ahead search loads a returning customer's profile and most recent measurements, so nothing is re-entered." },
        { icon: Save, title: "Autosave & Crash Recovery", description: "The full in-progress order persists locally and rehydrates on reload — a PC crash, reboot, or accidental Back press never loses the work." },
        { icon: FileText, title: "Guided Step-by-Step Build", description: "A multi-step wizard walks staff through style, fit, fabric, collar, cuff, monogram, and quantity with a live price breakdown." },
        { icon: ShieldCheck, title: "Password-Verified MOQ Override", description: "Orders below the minimum are blocked, but staff can unlock submission by re-entering their password — a sanctioned escape hatch, not a workaround." }
    ];

    const outcomes = [
        { icon: Save, title: "Zero Lost Work", description: "Autosave ended crash-related data loss in-store." },
        { icon: Zap, title: "Streamlined Ordering", description: "One guided flow replaced ad-hoc, paper-based order-taking." },
        { icon: FileText, title: "Factory-Ready Docs", description: "Automatic dual-PDF generation, no back-and-forth." },
        { icon: ShieldCheck, title: "Live in Production", description: "Running the client's full made-to-measure operation." }
    ];

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <div className="min-h-screen bg-background font-sans">
            <ReadingProgress />
            <Navbar />

            <CaseStudyHero
                tags={["FashionTech", "Made-to-Measure", "SaaS"]}
                titleAccent="Masslos:"
                title="Digital Made-to-Measure Tailoring Platform"
                tagline="A role-based platform that takes a bespoke shirt business from paper measurements to a fully digital, crash-safe ordering workflow."
                images={SLIDER_IMAGES}
                altPrefix="Masslos"
                url="https://www.masslos.me/"
                urlLabel="Visit masslos.me"
            />

            {/* Overview & Challenge */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <Reveal>
                            <SectionKicker index="01" className="justify-center" />
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-8">
                                Project <span className="text-tribe-blue">Overview</span>
                            </h2>
                            <p className="text-xl text-earth-700 leading-relaxed text-center mb-12">
                                Masslos is a custom digital platform for a made-to-measure shirt business, covering the full order lifecycle — customer measurements, guided shirt configuration, payment, and factory-ready production documents. Built as a React 18 SPA on a Laravel 11 API with three role-separated portals: admin, measurer, and customer.
                            </p>
                        </Reveal>

                        <Reveal>
                            <div className="bg-earth-50 border-l-4 border-tribe-blue p-8 rounded-xl">
                                <h3 className="text-2xl font-display font-bold mb-3 text-earth-900">The Challenge</h3>
                                <p className="text-earth-700 leading-relaxed">
                                    Measurements lived in scattered paper records, order-taking was inconsistent, and in-store staff had no safety net — a single PC crash could wipe an hour of work with no autosave in place.
                                </p>
                            </div>
                        </Reveal>

                        <SectionShot variant="wide" src="/masslos-content/proejct-overview.webp" alt="Masslos project overview" caption="Project overview — the Masslos made-to-measure platform at a glance." />
                    </div>
                </div>
            </section>

            {/* Strategic Goals */}
            <section className="py-20 bg-earth-100">
                <div className="container mx-auto px-4">
                    <Reveal>
                        <SectionKicker index="02" className="justify-center" />
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
                            Strategic <span className="text-tribe-blue">Goals</span>
                        </h2>
                    </Reveal>
                    <motion.div
                        variants={revealContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: '-80px' }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
                    >
                        {goals.map((goal, index) => (
                            <motion.div
                                key={index}
                                variants={revealItem}
                                whileHover={{ y: -4 }}
                                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                className="flex items-start gap-3 bg-white p-5 rounded-xl shadow-sm ring-1 ring-stone-200/80 transition-all duration-500 hover:ring-tribe-blue/30 hover:shadow-lg"
                            >
                                <CheckCircle className="h-5 w-5 text-tribe-blue mt-0.5 flex-shrink-0" />
                                <span className="text-earth-700">{goal}</span>
                            </motion.div>
                        ))}
                    </motion.div>

                    <div className="max-w-4xl mx-auto">
                        <SectionShot variant="left" src="/masslos-content/strategic-goals.webp" alt="Masslos strategic goals" caption="Strategic goals guiding the Masslos build." />
                    </div>
                </div>
            </section>

            {/* Core Features */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <Reveal>
                        <SectionKicker index="03" className="justify-center" />
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
                            Core <span className="text-tribe-blue">Features</span>
                        </h2>
                    </Reveal>
                    <motion.div
                        variants={revealContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: '-80px' }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
                    >
                        {features.map((feature) => (
                            <motion.div
                                key={feature.title}
                                variants={revealItem}
                                whileHover={{ y: -4 }}
                                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                className="flex gap-4 p-6 rounded-xl bg-earth-50 ring-1 ring-transparent transition-all duration-500 hover:ring-tribe-blue/30 hover:shadow-lg"
                            >
                                <div className="bg-tribe-blue/10 p-3 rounded-lg h-fit">
                                    <feature.icon className="h-6 w-6 text-tribe-blue" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-earth-900 mb-1">{feature.title}</h4>
                                    <p className="text-earth-600 text-sm">{feature.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    <div className="max-w-4xl mx-auto">
                        <SectionShot variant="right" src="/masslos-content/core-features.webp" alt="Masslos core features" caption="Core features across the Masslos platform." />
                    </div>
                </div>
            </section>

            {/* Lean Configurator Spotlight */}
            <section className="py-20 bg-earth-100">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto bg-gradient-to-br from-tribe-blue/10 to-tribe-blue/5 p-8 md:p-12 rounded-2xl border border-tribe-blue/20">
                        <Reveal>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tribe-blue text-white text-xs font-semibold uppercase tracking-wide mb-4">
                                <Sparkles className="h-3.5 w-3.5" />
                                The Standout Feature
                            </div>
                            <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 text-earth-900">The Lean Configurator</h3>
                            <p className="text-earth-700 mb-8 leading-relaxed max-w-3xl">
                                The heart of Masslos is a staff-operated, in-store order builder purpose-built for a busy shop counter — not a generic checkout. A measurer searches for a returning customer, their profile and latest measurements auto-fill, and the shirt is configured step by step before submitting with Stripe or paid-in-store payment. Every design decision favors speed and forgiveness for non-technical staff working on their feet.
                            </p>
                        </Reveal>
                        <motion.div
                            variants={revealContainer}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: '-80px' }}
                            className="grid md:grid-cols-2 gap-6"
                        >
                            {leanHighlights.map((item) => (
                                <motion.div
                                    key={item.title}
                                    variants={revealItem}
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    className="flex gap-4"
                                >
                                    <div className="bg-white p-3 rounded-lg h-fit shadow-sm">
                                        <item.icon className="h-6 w-6 text-tribe-blue" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-earth-900 mb-1">{item.title}</h4>
                                        <p className="text-earth-600 text-sm">{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        <SectionShot variant="left" src="/masslos-content/the-stand-out-fearture.webp" alt="Masslos standout feature — the Lean Configurator" caption="The Lean Configurator — the in-store, crash-safe order builder." />
                    </div>
                </div>
            </section>

            {/* Technical Implementation */}
            <section className="py-20 bg-earth-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-72 h-72 bg-tribe-blue/10 rounded-full blur-3xl pointer-events-none" />
                <div className="container mx-auto px-4 relative z-10">
                    <Reveal>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
                            Technical <span className="text-tribe-blue">Implementation</span>
                        </h2>
                    </Reveal>
                    <Reveal>
                        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                                <h4 className="text-lg font-bold mb-4 text-tribe-blue">Frontend</h4>
                                <ul className="space-y-3 text-sm text-gray-300">
                                    {["React 18 & TypeScript", "Vite", "Tailwind CSS", "Radix / shadcn UI", "React Router"].map((tech) => (
                                        <li key={tech} className="flex items-center gap-2">
                                            <span className="h-1.5 w-1.5 rounded-full bg-tribe-blue flex-shrink-0" />
                                            {tech}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                                <h4 className="text-lg font-bold mb-4 text-tribe-blue">Backend</h4>
                                <ul className="space-y-3 text-sm text-gray-300">
                                    {["Laravel 11 (PHP 8.2)", "Sanctum Authentication", "Spatie Role Management", "Stripe Checkout & Webhooks", "DomPDF Generation"].map((tech) => (
                                        <li key={tech} className="flex items-center gap-2">
                                            <span className="h-1.5 w-1.5 rounded-full bg-tribe-blue flex-shrink-0" />
                                            {tech}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </Reveal>

                    <div className="max-w-4xl mx-auto">
                        <SectionShot variant="right" src="/masslos-content/tech-stack.webp" alt="Masslos technical stack" caption="The Masslos tech stack — React 18 SPA on a Laravel 11 API." />
                    </div>
                </div>
            </section>

            {/* Outcome */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <Reveal>
                        <SectionKicker index="04" className="justify-center" />
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
                            Project <span className="text-tribe-blue">Outcome</span>
                        </h2>
                    </Reveal>
                    <motion.div
                        variants={revealContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: '-80px' }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16"
                    >
                        {outcomes.map((outcome) => (
                            <motion.div
                                key={outcome.title}
                                variants={revealItem}
                                whileHover={{ y: -4 }}
                                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                className="text-center p-6"
                            >
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-tribe-blue/10 mb-4">
                                    <outcome.icon className="h-8 w-8 text-tribe-blue" />
                                </div>
                                <h3 className="font-display font-semibold text-lg mb-2 text-earth-900">{outcome.title}</h3>
                                <p className="text-earth-600 text-sm">{outcome.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                    <Reveal>
                        <div className="max-w-4xl mx-auto text-center bg-earth-100 p-8 rounded-xl">
                            <p className="text-lg text-earth-700 leading-relaxed">
                                Masslos is live and running the client's full made-to-measure operation. Autosave eliminated lost in-store work, role-based portals gave staff exactly the tools they need, and automated dual-PDF generation gave the factory unambiguous production specs — turning a fragmented, paper-based process into one platform.
                            </p>
                        </div>
                    </Reveal>

                    <div className="max-w-4xl mx-auto">
                        <SectionShot variant="wide" src="/masslos-content/proejct-outcomes.webp" alt="Masslos project outcomes" caption="Project outcomes — measurable results after going live." />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-earth-100">
                <div className="container mx-auto px-4">
                    <Reveal>
                        <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm max-w-4xl mx-auto text-center">
                            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
                                Building a Platform for <span className="text-tribe-blue">Your Business?</span>
                            </h2>
                            <p className="text-earth-600 mb-8 max-w-2xl mx-auto">
                                From boutique operations to enterprise SaaS, we build systems that scale with your business.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link to="/contact">
                                    <Button className="bg-tribe-blue hover:bg-tribe-blue/90">
                                        Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
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

export default CaseStudyMasslos;
