import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ShoppingCart, Zap, Search, Globe, Layout, Shield } from 'lucide-react';
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
    "/freecer/main.png",
    "/freecer/1.png",
    "/freecer/3.png",
    "/freecer/6.png",
    "/freecer/8.png"
];

const CaseStudyFreecer = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <div className="min-h-screen bg-background font-sans">
            <ReadingProgress />
            <Navbar />

            <CaseStudyHero
                tags={['E-commerce', 'Shopify', 'Luxury Branding']}
                titleAccent="Freecer.at:"
                title="Next-Gen E-commerce Excellence"
                tagline="A high-performance, luxury-branded shopping experience optimized for conversion, SEO, and global scale."
                images={SLIDER_IMAGES}
                altPrefix="Freecer"
                url="https://www.freecer.at/"
                urlLabel="Visit freecer.at"
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
                                        FREECER.AT is an advanced e-commerce platform designed to provide a seamless and efficient online shopping experience. It combines robust backend functionality with a user-friendly frontend interface.
                                    </p>
                                    <p className="text-earth-700 mb-0">
                                        Built to be scalable, secure, and responsive, the platform ensures accessibility across all devices while maintaining a high-impact, luxury aesthetic.
                                    </p>
                                </div>
                            </Reveal>

                            <SectionShot variant="wide" src="/freecer-content/project-overiew.webp" alt="Freecer.at project overview" caption="Project overview — the Freecer.at storefront at a glance." />

                            <Reveal>
                                <SectionKicker index="01" />
                                <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Key Functionalities</h2>
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
                                        <ShoppingCart className="h-5 w-5 text-tribe-blue" />
                                        eCommerce Core
                                    </h3>
                                    <ul className="text-earth-700 text-sm space-y-2 list-none p-0">
                                        <li className="flex items-center gap-2"><CheckCircle className="h-3 w-3 text-tribe-blue" /> Advanced Cart & Checkout Optimization</li>
                                        <li className="flex items-center gap-2"><CheckCircle className="h-3 w-3 text-tribe-blue" /> Secure Payment Gateway (Stripe)</li>
                                        <li className="flex items-center gap-2"><CheckCircle className="h-3 w-3 text-tribe-blue" /> Abandoned Cart Recovery (Klaviyo)</li>
                                        <li className="flex items-center gap-2"><CheckCircle className="h-3 w-3 text-tribe-blue" /> Persistent Cart Across Sessions</li>
                                    </ul>
                                </motion.div>
                                <motion.div
                                    variants={revealItem}
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    className="bg-earth-50 p-6 rounded-xl ring-1 ring-transparent transition-all duration-500 hover:ring-tribe-blue/30 hover:shadow-xl"
                                >
                                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-earth-900">
                                        <Zap className="h-5 w-5 text-tribe-blue" />
                                        Performance & Vitals
                                    </h3>
                                    <ul className="text-earth-700 text-sm space-y-2 list-none p-0">
                                        <li className="flex items-center gap-2"><CheckCircle className="h-3 w-3 text-tribe-blue" /> Lazy Loading Optimization</li>
                                        <li className="flex items-center gap-2"><CheckCircle className="h-3 w-3 text-tribe-blue" /> Image Compression Strategy</li>
                                        <li className="flex items-center gap-2"><CheckCircle className="h-3 w-3 text-tribe-blue" /> Reduced Script Load</li>
                                        <li className="flex items-center gap-2"><CheckCircle className="h-3 w-3 text-tribe-blue" /> Core Web Vitals Excellence</li>
                                    </ul>
                                </motion.div>
                            </motion.div>

                            <div className="not-prose my-12 grid gap-6 md:grid-cols-2 md:gap-8">
                                <SectionShot variant="pair" src="/freecer-content/functionalies.webp" alt="Freecer.at core functionalities" caption="Core functionalities — cart, checkout, and performance features in action." />
                                <SectionShot variant="pair" className="md:mt-14" src="/freecer-content/functionalies-2.webp" alt="Freecer.at functionalities continued" caption="More functionalities — storefront flows and conversion touchpoints." />
                            </div>

                            <Reveal>
                                <SectionKicker index="02" />
                                <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Growth & Global Reach</h2>
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
                                        <Search className="h-6 w-6 text-tribe-blue" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-earth-900">SEO Architecture</h4>
                                        <p className="text-earth-600 text-sm">Structured meta architecture, Schema implementation, and optimized product URLs for maximum visibility.</p>
                                    </div>
                                </motion.div>
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
                                        <h4 className="font-bold text-earth-900">Internationalization</h4>
                                        <p className="text-earth-600 text-sm">Multi-language support with region-based currency detection and geo-targeted content display.</p>
                                    </div>
                                </motion.div>
                                <motion.div
                                    variants={revealItem}
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    className="flex gap-4 p-4 rounded-xl ring-1 ring-transparent transition-all duration-500 hover:bg-earth-50 hover:ring-stone-200/80 hover:shadow-lg"
                                >
                                    <div className="bg-tribe-blue/10 p-3 rounded-lg h-fit">
                                        <Layout className="h-6 w-6 text-tribe-blue" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-earth-900">Luxury Branding</h4>
                                        <p className="text-earth-600 text-sm">Conversion-focused product pages with scroll-based animations and custom Liquid theme enhancements.</p>
                                    </div>
                                </motion.div>
                                <motion.div
                                    variants={revealItem}
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    className="flex gap-4 p-4 rounded-xl ring-1 ring-transparent transition-all duration-500 hover:bg-earth-50 hover:ring-stone-200/80 hover:shadow-lg"
                                >
                                    <div className="bg-tribe-blue/10 p-3 rounded-lg h-fit">
                                        <Shield className="h-6 w-6 text-tribe-blue" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-earth-900">Secure Operations</h4>
                                        <p className="text-earth-600 text-sm">Inventory management, dynamic pricing rules, and location-based tax automation for seamless global trade.</p>
                                    </div>
                                </motion.div>
                            </motion.div>

                            <Reveal>
                                <div className="bg-gray-900 text-white p-8 rounded-xl mb-12 shadow-lg">
                                    <h3 className="text-2xl font-display font-bold mb-6 text-tribe-blue">Technical Stack</h3>
                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div>
                                            <h4 className="text-lg font-bold mb-4 text-tribe-blue/80">E-commerce Platform</h4>
                                            <ul className="space-y-2 text-sm text-gray-300">
                                                <li>Shopify (Liquid Theme Architecture)</li>
                                                <li>Shopify Admin API</li>
                                                <li>Custom CSS & JavaScript Enhancements</li>
                                                <li>MERN Stack (Hybrid/Migration Context)</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold mb-4 text-tribe-blue/80">Growth & Integrations</h4>
                                            <ul className="space-y-2 text-sm text-gray-300">
                                                <li>Klaviyo (Email Marketing)</li>
                                                <li>Stripe (Payments)</li>
                                                <li>Meta Pixel (Analytics)</li>
                                                <li>SEO Structured Markup</li>
                                                <li>Cloudinary (Image Strategy)</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>

                            <SectionShot variant="wide" src="/freecer-content/tech-stack.webp" alt="Freecer.at technical stack" caption="Technical stack — the Shopify architecture and integrations powering Freecer.at." />

                            <Reveal>
                                <SectionKicker index="03" />
                                <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Conclusion</h2>
                                <p className="text-earth-700 mb-12 text-lg leading-relaxed">
                                    The Freecer.at transformation resulted in a high-speed, luxury storefront that perfectly balances aesthetics with performance. By implementing a custom Shopify architecture with advanced SEO and internationalization features, we provided a scalable foundation for global growth, significantly improving the brand's digital presence and conversion potential.
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
                                Elevate Your E-commerce Brand
                            </h2>
                            <p className="text-earth-600 mb-8 max-w-2xl mx-auto">
                                From custom Shopify themes to complex MERN storefronts, we build high-converting retail experiences.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link to="/contact">
                                    <Button className="bg-tribe-blue hover:bg-tribe-blue/90">
                                        Discuss Your Online Store
                                    </Button>
                                </Link>
                                <Link to="/trail-stories">
                                    <Button variant="outline" className="border-tribe-blue text-tribe-blue hover:bg-tribe-blue/10">
                                        View More Success Stories
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

export default CaseStudyFreecer;
