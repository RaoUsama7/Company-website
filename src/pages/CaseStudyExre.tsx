import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Database, Search, Globe, Mail, Layout, Code2 } from 'lucide-react';
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
    "/exre/main.png",
    "/exre/4.png",
    "/exre/6.png",
    "/exre/8.png",
    "/exre/10.png",
    "/exre/13.png"
];

const CaseStudyExre = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <div className="min-h-screen bg-background font-sans">
            <ReadingProgress />
            <Navbar />

            <CaseStudyHero
                tags={['Agency Website', 'Sanity CMS', 'Multilingual']}
                titleAccent="EXRE:"
                title="Actual Projects. Measurable Results."
                tagline="A professional, multilingual agency platform built for scalability, performance, and seamless content management."
                images={SLIDER_IMAGES}
                altPrefix="EXRE"
                url="https://exre.org/"
                urlLabel="Visit exre.org"
            />

            {/* Content Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="prose prose-lg max-w-none">
                            <Reveal>
                                <div className="bg-tribe-blue/5 p-8 rounded-xl mb-12 border-l-4 border-tribe-blue">
                                    <h2 className="text-2xl font-display font-bold mb-4 text-tribe-blue">Project Description</h2>
                                    <p className="text-earth-700 mb-4">
                                        EXRE is a professional agency website built to establish a strong digital presence, communicate services clearly, and present a polished, modern brand identity.
                                    </p>
                                    <p className="text-earth-700 mb-0">
                                        Executed end-to-end by The Tech Tribe (TTT), we handled everything from branding alignment and UI design to frontend architecture, Sanity CMS integration, and full-scale SEO implementation.
                                    </p>
                                </div>
                            </Reveal>

                            <SectionShot variant="wide" src="/exre-content/project-overview.webp" alt="Exre platform overview" caption="Project overview — the Exre platform at a glance." />

                            <Reveal>
                                <SectionKicker index="01" />
                                <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">The Problem Statement</h2>
                                <p className="text-earth-700 mb-6 text-lg leading-relaxed">
                                    The client needed a digital platform that could build instant credibility. Key requirements included a content-managed solution for easy updates, clear presentation of diverse services, and an SEO-friendly architecture to drive organic visibility in a competitive market.
                                </p>
                            </Reveal>

                            <div className="not-prose my-12 grid gap-6 md:grid-cols-2 md:gap-8">
                                <SectionShot variant="pair" src="/exre-content/problem-statement.webp" alt="Exre problem statement" caption="The problem we set out to solve." />
                                <SectionShot variant="pair" className="md:mt-14" src="/exre-content/our-solution.webp" alt="Exre TTT solution" caption="Our solution — how TTT approached it." />
                            </div>

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
                                    className="bg-earth-50 p-6 rounded-xl ring-1 ring-stone-200/80 transition-all duration-500 hover:ring-tribe-blue/30 hover:shadow-xl"
                                >
                                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-earth-900">
                                        <Layout className="h-5 w-5 text-tribe-blue" />
                                        Branding Needs
                                    </h3>
                                    <p className="text-earth-700 text-sm">
                                        A modern, professional UI focused on client perspective, providing clarity and establishing authority in their niche.
                                    </p>
                                </motion.div>
                                <motion.div
                                    variants={revealItem}
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    className="bg-earth-50 p-6 rounded-xl ring-1 ring-stone-200/80 transition-all duration-500 hover:ring-tribe-blue/30 hover:shadow-xl"
                                >
                                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-earth-900">
                                        <Database className="h-5 w-5 text-tribe-blue" />
                                        Operational Needs
                                    </h3>
                                    <p className="text-earth-700 text-sm">
                                        A fully integrated, scalable CMS setup allowing the client to manage services and case studies without developer intervention.
                                    </p>
                                </motion.div>
                            </motion.div>

                            <Reveal>
                                <SectionKicker index="02" />
                                <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Key Features Implemented</h2>
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
                                    className="flex gap-4 p-4 rounded-xl ring-1 ring-transparent transition-all duration-500 hover:bg-earth-50 hover:ring-stone-200/80 hover:shadow-lg"
                                >
                                    <div className="bg-tribe-blue/10 p-3 rounded-lg h-fit">
                                        <Globe className="h-6 w-6 text-tribe-blue" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-earth-900">Multilingual (EN / DE)</h4>
                                        <p className="text-earth-600 text-sm">Full language switching for English and German, with dynamic content loading entirely via Sanity CMS.</p>
                                    </div>
                                </motion.div>
                                <motion.div
                                    variants={revealItem}
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    className="flex gap-4 p-4 rounded-xl ring-1 ring-transparent transition-all duration-500 hover:bg-earth-50 hover:ring-stone-200/80 hover:shadow-lg"
                                >
                                    <div className="bg-tribe-blue/10 p-3 rounded-lg h-fit">
                                        <Code2 className="h-6 w-6 text-tribe-blue" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-earth-900">Sanity CMS Setup</h4>
                                        <p className="text-earth-600 text-sm">Structured schemas for scalable content growth, enabling easy updates for services and results.</p>
                                    </div>
                                </motion.div>
                                <motion.div
                                    variants={revealItem}
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    className="flex gap-4 p-4 rounded-xl ring-1 ring-transparent transition-all duration-500 hover:bg-earth-50 hover:ring-stone-200/80 hover:shadow-lg"
                                >
                                    <div className="bg-tribe-blue/10 p-3 rounded-lg h-fit">
                                        <Search className="h-6 w-6 text-tribe-blue" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-earth-900">SEO-First Architecture</h4>
                                        <p className="text-earth-600 text-sm">Optimized semantic markup and metadata structure to ensure high visibility and organic performance.</p>
                                    </div>
                                </motion.div>
                                <motion.div
                                    variants={revealItem}
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    className="flex gap-4 p-4 rounded-xl ring-1 ring-transparent transition-all duration-500 hover:bg-earth-50 hover:ring-stone-200/80 hover:shadow-lg"
                                >
                                    <div className="bg-tribe-blue/10 p-3 rounded-lg h-fit">
                                        <Mail className="h-6 w-6 text-tribe-blue" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-earth-900">Integrated Lead Flow</h4>
                                        <p className="text-earth-600 text-sm">Custom contact forms connected directly to the inbox, designed with high-impact CTAs.</p>
                                    </div>
                                </motion.div>
                            </motion.div>

                            <div className="not-prose my-12 grid gap-6 md:grid-cols-2 md:gap-8">
                                <SectionShot variant="pair" src="/exre-content/key-features.webp" alt="Exre key features" caption="Key features implemented across the platform." />
                                <SectionShot variant="pair" className="md:mt-14" src="/exre-content/key-features-2.webp" alt="Exre more key features" caption="Additional features and refinements." />
                            </div>

                            <Reveal>
                                <div className="bg-slate-900 text-white p-8 rounded-xl mb-12 shadow-lg">
                                    <h3 className="text-2xl font-display font-bold mb-6 text-tribe-blue">Technical Architecture</h3>
                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div>
                                            <h4 className="text-lg font-bold mb-4 text-tribe-blue/80">Frontend Solution</h4>
                                            <ul className="space-y-2 text-sm text-slate-300">
                                                <li>React.js (Component-based UI)</li>
                                                <li>Next.js (SSG/ISR for SEO)</li>
                                                <li>Tailwind CSS Styling</li>
                                                <li>Dynamic Language Routing</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold mb-4 text-tribe-blue/80">Content & Backend</h4>
                                            <ul className="space-y-2 text-sm text-slate-300">
                                                <li>Sanity CMS Integration</li>
                                                <li>Structured Content Schemas</li>
                                                <li>Optimized Asset Delivery</li>
                                                <li>Secure Lead Handling</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>

                            <SectionShot variant="left" src="/exre-content/tech-stack.webp" alt="Exre technical architecture" caption="The technical architecture and stack." />

                            <Reveal>
                                <SectionKicker index="03" />
                                <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">The TTT Role</h2>
                                <p className="text-earth-700 mb-12 text-lg leading-relaxed">
                                    As a full-service partner, we took ownership of the entire lifecycle. This included UI/UX planning from the client’s perspective, custom schema design for Sanity, and ensuring a brand-aligned presentation that reflects EXRE’s expertise in delivering measurable results.
                                </p>
                            </Reveal>

                            <SectionShot variant="wide" src="/exre-content/ttt-role.webp" alt="TTT role on Exre" caption="TTT's role — end-to-end delivery." />
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
                                Ready to Solidify Your Digital Brand?
                            </h2>
                            <p className="text-earth-600 mb-8 max-w-2xl mx-auto">
                                We specialize in building agency and corporate websites that are not just visually strong, but technically solid and future-proof.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link to="/contact">
                                    <Button className="bg-tribe-blue hover:bg-tribe-blue/90">
                                        Start Your Consultation
                                    </Button>
                                </Link>
                                <Link to="/trail-stories">
                                    <Button variant="outline" className="border-tribe-blue text-tribe-blue hover:bg-tribe-blue/10">
                                        Browse More Work
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

export default CaseStudyExre;
