import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Shield, Globe, Zap, BarChart3, Layout } from 'lucide-react';
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
    "/rene/main.png",
    "/rene/4.png",
    "/rene/6.png",
    "/rene/8.png",
    "/rene/10.png",
    "/rene/12.png"
];

const CaseStudyRenee = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <div className="min-h-screen bg-background font-sans">
            <ReadingProgress />
            <Navbar />

            <CaseStudyHero
                tags={['AI / ML', 'Health & Wellness', 'SaaS']}
                titleAccent="Renée:"
                title="AI-powered Emotional Support Companion"
                tagline="Providing 24/7 judgment-free emotional support through a sophisticated AI-driven platform."
                images={SLIDER_IMAGES}
                altPrefix="Renée"
                url="https://www.reneespace.com/"
                urlLabel="Visit reneespace.com"
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
                                        Renée is an AI-powered emotional support companion web application providing 24/7 judgment-free emotional support. The platform offers a safe conversational space for users dealing with stress, anxiety, and personal challenges.
                                    </p>
                                    <p className="text-earth-700 mb-0">
                                        Supported by modern web technologies and content-driven marketing infrastructure, Renée bridges the gap between traditional therapy and immediate emotional availability.
                                    </p>
                                </div>
                            </Reveal>

                            <SectionShot
                                variant="wide"
                                src="/renee-content/project-overview.webp"
                                alt="Renée project overview"
                                caption="Project overview — the Renée emotional-support platform at a glance."
                            />

                            <Reveal>
                                <SectionKicker index="01" />
                                <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Project Story: The Problem</h2>
                                <p className="text-earth-700 mb-6 text-lg leading-relaxed">
                                    Individuals often lack immediate access to emotional support. Traditional therapy requires appointments, carries significant costs, and may involve social stigma. Users needed an accessible, always-available emotional companion for moments of stress, anxiety, or personal difficulty.
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
                                    className="bg-earth-50 p-6 rounded-xl ring-1 ring-transparent transition-all duration-500 hover:ring-tribe-blue/30 hover:shadow-xl"
                                >
                                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                                        <Shield className="h-5 w-5 text-tribe-blue" />
                                        Core Problem
                                    </h3>
                                    <p className="text-earth-700 text-sm">
                                        Lack of immediate, affordable, and stigma-free emotional support for individuals experiencing daily stress and mental challenges.
                                    </p>
                                </motion.div>
                                <motion.div
                                    variants={revealItem}
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    className="bg-earth-50 p-6 rounded-xl ring-1 ring-transparent transition-all duration-500 hover:ring-tribe-blue/30 hover:shadow-xl"
                                >
                                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                                        <Zap className="h-5 w-5 text-tribe-blue" />
                                        Project Nature
                                    </h3>
                                    <p className="text-earth-700 text-sm">
                                        A comprehensive product launch from scratch, including high-conversion marketing, blog platform, and robust CMS integration.
                                    </p>
                                </motion.div>
                            </motion.div>

                            <SectionShot
                                variant="left"
                                src="/renee-content/proejct-storry.webp"
                                alt="Renée project story"
                                caption="Project story — the accessibility gap Renée was built to close."
                            />

                            <Reveal>
                                <SectionKicker index="02" />
                                <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Project Goals</h2>
                            </Reveal>

                            <motion.div
                                variants={revealContainer}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, margin: '-80px' }}
                                className="grid md:grid-cols-2 gap-4 mb-12"
                            >
                                {[
                                    "Drive user acquisition through a compelling landing page and waitlist system.",
                                    "Establish content marketing presence in emotional wellness through a blog platform.",
                                    "Improve SEO visibility for emotional support and wellness keywords.",
                                    "Deliver high-performance pages with strong Core Web Vitals.",
                                    "Track user behavior and optimize conversion funnels using GA4 analytics."
                                ].map((goal, i) => (
                                    <motion.div
                                        key={i}
                                        variants={revealItem}
                                        whileHover={{ y: -4 }}
                                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                        className="flex items-start gap-3 bg-white p-4 rounded-lg border border-earth-100 transition-all duration-500 hover:border-tribe-blue/30 hover:shadow-lg"
                                    >
                                        <CheckCircle className="h-5 w-5 text-tribe-blue mt-1 flex-shrink-0" />
                                        <span className="text-earth-700 text-sm">{goal}</span>
                                    </motion.div>
                                ))}
                            </motion.div>

                            <SectionShot
                                variant="right"
                                src="/renee-content/goals-of-proenct.webp"
                                alt="Renée project goals"
                                caption="Strategic goals — acquisition, content marketing, SEO, and performance."
                            />

                            <Reveal>
                                <SectionKicker index="03" />
                                <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">The Solution</h2>
                                <p className="text-earth-700 mb-6 text-lg leading-relaxed">
                                    To close the accessibility gap, we launched Renée as a 24/7 emotional support companion that removes the barriers of cost, scheduling, and stigma. A high-conversion landing page and waitlist bring users in, while a Prismic-powered blog and SEO-optimized content build trust in the emotional wellness space. Built on Next.js 15 for speed and GA4 for insight, the platform turns immediate emotional availability into a scalable, measurable product.
                                </p>
                            </Reveal>

                            <SectionShot
                                variant="left"
                                src="/renee-content/the-solution.webp"
                                alt="Renée solution"
                                caption="The solution — how Renée solved the core problem."
                            />

                            <Reveal>
                                <SectionKicker index="04" />
                                <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Key Features & Highlights</h2>
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
                                    className="group flex gap-4 rounded-2xl p-5 ring-1 ring-transparent transition-all duration-500 hover:bg-stone-50 hover:ring-stone-200/80 hover:shadow-lg"
                                >
                                    <div className="bg-tribe-blue/10 p-3 rounded-lg h-fit">
                                        <Layout className="h-6 w-6 text-tribe-blue" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-earth-900">High-Conversion UX</h4>
                                        <p className="text-earth-600 text-sm">Hero section, feature highlights, and waitlist CTAs designed for maximum engagement.</p>
                                    </div>
                                </motion.div>
                                <motion.div
                                    variants={revealItem}
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    className="group flex gap-4 rounded-2xl p-5 ring-1 ring-transparent transition-all duration-500 hover:bg-stone-50 hover:ring-stone-200/80 hover:shadow-lg"
                                >
                                    <div className="bg-tribe-blue/10 p-3 rounded-lg h-fit">
                                        <Globe className="h-6 w-6 text-tribe-blue" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-earth-900">SEO & Content</h4>
                                        <p className="text-earth-600 text-sm">Dynamic blog routing with CMS-driven content and optimized metadata/Open Graph tags.</p>
                                    </div>
                                </motion.div>
                                <motion.div
                                    variants={revealItem}
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    className="group flex gap-4 rounded-2xl p-5 ring-1 ring-transparent transition-all duration-500 hover:bg-stone-50 hover:ring-stone-200/80 hover:shadow-lg"
                                >
                                    <div className="bg-tribe-blue/10 p-3 rounded-lg h-fit">
                                        <Zap className="h-6 w-6 text-tribe-blue" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-earth-900">Performance First</h4>
                                        <p className="text-earth-600 text-sm">Static Generation (SSG) for speed and ISR for fresh blog updates, achieving top Web Vitals.</p>
                                    </div>
                                </motion.div>
                                <motion.div
                                    variants={revealItem}
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    className="group flex gap-4 rounded-2xl p-5 ring-1 ring-transparent transition-all duration-500 hover:bg-stone-50 hover:ring-stone-200/80 hover:shadow-lg"
                                >
                                    <div className="bg-tribe-blue/10 p-3 rounded-lg h-fit">
                                        <BarChart3 className="h-6 w-6 text-tribe-blue" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-earth-900">Data-Driven Insights</h4>
                                        <p className="text-earth-600 text-sm">Custom GA4 event tracking for precise conversion and engagement measurement.</p>
                                    </div>
                                </motion.div>
                            </motion.div>

                            <SectionShot
                                variant="wide"
                                src="/renee-content/kety-featuers-and-highlights.webp"
                                alt="Renée key features and highlights"
                                caption="Key features & highlights across the Renée experience."
                            />

                            <Reveal>
                                <div className="bg-earth-900 text-white p-8 rounded-xl mb-12">
                                    <h3 className="text-2xl font-display font-bold mb-6 text-tribe-blue">Tech Stack</h3>
                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div>
                                            <h4 className="text-lg font-bold mb-4 text-tribe-blue/80">Frontend</h4>
                                            <ul className="space-y-2 text-sm text-gray-300">
                                                <li>Next.js 15 (App Router)</li>
                                                <li>TypeScript</li>
                                                <li>Tailwind CSS v4</li>
                                                <li>Radix UI</li>
                                                <li>Lucide React</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold mb-4 text-tribe-blue/80">Backend & CMS</h4>
                                            <ul className="space-y-2 text-sm text-gray-300">
                                                <li>Prismic Headless CMS</li>
                                                <li>Prismic Slice Machine</li>
                                                <li>GraphQL API</li>
                                                <li>Google Analytics 4 (GA4)</li>
                                                <li>Vercel Edge Network</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>

                            <div className="not-prose my-12 grid gap-6 md:grid-cols-2 md:gap-8">
                                <SectionShot
                                    variant="pair"
                                    src="/renee-content/technolofges-and-funcionalies.webp"
                                    alt="Renée technologies and functionalities"
                                    caption="Technologies & functionalities powering the Renée platform."
                                />
                                <SectionShot
                                    variant="pair"
                                    className="md:mt-14"
                                    src="/renee-content/tech-stack.webp"
                                    alt="Renée technical implementation and tech stack"
                                    caption="Technical implementation — the Next.js 15 and Prismic CMS stack in detail."
                                />
                            </div>

                            <Reveal>
                                <SectionKicker index="05" />
                                <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Conclusion</h2>
                                <p className="text-earth-700 mb-12 text-lg leading-relaxed">
                                    The Renée project successfully launched a sophisticated AI emotional support platform that prioritizes user privacy, accessibility, and high performance. By leveraging Next.js 15 and Prismic CMS, we delivered a scalable solution that empowers users to seek support whenever they need it, while providing the client with a powerful content-driven marketing machine.
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
                                Looking to Build an AI-Powered Future?
                            </h2>
                            <p className="text-earth-600 mb-8 max-w-2xl mx-auto">
                                Whether it's emotional wellness or enterprise AI, we help you bring intelligent solutions to life.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link to="/contact">
                                    <Button className="bg-tribe-blue hover:bg-tribe-blue/90">
                                        Discuss Your AI Project
                                    </Button>
                                </Link>
                                <Link to="/trail-stories">
                                    <Button variant="outline" className="border-tribe-blue text-tribe-blue hover:bg-tribe-blue/10">
                                        Explore More Stories
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

export default CaseStudyRenee;
