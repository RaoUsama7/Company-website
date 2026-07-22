import { useRef } from 'react';
import { motion, useScroll, useTransform, type TargetAndTransition } from 'framer-motion';
import ZoomableImage from './ZoomableImage';

const EASE = [0.16, 1, 0.3, 1] as const;

type ShotVariant = 'center' | 'left' | 'right' | 'wide' | 'pair';

interface SectionShotProps {
    src: string;
    alt: string;
    /** Optional one-line caption tying the image to its section. */
    caption?: string;
    className?: string;
    /**
     * Layout direction. 'center' keeps the classic centered card; 'left'/'right'
     * break out of the text column and slide in from their side with a slight
     * tilt; 'wide' spans beyond the column with a soft scroll parallax; 'pair'
     * fills a grid cell so two shots can sit side by side.
     */
    variant?: ShotVariant;
}

const FIGURE_LAYOUT: Record<ShotVariant, string> = {
    center: 'my-10 mx-auto max-w-2xl',
    left: 'my-12 max-w-2xl md:max-w-3xl md:mr-auto md:-ml-8 lg:-ml-20',
    right: 'my-12 max-w-2xl md:max-w-3xl md:ml-auto md:-mr-8 lg:-mr-20',
    wide: 'my-14 md:max-w-none md:-mx-8 lg:-mx-24',
    pair: 'my-0 w-full max-w-none',
};

const ENTRANCE: Record<ShotVariant, TargetAndTransition> = {
    center: { opacity: 0, y: 28 },
    left: { opacity: 0, x: -56, rotate: -1.5 },
    right: { opacity: 0, x: 56, rotate: 1.5 },
    wide: { opacity: 0, y: 40, scale: 0.965 },
    pair: { opacity: 0, y: 28 },
};

/**
 * A section-matched screenshot with directional layout variants. Reveals on
 * scroll from its own side, lifts on hover, and opens full screen on click
 * (ZoomableImage). Breakout margins only apply from md up, so mobile always
 * gets the safe centered column.
 */
const SectionShot = ({ src, alt, caption, className = '', variant = 'center' }: SectionShotProps) => {
    const ref = useRef<HTMLElement | null>(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
    const parallaxY = useTransform(scrollYProgress, [0, 1], [18, -18]);

    const isBreakout = variant === 'left' || variant === 'right';
    const captionAlign =
        variant === 'left'
            ? 'justify-start text-left'
            : variant === 'right'
                ? 'justify-end text-right'
                : 'justify-center text-center';

    return (
        <motion.figure
            ref={ref}
            initial={ENTRANCE[variant]}
            whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
            viewport={{ once: true, margin: '-70px' }}
            transition={{ duration: 0.7, ease: EASE }}
            className={`not-prose group relative ${FIGURE_LAYOUT[variant]} ${className}`.trim()}
        >
            {/* Offset backdrop panel gives breakout shots a layered, editorial depth */}
            {isBreakout && (
                <div
                    aria-hidden
                    className={`pointer-events-none absolute inset-0 hidden rounded-2xl bg-tribe-blue/[0.07] ring-1 ring-tribe-blue/10 transition-transform duration-500 md:block ${
                        variant === 'left'
                            ? 'translate-x-4 translate-y-4 group-hover:translate-x-6'
                            : '-translate-x-4 translate-y-4 group-hover:-translate-x-6'
                    }`}
                />
            )}

            {/* Accent bloom, revealed on hover */}
            <div
                aria-hidden
                className="pointer-events-none absolute -inset-3 rounded-[1.5rem] bg-tribe-blue/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
            />

            <motion.div
                whileHover={variant === 'wide' ? undefined : { y: -5 }}
                style={variant === 'wide' ? { y: parallaxY } : undefined}
                transition={{ duration: 0.35, ease: EASE }}
                className="relative overflow-hidden rounded-2xl bg-earth-50 ring-1 ring-earth-100 shadow-md transition-all duration-500 group-hover:shadow-2xl group-hover:ring-tribe-blue/30"
            >
                {/* Corner accents */}
                <div aria-hidden className="pointer-events-none absolute left-0 top-0 z-10 h-6 w-6 rounded-tl-2xl border-l-2 border-t-2 border-tribe-blue/50 opacity-60 transition-opacity duration-500 group-hover:opacity-100" />
                <div aria-hidden className="pointer-events-none absolute bottom-0 right-0 z-10 h-6 w-6 rounded-br-2xl border-b-2 border-r-2 border-tribe-blue/50 opacity-60 transition-opacity duration-500 group-hover:opacity-100" />

                <ZoomableImage
                    src={src}
                    alt={alt}
                    loading="lazy"
                    className="w-full h-auto block transition-transform duration-700 group-hover:scale-[1.02]"
                />
                {/* Sheen sweep on hover */}
                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full"
                />
            </motion.div>

            {caption && (
                <figcaption className={`mt-3 flex items-center gap-2 text-xs italic text-earth-500 ${captionAlign}`}>
                    {variant !== 'right' && (
                        <span className="h-px w-6 bg-tribe-blue/40 transition-all duration-500 group-hover:w-10 group-hover:bg-tribe-blue" />
                    )}
                    {caption}
                    {variant !== 'left' && (
                        <span className="h-px w-6 bg-tribe-blue/40 transition-all duration-500 group-hover:w-10 group-hover:bg-tribe-blue" />
                    )}
                </figcaption>
            )}
        </motion.figure>
    );
};

export default SectionShot;
