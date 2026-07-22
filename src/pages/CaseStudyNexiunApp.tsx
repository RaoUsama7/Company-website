import { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    CheckCircle,
    Camera,
    Sparkles,
    MessageCircle,
    Video,
    Bell,
    ShoppingBag,
    Shield,
    MapPin,
    Wand2,
    BarChart3,
    Database,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import SectionShot from '@/components/SectionShot';
import SectionKicker from '@/components/SectionKicker';
import CaseStudyHero from '@/components/CaseStudyHero';
import ReadingProgress from '@/components/ReadingProgress';
import Reveal, { revealContainer, revealItem } from '@/components/Reveal';

const SLIDER_IMAGES = ['/nexiun-app/main.png'];

const AI_FEATURES = [
    {
        icon: Camera,
        title: 'AI-Generated Profile Photos',
        description:
            'Create photorealistic AI profile images of nearby users using geolocation, fostering instant discovery and connections.',
    },
    {
        icon: Sparkles,
        title: 'AISTORIE Mode (AI-Powered Stories)',
        description:
            'Generate themed AI visuals for user stories — Romantic, Sports, Dinner — blending real content with immersive AI-rendered scenes.',
    },
    {
        icon: MessageCircle,
        title: 'AI-Powered Chat Visuals',
        description:
            'Create shared AI-generated memories directly within chats, using selectable themes to personalize each interaction.',
    },
    {
        icon: Video,
        title: 'Loops — AI-Enhanced Short Videos',
        description:
            'Record, edit, and upload short-form videos with dynamic effects. AI-driven recommendations keep each feed hyper-personalized.',
    },
    {
        icon: Bell,
        title: 'Real-Time Messaging',
        description:
            'Integrated with CometChat SDK — image, video, and media sharing along with instant chat functionalities and reactions.',
    },
    {
        icon: ShoppingBag,
        title: 'In-App Purchases & Social Commerce',
        description:
            'Tap on featured products embedded in AI-generated images to instantly purchase, merging entertainment with e-commerce.',
    },
];

const PLATFORM_FEATURES = [
    {
        icon: MapPin,
        title: 'Location-Based User Discovery',
        description:
            'Real-time geolocation lets users discover and interact with nearby members, amplifying social reach.',
    },
    {
        icon: Shield,
        title: 'Authentication & Security',
        description:
            'Multi-provider sign-in via Google, Apple, and AWS Cognito. Secure session handling with JWT, JWKS Client, and role-based access control.',
    },
    {
        icon: BarChart3,
        title: 'AI Content Personalization',
        description:
            'Behavioral data from Firebase Analytics fuels personalized feeds for Loops and Stories using AI models via AWS Bedrock.',
    },
    {
        icon: Wand2,
        title: 'Advanced Media Tools',
        description:
            'Imgly SDK enables filters, cropping, and enhancement of images and videos before sharing — full creative control.',
    },
];

const SOCIAL_ESSENTIALS = [
    'Share posts with friends or followers',
    'Dynamic, personalized feed scrolling',
    'Post interactions — likes, comments, replies',
    'Post editing after publishing',
    'Profile editing & management',
    'Followers / following management',
    'Push notifications for messages, likes, comments & follows',
    'Guided app walkthrough for new users',
    'Block users & report inappropriate content',
];

const FRONTEND_STACK = [
    'React Native',
    'TypeScript',
    'Expo + Expo Router',
    'React Query',
    'CometChat SDK',
    'Firebase Analytics',
    'Google & Apple Sign-In',
    'Imgly SDK',
];

const BACKEND_STACK = [
    'Node.js',
    'Express.js (TypeScript)',
    'Amazon Bedrock',
    'AWS S3 & EC2',
    'Elemental MediaConvert',
    'AWS Secrets Manager',
    'Mailgun',
    'Postman',
];

const DATA_LAYER = [
    {
        icon: Database,
        title: 'AWS DocumentDB',
        description:
            'A scalable, reliable deployment environment that keeps the app highly available even under heavy traffic.',
    },
    {
        icon: Database,
        title: 'MongoDB',
        description:
            'Flexible, scalable database handling large volumes of user-generated content and social data with quick retrieval times.',
    },
    {
        icon: Database,
        title: 'Firestore',
        description:
            'Real-time data synchronization, ensuring user interactions and activities are reflected across the app instantly.',
    },
    {
        icon: Database,
        title: 'AWS S3',
        description:
            'Manages storage for user-uploaded images and media, keeping content securely stored and efficiently retrieved.',
    },
];

const CaseStudyNexiunApp = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <div className="min-h-screen bg-background font-sans">
            <ReadingProgress />
            <Navbar />

            <CaseStudyHero
                tags={['AI Social Platform', 'iOS & Android', 'Social Commerce']}
                titleAccent="Nexiun:"
                title="AI-Powered Social Networking, Reimagined"
                tagline="A groundbreaking AI-powered social platform that merges creativity, real-time interaction, and social commerce into one immersive experience — built for both iOS and Android."
                images={SLIDER_IMAGES}
                altPrefix="Nexiun"
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
                                        Nexiun is a groundbreaking AI-powered social platform that merges creativity,
                                        real-time interaction, and social commerce into one immersive experience. Built
                                        for both iOS and Android, Nexiun enables users to create AI-generated profile
                                        images, themed stories, and shared visual memories directly in chat — all
                                        powered by advanced models like Amazon Bedrock.
                                    </p>
                                    <p className="relative text-earth-700 mb-0">
                                        From short-form video content ("Loops") with AI-powered recommendations to
                                        real-time messaging and instant shopping within AI-generated media, Nexiun
                                        redefines social networking. With a scalable AWS backend, secure authentication
                                        via Cognito, and seamless integration of advanced media tools and analytics,
                                        Nexiun offers a futuristic, personalized platform that's reshaping how people
                                        connect and create online.
                                    </p>
                                </div>
                            </Reveal>

                            <SectionShot
                                variant="wide"
                                src="/nexiun-app-content/project-overview.webp"
                                alt="Nexiun project overview"
                                caption="Project overview — the AI-powered social platform at a glance."
                            />

                            <Reveal>
                                <SectionKicker index="01" />
                                <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">
                                    Core AI Functionalities
                                </h2>
                                <p className="text-earth-700 mb-6 text-lg leading-relaxed">
                                    Every headline feature puts generative AI in the user's hands — from
                                    profile photos and themed stories to shoppable AI-generated media.
                                </p>
                            </Reveal>

                            <motion.div
                                variants={revealContainer}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, margin: '-80px' }}
                                className="not-prose grid md:grid-cols-2 gap-4 mb-12"
                            >
                                {AI_FEATURES.map(({ icon: Icon, title, description }) => (
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

                            <SectionShot
                                variant="left"
                                src="/nexiun-app-content/functionalities.webp"
                                alt="Nexiun AI functionalities"
                                caption="AI-generated profiles, AISTORIE mode, chat visuals, Loops, and real-time messaging."
                            />
                            <SectionShot
                                variant="right"
                                src="/nexiun-app-content/functionalities-2.webp"
                                alt="Nexiun commerce and security functionalities"
                                caption="Push notifications, social commerce, authentication, personalization, and media tools."
                            />

                            <Reveal>
                                <SectionKicker index="02" />
                                <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">
                                    Platform & Community Features
                                </h2>
                            </Reveal>

                            <motion.div
                                variants={revealContainer}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, margin: '-80px' }}
                                className="not-prose grid md:grid-cols-2 gap-4 mb-10"
                            >
                                {PLATFORM_FEATURES.map(({ icon: Icon, title, description }) => (
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

                            <Reveal>
                                <div className="not-prose mb-12 rounded-2xl bg-stone-50 p-6 ring-1 ring-stone-200/80">
                                    <h3 className="text-lg font-bold text-stone-900 mb-4">
                                        Everyday Social Essentials
                                    </h3>
                                    <ul className="grid gap-x-8 gap-y-2.5 md:grid-cols-2 text-sm text-earth-700">
                                        {SOCIAL_ESSENTIALS.map((f) => (
                                            <li key={f} className="flex items-start gap-2.5">
                                                <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-tribe-blue" />
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Reveal>

                            <div className="not-prose my-12 grid gap-6 md:grid-cols-2 md:gap-8">
                                <SectionShot
                                    variant="pair"
                                    src="/nexiun-app-content/functionalities-3.webp"
                                    alt="Nexiun discovery and infrastructure functionalities"
                                    caption="Location-based discovery, scalable cloud infrastructure, and analytics."
                                />
                                <SectionShot
                                    variant="pair"
                                    className="md:mt-14"
                                    src="/nexiun-app-content/functionalities-4.webp"
                                    alt="Nexiun social functionalities"
                                    caption="Authentication, messaging, posts, feed scrolling, and profile editing."
                                />
                            </div>

                            <SectionShot
                                variant="left"
                                src="/nexiun-app-content/functionalities-5.webp"
                                alt="Nexiun community functionalities"
                                caption="Post interactions, onboarding walkthrough, editing, reporting, and follower management."
                            />

                            <Reveal>
                                <SectionKicker index="03" />
                                <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">
                                    Frontend Stack
                                </h2>
                                <p className="text-earth-700 mb-6 text-lg leading-relaxed">
                                    A single React Native codebase delivers the full experience on iOS and
                                    Android — typed end to end, with Expo Router navigation, React Query data
                                    flow, and CometChat-powered real-time messaging.
                                </p>
                            </Reveal>

                            <Reveal>
                                <div className="not-prose flex flex-wrap gap-3 mb-10">
                                    {FRONTEND_STACK.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-4 py-2 rounded-full bg-tribe-blue/10 ring-1 ring-tribe-blue/20 text-tribe-blue text-sm font-semibold transition-all duration-300 hover:bg-tribe-blue hover:text-white"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </Reveal>

                            <SectionShot
                                variant="right"
                                src="/nexiun-app-content/frontend-tech-stack.webp"
                                alt="Nexiun frontend tech stack"
                                caption="Frontend roles & responsibilities — React Native, TypeScript, Expo, and CometChat."
                            />

                            <Reveal>
                                <div className="not-prose relative overflow-hidden rounded-2xl bg-stone-900 p-8 mb-12 text-white shadow-xl ring-1 ring-white/10">
                                    <div
                                        aria-hidden
                                        className="pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-tribe-blue/20 blur-3xl"
                                    />
                                    <h3 className="relative text-2xl font-display font-bold mb-3 text-tribe-blue">
                                        Backend & AI Infrastructure
                                    </h3>
                                    <p className="relative text-stone-300 text-sm mb-6 leading-relaxed">
                                        A Node.js + Express (TypeScript) API drives the platform, with Amazon
                                        Bedrock powering AI generation, Elemental MediaConvert processing media,
                                        and AWS services handling storage, secrets, and email delivery.
                                    </p>
                                    <ul className="relative grid gap-x-8 gap-y-2.5 md:grid-cols-2 text-sm text-stone-300">
                                        {BACKEND_STACK.map((tech) => (
                                            <li key={tech} className="flex items-center gap-2.5">
                                                <CheckCircle className="h-4 w-4 shrink-0 text-tribe-blue" />
                                                {tech}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Reveal>

                            <SectionShot
                                variant="left"
                                src="/nexiun-app-content/backend-tech-stack.webp"
                                alt="Nexiun backend tech stack"
                                caption="Backend roles & responsibilities — Node.js, Amazon Bedrock, and the AWS suite."
                            />

                            <Reveal>
                                <SectionKicker index="04" />
                                <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">
                                    Deployment, Database & Storage
                                </h2>
                            </Reveal>

                            <motion.div
                                variants={revealContainer}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, margin: '-80px' }}
                                className="not-prose grid md:grid-cols-2 gap-4 mb-12"
                            >
                                {DATA_LAYER.map(({ icon: Icon, title, description }) => (
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

                            <SectionShot
                                variant="wide"
                                src="/nexiun-app-content/deployment.webp"
                                alt="Nexiun deployment, database and storage"
                                caption="Deployment, database & storage — DocumentDB, MongoDB, Firestore, and S3."
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
                                Building an AI-Powered Social Platform?
                            </h2>
                            <p className="relative text-stone-600 mb-8 max-w-2xl mx-auto">
                                We design and engineer immersive, AI-driven mobile experiences — from
                                generative media to real-time social infrastructure.
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

export default CaseStudyNexiunApp;
