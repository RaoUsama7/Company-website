import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Zap, Shield, Globe, Sparkles, Smartphone } from 'lucide-react';
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
    "/danbydk/main.png",
    "/danbydk/4.png",
    "/danbydk/6.png",
    "/danbydk/8.png",
    "/danbydk/10.png",
    "/danbydk/12.png"
];

const CaseStudyDani = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <div className="min-h-screen bg-background font-sans">
            <ReadingProgress />
            <Navbar />

            <CaseStudyHero
                tags={['Luxury Retail', 'Shopify Plus', 'E-commerce']}
                titleAccent="DANI by Daniel K:"
                title="Elevating Luxury Retail Online"
                tagline="A premium, custom-built Shopify e-commerce platform designed to bridge the gap between artisan jewelry craftsmanship and high-performance digital retail."
                images={SLIDER_IMAGES}
                altPrefix="DANI"
                url="https://danibydk.com/"
                urlLabel="Visit danibydk.com"
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
                                        DANI by Daniel K is a custom Shopify-built luxury jewelry e-commerce platform designed to elevate brand presence, optimize conversion, and support international shopping. TTT transformed the brand's online experience into a premium, scalable storefront with custom theme development, advanced cart logic, and conversion-driven UI/UX.
                                    </p>
                                </div>
                            </Reveal>

                            <SectionShot variant="wide" src="/dani-content/proeject-overview.webp" alt="DANI by Daniel K project overview" caption="Project overview — the DANI by Daniel K luxury storefront at a glance." />

                            <Reveal>
                                <SectionKicker index="01" />
                                <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">The Problem</h2>
                                <p className="text-earth-700 mb-8 font-medium">When the client approached TTT, the core challenges included:</p>
                            </Reveal>

                            <motion.div
                                variants={revealContainer}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, margin: '-80px' }}
                                className="grid md:grid-cols-2 gap-4 my-8"
                            >
                                {[
                                    "Low conversion due to unclear categorization",
                                    "Weak mobile experience & responsiveness",
                                    "No multi-language support for global growth",
                                    "Slow page speed & unoptimized assets",
                                    "Lack of SEO structure for visibility",
                                    "Complicated checkout for luxury buyers"
                                ].map((problem, idx) => (
                                    <motion.div
                                        key={idx}
                                        variants={revealItem}
                                        whileHover={{ y: -4 }}
                                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                        className="flex items-center gap-3 p-3 bg-red-50/50 rounded-lg border border-red-100/50 transition-shadow duration-300 hover:shadow-md"
                                    >
                                        <div className="h-2 w-2 rounded-full bg-red-400 flex-shrink-0" />
                                        <p className="text-earth-700 text-sm mb-0">{problem}</p>
                                    </motion.div>
                                ))}
                            </motion.div>

                            <SectionShot variant="left" src="/dani-content/the-problem.webp" alt="DANI by Daniel K conversion and experience problems" caption="The problem — conversion, mobile, and global-reach gaps in the original store." />

                            <Reveal>
                                <SectionKicker index="02" />
                                <h2 className="text-3xl font-display font-bold mb-6 text-earth-900 italic">The Solution</h2>
                                <p className="text-earth-700 mb-6">We implemented a custom Shopify solution designed to drive conversion and support long-term growth:</p>
                            </Reveal>

                            <motion.div
                                variants={revealContainer}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, margin: '-80px' }}
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12"
                            >
                                <motion.div
                                    variants={revealItem}
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    className="p-6 bg-earth-50 rounded-xl border border-earth-100 flex flex-col items-center text-center transition-all duration-300 hover:border-tribe-blue/30 hover:shadow-lg"
                                >
                                    <Zap className="h-8 w-8 text-tribe-blue mb-4" />
                                    <h5 className="font-bold mb-1">Custom Theme</h5>
                                    <p className="text-xs text-earth-600">Built from scratch for speed, not just a template install.</p>
                                </motion.div>
                                <motion.div
                                    variants={revealItem}
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    className="p-6 bg-earth-50 rounded-xl border border-earth-100 flex flex-col items-center text-center transition-all duration-300 hover:border-tribe-blue/30 hover:shadow-lg"
                                >
                                    <Globe className="h-8 w-8 text-tribe-blue mb-4" />
                                    <h5 className="font-bold mb-1">Global Expansion</h5>
                                    <p className="text-xs text-earth-600">Multi-language setup and geo-targeted readiness.</p>
                                </motion.div>
                                <motion.div
                                    variants={revealItem}
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    className="p-6 bg-earth-50 rounded-xl border border-earth-100 flex flex-col items-center text-center transition-all duration-300 hover:border-tribe-blue/30 hover:shadow-lg"
                                >
                                    <Sparkles className="h-8 w-8 text-tribe-blue mb-4" />
                                    <h5 className="font-bold mb-1">Product Story</h5>
                                    <p className="text-xs text-earth-600">UX focused on high-impact jewelry presentation.</p>
                                </motion.div>
                            </motion.div>

                            <SectionShot variant="right" src="/dani-content/the-solution.webp" alt="DANI by Daniel K custom Shopify solution" caption="The solution — a custom Shopify build tuned for speed, conversion, and global growth." />

                            <Reveal>
                                <SectionKicker index="03" />
                                <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Features & Highlights</h2>
                            </Reveal>

                            {/* Feature Grid */}
                            <Reveal>
                                <div className="grid md:grid-cols-2 gap-8 my-12">
                                    <section>
                                        <h4 className="font-bold text-earth-900 mb-4 uppercase tracking-tighter text-sm">Internationalization</h4>
                                        <ul className="space-y-2 list-none p-0">
                                            {["Multi-language implementation", "Region-based currency detection", "Geo-targeted content display", "Location-based tax automation"].map(item => (
                                                <li key={item} className="text-earth-700 text-sm flex items-start gap-2">
                                                    <CheckCircle className="h-4 w-4 text-tribe-blue mt-0.5 flex-shrink-0" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </section>
                                    <section>
                                        <h4 className="font-bold text-earth-900 mb-4 uppercase tracking-tighter text-sm">UI/UX & Branding</h4>
                                        <ul className="space-y-2 list-none p-0">
                                            {["Scroll-based animations", "Mobile-first responsive design", "Conversion-focused product pages", "High-impact hero banners"].map(item => (
                                                <li key={item} className="text-earth-700 text-sm flex items-start gap-2">
                                                    <CheckCircle className="h-4 w-4 text-tribe-blue mt-0.5 flex-shrink-0" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </section>
                                </div>
                            </Reveal>

                            <Reveal>
                                <div className="bg-earth-50 p-8 rounded-xl border border-earth-100 my-12">
                                    <h4 className="font-bold text-earth-900 mb-6 flex items-center gap-2">
                                        <Smartphone className="h-5 w-5 text-tribe-blue" />
                                        E-Commerce Functionality
                                    </h4>
                                    <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                                        <div className="flex items-center gap-3">
                                            <Shield className="h-4 w-4 text-tribe-blue flex-shrink-0" />
                                            <span className="text-sm font-medium">Advanced Cart & Checkout Funnels</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Shield className="h-4 w-4 text-tribe-blue flex-shrink-0" />
                                            <span className="text-sm font-medium">Secure Payment Integration</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Shield className="h-4 w-4 text-tribe-blue flex-shrink-0" />
                                            <span className="text-sm font-medium">Abandoned Cart Recovery</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Shield className="h-4 w-4 text-tribe-blue flex-shrink-0" />
                                            <span className="text-sm font-medium">Dynamic Pricing & Discounts</span>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>

                            <SectionShot variant="wide" src="/dani-content/featurs-and-highlights.webp" alt="DANI by Daniel K features and highlights" caption="Features & highlights — internationalization, branding, and e-commerce functionality." />

                            <Reveal>
                                <SectionKicker index="04" />
                                <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Tech Stack</h2>
                                <div className="flex flex-wrap gap-3 mb-12">
                                    {[
                                        'Shopify (Liquid)', 'Custom CSS/JS', 'Shopify Admin API',
                                        'Klaviyo', 'Stripe', 'Meta Pixel', 'SEO Structured Markup'
                                    ].map((tech) => (
                                        <span key={tech} className="px-4 py-2 bg-earth-100 text-earth-700 rounded-full text-sm font-medium">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </Reveal>

                            <div className="not-prose my-12 grid gap-6 md:grid-cols-2 md:gap-8">
                                <SectionShot variant="pair" src="/dani-content/tech-stack.webp" alt="DANI by Daniel K technical implementation and tech stack" caption="Tech stack — Shopify Liquid, custom CSS/JS, Klaviyo, Stripe, and SEO structured markup." />
                                <SectionShot variant="pair" className="md:mt-14" src="/dani-content/results.webp" alt="DANI by Daniel K project results and outcome" caption="Results — a premium, scalable storefront built for conversion and international reach." />
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
                                Ready for Your Flagship Store?
                            </h2>
                            <p className="text-earth-600 mb-8 max-w-2xl mx-auto">
                                Let's transform your brand into a high-performance digital leader with custom-built e-commerce solutions.
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

export default CaseStudyDani;
