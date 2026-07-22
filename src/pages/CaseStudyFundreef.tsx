import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Search, Bot, Shield, Database, Layers } from 'lucide-react';
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
    "/fundreef/main.png",
    "/fundreef/4.png",
    "/fundreef/6.png",
    "/fundreef/8.png",
    "/fundreef/10.png",
    "/fundreef/12.png"
];

const CaseStudyFundreef = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <div className="min-h-screen bg-background font-sans">
            <ReadingProgress />
            <Navbar />

            <CaseStudyHero
                tags={['AI / FinTech', 'Marketplace', 'SaaS']}
                titleAccent="Fundreef:"
                title="The AI-Powered Fundraising Ecosystem"
                tagline="Bridging the gap between startups and investors with intelligent discovery, AI prep tools, and structured deal flow."
                images={SLIDER_IMAGES}
                altPrefix="Fundreef"
                url="https://app.fundreef.com/"
                urlLabel="Visit app.fundreef.com"
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
                                        Fundreef is a comprehensive fundraising and investor matching platform connecting startups with high-value investors.
                                    </p>
                                    <p className="text-earth-700 mb-0">
                                        By leveraging AI-powered fundraising tools, CRM/pipeline management, and a robust investor database, the platform streamlines the capital-raising journey for both founders and investors.
                                    </p>
                                </div>
                            </Reveal>

                            <SectionShot
                                variant="wide"
                                src="/fundreef-content/project-overview.webp"
                                alt="Fundreef project overview"
                                caption="Project overview — the Fundreef fundraising ecosystem at a glance."
                            />

                            <Reveal>
                                <SectionKicker index="01" />
                                <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Project Story: Solving Friction</h2>
                                <p className="text-earth-700 mb-6 text-lg leading-relaxed">
                                    The fundraising landscape was fragmented. Startups struggled to find relevant investors, while investors lacked efficient deal discovery tools. The process was time-consuming, opaque, and often lacked proper preparation.
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
                                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-earth-900">
                                        <Shield className="h-5 w-5 text-tribe-blue" />
                                        The Problem
                                    </h3>
                                    <p className="text-earth-700 text-sm">
                                        High friction in investor discovery and startup preparation, leading to long, inefficient fundraising cycles and missed opportunities.
                                    </p>
                                </motion.div>
                                <motion.div
                                    variants={revealItem}
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    className="bg-earth-50 p-6 rounded-xl ring-1 ring-transparent transition-all duration-500 hover:ring-tribe-blue/30 hover:shadow-xl"
                                >
                                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-earth-900">
                                        <Bot className="h-5 w-5 text-tribe-blue" />
                                        The Solution
                                    </h3>
                                    <p className="text-earth-700 text-sm">
                                        A full-stack ecosystem featuring an AI-driven "Fundraising Copilot" and a sophisticated two-sided CRM marketplace.
                                    </p>
                                </motion.div>
                            </motion.div>

                            <SectionShot
                                variant="left"
                                src="/fundreef-content/project-storrty.webp"
                                alt="Fundreef project story"
                                caption="Project story — how Fundreef removes friction from investor discovery and prep."
                            />

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
                                    "Efficient investor discovery based on sector, stage, and geography.",
                                    "Structured deal flow and CRM pipeline management for investors.",
                                    "AI-powered preparation tools: Pitch Deck & Term Sheet analyzers.",
                                    "Creation of a low-friction, high-transparency marketplace.",
                                    "Implementation of tiered, usage-based subscription monetization.",
                                    "Maintaining a high-quality, verified investor and fund database."
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
                                src="/fundreef-content/goals-of-project.webp"
                                alt="Fundreef goals of the project"
                                caption="Goals of the project — the outcomes Fundreef was built to deliver."
                            />

                            <Reveal>
                                <SectionKicker index="03" />
                                <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">The Solution</h2>
                                <p className="text-earth-700 mb-6 text-lg leading-relaxed">
                                    Fundreef answers that friction with a single, full-stack ecosystem that pairs an AI-driven "Fundraising Copilot" with a two-sided CRM marketplace. Startups get intelligent investor discovery and AI prep tools, while investors work structured deal flow and a verified, high-quality database. The result is a low-friction, transparent path from first match to closed round.
                                </p>
                            </Reveal>

                            <SectionShot
                                variant="left"
                                src="/fundreef-content/solution.webp"
                                alt="Fundreef solution"
                                caption="The solution — how Fundreef solved the core problem."
                            />

                            <Reveal>
                                <SectionKicker index="04" />
                                <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Key Features</h2>
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
                                    className="flex gap-4 p-4 rounded-xl ring-1 ring-transparent transition-all duration-500 hover:bg-earth-50 hover:ring-earth-100 hover:shadow-lg"
                                >
                                    <div className="bg-tribe-blue/10 p-3 rounded-lg h-fit">
                                        <Search className="h-6 w-6 text-tribe-blue" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-earth-900">Intelligent Discovery</h4>
                                        <p className="text-earth-600 text-sm">Meilisearch-powered database with faceted search and typo tolerance for investor matching.</p>
                                    </div>
                                </motion.div>
                                <motion.div
                                    variants={revealItem}
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    className="flex gap-4 p-4 rounded-xl ring-1 ring-transparent transition-all duration-500 hover:bg-earth-50 hover:ring-earth-100 hover:shadow-lg"
                                >
                                    <div className="bg-tribe-blue/10 p-3 rounded-lg h-fit">
                                        <Bot className="h-6 w-6 text-tribe-blue" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-earth-900">AI Fundraising Suite</h4>
                                        <p className="text-earth-600 text-sm">Pitch deck analyzer, term sheet generator, and valuation calculators integrated via Gemini API.</p>
                                    </div>
                                </motion.div>
                                <motion.div
                                    variants={revealItem}
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    className="flex gap-4 p-4 rounded-xl ring-1 ring-transparent transition-all duration-500 hover:bg-earth-50 hover:ring-earth-100 hover:shadow-lg"
                                >
                                    <div className="bg-tribe-blue/10 p-3 rounded-lg h-fit">
                                        <Database className="h-6 w-6 text-tribe-blue" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-earth-900">CRM & Deal Flow</h4>
                                        <p className="text-earth-600 text-sm">Actionable pipeline management for investors to track interest, due diligence, and deal progress.</p>
                                    </div>
                                </motion.div>
                                <motion.div
                                    variants={revealItem}
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    className="flex gap-4 p-4 rounded-xl ring-1 ring-transparent transition-all duration-500 hover:bg-earth-50 hover:ring-earth-100 hover:shadow-lg"
                                >
                                    <div className="bg-tribe-blue/10 p-3 rounded-lg h-fit">
                                        <Layers className="h-6 w-6 text-tribe-blue" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-earth-900">Subscription Engine</h4>
                                        <p className="text-earth-600 text-sm">Dynamic Stripe-based monetization with real-time enforcement of usage limits and tiers.</p>
                                    </div>
                                </motion.div>
                            </motion.div>

                            <SectionShot
                                variant="wide"
                                src="/fundreef-content/key-feawtures-and-highlts.webp"
                                alt="Fundreef key features and highlights"
                                caption="Key features & highlights across the Fundreef platform."
                            />

                            <Reveal>
                                <div className="bg-emerald-950 text-white p-8 rounded-xl mb-12 shadow-lg border border-emerald-800">
                                    <h3 className="text-2xl font-display font-bold mb-6 text-tribe-blue">Technical Ecosystem</h3>
                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div>
                                            <h4 className="text-lg font-bold mb-4 text-tribe-blue/80">Frontend Stack</h4>
                                            <ul className="space-y-2 text-sm text-emerald-100/80">
                                                <li>Livewire 3.5 & Blade</li>
                                                <li>Alpine.js & Tailwind CSS</li>
                                                <li>ApexCharts for Visual Analytics</li>
                                                <li>Real-time WebSockets (Chat)</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold mb-4 text-tribe-blue/80">Backend Architecture</h4>
                                            <ul className="space-y-2 text-sm text-emerald-100/80">
                                                <li>Laravel 10 (PHP 8.1+)</li>
                                                <li>Google Gemini API Integration</li>
                                                <li>Python AI Microservice</li>
                                                <li>Meilisearch (Laravel Scout)</li>
                                                <li>Redis Caching & Queue Processing</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>

                            <div className="not-prose my-12 grid gap-6 md:grid-cols-2 md:gap-8">
                                <SectionShot
                                    variant="pair"
                                    src="/fundreef-content/technologies-and-functionalies.webp"
                                    alt="Fundreef technologies and functionalities"
                                    caption="Technologies & functionalities powering the Fundreef ecosystem."
                                />
                                <SectionShot
                                    variant="pair"
                                    className="md:mt-14"
                                    src="/fundreef-content/tech-stack.webp"
                                    alt="Fundreef tech stack"
                                    caption="Tech stack — the frontend and backend architecture behind Fundreef."
                                />
                            </div>

                            <Reveal>
                                <SectionKicker index="05" />
                                <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Conclusion</h2>
                                <p className="text-earth-700 mb-12 text-lg leading-relaxed">
                                    The Fundreef project redefined how startups prepare for and execute their fundraising rounds. By combining advanced AI analysis with a high-performance marketplace architecture, we successfully built a platform that not only matches capital with opportunity but provides the tools necessary for founders to succeed.
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
                                Developing a Complex Marketplace?
                            </h2>
                            <p className="text-earth-600 mb-8 max-w-2xl mx-auto">
                                From AI-driven matching to secure financial ecosystems, we build the foundations for your industry's next big platform.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link to="/contact">
                                    <Button className="bg-tribe-blue hover:bg-tribe-blue/90">
                                        Build Your Marketplace
                                    </Button>
                                </Link>
                                <Link to="/trail-stories">
                                    <Button variant="outline" className="border-tribe-blue text-tribe-blue hover:bg-tribe-blue/10">
                                        Explore More Case Studies
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

export default CaseStudyFundreef;
