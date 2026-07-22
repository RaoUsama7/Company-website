import { motion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

const EASE = [0.16, 1, 0.3, 1] as const;

interface RevealProps {
    children: ReactNode;
    /** Extra delay before the reveal starts, in seconds. */
    delay?: number;
    /** Distance travelled on the way in, in px. */
    y?: number;
    className?: string;
}

/**
 * Scroll-triggered fade-up. Reveals once, slightly before the element
 * reaches the viewport so the motion reads as the page settling rather
 * than as something popping in late.
 */
const Reveal = ({ children, delay = 0, y = 24, className = '' }: RevealProps) => (
    <motion.div
        initial={{ opacity: 0, y }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, delay, ease: EASE }}
        className={className}
    >
        {children}
    </motion.div>
);

/** Staggers direct children that use {@link revealItem}. */
export const revealContainer: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.09 } },
};

export const revealItem: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

export default Reveal;
