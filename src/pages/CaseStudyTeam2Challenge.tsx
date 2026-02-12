import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, Trophy, Users, Rocket } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CaseStudyTeam2Challenge = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <div className="min-h-screen bg-background font-sans">
            <Navbar />

            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-b from-earth-900 to-earth-800 text-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="max-w-4xl mx-auto"
                    >
                        <Link to="/trail-stories" className="inline-flex items-center text-tribe-blue hover:underline mb-6">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Case Studies
                        </Link>

                        <div className="flex flex-wrap gap-2 mb-6">
                            <span className="px-3 py-1 rounded-full bg-tribe-blue/20 text-tribe-blue text-sm font-medium">
                                Sports Community
                            </span>
                            <span className="px-3 py-1 rounded-full bg-tribe-blue/20 text-tribe-blue text-sm font-medium">
                                Event Management
                            </span>
                            <span className="px-3 py-1 rounded-full bg-tribe-blue/20 text-tribe-blue text-sm font-medium">
                                SaaS
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6">
                            <span className="text-tribe-blue">Team2Challenge (T2C):</span> Unifying the Sports Community
                        </h1>

                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                            A comprehensive digital ecosystem built to simplify how clubs, coaches, parents, and players connect, organize, and grow together.
                        </p>

                        <div className="relative h-64 md:h-96 rounded-xl overflow-hidden shadow-2xl bg-earth-700 flex items-center justify-center">
                            <div className="text-earth-500 flex flex-col items-center">
                                <Rocket className="h-20 w-20 mb-4 opacity-20" />
                                <p className="text-lg font-medium opacity-30 uppercase tracking-widest">Project Visual Space</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="prose prose-lg max-w-none"
                        >
                            <div className="bg-tribe-blue/5 p-8 rounded-xl mb-12">
                                <h2 className="text-2xl font-display font-bold mb-4 text-tribe-blue">Project Overview</h2>
                                <p className="text-earth-700 mb-0">
                                    Designed for both mobile and web, T2C unifies the entire sports community under one roof — bringing event management, member communication, role-based access, and real-time collaboration into a single, intuitive experience.
                                </p>
                            </div>

                            <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">The Power of Connection</h2>

                            <p className="text-earth-700 mb-6 text-lg leading-relaxed">
                                From registration to game day, every action is built around clarity and connection. Clubs can manage their members, organize teams, schedule matches, record attendance, and communicate seamlessly, while parents can stay updated, RSVP for their children, and receive instant notifications for everything that matters.
                            </p>

                            <p className="text-earth-700 mb-8 text-lg leading-relaxed">
                                Developed with a strong focus on structure, scalability, and user experience, T2C bridges administrative precision with everyday usability — empowering organizations of all sizes to operate smarter, faster, and more connected than ever.
                            </p>

                            <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Authentication & Registration</h2>

                            <div className="grid md:grid-cols-2 gap-8 my-12">
                                <div className="p-6 bg-earth-50 rounded-xl border border-earth-100">
                                    <h4 className="font-bold text-earth-900 mb-2">Seamless Club Onboarding</h4>
                                    <p className="text-earth-600 text-sm">Members can register under their chosen club, while admins can onboard entire rosters through Excel imports and automated invites.</p>
                                </div>
                                <div className="p-6 bg-earth-50 rounded-xl border border-earth-100">
                                    <h4 className="font-bold text-earth-900 mb-2">Parent & Child Accounts</h4>
                                    <p className="text-earth-600 text-sm">Parents can create accounts, link their children, and manage their activities once verified — all from one dashboard.</p>
                                </div>
                                <div className="p-6 bg-earth-50 rounded-xl border border-earth-100">
                                    <h4 className="font-bold text-earth-900 mb-2">Multi-Role Access & Profile Switching</h4>
                                    <p className="text-earth-600 text-sm">Users can hold multiple roles, like parent, member, or club admin, and switch between them seamlessly within one account.</p>
                                </div>
                                <div className="p-6 bg-earth-50 rounded-xl border border-earth-100">
                                    <h4 className="font-bold text-earth-900 mb-2">Secure Account Creation</h4>
                                    <p className="text-earth-600 text-sm">Users can sign up with verified emails, ensuring every profile — from players to admins — is authenticated before access.</p>
                                </div>
                                <div className="p-6 bg-earth-50 rounded-xl border border-earth-100 md:col-span-2">
                                    <h4 className="font-bold text-earth-900 mb-2">Club Administrator Registration</h4>
                                    <p className="text-earth-600 text-sm">Club officials can register their clubs with unique details and domains, ensuring verified and structured onboarding.</p>
                                </div>
                            </div>

                            <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Profile Management</h2>

                            <div className="grid md:grid-cols-2 gap-8 my-12">
                                <div className="p-6 bg-earth-50 rounded-xl border border-earth-100">
                                    <h4 className="font-bold text-earth-900 mb-2">Role Awareness & Transparency</h4>
                                    <p className="text-earth-600 text-sm">Each user clearly sees their roles and permissions, grouped by club for total clarity.</p>
                                </div>
                                <div className="p-6 bg-earth-50 rounded-xl border border-earth-100">
                                    <h4 className="font-bold text-earth-900 mb-2">Seamless Profile Switching</h4>
                                    <p className="text-earth-600 text-sm">Multi-role users can switch instantly — a parent can act as a member, or an admin as a parent — with role-based dashboards.</p>
                                </div>
                                <div className="p-6 bg-earth-50 rounded-xl border border-earth-100">
                                    <h4 className="font-bold text-earth-900 mb-2">Visibility & Permissions Control</h4>
                                    <p className="text-earth-600 text-sm">Admins manage who sees what, maintaining privacy while ensuring clear communication across all levels.</p>
                                </div>
                                <div className="p-6 bg-earth-50 rounded-xl border border-earth-100">
                                    <h4 className="font-bold text-earth-900 mb-2">Personalized Profiles for Every Role</h4>
                                    <p className="text-earth-600 text-sm">Each user — admin, parent, or player — has a dedicated profile that reflects their role within the club.</p>
                                </div>
                                <div className="p-6 bg-earth-50 rounded-xl border border-earth-100">
                                    <h4 className="font-bold text-earth-900 mb-2">Child Management Section</h4>
                                    <p className="text-earth-600 text-sm">Dedicated space for parents to manage their children's participation, schedules, and club-specific information.</p>
                                </div>
                                <div className="p-6 bg-earth-50 rounded-xl border border-earth-100">
                                    <h4 className="font-bold text-earth-900 mb-2">Dynamic Profile Updates</h4>
                                    <p className="text-earth-600 text-sm">Update and manage your personal profile, including images and descriptions, whenever you like.</p>
                                </div>
                            </div>

                            <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Content Creation & Engagement</h2>

                            <div className="grid md:grid-cols-2 gap-8 my-12">
                                <div className="p-6 bg-earth-50 rounded-xl border border-earth-100">
                                    <h4 className="font-bold text-earth-900 mb-2">Tasks & Volunteering</h4>
                                    <p className="text-earth-600 text-sm">Add specific tasks within events and let members volunteer or get assigned with a single tap.</p>
                                </div>
                                <div className="p-6 bg-earth-50 rounded-xl border border-earth-100">
                                    <h4 className="font-bold text-earth-900 mb-2">Unified Engagement</h4>
                                    <p className="text-earth-600 text-sm">Events, posts, and payments support real-time discussions for clear, connected communication.</p>
                                </div>
                                <div className="p-6 bg-earth-50 rounded-xl border border-earth-100">
                                    <h4 className="font-bold text-earth-900 mb-2">Events Made Simple</h4>
                                    <p className="text-earth-600 text-sm">Create events, games, or meetings at any level with descriptions, attachments, and RSVP controls.</p>
                                </div>
                                <div className="p-6 bg-earth-50 rounded-xl border border-earth-100">
                                    <h4 className="font-bold text-earth-900 mb-2">Game Events & Attendance</h4>
                                    <p className="text-earth-600 text-sm">Define opponents and venues while tracking attendance and performance effortlessly.</p>
                                </div>
                                <div className="p-6 bg-earth-50 rounded-xl border border-earth-100 md:col-span-2">
                                    <h4 className="font-bold text-earth-900 mb-2">Visibility & Permissions</h4>
                                    <p className="text-earth-600 text-sm">Admins define who can see and interact with content—keeping communication targeted and efficient.</p>
                                </div>
                            </div>

                            <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Mobile Frontend & Architecture</h2>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
                                <div className="p-6 bg-earth-50 rounded-xl border border-earth-100">
                                    <h4 className="font-bold text-earth-900 mb-2">React Native & Expo</h4>
                                    <p className="text-earth-600 text-xs">High-performance iOS/Android experience using Expo SDK 53 and Fabric architecture.</p>
                                </div>
                                <div className="p-6 bg-earth-50 rounded-xl border border-earth-100">
                                    <h4 className="font-bold text-earth-900 mb-2">State & Offline Support</h4>
                                    <p className="text-earth-600 text-xs">Redux Toolkit + RTK Query with offline persistence for seamless use anywhere.</p>
                                </div>
                                <div className="p-6 bg-earth-50 rounded-xl border border-earth-100">
                                    <h4 className="font-bold text-earth-900 mb-2">Real-time Messaging</h4>
                                    <p className="text-earth-600 text-xs">Stream Chat integration with push notifications via Firebase and Expo.</p>
                                </div>
                                <div className="p-6 bg-earth-50 rounded-xl border border-earth-100">
                                    <h4 className="font-bold text-earth-900 mb-2">Custom UI Design System</h4>
                                    <p className="text-earth-600 text-xs">Fully reusable UI Kit ensuring visual cohesion and high performance.</p>
                                </div>
                                <div className="p-6 bg-earth-50 rounded-xl border border-earth-100">
                                    <h4 className="font-bold text-earth-900 mb-2">Advanced UX/Animations</h4>
                                    <p className="text-earth-600 text-xs">Fluid interactions powered by Reanimated 3 and Gesture Handler.</p>
                                </div>
                                <div className="p-6 bg-earth-50 rounded-xl border border-earth-100">
                                    <h4 className="font-bold text-earth-900 mb-2">Global Localization</h4>
                                    <p className="text-earth-600 text-xs">Multi-language support (EN, DE, FR, IT) with dynamic CMS translations.</p>
                                </div>
                                <div className="p-6 bg-earth-50 rounded-xl border border-earth-100">
                                    <h4 className="font-bold text-earth-900 mb-2">Analytics & Stability</h4>
                                    <p className="text-earth-600 text-xs">Tracking engagement and crashes via PostHog, Firebase, and Crashlytics.</p>
                                </div>
                                <div className="p-6 bg-earth-50 rounded-xl border border-earth-100 md:col-span-2 lg:col-span-2">
                                    <h4 className="font-bold text-earth-900 mb-2">Rich Media Management</h4>
                                    <p className="text-earth-600 text-xs">Full suite for recording, editing, and sharing match photos/videos seamlessly.</p>
                                </div>
                            </div>

                            <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Web Frontend & Architecture</h2>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
                                <div className="p-6 bg-earth-50 rounded-xl border border-earth-100">
                                    <h4 className="font-bold text-earth-900 mb-2">Next.js 15 & React 19</h4>
                                    <p className="text-earth-600 text-xs">Optimized SSR/SSG for public pages and high-performance SPA dashboards.</p>
                                </div>
                                <div className="p-6 bg-earth-50 rounded-xl border border-earth-100">
                                    <h4 className="font-bold text-earth-900 mb-2">Redux & React Query</h4>
                                    <p className="text-earth-600 text-xs">Predictable state logic and simplified async data fetching across clubs.</p>
                                </div>
                                <div className="p-6 bg-earth-50 rounded-xl border border-earth-100">
                                    <h4 className="font-bold text-earth-900 mb-2">Sanity CMS Workflow</h4>
                                    <p className="text-earth-600 text-xs">Dynamic multilingual content updates for news, sponsors, and banners.</p>
                                </div>
                                <div className="p-6 bg-earth-50 rounded-xl border border-earth-100">
                                    <h4 className="font-bold text-earth-900 mb-2">Responsive Tailwind UI</h4>
                                    <p className="text-earth-600 text-xs">Scalable design system ensuring a premium experience across desktop and tablet.</p>
                                </div>
                                <div className="p-6 bg-earth-50 rounded-xl border border-earth-100">
                                    <h4 className="font-bold text-earth-900 mb-2">Secure Auth & API</h4>
                                    <p className="text-earth-600 text-xs">Token-based header injection and protected route handling via Next.js middleware.</p>
                                </div>
                                <div className="p-6 bg-earth-50 rounded-xl border border-earth-100">
                                    <h4 className="font-bold text-earth-900 mb-2">Testing & DevEx</h4>
                                    <p className="text-earth-600 text-xs">Clean code standards with ESLint/Husky and cross-browser UI validation.</p>
                                </div>
                            </div>

                            <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">Technologies Used</h2>

                            <div className="flex flex-wrap gap-3 mb-12">
                                {[
                                    'React Native', 'Expo SDK', 'Next.js', 'TypeScript', 'Node.js',
                                    'Redux Toolkit', 'React Query', 'PostgreSQL', 'Sanity CMS',
                                    'Stream Chat', 'Firebase', 'PostHog', 'AWS', 'Tailwind CSS'
                                ].map((tech) => (
                                    <span key={tech} className="px-4 py-2 bg-earth-100 text-earth-700 rounded-full text-sm font-medium">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-earth-100">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.7 }}
                        className="bg-white p-8 md:p-12 rounded-xl shadow-sm max-w-4xl mx-auto text-center"
                    >
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
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default CaseStudyTeam2Challenge;
