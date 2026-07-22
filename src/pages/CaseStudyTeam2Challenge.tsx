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
    "/t2c app/main.png",
    "/t2c app/4.png",
    "/t2c app/6.png",
    "/t2c app/8.png",
    "/t2c app/10.png",
    "/t2c app/12.png",
    "/t2c app/14.png",
    "/t2c app/16.png",
    "/t2c app/18.png",
    "/t2c app/20.png"
];

const CaseStudyTeam2Challenge = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <div className="min-h-screen bg-background font-sans">
            <ReadingProgress />
            <Navbar />

            <CaseStudyHero
                tags={['Sports Community', 'Event Management', 'SaaS']}
                titleAccent="Team2Challenge (T2C):"
                title="Unifying the Sports Community"
                tagline="A comprehensive digital ecosystem built to simplify how clubs, coaches, parents, and players connect, organize, and grow together."
                images={SLIDER_IMAGES}
                altPrefix="Team2Challenge"
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
                                    <h2 className="text-2xl font-display font-bold mb-4 text-tribe-blue">Project Overview</h2>
                                    <p className="text-earth-700 mb-0">
                                        Designed for both mobile and web, T2C unifies the entire sports community under one roof — bringing event management, member communication, role-based access, and real-time collaboration into a single, intuitive experience.
                                    </p>
                                </div>
                            </Reveal>

                            <SectionShot variant="wide" src="/t2c-app-content/proejct-overview.webp" alt="Team2Challenge project overview" caption="Project overview — the unified T2C sports community ecosystem at a glance." />

                            <Reveal>
                                <SectionKicker index="01" />
                                <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">The Power of Connection</h2>

                                <p className="text-earth-700 mb-6 text-lg leading-relaxed">
                                    From registration to game day, every action is built around clarity and connection. Clubs can manage their members, organize teams, schedule matches, record attendance, and communicate seamlessly, while parents can stay updated, RSVP for their children, and receive instant notifications for everything that matters.
                                </p>

                                <p className="text-earth-700 mb-8 text-lg leading-relaxed">
                                    Developed with a strong focus on structure, scalability, and user experience, T2C bridges administrative precision with everyday usability — empowering organizations of all sizes to operate smarter, faster, and more connected than ever.
                                </p>
                            </Reveal>

                            <SectionShot variant="left" src="/t2c-app-content/home-screen.webp" alt="Team2Challenge home screen" caption="The home screen — the everyday hub connecting clubs, coaches, parents, and players." />

                            <Reveal>
                                <SectionKicker index="02" />
                                <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Authentication & Registration</h2>
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
                                    <h4 className="font-bold text-earth-900 mb-2">Seamless Club Onboarding</h4>
                                    <p className="text-earth-600 text-sm">Members can register under their chosen club, while admins can onboard entire rosters through Excel imports and automated invites.</p>
                                </motion.div>
                                <motion.div
                                    variants={revealItem}
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    className="p-6 bg-earth-50 rounded-xl border border-earth-100 transition-all duration-300 hover:border-tribe-blue/30 hover:shadow-lg"
                                >
                                    <h4 className="font-bold text-earth-900 mb-2">Parent & Child Accounts</h4>
                                    <p className="text-earth-600 text-sm">Parents can create accounts, link their children, and manage their activities once verified — all from one dashboard.</p>
                                </motion.div>
                                <motion.div
                                    variants={revealItem}
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    className="p-6 bg-earth-50 rounded-xl border border-earth-100 transition-all duration-300 hover:border-tribe-blue/30 hover:shadow-lg"
                                >
                                    <h4 className="font-bold text-earth-900 mb-2">Multi-Role Access & Profile Switching</h4>
                                    <p className="text-earth-600 text-sm">Users can hold multiple roles, like parent, member, or club admin, and switch between them seamlessly within one account.</p>
                                </motion.div>
                                <motion.div
                                    variants={revealItem}
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    className="p-6 bg-earth-50 rounded-xl border border-earth-100 transition-all duration-300 hover:border-tribe-blue/30 hover:shadow-lg"
                                >
                                    <h4 className="font-bold text-earth-900 mb-2">Secure Account Creation</h4>
                                    <p className="text-earth-600 text-sm">Users can sign up with verified emails, ensuring every profile — from players to admins — is authenticated before access.</p>
                                </motion.div>
                                <motion.div
                                    variants={revealItem}
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    className="p-6 bg-earth-50 rounded-xl border border-earth-100 transition-all duration-300 hover:border-tribe-blue/30 hover:shadow-lg md:col-span-2"
                                >
                                    <h4 className="font-bold text-earth-900 mb-2">Club Administrator Registration</h4>
                                    <p className="text-earth-600 text-sm">Club officials can register their clubs with unique details and domains, ensuring verified and structured onboarding.</p>
                                </motion.div>
                            </motion.div>

                            <SectionShot variant="right" src="/t2c-app-content/auth-and-registration.webp" alt="Team2Challenge authentication and registration" caption="Authentication & registration — verified onboarding for clubs, parents, and players." />

                            <Reveal>
                                <SectionKicker index="03" />
                                <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Profile Management</h2>
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
                                    <h4 className="font-bold text-earth-900 mb-2">Role Awareness & Transparency</h4>
                                    <p className="text-earth-600 text-sm">Each user clearly sees their roles and permissions, grouped by club for total clarity.</p>
                                </motion.div>
                                <motion.div
                                    variants={revealItem}
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    className="p-6 bg-earth-50 rounded-xl border border-earth-100 transition-all duration-300 hover:border-tribe-blue/30 hover:shadow-lg"
                                >
                                    <h4 className="font-bold text-earth-900 mb-2">Seamless Profile Switching</h4>
                                    <p className="text-earth-600 text-sm">Multi-role users can switch instantly — a parent can act as a member, or an admin as a parent — with role-based dashboards.</p>
                                </motion.div>
                                <motion.div
                                    variants={revealItem}
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    className="p-6 bg-earth-50 rounded-xl border border-earth-100 transition-all duration-300 hover:border-tribe-blue/30 hover:shadow-lg"
                                >
                                    <h4 className="font-bold text-earth-900 mb-2">Visibility & Permissions Control</h4>
                                    <p className="text-earth-600 text-sm">Admins manage who sees what, maintaining privacy while ensuring clear communication across all levels.</p>
                                </motion.div>
                                <motion.div
                                    variants={revealItem}
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    className="p-6 bg-earth-50 rounded-xl border border-earth-100 transition-all duration-300 hover:border-tribe-blue/30 hover:shadow-lg"
                                >
                                    <h4 className="font-bold text-earth-900 mb-2">Personalized Profiles for Every Role</h4>
                                    <p className="text-earth-600 text-sm">Each user — admin, parent, or player — has a dedicated profile that reflects their role within the club.</p>
                                </motion.div>
                                <motion.div
                                    variants={revealItem}
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    className="p-6 bg-earth-50 rounded-xl border border-earth-100 transition-all duration-300 hover:border-tribe-blue/30 hover:shadow-lg"
                                >
                                    <h4 className="font-bold text-earth-900 mb-2">Child Management Section</h4>
                                    <p className="text-earth-600 text-sm">Dedicated space for parents to manage their children's participation, schedules, and club-specific information.</p>
                                </motion.div>
                                <motion.div
                                    variants={revealItem}
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    className="p-6 bg-earth-50 rounded-xl border border-earth-100 transition-all duration-300 hover:border-tribe-blue/30 hover:shadow-lg"
                                >
                                    <h4 className="font-bold text-earth-900 mb-2">Dynamic Profile Updates</h4>
                                    <p className="text-earth-600 text-sm">Update and manage your personal profile, including images and descriptions, whenever you like.</p>
                                </motion.div>
                            </motion.div>

                            <div className="not-prose my-12 grid gap-6 md:grid-cols-2 md:gap-8">
                                <SectionShot variant="pair" src="/t2c-app-content/profile-management.webp" alt="Team2Challenge profile management" caption="Profile management — personalized, role-aware profiles for every member." />
                                <SectionShot variant="pair" className="md:mt-14" src="/t2c-app-content/roles-mangement.webp" alt="Team2Challenge roles management" caption="Roles management — multi-role users switch instantly between parent, member, and admin." />
                            </div>

                            <Reveal>
                                <SectionKicker index="04" />
                                <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Content Creation & Engagement</h2>
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
                                    <h4 className="font-bold text-earth-900 mb-2">Tasks & Volunteering</h4>
                                    <p className="text-earth-600 text-sm">Add specific tasks within events and let members volunteer or get assigned with a single tap.</p>
                                </motion.div>
                                <motion.div
                                    variants={revealItem}
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    className="p-6 bg-earth-50 rounded-xl border border-earth-100 transition-all duration-300 hover:border-tribe-blue/30 hover:shadow-lg"
                                >
                                    <h4 className="font-bold text-earth-900 mb-2">Unified Engagement</h4>
                                    <p className="text-earth-600 text-sm">Events, posts, and payments support real-time discussions for clear, connected communication.</p>
                                </motion.div>
                                <motion.div
                                    variants={revealItem}
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    className="p-6 bg-earth-50 rounded-xl border border-earth-100 transition-all duration-300 hover:border-tribe-blue/30 hover:shadow-lg"
                                >
                                    <h4 className="font-bold text-earth-900 mb-2">Events Made Simple</h4>
                                    <p className="text-earth-600 text-sm">Create events, games, or meetings at any level with descriptions, attachments, and RSVP controls.</p>
                                </motion.div>
                                <motion.div
                                    variants={revealItem}
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    className="p-6 bg-earth-50 rounded-xl border border-earth-100 transition-all duration-300 hover:border-tribe-blue/30 hover:shadow-lg"
                                >
                                    <h4 className="font-bold text-earth-900 mb-2">Game Events & Attendance</h4>
                                    <p className="text-earth-600 text-sm">Define opponents and venues while tracking attendance and performance effortlessly.</p>
                                </motion.div>
                                <motion.div
                                    variants={revealItem}
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    className="p-6 bg-earth-50 rounded-xl border border-earth-100 transition-all duration-300 hover:border-tribe-blue/30 hover:shadow-lg md:col-span-2"
                                >
                                    <h4 className="font-bold text-earth-900 mb-2">Visibility & Permissions</h4>
                                    <p className="text-earth-600 text-sm">Admins define who can see and interact with content—keeping communication targeted and efficient.</p>
                                </motion.div>
                            </motion.div>

                            <div className="not-prose my-12 grid gap-6 md:grid-cols-2 md:gap-8">
                                <SectionShot variant="pair" src="/t2c-app-content/content-creation.webp" alt="Team2Challenge content creation" caption="Content creation — events, games, tasks, and posts built for real-time engagement." />
                                <SectionShot variant="pair" className="md:mt-14" src="/t2c-app-content/notification-request.webp" alt="Team2Challenge notification request" caption="Notifications — instant push updates keep members informed on everything that matters." />
                            </div>

                            <Reveal>
                                <SectionKicker index="05" />
                                <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Mobile Frontend & Architecture</h2>
                            </Reveal>

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
                                    className="p-6 bg-earth-50 rounded-xl border border-earth-100 transition-all duration-300 hover:border-tribe-blue/30 hover:shadow-lg"
                                >
                                    <h4 className="font-bold text-earth-900 mb-2">React Native & Expo</h4>
                                    <p className="text-earth-600 text-xs">High-performance iOS/Android experience using Expo SDK 53 and Fabric architecture.</p>
                                </motion.div>
                                <motion.div
                                    variants={revealItem}
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    className="p-6 bg-earth-50 rounded-xl border border-earth-100 transition-all duration-300 hover:border-tribe-blue/30 hover:shadow-lg"
                                >
                                    <h4 className="font-bold text-earth-900 mb-2">State & Offline Support</h4>
                                    <p className="text-earth-600 text-xs">Redux Toolkit + RTK Query with offline persistence for seamless use anywhere.</p>
                                </motion.div>
                                <motion.div
                                    variants={revealItem}
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    className="p-6 bg-earth-50 rounded-xl border border-earth-100 transition-all duration-300 hover:border-tribe-blue/30 hover:shadow-lg"
                                >
                                    <h4 className="font-bold text-earth-900 mb-2">Real-time Messaging</h4>
                                    <p className="text-earth-600 text-xs">Stream Chat integration with push notifications via Firebase and Expo.</p>
                                </motion.div>
                                <motion.div
                                    variants={revealItem}
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    className="p-6 bg-earth-50 rounded-xl border border-earth-100 transition-all duration-300 hover:border-tribe-blue/30 hover:shadow-lg"
                                >
                                    <h4 className="font-bold text-earth-900 mb-2">Custom UI Design System</h4>
                                    <p className="text-earth-600 text-xs">Fully reusable UI Kit ensuring visual cohesion and high performance.</p>
                                </motion.div>
                                <motion.div
                                    variants={revealItem}
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    className="p-6 bg-earth-50 rounded-xl border border-earth-100 transition-all duration-300 hover:border-tribe-blue/30 hover:shadow-lg"
                                >
                                    <h4 className="font-bold text-earth-900 mb-2">Advanced UX/Animations</h4>
                                    <p className="text-earth-600 text-xs">Fluid interactions powered by Reanimated 3 and Gesture Handler.</p>
                                </motion.div>
                                <motion.div
                                    variants={revealItem}
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    className="p-6 bg-earth-50 rounded-xl border border-earth-100 transition-all duration-300 hover:border-tribe-blue/30 hover:shadow-lg"
                                >
                                    <h4 className="font-bold text-earth-900 mb-2">Global Localization</h4>
                                    <p className="text-earth-600 text-xs">Multi-language support (EN, DE, FR, IT) with dynamic CMS translations.</p>
                                </motion.div>
                                <motion.div
                                    variants={revealItem}
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    className="p-6 bg-earth-50 rounded-xl border border-earth-100 transition-all duration-300 hover:border-tribe-blue/30 hover:shadow-lg"
                                >
                                    <h4 className="font-bold text-earth-900 mb-2">Analytics & Stability</h4>
                                    <p className="text-earth-600 text-xs">Tracking engagement and crashes via PostHog, Firebase, and Crashlytics.</p>
                                </motion.div>
                                <motion.div
                                    variants={revealItem}
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    className="p-6 bg-earth-50 rounded-xl border border-earth-100 transition-all duration-300 hover:border-tribe-blue/30 hover:shadow-lg md:col-span-2 lg:col-span-2"
                                >
                                    <h4 className="font-bold text-earth-900 mb-2">Rich Media Management</h4>
                                    <p className="text-earth-600 text-xs">Full suite for recording, editing, and sharing match photos/videos seamlessly.</p>
                                </motion.div>
                            </motion.div>

                            <SectionShot variant="left" src="/t2c-app-content/front-end-tech-stack.webp" alt="Team2Challenge frontend tech stack" caption="Frontend tech stack — React Native, Expo, and a custom UI system powering the mobile app." />

                            <Reveal>
                                <SectionKicker index="06" />
                                <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Web Frontend & Architecture</h2>
                            </Reveal>

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
                                    className="p-6 bg-earth-50 rounded-xl border border-earth-100 transition-all duration-300 hover:border-tribe-blue/30 hover:shadow-lg"
                                >
                                    <h4 className="font-bold text-earth-900 mb-2">Next.js 15 & React 19</h4>
                                    <p className="text-earth-600 text-xs">Optimized SSR/SSG for public pages and high-performance SPA dashboards.</p>
                                </motion.div>
                                <motion.div
                                    variants={revealItem}
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    className="p-6 bg-earth-50 rounded-xl border border-earth-100 transition-all duration-300 hover:border-tribe-blue/30 hover:shadow-lg"
                                >
                                    <h4 className="font-bold text-earth-900 mb-2">Redux & React Query</h4>
                                    <p className="text-earth-600 text-xs">Predictable state logic and simplified async data fetching across clubs.</p>
                                </motion.div>
                                <motion.div
                                    variants={revealItem}
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    className="p-6 bg-earth-50 rounded-xl border border-earth-100 transition-all duration-300 hover:border-tribe-blue/30 hover:shadow-lg"
                                >
                                    <h4 className="font-bold text-earth-900 mb-2">Sanity CMS Workflow</h4>
                                    <p className="text-earth-600 text-xs">Dynamic multilingual content updates for news, sponsors, and banners.</p>
                                </motion.div>
                                <motion.div
                                    variants={revealItem}
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    className="p-6 bg-earth-50 rounded-xl border border-earth-100 transition-all duration-300 hover:border-tribe-blue/30 hover:shadow-lg"
                                >
                                    <h4 className="font-bold text-earth-900 mb-2">Responsive Tailwind UI</h4>
                                    <p className="text-earth-600 text-xs">Scalable design system ensuring a premium experience across desktop and tablet.</p>
                                </motion.div>
                                <motion.div
                                    variants={revealItem}
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    className="p-6 bg-earth-50 rounded-xl border border-earth-100 transition-all duration-300 hover:border-tribe-blue/30 hover:shadow-lg"
                                >
                                    <h4 className="font-bold text-earth-900 mb-2">Secure Auth & API</h4>
                                    <p className="text-earth-600 text-xs">Token-based header injection and protected route handling via Next.js middleware.</p>
                                </motion.div>
                                <motion.div
                                    variants={revealItem}
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    className="p-6 bg-earth-50 rounded-xl border border-earth-100 transition-all duration-300 hover:border-tribe-blue/30 hover:shadow-lg"
                                >
                                    <h4 className="font-bold text-earth-900 mb-2">Testing & DevEx</h4>
                                    <p className="text-earth-600 text-xs">Clean code standards with ESLint/Husky and cross-browser UI validation.</p>
                                </motion.div>
                            </motion.div>

                            <SectionShot variant="right" src="/t2c-app-content/sponsers.webp" alt="Team2Challenge sponsors" caption="Sponsors — managed through the Sanity CMS alongside news and banners on the web platform." />

                            <Reveal>
                                <SectionKicker index="07" />
                                <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Backend & Infrastructure</h2>
                            </Reveal>

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
                                    className="p-6 bg-earth-50 rounded-xl border border-earth-100 transition-all duration-300 hover:border-tribe-blue/30 hover:shadow-lg"
                                >
                                    <h4 className="font-bold text-earth-900 mb-2">NestJS (TypeScript)</h4>
                                    <p className="text-earth-600 text-xs">Modular, scalable architecture for high-performance REST APIs and services.</p>
                                </motion.div>
                                <motion.div
                                    variants={revealItem}
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    className="p-6 bg-earth-50 rounded-xl border border-earth-100 transition-all duration-300 hover:border-tribe-blue/30 hover:shadow-lg"
                                >
                                    <h4 className="font-bold text-earth-900 mb-2">TypeORM & PostgreSQL</h4>
                                    <p className="text-earth-600 text-xs">Strong data integrity and automated migrations across all environments.</p>
                                </motion.div>
                                <motion.div
                                    variants={revealItem}
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    className="p-6 bg-earth-50 rounded-xl border border-earth-100 transition-all duration-300 hover:border-tribe-blue/30 hover:shadow-lg"
                                >
                                    <h4 className="font-bold text-earth-900 mb-2">Redis & RabbitMQ</h4>
                                    <p className="text-earth-600 text-xs">Caching and message queuing for low-latency, real-time background tasks.</p>
                                </motion.div>
                                <motion.div
                                    variants={revealItem}
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    className="p-6 bg-earth-50 rounded-xl border border-earth-100 transition-all duration-300 hover:border-tribe-blue/30 hover:shadow-lg"
                                >
                                    <h4 className="font-bold text-earth-900 mb-2">JWT & RBAC Security</h4>
                                    <p className="text-earth-600 text-xs">Secure multi-level authorization for admins, parents, and players.</p>
                                </motion.div>
                                <motion.div
                                    variants={revealItem}
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    className="p-6 bg-earth-50 rounded-xl border border-earth-100 transition-all duration-300 hover:border-tribe-blue/30 hover:shadow-lg"
                                >
                                    <h4 className="font-bold text-earth-900 mb-2">Logging & Monitoring</h4>
                                    <p className="text-earth-600 text-xs">Transparent debugging and error tracking via Sentry, CloudWatch, and Pino.</p>
                                </motion.div>
                                <motion.div
                                    variants={revealItem}
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    className="p-6 bg-earth-50 rounded-xl border border-earth-100 transition-all duration-300 hover:border-tribe-blue/30 hover:shadow-lg"
                                >
                                    <h4 className="font-bold text-earth-900 mb-2">Automated Testing</h4>
                                    <p className="text-earth-600 text-xs">Comprehensive Jest/Supertest suite integrated into the CI/CD pipeline.</p>
                                </motion.div>
                            </motion.div>

                            <SectionShot variant="left" src="/t2c-app-content/backend-roles.webp" alt="Team2Challenge backend roles and RBAC" caption="Backend roles — JWT and RBAC enforcing secure, multi-level authorization for every user." />

                            <Reveal>
                                <SectionKicker index="08" />
                                <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Technologies Used</h2>

                                <div className="flex flex-wrap gap-3 mb-12">
                                    {[
                                        'React Native', 'Expo SDK', 'Next.js 15', 'NestJS', 'TypeScript',
                                        'TypeORM', 'Redis', 'RabbitMQ', 'PostgreSQL', 'Sanity CMS',
                                        'Stream Chat', 'Firebase', 'PostHog', 'Sentry', 'AWS'
                                    ].map((tech) => (
                                        <span key={tech} className="px-4 py-2 bg-earth-100 text-earth-700 rounded-full text-sm font-medium">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </Reveal>

                            <SectionShot variant="wide" src="/t2c-app-content/deployment.webp" alt="Team2Challenge deployment and infrastructure" caption="Deployment — the CI/CD and infrastructure setup delivering T2C across mobile and web." />
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
                                Building Your Next Big Challenge?
                            </h2>
                            <p className="text-earth-600 mb-8 max-w-2xl mx-auto">
                                Let's craft a unified ecosystem that connects your community and drives performance.
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

export default CaseStudyTeam2Challenge;
