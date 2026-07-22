import { useEffect } from 'react';
import { motion } from 'framer-motion';
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
    "/t2c web/main.png",
    "/t2c web/4.png",
    "/t2c web/6.png",
    "/t2c web/8.png",
    "/t2c web/10.png",
    "/t2c web/12.png",
    "/t2c web/14.png",
    "/t2c web/16.png",
    "/t2c web/18.png",
    "/t2c web/20.png"
];

const CaseStudyT2CWeb = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <div className="min-h-screen bg-background font-sans">
            <ReadingProgress />
            <Navbar />

            <CaseStudyHero
                tags={['Sports Community', 'Web Platform', 'SaaS']}
                titleAccent="Team2Challenge (Web):"
                title="The Complete Club Dashboard"
                tagline="A powerful web-based administration dashboard that simplifies how clubs, coaches, and administrators manage large-scale sports communities."
                images={SLIDER_IMAGES}
                altPrefix="T2C"
                url="https://www.team2challenge.ch/"
                urlLabel="Visit team2challenge.ch"
            />

            {/* Content Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="prose prose-lg max-w-none">
                            <Reveal>
                                <div className="bg-tribe-blue/5 p-8 rounded-xl mb-12">
                                    <h2 className="text-2xl font-display font-bold mb-4 text-tribe-blue">Web Platform Overview</h2>
                                    <p className="text-earth-700 mb-0">
                                        The T2C Web Dashboard provides the administrative spine for the entire ecosystem. While the mobile app focuses on real-time engagement for members and parents, the web platform empowers club owners and admins with deep analytical insights and complex management tools.
                                    </p>

                                    <div className="not-prose my-12 grid gap-6 md:grid-cols-2 md:gap-8">
                                        <SectionShot variant="pair" src="/t2c-web-content/project-overview.webp" alt="Team2Challenge web project-overview" caption="Web platform overview." />
                                        <SectionShot variant="pair" className="md:mt-14" src="/t2c-web-content/home-screen.webp" alt="Team2Challenge web home-screen" caption="The web home screen." />
                                    </div>
                                    <div className="not-prose my-12 grid gap-6 md:grid-cols-2 md:gap-8">
                                        <SectionShot variant="pair" src="/t2c-web-content/auth-and-registration.webp" alt="Team2Challenge web auth-and-registration" caption="Authentication & registration." />
                                        <SectionShot variant="pair" className="md:mt-14" src="/t2c-web-content/notifications.webp" alt="Team2Challenge web notifications" caption="Notifications center." />
                                    </div>
                                </div>
                            </Reveal>

                            <Reveal>
                                <SectionKicker index="01" />
                                <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Administrative Control</h2>

                                <p className="text-earth-700 mb-6 text-lg leading-relaxed">
                                    The web application handles the heavy lifting of roster management, bulk data imports, and financial tracking. Administrators can oversee every team within their organization, monitor attendance trends, and broadcast announcements across the entire platform from a central command center.
                                </p>
                            </Reveal>

                            <div className="not-prose my-12 grid gap-6 md:grid-cols-2 md:gap-8">
                                <SectionShot variant="pair" src="/t2c-web-content/role-management.webp" alt="Team2Challenge web role-management" caption="Role & permission management." />
                                <SectionShot variant="pair" className="md:mt-14" src="/t2c-web-content/content-creation.webp" alt="Team2Challenge web content-creation" caption="Global content creation." />
                            </div>
                            <div className="not-prose my-12 grid gap-6 md:grid-cols-2 md:gap-8">
                                <SectionShot variant="pair" src="/t2c-web-content/sponsers.webp" alt="Team2Challenge web sponsers" caption="Sponsor management." />
                                <SectionShot variant="pair" className="md:mt-14" src="/t2c-web-content/profile-management.webp" alt="Team2Challenge web profile-management" caption="Profile management." />
                            </div>

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
                                    <h4 className="font-bold text-earth-900 mb-2">Centralized Roster Control</h4>
                                    <p className="text-earth-600 text-sm">Manage thousands of members across dozens of teams. Upload player rosters via CSV/Excel and automate welcome invitations.</p>
                                </motion.div>
                                <motion.div
                                    variants={revealItem}
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    className="p-6 bg-earth-50 rounded-xl border border-earth-100 transition-all duration-500 hover:border-tribe-blue/30 hover:shadow-lg"
                                >
                                    <h4 className="font-bold text-earth-900 mb-2">Advanced Analytics</h4>
                                    <p className="text-earth-600 text-sm">Visualize attendance trends, member growth, and engagement metrics to make data-driven decisions for your club.</p>
                                </motion.div>
                                <motion.div
                                    variants={revealItem}
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    className="p-6 bg-earth-50 rounded-xl border border-earth-100 transition-all duration-500 hover:border-tribe-blue/30 hover:shadow-lg"
                                >
                                    <h4 className="font-bold text-earth-900 mb-2">Global Content Management</h4>
                                    <p className="text-earth-600 text-sm">A full CMS for club-wide news, sponsor banners, and legal documents. Ensure every member has access to current information.</p>
                                </motion.div>
                                <motion.div
                                    variants={revealItem}
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    className="p-6 bg-earth-50 rounded-xl border border-earth-100 transition-all duration-500 hover:border-tribe-blue/30 hover:shadow-lg"
                                >
                                    <h4 className="font-bold text-earth-900 mb-2">Club-Level Customization</h4>
                                    <p className="text-earth-600 text-sm">Customize domains, branding, and role permissions to suit the specific governance model of your sports organization.</p>
                                </motion.div>
                            </motion.div>

                            <Reveal>
                                <SectionKicker index="02" />
                                <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Web Technical Stack</h2>
                            </Reveal>

                            <div className="not-prose my-12 grid gap-6 md:grid-cols-2 md:gap-8">
                                <SectionShot variant="pair" src="/t2c-web-content/tech-frontend.webp" alt="Team2Challenge web tech-frontend" caption="Frontend tech stack." />
                                <SectionShot variant="pair" className="md:mt-14" src="/t2c-web-content/tech-backend.webp" alt="Team2Challenge web tech-backend" caption="Backend tech stack." />
                            </div>
                            <div className="not-prose my-12 grid gap-6 md:grid-cols-2 md:gap-8">
                                <SectionShot variant="pair" src="/t2c-web-content/web-frontend.webp" alt="Team2Challenge web web-frontend" caption="Web frontend architecture." />
                                <SectionShot variant="pair" className="md:mt-14" src="/t2c-web-content/deployment-hosting.webp" alt="Team2Challenge web deployment-hosting" caption="Deployment & hosting." />
                            </div>

                            <motion.div
                                variants={revealContainer}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, margin: '-80px' }}
                                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-12"
                            >
                                <motion.div
                                    variants={revealItem}
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    className="p-6 bg-earth-50 rounded-xl border border-earth-100 transition-all duration-500 hover:border-tribe-blue/30 hover:shadow-lg"
                                >
                                    <h4 className="font-bold text-earth-900 mb-2">Next.js 15</h4>
                                    <p className="text-earth-600 text-xs">Utilizing Server Components and Server Actions for high-performance administrative workflows.</p>
                                </motion.div>
                                <motion.div
                                    variants={revealItem}
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    className="p-6 bg-earth-50 rounded-xl border border-earth-100 transition-all duration-500 hover:border-tribe-blue/30 hover:shadow-lg"
                                >
                                    <h4 className="font-bold text-earth-900 mb-2">Redux Toolkit</h4>
                                    <p className="text-earth-600 text-xs">Robust state management for complex, multi-page administrative forms and data tables.</p>
                                </motion.div>
                                <motion.div
                                    variants={revealItem}
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    className="p-6 bg-earth-50 rounded-xl border border-earth-100 transition-all duration-500 hover:border-tribe-blue/30 hover:shadow-lg"
                                >
                                    <h4 className="font-bold text-earth-900 mb-2">RTK Query</h4>
                                    <p className="text-earth-600 text-xs">Efficient caching and synchronization with the NestJS backend to ensure real-time data accuracy.</p>
                                </motion.div>
                                <motion.div
                                    variants={revealItem}
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    className="p-6 bg-earth-50 rounded-xl border border-earth-100 transition-all duration-500 hover:border-tribe-blue/30 hover:shadow-lg"
                                >
                                    <h4 className="font-bold text-earth-900 mb-2">Tailwind CSS</h4>
                                    <p className="text-earth-600 text-xs">A responsive design system ensuring the dashboard is fully functional on both high-res monitors and tablets.</p>
                                </motion.div>
                                <motion.div
                                    variants={revealItem}
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    className="p-6 bg-earth-50 rounded-xl border border-earth-100 transition-all duration-500 hover:border-tribe-blue/30 hover:shadow-lg"
                                >
                                    <h4 className="font-bold text-earth-900 mb-2">Sanity & Prismic</h4>
                                    <p className="text-earth-600 text-xs">Integration with headless CMS for dynamic content delivery across multilingual club pages.</p>
                                </motion.div>
                                <motion.div
                                    variants={revealItem}
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    className="p-6 bg-earth-50 rounded-xl border border-earth-100 transition-all duration-500 hover:border-tribe-blue/30 hover:shadow-lg"
                                >
                                    <h4 className="font-bold text-earth-900 mb-2">Security</h4>
                                    <p className="text-earth-600 text-xs">Enterprise-grade RBAC (Role-Based Access Control) ensuring sensitive data is only accessible to authorized officials.</p>
                                </motion.div>
                            </motion.div>

                            <Reveal>
                                <div className="flex flex-wrap gap-3 mb-12">
                                    {[
                                        'Next.js 15', 'TypeScript', 'Redux Toolkit', 'RTK Query',
                                        'Tailwind CSS', 'Lucide Icons', 'NestJS Backend', 'PostgreSQL',
                                        'Sanity CMS', 'Prismic CMS', 'AWS Hosting'
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
                                Ready to Modernize Your Club's Operations?
                            </h2>
                            <p className="text-earth-600 mb-8 max-w-2xl mx-auto">
                                Let's build a central command center that gives your administrators the tools they need to succeed.
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

export default CaseStudyT2CWeb;
