import { motion } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1] as const;

interface SectionKickerProps {
    /** Two-digit section index, e.g. "01". */
    index: string;
    className?: string;
}

/**
 * Small editorial accent placed directly above a section heading: a mono
 * index that fades in and a gradient rule that draws itself. Adds rhythm and
 * direction to long case-study pages without touching the heading copy.
 */
const SectionKicker = ({ index, className = '' }: SectionKickerProps) => (
    <div className={`not-prose mb-3 flex items-center gap-3 ${className}`.trim()}>
        <motion.span
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: EASE }}
            className="font-mono text-xs font-bold tracking-[0.35em] text-tribe-blue"
        >
            {index}
        </motion.span>
        <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
            className="h-px w-16 origin-left bg-gradient-to-r from-tribe-blue via-tribe-blue/50 to-transparent"
        />
    </div>
);

export default SectionKicker;
