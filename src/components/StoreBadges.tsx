import { motion } from 'framer-motion';
import { Apple, Play } from 'lucide-react';

const EASE = [0.16, 1, 0.3, 1] as const;

interface StoreBadgesProps {
    appStoreUrl?: string;
    playStoreUrl?: string;
    className?: string;
}

const BADGE_BASE =
    'group inline-flex items-center gap-3 rounded-xl px-5 py-2.5 text-left shadow-lg transition-all hover:-translate-y-0.5';
const BADGE_PRIMARY = 'bg-tribe-blue text-white shadow-tribe-blue/25 hover:bg-tribe-blue/90';
const BADGE_GHOST =
    'bg-white/10 text-white ring-1 ring-white/20 backdrop-blur-sm hover:bg-white/15 hover:ring-tribe-blue/60';

/**
 * App Store / Google Play download pills for case-study heroes (dark
 * backgrounds). Renders only the stores whose URL is provided; the first
 * available badge gets the solid tribe-blue treatment.
 */
const StoreBadges = ({ appStoreUrl, playStoreUrl, className = '' }: StoreBadgesProps) => {
    if (!appStoreUrl && !playStoreUrl) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25, ease: EASE }}
            className={`flex flex-wrap items-center gap-3 ${className}`.trim()}
        >
            {appStoreUrl && (
                <a
                    href={appStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${BADGE_BASE} ${BADGE_PRIMARY}`}
                >
                    <Apple className="h-5 w-5 shrink-0 transition-transform duration-300 group-hover:scale-110" />
                    <span className="leading-tight">
                        <span className="block text-[10px] font-medium uppercase tracking-widest opacity-80">
                            Download on the
                        </span>
                        <span className="block text-sm font-bold">App Store</span>
                    </span>
                </a>
            )}
            {playStoreUrl && (
                <a
                    href={playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${BADGE_BASE} ${appStoreUrl ? BADGE_GHOST : BADGE_PRIMARY}`}
                >
                    <Play className="h-5 w-5 shrink-0 fill-current transition-transform duration-300 group-hover:scale-110" />
                    <span className="leading-tight">
                        <span className="block text-[10px] font-medium uppercase tracking-widest opacity-80">
                            Get it on
                        </span>
                        <span className="block text-sm font-bold">Google Play</span>
                    </span>
                </a>
            )}
        </motion.div>
    );
};

export default StoreBadges;
