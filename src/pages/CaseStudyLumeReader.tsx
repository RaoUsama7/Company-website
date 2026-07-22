import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Smartphone, Cloud, Layers, Cpu } from 'lucide-react';
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
    "/lume reader/main.png",
    "/lume reader/4.png",
    "/lume reader/6.png",
    "/lume reader/8.png",
    "/lume reader/10.png",
    "/lume reader/12.png",
    "/lume reader/14.png",
    "/lume reader/16.png"
];

const CaseStudyLumeReader = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <div className="min-h-screen bg-background font-sans">
            <ReadingProgress />
            <Navbar />

            <CaseStudyHero
                tags={['Study', 'Education', 'Flutter']}
                titleAccent="Lume Reader:"
                title="The Distraction-Free Reading App"
                tagline="A production-ready MVP designed to deliver a clean, fast, and consistent reading experience across iOS and Android."
                images={SLIDER_IMAGES}
                altPrefix="Lume Reader"
            />

            {/* Content Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="prose prose-lg max-w-none">
                            <Reveal>
                                <div className="bg-tribe-blue/5 p-8 rounded-xl mb-12">
                                    <h2 className="text-2xl font-display font-bold mb-4 text-tribe-blue">Project Description</h2>
                                    <p className="text-earth-700 mb-0">
                                        Lume Reader is a mobile eBook reader application designed to deliver a clean, fast, and distraction-free experience. Developed by TTT as a production-ready MVP, it validates the core idea of a modern reading app while staying lean, scalable, and technically future-proof.
                                    </p>
                                </div>
                            </Reveal>

                            <SectionShot variant="wide" src="/lumereader-content/proejct-oerview.webp" alt="Lume Reader project overview" caption="Project overview — the Lume Reader distraction-free reading app at a glance." />

                            <Reveal>
                                <SectionKicker index="01" />
                                <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Problems We Solved</h2>
                                <p className="text-earth-700 mb-8">Lume Reader addresses common usability gaps found in existing eBook apps:</p>
                            </Reveal>

                            <motion.div
                                variants={revealContainer}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, margin: '-80px' }}
                                className="grid md:grid-cols-2 gap-6 my-12"
                            >
                                {[
                                    { title: "Minimal UI", desc: "A reader-first interface with zero distractions." },
                                    { title: "Reliable Sync", desc: "Cross-device activity tracking for progress and highlights." },
                                    { title: "Offline-First", desc: "Local storage for uninterrupted access anywhere." },
                                    { title: "Cross-Platform", desc: "Consistent performance on Android & iOS using a single codebase." }
                                ].map((solution, idx) => (
                                    <motion.div
                                        key={idx}
                                        variants={revealItem}
                                        whileHover={{ y: -4 }}
                                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                        className="p-5 bg-earth-50 rounded-xl border border-earth-100 transition-all duration-500 hover:border-tribe-blue/30 hover:shadow-lg"
                                    >
                                        <h4 className="font-bold text-earth-900 mb-2">{solution.title}</h4>
                                        <p className="text-earth-600 text-sm mb-0">{solution.desc}</p>
                                    </motion.div>
                                ))}
                            </motion.div>

                            <SectionShot variant="left" src="/lumereader-content/problem-we-solves.webp" alt="Problems Lume Reader solves" caption="The usability gaps in existing eBook apps that Lume Reader set out to fix." />

                            <Reveal>
                                <SectionKicker index="02" />
                                <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Core Features & MVP Scope</h2>
                            </Reveal>

                            <motion.div
                                variants={revealContainer}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, margin: '-80px' }}
                                className="space-y-8 my-12"
                            >
                                <motion.div
                                    variants={revealItem}
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    className="p-6 rounded-xl border border-earth-100 shadow-sm transition-all hover:shadow-md hover:border-tribe-blue/30"
                                >
                                    <h4 className="font-bold text-earth-900 mb-4 flex items-center gap-2">
                                        <Cpu className="h-5 w-5 text-tribe-blue" />
                                        Advanced Reading Engine
                                    </h4>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 mb-0">
                                        {["Smooth page navigation", "EPUB, PDF, and TXT support", "Pinch-to-zoom functionality", "Adjustable text size", "Light & Dark modes", "Text selection & annotation"].map((item, i) => (
                                            <li key={i} className="text-earth-700 text-sm flex items-center gap-2">
                                                <div className="h-1.5 w-1.5 bg-tribe-blue rounded-full" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>

                                <motion.div
                                    variants={revealItem}
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    className="p-6 rounded-xl border border-earth-100 shadow-sm transition-all hover:shadow-md hover:border-tribe-blue/30"
                                >
                                    <h4 className="font-bold text-earth-900 mb-4 flex items-center gap-2">
                                        <Cloud className="h-5 w-5 text-tribe-blue" />
                                        Authentication & Cloud Sync
                                    </h4>
                                    <p className="text-earth-600 text-sm mb-4">Secure user-specific sync via Google and Email authentication:</p>
                                    <div className="flex flex-wrap gap-2">
                                        {["Reading Progress", "Bookmarks", "Highlights", "Notes"].map((tag) => (
                                            <span key={tag} className="px-3 py-1 bg-tribe-blue/10 text-tribe-blue text-xs font-medium rounded-full">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            </motion.div>

                            <div className="not-prose my-12 grid gap-6 md:grid-cols-2 md:gap-8">
                                <SectionShot variant="pair" src="/lumereader-content/what-we-built.webp" alt="What we built for Lume Reader" caption="What we built — the core MVP scope delivered for Lume Reader." />
                                <SectionShot variant="pair" className="md:mt-14" src="/lumereader-content/core-features.webp" alt="Lume Reader core features" caption="Core features and MVP scope across the reading experience." />
                            </div>

                            <SectionShot variant="right" src="/lumereader-content/auth-and-sync.webp" alt="Lume Reader authentication and cloud sync" caption="Authentication & cloud sync — progress, bookmarks, highlights, and notes across devices." />

                            <Reveal>
                                <SectionKicker index="03" />
                                <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">The Offline-First Experience</h2>
                                <p className="text-earth-700 mb-6">
                                    Architected for uninterrupted reading, eBook files are stored locally. Reading activity is cached during offline sessions and automatically synced once connectivity is restored.
                                </p>
                            </Reveal>

                            <SectionShot variant="wide" src="/lumereader-content/offline-first-experineve.webp" alt="Lume Reader offline-first experience" caption="The offline-first experience — read anywhere, with activity synced when back online." />

                            <Reveal>
                                <div className="bg-earth-900 text-white p-8 rounded-xl mb-12 shadow-2xl relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-4 opacity-10">
                                        <Sparkles className="h-24 w-24" />
                                    </div>
                                    <h3 className="text-2xl font-display font-bold mb-4 text-tribe-blue">UI/UX Design Ownership</h3>
                                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                                        With no finalized design provided by the client, TTT took full ownership of the visual language.
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <h5 className="text-tribe-blue font-bold uppercase tracking-wider text-xs">AI-Assisted Design</h5>
                                            <p className="text-gray-400 text-sm">Automated exploration of layout structures, typography hierarchy, and color balance.</p>
                                        </div>
                                        <div className="space-y-2">
                                            <h5 className="text-tribe-blue font-bold uppercase tracking-wider text-xs">TTT Curation</h5>
                                            <p className="text-gray-400 text-sm">Manual refinement and validation to ensure technical feasibility and user comfort.</p>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>

                            <div className="not-prose my-12 grid gap-6 md:grid-cols-2 md:gap-8">
                                <SectionShot variant="pair" src="/lumereader-content/design-ui-ux-approach.webp" alt="Lume Reader design and UI/UX approach" caption="Design & UI/UX approach — establishing the visual language from scratch." />
                                <SectionShot variant="pair" className="md:mt-14" src="/lumereader-content/ui-ux-ownership.webp" alt="Lume Reader UI/UX ownership" caption="UI/UX ownership — AI-assisted exploration refined through TTT curation." />
                            </div>

                            <Reveal>
                                <SectionKicker index="04" />
                                <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Technical Architecture</h2>
                            </Reveal>

                            <motion.div
                                variants={revealContainer}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, margin: '-80px' }}
                                className="grid md:grid-cols-2 gap-8 my-12"
                            >
                                <motion.div
                                    variants={revealItem}
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    className="p-6 bg-earth-50 rounded-xl border border-earth-100 transition-all duration-500 hover:border-tribe-blue/30 hover:shadow-lg"
                                >
                                    <h4 className="font-bold text-earth-900 mb-4 flex items-center gap-2">
                                        <Smartphone className="h-5 w-5 text-tribe-blue" />
                                        Mobile Frontend
                                    </h4>
                                    <div className="space-y-2">
                                        <p className="text-earth-700 text-sm"><strong>Framework:</strong> Flutter (Dart)</p>
                                        <p className="text-earth-700 text-xs text-earth-600">Chosen for consistent cross-platform UI and native-level performance from a single codebase.</p>
                                    </div>
                                </motion.div>
                                <motion.div
                                    variants={revealItem}
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    className="p-6 bg-earth-50 rounded-xl border border-earth-100 transition-all duration-500 hover:border-tribe-blue/30 hover:shadow-lg"
                                >
                                    <h4 className="font-bold text-earth-900 mb-4 flex items-center gap-2">
                                        <Layers className="h-5 w-5 text-tribe-blue" />
                                        Cloud Backend
                                    </h4>
                                    <div className="space-y-2">
                                        <p className="text-earth-700 text-sm"><strong>Platform:</strong> Supabase (PostgreSQL)</p>
                                        <p className="text-earth-700 text-xs text-earth-600">Powers secure auth, real-time sync, and metadata storage with enterprise-grade reliability.</p>
                                    </div>
                                </motion.div>
                            </motion.div>

                            <Reveal>
                                <div className="flex flex-wrap gap-2 pt-8 border-t">
                                    {["Flutter", "Dart", "Supabase", "PostgreSQL", "Google Auth", "Offline-First", "AI-Driven UX"].map(tech => (
                                        <span key={tech} className="px-4 py-2 bg-earth-100 text-earth-700 rounded-full text-sm font-medium">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </Reveal>

                            <div className="not-prose my-12 grid gap-6 md:grid-cols-2 md:gap-8">
                                <SectionShot variant="pair" src="/lumereader-content/technical-archituecture.webp" alt="Lume Reader technical architecture" caption="Technical architecture — Flutter frontend with a Supabase (PostgreSQL) cloud backend." />
                                <SectionShot variant="pair" className="md:mt-14" src="/lumereader-content/technicl-archtecture-2.webp" alt="Lume Reader technical architecture detail" caption="Architecture in depth — secure auth, real-time sync, and offline-first data flow." />
                            </div>
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
                                Need a Production-Ready MVP?
                            </h2>
                            <p className="text-earth-600 mb-8 max-w-2xl mx-auto">
                                Let's build a lean, scalable product that validates your idea and sets the stage for growth.
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
                        </div>
                    </Reveal>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default CaseStudyLumeReader;
