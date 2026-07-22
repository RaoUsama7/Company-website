import { useEffect, useRef, useState } from 'react';
import {
    motion,
    AnimatePresence,
    useScroll,
    useTransform,
    useReducedMotion,
    type Variants,
} from 'framer-motion';
import { ArrowLeft, ChevronLeft, ChevronRight, Globe, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import ImageLightbox from './ImageLightbox';

const EASE = [0.16, 1, 0.3, 1] as const;

const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const item: Variants = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

interface CaseStudyHeroProps {
    /** Pill chips shown above the title. */
    tags: string[];
    /** Leading, accent-coloured fragment of the title (e.g. "Avenir:"). */
    titleAccent: string;
    /** Remainder of the title. */
    title: string;
    tagline: string;
    /** Slider screens, in order. */
    images: string[];
    altPrefix: string;
    /** Live product URL. When set, the title and a pill button link to it. */
    url?: string;
    /** Label for the visit button (e.g. "Visit avenir.pk"). */
    urlLabel?: string;
    autoPlayMs?: number;
}

/**
 * Shared case-study hero: staggered intro, ambient accent glows, a subtle
 * grid, and a scroll-parallaxed screenshot slider that opens full screen.
 */
const CaseStudyHero = ({
    tags,
    titleAccent,
    title,
    tagline,
    images,
    altPrefix,
    url,
    urlLabel,
    autoPlayMs = 5000,
}: CaseStudyHeroProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
    const [isPaused, setIsPaused] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
    const reduceMotion = useReducedMotion();

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end start'],
    });
    const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 80]);
    const parallaxScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
    const glowOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.25]);

    const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
    const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

    useEffect(() => {
        if (isPaused || images.length < 2) return;
        const interval = setInterval(nextSlide, autoPlayMs);
        return () => clearInterval(interval);
    }, [currentIndex, isPaused, images.length, autoPlayMs]);

    const heading = (
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight leading-[1.06] mb-6">
            <span className="text-tribe-blue">{titleAccent}</span> {title}
        </h1>
    );

    return (
        <section
            ref={sectionRef}
            className="relative overflow-hidden bg-gradient-to-b from-earth-900 to-earth-800 text-white py-20 md:py-28"
        >
            {/* Ambient backdrop — fades out as the hero scrolls away */}
            <motion.div
                aria-hidden
                style={{ opacity: reduceMotion ? 1 : glowOpacity }}
                className="pointer-events-none absolute inset-0"
            >
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage:
                            'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
                        backgroundSize: '64px 64px',
                        maskImage: 'radial-gradient(ellipse 75% 60% at 50% 0%, black 35%, transparent 100%)',
                        WebkitMaskImage: 'radial-gradient(ellipse 75% 60% at 50% 0%, black 35%, transparent 100%)',
                    }}
                />
                <motion.div
                    className="absolute -top-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-tribe-blue/25 blur-3xl"
                    animate={reduceMotion ? undefined : { scale: [1, 1.18, 1], opacity: [0.45, 0.7, 0.45] }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                    className="absolute top-1/3 -right-28 h-[24rem] w-[24rem] rounded-full bg-tribe-blue/15 blur-3xl"
                    animate={reduceMotion ? undefined : { scale: [1.1, 1, 1.1], opacity: [0.3, 0.55, 0.3] }}
                    transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                />
            </motion.div>

            <div className="container relative mx-auto px-4">
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="max-w-4xl mx-auto"
                >
                    <motion.div variants={item}>
                        <Link
                            to="/trail-stories"
                            className="group inline-flex items-center text-tribe-blue hover:text-tribe-blue/80 mb-6 transition-colors"
                        >
                            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                            Back to Case Studies
                        </Link>
                    </motion.div>

                    <motion.div variants={item} className="flex flex-wrap gap-2 mb-6">
                        {tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-3 py-1 rounded-full bg-tribe-blue/10 ring-1 ring-tribe-blue/30 text-tribe-blue text-sm font-medium backdrop-blur-sm"
                            >
                                {tag}
                            </span>
                        ))}
                    </motion.div>

                    <motion.div variants={item}>
                        {url ? (
                            <a
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-fit group hover:opacity-90 transition-opacity"
                            >
                                {heading}
                            </a>
                        ) : (
                            heading
                        )}
                    </motion.div>

                    <motion.p
                        variants={item}
                        className="text-lg md:text-xl text-stone-300 mb-8 leading-relaxed max-w-3xl"
                    >
                        {tagline}
                    </motion.p>

                    {url && urlLabel && (
                        <motion.div variants={item}>
                            <a
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-tribe-blue text-white text-sm font-semibold shadow-lg shadow-tribe-blue/25 hover:bg-tribe-blue/90 hover:-translate-y-0.5 transition-all mb-10"
                            >
                                <Globe className="h-4 w-4" />
                                {urlLabel}
                                <ExternalLink className="h-4 w-4" />
                            </a>
                        </motion.div>
                    )}

                    <motion.div variants={item} className="relative">
                        <div
                            aria-hidden
                            className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-tribe-blue/10 blur-2xl"
                        />
                        <motion.div
                            style={reduceMotion ? undefined : { y: parallaxY, scale: parallaxScale }}
                            onMouseEnter={() => setIsPaused(true)}
                            onMouseLeave={() => setIsPaused(false)}
                            className="group relative h-64 md:h-[520px] rounded-3xl overflow-hidden bg-earth-900/40 ring-1 ring-white/10 shadow-2xl shadow-black/50"
                        >
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={currentIndex}
                                    src={images[currentIndex]}
                                    alt={`${altPrefix} slide ${currentIndex + 1}`}
                                    onClick={() => setLightboxIndex(currentIndex)}
                                    initial={{ opacity: 0, scale: 1.04 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.99 }}
                                    transition={{ duration: 0.55, ease: EASE }}
                                    className="w-full h-full object-contain cursor-zoom-in"
                                />
                            </AnimatePresence>

                            {images.length > 1 && (
                                <>
                                    <button
                                        onClick={prevSlide}
                                        aria-label="Previous slide"
                                        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 rounded-full border border-white/10 bg-earth-900/50 p-3 text-white backdrop-blur-md opacity-0 transition-all duration-300 hover:bg-earth-900/70 hover:scale-105 group-hover:opacity-100"
                                    >
                                        <ChevronLeft className="h-6 w-6" />
                                    </button>
                                    <button
                                        onClick={nextSlide}
                                        aria-label="Next slide"
                                        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 rounded-full border border-white/10 bg-earth-900/50 p-3 text-white backdrop-blur-md opacity-0 transition-all duration-300 hover:bg-earth-900/70 hover:scale-105 group-hover:opacity-100"
                                    >
                                        <ChevronRight className="h-6 w-6" />
                                    </button>

                                    <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
                                        {images.map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setCurrentIndex(index)}
                                                aria-label={`Go to slide ${index + 1}`}
                                                className={`h-1.5 rounded-full transition-all duration-500 ${
                                                    index === currentIndex
                                                        ? 'w-8 bg-tribe-blue shadow-[0_0_10px_rgba(45,104,255,0.8)]'
                                                        : 'w-4 bg-white/30 hover:bg-white/60'
                                                }`}
                                            />
                                        ))}
                                    </div>
                                </>
                            )}

                            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent" />
                        </motion.div>
                    </motion.div>
                </motion.div>

                <ImageLightbox
                    images={images}
                    index={lightboxIndex}
                    onClose={() => setLightboxIndex(null)}
                    onNavigate={setLightboxIndex}
                    altPrefix={altPrefix}
                />
            </div>
        </section>
    );
};

export default CaseStudyHero;
