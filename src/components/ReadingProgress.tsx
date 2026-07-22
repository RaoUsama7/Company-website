import { motion, useScroll, useSpring } from 'framer-motion';

/**
 * Thin scroll-linked progress bar pinned to the top of the viewport.
 * Springed so it trails the scroll slightly instead of snapping.
 */
const ReadingProgress = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 120,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <motion.div
            aria-hidden
            style={{ scaleX }}
            className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-tribe-blue shadow-[0_0_12px_rgba(45,104,255,0.6)]"
        />
    );
};

export default ReadingProgress;
