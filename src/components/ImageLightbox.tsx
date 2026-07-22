import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { X, ChevronLeft, ChevronRight, Plus, Minus, RotateCcw } from 'lucide-react';

const MIN_ZOOM = 1;
const MAX_ZOOM = 5;
const STEP = 0.5;

interface ImageLightboxProps {
    images: string[];
    /** Index of the image to show, or null when the lightbox is closed. */
    index: number | null;
    onClose: () => void;
    /** Provide to enable prev/next navigation across `images`. */
    onNavigate?: (index: number) => void;
    altPrefix?: string;
}

/**
 * Full-screen image viewer with zoom. Controlled via `index` (null = closed).
 * Zoom in/out with the +/- buttons, the scroll wheel, or double-click; drag to
 * pan once zoomed. Esc closes, arrow keys navigate. Rendered through a portal
 * so transformed/overflow-hidden ancestors can never clip or trap it.
 */
const ImageLightbox = ({ images, index, onClose, onNavigate, altPrefix = 'Image' }: ImageLightboxProps) => {
    const isOpen = index !== null && index >= 0 && index < images.length;
    const canNavigate = !!onNavigate && images.length > 1;

    const [zoom, setZoom] = useState(1);
    const [offset, setOffset] = useState({ x: 0, y: 0 });
    const dragState = useRef<{ startX: number; startY: number; originX: number; originY: number } | null>(null);
    const [isDragging, setIsDragging] = useState(false);

    const resetView = useCallback(() => {
        setZoom(1);
        setOffset({ x: 0, y: 0 });
    }, []);

    const zoomBy = useCallback((delta: number) => {
        setZoom((z) => {
            const next = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, +(z + delta).toFixed(2)));
            if (next === MIN_ZOOM) setOffset({ x: 0, y: 0 });
            return next;
        });
    }, []);

    // Reset zoom whenever the viewer opens or switches image.
    useEffect(() => {
        resetView();
    }, [index, resetView]);

    useEffect(() => {
        if (!isOpen) return;

        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            } else if (e.key === '+' || e.key === '=') {
                zoomBy(STEP);
            } else if (e.key === '-' || e.key === '_') {
                zoomBy(-STEP);
            } else if (e.key === '0') {
                resetView();
            } else if (canNavigate && index !== null && e.key === 'ArrowRight') {
                onNavigate!((index + 1) % images.length);
            } else if (canNavigate && index !== null && e.key === 'ArrowLeft') {
                onNavigate!((index - 1 + images.length) % images.length);
            }
        };

        window.addEventListener('keydown', handleKey);
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        return () => {
            window.removeEventListener('keydown', handleKey);
            document.body.style.overflow = previousOverflow;
        };
    }, [isOpen, index, images.length, canNavigate, onClose, onNavigate, zoomBy, resetView]);

    const step = (direction: number) => {
        if (!canNavigate || index === null) return;
        onNavigate!((index + direction + images.length) % images.length);
    };

    const onWheel = (e: React.WheelEvent) => {
        zoomBy(e.deltaY < 0 ? STEP : -STEP);
    };

    const onPointerDown = (e: React.PointerEvent<HTMLImageElement>) => {
        if (zoom <= 1) return;
        e.preventDefault();
        (e.target as HTMLElement).setPointerCapture(e.pointerId);
        dragState.current = { startX: e.clientX, startY: e.clientY, originX: offset.x, originY: offset.y };
        setIsDragging(true);
    };

    const onPointerMove = (e: React.PointerEvent) => {
        const d = dragState.current;
        if (!d) return;
        setOffset({ x: d.originX + (e.clientX - d.startX), y: d.originY + (e.clientY - d.startY) });
    };

    const endDrag = () => {
        dragState.current = null;
        setIsDragging(false);
    };

    if (!isOpen) return null;

    const ctrl =
        'rounded-full border border-white/10 bg-white/10 p-2 text-white backdrop-blur-md transition-all hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-30';

    return createPortal(
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-10"
            onClick={onClose}
            onWheel={onWheel}
            role="dialog"
            aria-modal="true"
            aria-label="Image viewer"
        >
            <button
                onClick={onClose}
                aria-label="Close image viewer"
                className="absolute top-4 right-4 md:top-6 md:right-6 z-20 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
            >
                <X className="h-6 w-6" />
            </button>

            {/* Zoom controls */}
            <div
                onClick={(e) => e.stopPropagation()}
                className="absolute top-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-black/50 px-3 py-2 backdrop-blur-md md:top-6"
            >
                <button onClick={() => zoomBy(-STEP)} disabled={zoom <= MIN_ZOOM} aria-label="Zoom out" className={ctrl}>
                    <Minus className="h-5 w-5" />
                </button>
                <span className="min-w-[3.5rem] text-center text-sm font-semibold tabular-nums text-white">
                    {Math.round(zoom * 100)}%
                </span>
                <button onClick={() => zoomBy(STEP)} disabled={zoom >= MAX_ZOOM} aria-label="Zoom in" className={ctrl}>
                    <Plus className="h-5 w-5" />
                </button>
                <button onClick={resetView} disabled={zoom === MIN_ZOOM} aria-label="Reset zoom" className={ctrl}>
                    <RotateCcw className="h-4 w-4" />
                </button>
            </div>

            {canNavigate && (
                <>
                    <button
                        onClick={(e) => { e.stopPropagation(); step(-1); }}
                        aria-label="Previous image"
                        className="absolute left-3 md:left-6 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-2 md:p-3 text-white transition-colors hover:bg-white/20"
                    >
                        <ChevronLeft className="h-6 w-6 md:h-7 md:w-7" />
                    </button>
                    <button
                        onClick={(e) => { e.stopPropagation(); step(1); }}
                        aria-label="Next image"
                        className="absolute right-3 md:right-6 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-2 md:p-3 text-white transition-colors hover:bg-white/20"
                    >
                        <ChevronRight className="h-6 w-6 md:h-7 md:w-7" />
                    </button>
                </>
            )}

            <img
                key={index}
                src={images[index as number]}
                alt={`${altPrefix} ${(index as number) + 1}`}
                onClick={(e) => e.stopPropagation()}
                onDoubleClick={(e) => {
                    e.stopPropagation();
                    if (zoom > 1) resetView();
                    else setZoom(2);
                }}
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={endDrag}
                onPointerCancel={endDrag}
                draggable={false}
                style={{
                    transform: `translate(${offset.x}px, ${offset.y}px) scale(${zoom})`,
                    transition: isDragging ? 'none' : 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                    cursor: zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'zoom-in',
                }}
                className="max-h-[90vh] max-w-[92vw] select-none rounded-lg object-contain shadow-2xl"
            />

            {canNavigate && (
                <div className="absolute bottom-5 left-1/2 z-20 -translate-x-1/2 rounded-full bg-black/40 px-3 py-1 text-sm font-medium text-white/80">
                    {(index as number) + 1} / {images.length}
                </div>
            )}
        </div>,
        document.body
    );
};

export default ImageLightbox;
