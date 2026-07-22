import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ShoppingBag, Zap, Globe, BarChart, Settings, Smartphone, Users } from 'lucide-react';
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
    "/venlu shop/main.png",
    "/venlu shop/4.png",
    "/venlu shop/6.png",
    "/venlu shop/8.png",
    "/venlu shop/10.png",
    "/venlu shop/12.png"
];

const CaseStudyVenlushop = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <div className="min-h-screen bg-background font-sans">
            <ReadingProgress />
            <Navbar />

            <CaseStudyHero
                tags={['E-commerce', 'Anime Fashion', 'Shopify']}
                titleAccent="VenluShop:"
                title="Anime-Inspired Global Retail"
                tagline="A dynamic e-commerce platform bridging the gap between anime culture and high-performance activewear through a compelling, immersive storefront."
                images={SLIDER_IMAGES}
                altPrefix="VenluShop"
                url="https://venlushop.com/"
                urlLabel="Visit venlushop.com"
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
                                        VenluShop is a dynamic online e-commerce platform selling anime-inspired gymwear, streetwear, and accessories. Built on Shopify, this platform combines clean product organization with a highly visual storefront to deliver an immersive shopping experience that connects with anime fans and activewear enthusiasts internationally.
                                    </p>
                                </div>
                            </Reveal>

                            <SectionShot
                                variant="wide"
                                src="/venlushop-content/project-overview.webp"
                                alt="VenluShop project overview"
                                caption="Project overview — the VenluShop storefront at a glance."
                            />

                            <Reveal>
                                <SectionKicker index="01" />
                                <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Key Business Challenges</h2>
                                <p className="text-earth-700 mb-8">The client came to TTT with the challenge to:</p>
                            </Reveal>

                            <motion.div
                                variants={revealContainer}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, margin: '-80px' }}
                                className="grid md:grid-cols-2 gap-6 my-12"
                            >
                                {[
                                    "Build a scalable platform for international apparel sales",
                                    "Organize complex product collections (Gymwear, Compressions, Jewelry)",
                                    "Enable dynamic filtering and category display",
                                    "Create visual product pages with multi-variant selections",
                                    "Maintain performance-optimized mobile experience",
                                    "Implement strategic marketing and subscription elements"
                                ].map((challenge, idx) => (
                                    <motion.div
                                        key={idx}
                                        variants={revealItem}
                                        whileHover={{ y: -4 }}
                                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                        className="flex items-start gap-3 p-4 bg-earth-50 rounded-lg border border-earth-100 transition-all duration-300 hover:border-tribe-blue/30 hover:shadow-lg"
                                    >
                                        <div className="h-6 w-6 rounded-full bg-tribe-blue/10 flex items-center justify-center flex-shrink-0 mt-1">
                                            <span className="text-tribe-blue text-xs font-bold">{idx + 1}</span>
                                        </div>
                                        <p className="text-earth-700 text-sm font-medium mb-0">{challenge}</p>
                                    </motion.div>
                                ))}
                            </motion.div>

                            <div className="not-prose my-12 grid gap-6 md:grid-cols-2 md:gap-8">
                                <SectionShot
                                    variant="pair"
                                    src="/venlushop-content/key-challenges.webp"
                                    alt="VenluShop key business challenges"
                                    caption="Key business challenges the client brought to TTT."
                                />
                                <SectionShot
                                    variant="pair"
                                    className="md:mt-14"
                                    src="/venlushop-content/the-problem.webp"
                                    alt="VenluShop the problem"
                                    caption="The problem — scaling a diverse catalog internationally."
                                />
                            </div>

                            <SectionShot
                                variant="left"
                                src="/venlushop-content/solution.webp"
                                alt="VenluShop the solution"
                                caption="The solution — a bespoke Shopify storefront built for scale."
                            />

                            <Reveal>
                                <SectionKicker index="02" />
                                <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Features & Highlights</h2>
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
                                    className="p-6 bg-earth-50 rounded-xl border border-earth-100 transition-all duration-300 hover:border-tribe-blue/30 hover:shadow-lg"
                                >
                                    <h4 className="font-bold text-earth-900 mb-2 flex items-center gap-2">
                                        <ShoppingBag className="h-5 w-5 text-tribe-blue" />
                                        Cart & Checkout Optimization
                                    </h4>
                                    <p className="text-earth-600 text-sm">Advanced cart logic and secure payment gateway integration for frictionless transactions.</p>
                                </motion.div>
                                <motion.div
                                    variants={revealItem}
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    className="p-6 bg-earth-50 rounded-xl border border-earth-100 transition-all duration-300 hover:border-tribe-blue/30 hover:shadow-lg"
                                >
                                    <h4 className="font-bold text-earth-900 mb-2 flex items-center gap-2">
                                        <Users className="h-5 w-5 text-tribe-blue" />
                                        Customer Account System
                                    </h4>
                                    <p className="text-earth-600 text-sm">Dedicated customer dashboards for order tracking, profile management, and history.</p>
                                </motion.div>
                                <motion.div
                                    variants={revealItem}
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    className="p-6 bg-earth-50 rounded-xl border border-earth-100 transition-all duration-300 hover:border-tribe-blue/30 hover:shadow-lg"
                                >
                                    <h4 className="font-bold text-earth-900 mb-2 flex items-center gap-2">
                                        <BarChart className="h-5 w-5 text-tribe-blue" />
                                        Abandoned Cart Recovery
                                    </h4>
                                    <p className="text-earth-600 text-sm">Automated workflows to re-engage customers and recover lost sales opportunities.</p>
                                </motion.div>
                                <motion.div
                                    variants={revealItem}
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    className="p-6 bg-earth-50 rounded-xl border border-earth-100 transition-all duration-300 hover:border-tribe-blue/30 hover:shadow-lg"
                                >
                                    <h4 className="font-bold text-earth-900 mb-2 flex items-center gap-2">
                                        <Settings className="h-5 w-5 text-tribe-blue" />
                                        Inventory & Pricing Rules
                                    </h4>
                                    <p className="text-earth-600 text-sm">Configuration of dynamic pricing, automated discounts, and real-time inventory sync.</p>
                                </motion.div>
                            </motion.div>

                            <SectionShot
                                variant="right"
                                src="/venlushop-content/features.webp"
                                alt="VenluShop features and highlights"
                                caption="Features & highlights across the storefront."
                            />

                            <Reveal>
                                <SectionKicker index="03" />
                                <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">SEO & Growth Setup</h2>
                                <div className="bg-earth-50 p-6 rounded-xl border border-earth-100 my-8">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="flex items-center gap-2">
                                            <CheckCircle className="h-4 w-4 text-tribe-blue" />
                                            <span className="text-sm font-medium">Structured Meta Architecture</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <CheckCircle className="h-4 w-4 text-tribe-blue" />
                                            <span className="text-sm font-medium">Technical SEO Implementation</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <CheckCircle className="h-4 w-4 text-tribe-blue" />
                                            <span className="text-sm font-medium">Schema Markup Strategy</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <CheckCircle className="h-4 w-4 text-tribe-blue" />
                                            <span className="text-sm font-medium">Optimized Product URL Structure</span>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>

                            <Reveal>
                                <SectionKicker index="04" />
                                <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Performance Optimization</h2>
                            </Reveal>

                            <motion.div
                                variants={revealContainer}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, margin: '-80px' }}
                                className="grid md:grid-cols-3 gap-6 my-12"
                            >
                                <motion.div
                                    variants={revealItem}
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    className="text-center p-4"
                                >
                                    <Zap className="h-8 w-8 text-tribe-blue mx-auto mb-3" />
                                    <h5 className="font-bold mb-1">Speed</h5>
                                    <p className="text-xs text-earth-600">Reduced script load & image compression</p>
                                </motion.div>
                                <motion.div
                                    variants={revealItem}
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    className="text-center p-4"
                                >
                                    <Smartphone className="h-8 w-8 text-tribe-blue mx-auto mb-3" />
                                    <h5 className="font-bold mb-1">Mobile</h5>
                                    <p className="text-xs text-earth-600">Tailored UI/UX for hand-held shopping</p>
                                </motion.div>
                                <motion.div
                                    variants={revealItem}
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    className="text-center p-4"
                                >
                                    <Globe className="h-8 w-8 text-tribe-blue mx-auto mb-3" />
                                    <h5 className="font-bold mb-1">Vitals</h5>
                                    <p className="text-xs text-earth-600">Optimized Core Web Vitals for rankings</p>
                                </motion.div>
                            </motion.div>

                            <Reveal>
                                <div className="bg-earth-900 text-white p-8 rounded-xl mb-12 shadow-xl">
                                    <h3 className="text-2xl font-display font-bold mb-6 text-tribe-blue">TTT’s Role & Responsibilities</h3>
                                    <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
                                        <div className="flex items-start gap-3">
                                            <CheckCircle className="h-5 w-5 text-tribe-blue mt-1 flex-shrink-0" />
                                            <span className="text-gray-300">UX & Visuals alignment with brand identity</span>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckCircle className="h-5 w-5 text-tribe-blue mt-1 flex-shrink-0" />
                                            <span className="text-gray-300">Strategy & Requirement gathering</span>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckCircle className="h-5 w-5 text-tribe-blue mt-1 flex-shrink-0" />
                                            <span className="text-gray-300">Shopify theme setup & custom templates</span>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckCircle className="h-5 w-5 text-tribe-blue mt-1 flex-shrink-0" />
                                            <span className="text-gray-300">Navigation & filter architecture</span>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckCircle className="h-5 w-5 text-tribe-blue mt-1 flex-shrink-0" />
                                            <span className="text-gray-300">On-page design & catalog optimization</span>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckCircle className="h-5 w-5 text-tribe-blue mt-1 flex-shrink-0" />
                                            <span className="text-gray-300">Responsive UI/UX delivery</span>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>

                            <Reveal>
                                <SectionKicker index="05" />
                                <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Tech Stack</h2>
                                <SectionShot
                                    variant="wide"
                                    src="/venlushop-content/tech-stack.webp"
                                    alt="VenluShop tech stack"
                                    caption="The Shopify-based stack powering VenluShop."
                                />
                                <div className="flex flex-wrap gap-3 mb-12">
                                    {[
                                        'Shopify (Liquid Architecture)', 'Custom CSS & JavaScript',
                                        'Shopify Admin API', 'Klaviyo', 'Stripe',
                                        'Meta Pixel', 'SEO Structured Markup'
                                    ].map((tech) => (
                                        <span key={tech} className="px-4 py-2 bg-earth-100 text-earth-700 rounded-full text-sm font-medium">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
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
                                Ready to Launch Your Brand?
                            </h2>
                            <p className="text-earth-600 mb-8 max-w-2xl mx-auto">
                                Let's build a flaghsip e-commerce experience that connects your brand with a global audience.
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

export default CaseStudyVenlushop;
