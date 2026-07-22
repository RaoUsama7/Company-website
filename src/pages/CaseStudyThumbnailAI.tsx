
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Sparkles, Palette, Wand2, CreditCard, ShieldCheck } from 'lucide-react';
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
    "/thumbnail-ai/1.png",
    "/thumbnail-ai/2.png",
    "/thumbnail-ai/3.png",
    "/thumbnail-ai/4.png",
    "/thumbnail-ai/5.png",
    "/thumbnail-ai/6.png"
];

const CaseStudyThumbnailAI = () => {
    const goals = [
        "Enforce thumbnail composition rules — safe zones, readable text, focal contrast.",
        "Keep every render on-brand with a reusable Brand DNA per workspace.",
        "Make iteration fast and affordable with credit-safe batched generation.",
        "Stay reliable with multi-provider AI fallback (OpenAI ↔ Gemini).",
        "Enable team collaboration through role-based workspaces.",
        "Monetize through Stripe subscriptions and a credit ledger."
    ];

    const features = [
        { icon: Sparkles, title: "Prompt-to-Thumbnail Generation", description: "Up to 8 variations per run with aspect-ratio control, quality tiers, and AI headline suggestions." },
        { icon: Palette, title: "Brand DNA & Reference Analysis", description: "A reusable channel identity — palette, fonts, mascot, tone — plus AI analysis of admired channels' thumbnails." },
        { icon: Wand2, title: "Surgical AI Editing", description: "Targeted edits like \"change shirt color to red\" preserve every other pixel — plus one-click background removal and multi-platform export." },
        { icon: CreditCard, title: "Credit Billing & Workspaces", description: "Stripe subscription plans with a pre-debit/refund credit ledger, and multi-tenant workspaces with role-based invitations." }
    ];

    const outcomes = [
        { icon: Sparkles, title: "On-Brand Every Time", description: "Brand DNA applied automatically to every render." },
        { icon: Wand2, title: "Fast Iteration", description: "Multiple publication-ready variations in one flow." },
        { icon: ShieldCheck, title: "Resilient by Design", description: "Multi-provider fallback keeps it usable through outages." },
        { icon: CreditCard, title: "Monetization Ready", description: "Stripe plans with a safe debit-and-refund ledger." }
    ];

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <div className="min-h-screen bg-background font-sans">
            <ReadingProgress />
            <Navbar />

            <CaseStudyHero
                tags={["AI SaaS", "Creator Tools", "Generative AI"]}
                titleAccent="Thumbnail AI:"
                title="AI-Powered Thumbnail Generation for Creators"
                tagline="A full-stack SaaS that turns a text prompt into scroll-stopping, on-brand YouTube thumbnails — with brand memory, surgical AI editing, and credit-based billing built in."
                images={SLIDER_IMAGES}
                altPrefix="Thumbnail AI"
                url="https://thumbnail-ai-frontend.vercel.app/"
                urlLabel="Visit Thumbnail AI"
            />

            {/* Overview & Challenge */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <Reveal>
                            <SectionKicker index="01" />
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-8">
                                Project <span className="text-tribe-blue">Overview</span>
                            </h2>
                            <p className="text-xl text-earth-700 leading-relaxed text-center mb-12">
                                Thumbnail AI lets YouTube creators and social-media teams generate publication-ready thumbnails from a text prompt. Users describe a scene, add a headline overlay and their channel's Brand DNA — colors, fonts, niche, logo, mascot — and the platform renders multiple variations using OpenAI and Google Gemini image models, with workspace collaboration and Stripe-powered credit billing.
                            </p>
                        </Reveal>

                        <SectionShot
                            variant="wide"
                            src="/thumbnail-content/proejct-overview.webp"
                            alt="Thumbnail AI project overview"
                            caption="Project overview — the Thumbnail AI platform at a glance."
                        />

                        <Reveal>
                            <div className="bg-earth-50 border-l-4 border-tribe-blue p-8 rounded-xl">
                                <h3 className="text-2xl font-display font-bold mb-3 text-earth-900">The Challenge</h3>
                                <p className="text-earth-700 leading-relaxed">
                                    Creators live or die by thumbnail click-through rate, but professional design is slow and expensive — and generic AI image tools don't understand thumbnail composition rules or remember a channel's visual identity. The client needed a purpose-built tool producing thumbnail-grade output that stays on-brand across every render.
                                </p>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Strategic Goals */}
            <section className="py-20 bg-earth-100">
                <div className="container mx-auto px-4">
                    <Reveal>
                        <SectionKicker index="02" />
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
                                className="flex items-start gap-3 bg-white p-5 rounded-xl shadow-sm ring-1 ring-transparent transition-all duration-500 hover:ring-tribe-blue/30 hover:shadow-lg"
                            >
                                <CheckCircle className="h-5 w-5 text-tribe-blue mt-0.5 flex-shrink-0" />
                                <span className="text-earth-700">{goal}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                    <div className="max-w-4xl mx-auto">
                        <SectionShot
                            variant="left"
                            src="/thumbnail-content/strategic-golas.webp"
                            alt="Thumbnail AI strategic goals"
                            caption="Strategic goals guiding the Thumbnail AI build."
                        />
                    </div>
                </div>
            </section>

            {/* Core Features */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <Reveal>
                        <SectionKicker index="03" />
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
                        <SectionShot
                            variant="right"
                            src="/thumbnail-content/core-featuues.webp"
                            alt="Thumbnail AI core features"
                            caption="Core features — generation, Brand DNA, surgical editing, and billing."
                        />
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
                                    {["Next.js (App Router) & React 19", "TypeScript", "Tailwind CSS 4", "Framer Motion", "Guided Onboarding Tour"].map((tech) => (
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
                                    {["NestJS 11 (TypeScript)", "PostgreSQL + Prisma (AWS RDS)", "OpenAI & Google Gemini APIs", "Stripe Subscriptions & Webhooks", "AWS S3, Redis & BullMQ"].map((tech) => (
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
                        <SectionShot
                            variant="left"
                            src="/thumbnail-content/technical-implmentation.webp"
                            alt="Thumbnail AI technical implementation"
                            caption="Technical implementation — the frontend and backend architecture."
                        />
                    </div>
                </div>
            </section>

            {/* Outcome */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <Reveal>
                        <SectionKicker index="04" />
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
                                Delivered as a complete SaaS from scratch: creators go from a text prompt to multiple on-brand, publication-ready thumbnails in one flow. Brand DNA eliminated re-describing the channel on every generation — the core client pain point — while multi-provider fallback keeps the product usable through provider outages, and the credit ledger provides a safe monetization path across free, pro, and enterprise plans.
                            </p>
                        </div>
                    </Reveal>
                    <div className="max-w-4xl mx-auto">
                        <SectionShot
                            variant="wide"
                            src="/thumbnail-content/project-outcome.webp"
                            alt="Thumbnail AI project outcome"
                            caption="Project outcome — a complete, on-brand thumbnail SaaS delivered."
                        />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-earth-100">
                <div className="container mx-auto px-4">
                    <Reveal>
                        <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm max-w-4xl mx-auto text-center">
                            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
                                Building an <span className="text-tribe-blue">AI-Powered Product?</span>
                            </h2>
                            <p className="text-earth-600 mb-8 max-w-2xl mx-auto">
                                From AI pipelines to full SaaS platforms, we build products that turn cutting-edge models into real business value.
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

export default CaseStudyThumbnailAI;
