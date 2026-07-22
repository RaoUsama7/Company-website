import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Palette, Search, Zap, Layout, BarChart3, Star } from 'lucide-react';
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
    '/avenenir/main.png',
    '/avenenir/4.png',
    '/avenenir/6.png',
    '/avenenir/8.png',
    '/avenenir/10.png',
    '/avenenir/12.png',
];

const CHALLENGES = [
    {
        icon: Layout,
        title: 'Catalog Complexity',
        description:
            'Organizing diverse product lines into intuitive collections for easy navigation and sophisticated filtering.',
    },
    {
        icon: Star,
        title: 'Premium Branding',
        description:
            "Creating a visually engaging experience that mirrors Avenir's high-end lifestyle brand through custom UI elements.",
    },
];

const FEATURES = [
    {
        icon: Palette,
        title: 'Custom Theme Dev',
        description:
            'Bespoke Liquid-based architecture tailored for high-impact product presentations and clean, minimal layouts.',
    },
    {
        icon: Zap,
        title: 'Performance First',
        description:
            'Optimized script loading and image compression to ensure fast load times and strong Core Web Vitals.',
    },
    {
        icon: Search,
        title: 'SEO Architecture',
        description:
            'Structured data schema implementation and optimized URL hierarchies for organic search dominance.',
    },
    {
        icon: BarChart3,
        title: 'Conversion Focus',
        description:
            'Optimized user flows and abandoned cart recovery systems designed to maximize revenue and retention.',
    },
];

const PLATFORM_TECH = [
    'Shopify E-commerce Engine',
    'Custom Liquid Templates',
    'Advanced CSS Interactivity',
    'Mobile-First Responsive UI',
];

const TTT_DELIVERY = [
    'End-to-End Storefront Setup',
    'UX/UI Product Design',
    'Custom Collection Logic',
    'SEO & Performance Tuning',
];

const CaseStudyAvenir = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <div className="min-h-screen bg-background font-sans">
            <ReadingProgress />
            <Navbar />

            <CaseStudyHero
                tags={['Lifestyle E-commerce', 'Shopify Plus', 'Home Decor']}
                titleAccent="Avenir:"
                title="A Premium Home & Decor Destination"
                tagline="Transforming a curated vision of furniture and lifestyle into a high-performance, conversion-driven Shopify ecosystem."
                images={SLIDER_IMAGES}
                altPrefix="Avenir"
                url="https://avenir.pk/"
                urlLabel="Visit avenir.pk"
            />

            {/* Content Section */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="prose prose-lg max-w-none">
                            <Reveal>
                                <div className="not-prose relative overflow-hidden rounded-2xl border-l-4 border-tribe-blue bg-tribe-blue/5 p-8 mb-12">
                                    <div
                                        aria-hidden
                                        className="pointer-events-none absolute -top-16 -right-10 h-40 w-40 rounded-full bg-tribe-blue/10 blur-2xl"
                                    />
                                    <h2 className="relative text-2xl font-display font-bold mb-4 text-tribe-blue">
                                        Project Description
                                    </h2>
                                    <p className="relative text-earth-700 mb-4">
                                        Avenir.pk is a premium online lifestyle destination offering a curated selection
                                        of home decor, furniture, and premium accessories.
                                    </p>
                                    <p className="relative text-earth-700 mb-0">
                                        TTT partnered with Avenir to build a fully functional Shopify-powered platform
                                        that simplifies scalable catalog management while delivering a modern, intuitive
                                        shopping UI.
                                    </p>
                                </div>
                            </Reveal>

                            <SectionShot
                                variant="wide"
                                src="/avenir-content/project-overview.webp"
                                alt="Avenir project overview"
                                caption="Project overview — the Avenir.pk storefront at a glance."
                            />

                            <Reveal>
                                <SectionKicker index="01" />
                                <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">
                                    Key Business Challenges
                                </h2>
                                <p className="text-earth-700 mb-6 text-lg leading-relaxed">
                                    The objective was to create a robust storefront that could showcase a diverse range
                                    of categories—from furniture and mirrors to lighting—without compromising on
                                    performance or visual clarity.
                                </p>
                            </Reveal>

                            <motion.div
                                variants={revealContainer}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, margin: '-80px' }}
                                className="not-prose grid md:grid-cols-2 gap-6 mb-12"
                            >
                                {CHALLENGES.map(({ icon: Icon, title, description }) => (
                                    <motion.div
                                        key={title}
                                        variants={revealItem}
                                        whileHover={{ y: -4 }}
                                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                        className="group relative overflow-hidden rounded-2xl bg-stone-50 p-6 ring-1 ring-stone-200/80 transition-all duration-500 hover:ring-tribe-blue/30 hover:shadow-xl"
                                    >
                                        <div
                                            aria-hidden
                                            className="pointer-events-none absolute -top-12 -right-8 h-32 w-32 rounded-full bg-tribe-blue/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                                        />
                                        <div className="relative mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-tribe-blue/10 ring-1 ring-tribe-blue/20 transition-transform duration-500 group-hover:scale-110">
                                            <Icon className="h-5 w-5 text-tribe-blue" />
                                        </div>
                                        <h3 className="relative text-xl font-bold mb-2 text-stone-900">{title}</h3>
                                        <p className="relative text-earth-700 text-sm leading-relaxed">{description}</p>
                                    </motion.div>
                                ))}
                            </motion.div>

                            <SectionShot
                                variant="left"
                                src="/avenir-content/key-bussines-challnges.webp"
                                alt="Avenir key business challenges"
                                caption="Key business challenges — catalog complexity and premium branding."
                            />

                            <Reveal>
                                <SectionKicker index="02" />
                                <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">
                                    Core Features & Solutions
                                </h2>
                            </Reveal>

                            <motion.div
                                variants={revealContainer}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, margin: '-80px' }}
                                className="not-prose grid md:grid-cols-2 gap-4 mb-12"
                            >
                                {FEATURES.map(({ icon: Icon, title, description }) => (
                                    <motion.div
                                        key={title}
                                        variants={revealItem}
                                        whileHover={{ y: -4 }}
                                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                        className="group flex gap-4 rounded-2xl p-5 ring-1 ring-transparent transition-all duration-500 hover:bg-stone-50 hover:ring-stone-200/80 hover:shadow-lg"
                                    >
                                        <div className="h-fit rounded-xl bg-tribe-blue/10 p-3 ring-1 ring-tribe-blue/20 transition-all duration-500 group-hover:bg-tribe-blue group-hover:ring-tribe-blue">
                                            <Icon className="h-6 w-6 text-tribe-blue transition-colors duration-500 group-hover:text-white" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-stone-900 mb-1">{title}</h4>
                                            <p className="text-earth-600 text-sm leading-relaxed">{description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>

                            <div className="not-prose my-12 grid gap-6 md:grid-cols-2 md:gap-8">
                                <SectionShot
                                    variant="pair"
                                    src="/avenir-content/key-features-and-highlts.webp"
                                    alt="Avenir key features and highlights"
                                    caption="Key features & highlights across the storefront."
                                />
                                <SectionShot
                                    variant="pair"
                                    className="md:mt-14"
                                    src="/avenir-content/feature-section.webp"
                                    alt="Avenir feature sections"
                                    caption="Feature sections that showcase collections and products."
                                />
                            </div>

                            <Reveal>
                                <div className="not-prose relative overflow-hidden rounded-2xl bg-stone-900 p-8 mb-12 text-white shadow-xl ring-1 ring-white/10">
                                    <div
                                        aria-hidden
                                        className="pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-tribe-blue/20 blur-3xl"
                                    />
                                    <h3 className="relative text-2xl font-display font-bold mb-6 text-tribe-blue">
                                        Stack & Responsibilities
                                    </h3>
                                    <div className="relative grid md:grid-cols-2 gap-8">
                                        <div>
                                            <h4 className="text-lg font-bold mb-4 text-tribe-blue/80">Platform Tech</h4>
                                            <ul className="space-y-2.5 text-sm text-stone-300">
                                                {PLATFORM_TECH.map((tech) => (
                                                    <li key={tech} className="flex items-center gap-2.5">
                                                        <CheckCircle className="h-4 w-4 shrink-0 text-tribe-blue" />
                                                        {tech}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold mb-4 text-tribe-blue/80">TTT Delivery</h4>
                                            <ul className="space-y-2.5 text-sm text-stone-300">
                                                {TTT_DELIVERY.map((item) => (
                                                    <li key={item} className="flex items-center gap-2.5">
                                                        <CheckCircle className="h-4 w-4 shrink-0 text-tribe-blue" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>

                            <SectionShot
                                variant="right"
                                src="/avenir-content/tech-stack.webp"
                                alt="Avenir tech stack"
                                caption="The Shopify-based stack and delivery responsibilities."
                            />

                            <Reveal>
                                <SectionKicker index="03" />
                                <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Project Outcome</h2>
                                <p className="text-earth-700 mb-12 text-lg leading-relaxed">
                                    The Avenir.pk launch established a significant digital footprint for the brand. By
                                    providing a scalable catalog structure and a high-performance shopping interface, we
                                    enabled Avenir to present their premium products with the elegance they deserve,
                                    resulting in improved user engagement and high sales conversion rates.
                                </p>
                            </Reveal>

                            <SectionShot
                                variant="wide"
                                src="/avenir-content/ttt-role.webp"
                                alt="TTT role and responsibilities"
                                caption="TTT's role — end-to-end storefront design, build, and optimization."
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 md:py-24 bg-stone-100">
                <div className="container mx-auto px-4">
                    <Reveal>
                        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl bg-white p-8 md:p-12 text-center shadow-sm ring-1 ring-stone-200/70">
                            <div
                                aria-hidden
                                className="pointer-events-none absolute -top-24 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-tribe-blue/10 blur-3xl"
                            />
                            <h2 className="relative text-2xl md:text-3xl font-display font-bold mb-4">
                                Building a Premium Retail Business?
                            </h2>
                            <p className="relative text-stone-600 mb-8 max-w-2xl mx-auto">
                                We help lifestyle brands scale through custom Shopify solutions and conversion-focused
                                design.
                            </p>
                            <div className="relative flex flex-col sm:flex-row gap-4 justify-center">
                                <Link to="/contact">
                                    <Button className="bg-tribe-blue hover:bg-tribe-blue/90 transition-transform hover:-translate-y-0.5">
                                        Consult Your Store Idea
                                    </Button>
                                </Link>
                                <Link to="/trail-stories">
                                    <Button
                                        variant="outline"
                                        className="border-tribe-blue text-tribe-blue hover:bg-tribe-blue/10 transition-transform hover:-translate-y-0.5"
                                    >
                                        Explore More Results
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

export default CaseStudyAvenir;
