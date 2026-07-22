import { useState } from 'react';
import ImageLightbox from './ImageLightbox';

type ZoomableImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
    src: string;
    alt?: string;
};

/**
 * A drop-in replacement for <img> that opens the image full-screen on click.
 * Forwards all native <img> props; adds a zoom cursor and a controlled lightbox.
 */
const ZoomableImage = ({ src, alt = '', className = '', onClick, ...rest }: ZoomableImageProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <img
                {...rest}
                src={src}
                alt={alt}
                onClick={(e) => {
                    onClick?.(e);
                    setIsOpen(true);
                }}
                className={`${className} cursor-zoom-in`.trim()}
            />
            <ImageLightbox
                images={[src]}
                index={isOpen ? 0 : null}
                onClose={() => setIsOpen(false)}
                altPrefix={alt || 'Image'}
            />
        </>
    );
};

export default ZoomableImage;
