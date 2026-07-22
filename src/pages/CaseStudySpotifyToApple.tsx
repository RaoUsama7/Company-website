import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Music, ListMusic, BellRing } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import SectionShot from '@/components/SectionShot';
import SectionKicker from '@/components/SectionKicker';
import CaseStudyHero from '@/components/CaseStudyHero';
import ReadingProgress from '@/components/ReadingProgress';
import Reveal, { revealContainer, revealItem } from '@/components/Reveal';

const SLIDER_IMAGES = ['/spotify-apple/main.png'];

const FEATURES = [
    {
        icon: Music,
        title: 'Music Library Transfer',
        points: [
            'Transfer individual songs and playlists from Spotify to Apple Music',
            'Match songs using track names and ISRCs for accurate transfers',
            'Handle large playlists and libraries efficiently',
        ],
    },
    {
        icon: ListMusic,
        title: 'Playlist Management',
        points: [
            'View and manage playlists from both Spotify and Apple Music',
            'Create, edit, and delete playlists within the platform',
            'Organize playlists by genre, mood, or custom categories',
        ],
    },
    {
        icon: BellRing,
        title: 'Progress Tracking & Notifications',
        points: [
            'Real-time progress tracking of the transfer process',
            'Notifications upon transfer completion or failure',
            'Detailed transfer logs and reports',
        ],
    },
];

const BACKEND_STACK = [
    { name: 'Node.js', role: 'Non-blocking, event-driven server powering fast, real-time transfer processing' },
    { name: 'Next.js', role: 'High-performance web application framework for the user-facing platform' },
    { name: 'React.js', role: 'Uniform, responsive experience from desktop computers to smartphones' },
    { name: 'MongoDB', role: 'NoSQL database for scalable storage in a high-volume data environment' },
    { name: 'Mongoose (ODM)', role: 'Easy schema definition and validation, keeping data consistent throughout' },
    { name: 'JWT', role: 'Safeguards user privacy, keeping sensitive information protected across transactions' },
    { name: 'Bcrypt.js', role: 'Hashes and securely stores user passwords during registration and login' },
    { name: 'Stripe', role: 'Secure payment gateway for safe, reliable processing of transactions' },
];

const CaseStudySpotifyToApple = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <div className="min-h-screen bg-background font-sans">
            <ReadingProgress />
            <Navbar />

            <CaseStudyHero
                tags={['SaaS', 'Music Migration', 'Web Application']}
                titleAccent="Spotify to Apple Music:"
                title="Seamless Playlist & Library Migration"
                tagline="A SaaS that transfers songs and playlists from Spotify to Apple Music using track-name and ISRC matching — fast, secure, and without losing a single track of your curated collection."
                images={SLIDER_IMAGES}
                altPrefix="Spotify to Apple Music"
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
                                    <p className="relative text-earth-700 mb-0">
                                        Spotify to Apple is a SaaS designed to facilitate the seamless transfer of songs
                                        and playlists from Spotify to Apple Music. Utilizing track names and ISRC
                                        (International Standard Recording Code) for accurate matching, the service
                                        ensures users can effortlessly migrate their music collections between these
                                        popular streaming services without losing any of their curated content. The
                                        platform leverages the latest web technologies to provide a fast, secure, and
                                        user-friendly experience.
                                    </p>
                                </div>
                            </Reveal>

                            <SectionShot
                                variant="wide"
                                src="/spotify-apple-content/project-overview.webp"
                                alt="Spotify to Apple Music project overview"
                                caption="Project overview — playlists migrated to Apple Music, successfully."
                            />

                            <Reveal>
                                <SectionKicker index="01" />
                                <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">
                                    Core Functionalities
                                </h2>
                                <p className="text-earth-700 mb-6 text-lg leading-relaxed">
                                    Three pillars carry the whole experience: lossless library transfer,
                                    full playlist control, and transparent progress at every step.
                                </p>
                            </Reveal>

                            <motion.div
                                variants={revealContainer}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, margin: '-80px' }}
                                className="not-prose grid md:grid-cols-3 gap-4 mb-12"
                            >
                                {FEATURES.map(({ icon: Icon, title, points }) => (
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
                                        <h3 className="relative text-lg font-bold mb-3 text-stone-900">{title}</h3>
                                        <ul className="relative space-y-2 text-sm text-earth-700">
                                            {points.map((p) => (
                                                <li key={p} className="flex items-start gap-2">
                                                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-tribe-blue" />
                                                    {p}
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                ))}
                            </motion.div>

                            <SectionShot
                                variant="left"
                                src="/spotify-apple-content/functionalities.webp"
                                alt="Spotify to Apple Music functionalities"
                                caption="Library transfer, playlist management, and real-time progress tracking."
                            />

                            <Reveal>
                                <SectionKicker index="02" />
                                <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">
                                    Backend & Tech Stack
                                </h2>
                            </Reveal>

                            <Reveal>
                                <div className="not-prose relative overflow-hidden rounded-2xl bg-stone-900 p-8 mb-12 text-white shadow-xl ring-1 ring-white/10">
                                    <div
                                        aria-hidden
                                        className="pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-tribe-blue/20 blur-3xl"
                                    />
                                    <p className="relative text-stone-300 text-sm mb-6 leading-relaxed">
                                        A modern JavaScript stack keeps transfers fast and accounts secure —
                                        Node.js and Next.js on the server, MongoDB with Mongoose for data,
                                        JWT and Bcrypt for security, and Stripe for payments.
                                    </p>
                                    <ul className="relative grid gap-x-10 gap-y-3.5 md:grid-cols-2 text-sm">
                                        {BACKEND_STACK.map(({ name, role }) => (
                                            <li key={name} className="flex items-start gap-2.5">
                                                <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-tribe-blue" />
                                                <span className="text-stone-300">
                                                    <span className="font-bold text-white">{name}</span> — {role}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Reveal>

                            <SectionShot
                                variant="wide"
                                src="/spotify-apple-content/backend-tech-stack.webp"
                                alt="Spotify to Apple Music backend tech stack"
                                caption="Backend roles & responsibilities — JWT, React, Bcrypt, Stripe, MongoDB, Mongoose, Next.js, and Node.js."
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
                                Have a SaaS Product in Mind?
                            </h2>
                            <p className="relative text-stone-600 mb-8 max-w-2xl mx-auto">
                                We build fast, secure, user-friendly platforms — from clever integrations
                                to full subscription businesses.
                            </p>
                            <div className="relative flex flex-col sm:flex-row gap-4 justify-center">
                                <Link to="/contact">
                                    <Button className="bg-tribe-blue hover:bg-tribe-blue/90 transition-transform hover:-translate-y-0.5">
                                        Start Your Project
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

export default CaseStudySpotifyToApple;
