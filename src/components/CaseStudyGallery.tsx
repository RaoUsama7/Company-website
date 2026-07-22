import { useState } from 'react';
import ImageLightbox from './ImageLightbox';

interface CaseStudyGalleryProps {
    /** Public folder path without trailing slash, e.g. "/rentigo-content". */
    folder: string;
    /** Number of images named 1.webp .. count.webp. */
    count: number;
    altPrefix: string;
    eyebrow?: string;
    title?: string;
    subtitle?: string;
}

// Row rhythm: one full-width image, then two rows of a 2-up pair, repeating.
const ROW_PATTERN = [1, 2, 2];

interface TileProps {
    src: string;
    alt: string;
    onOpen: () => void;
}

const GalleryTile = ({ src, alt, onOpen }: TileProps) => (
    <button
        type="button"
        onClick={onOpen}
        aria-label={`Open ${alt} full screen`}
        className="group block w-full overflow-hidden rounded-2xl border border-earth-100 bg-white shadow-sm hover:shadow-2xl transition-all duration-300 cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-tribe-blue focus-visible:ring-offset-2"
    >
        <img
            src={src}
            alt={alt}
            loading="lazy"
            className="w-full h-auto block transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
    </button>
);

/**
 * Premium case-study gallery: shows every screen in a varied 1-up / 2-up
 * rhythm at a comfortable (not oversized) scale. Clicking any tile opens a
 * shared full-screen viewer that can page through the whole set.
 */
const CaseStudyGallery = ({
    folder,
    count,
    altPrefix,
    eyebrow = 'Gallery',
    title = 'A Closer Look',
    subtitle,
}: CaseStudyGalleryProps) => {
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
    const images = Array.from({ length: count }, (_, i) => `${folder}/${i + 1}.webp`);

    // Group image indices into rows following ROW_PATTERN.
    const rows: number[][] = [];
    let i = 0;
    let p = 0;
    while (i < images.length) {
        const size = Math.min(ROW_PATTERN[p % ROW_PATTERN.length], images.length - i);
        rows.push(Array.from({ length: size }, (_, k) => i + k));
        i += size;
        p += 1;
    }

    return (
        <section className="py-20 bg-earth-50 border-t border-earth-100">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12 max-w-2xl mx-auto">
                        {eyebrow && (
                            <span className="inline-block px-3 py-1 rounded-full bg-tribe-blue/10 text-tribe-blue text-sm font-bold mb-4">
                                {eyebrow}
                            </span>
                        )}
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-earth-900 mb-3">
                            {title}
                        </h2>
                        {subtitle && (
                            <p className="text-earth-600 text-lg leading-relaxed">{subtitle}</p>
                        )}
                    </div>

                    <div className="space-y-5">
                        {rows.map((row, r) =>
                            row.length === 1 ? (
                                <div key={r} className="max-w-3xl mx-auto">
                                    <GalleryTile
                                        src={images[row[0]]}
                                        alt={`${altPrefix} screen ${row[0] + 1}`}
                                        onOpen={() => setLightboxIndex(row[0])}
                                    />
                                </div>
                            ) : (
                                <div key={r} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    {row.map((idx) => (
                                        <GalleryTile
                                            key={idx}
                                            src={images[idx]}
                                            alt={`${altPrefix} screen ${idx + 1}`}
                                            onOpen={() => setLightboxIndex(idx)}
                                        />
                                    ))}
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>

            <ImageLightbox
                images={images}
                index={lightboxIndex}
                onClose={() => setLightboxIndex(null)}
                onNavigate={setLightboxIndex}
                altPrefix={altPrefix}
            />
        </section>
    );
};

export default CaseStudyGallery;
