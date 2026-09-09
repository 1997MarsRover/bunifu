import { useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { GalleryImage } from '../data/galleryData';

interface LightboxModalProps {
  images: GalleryImage[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function LightboxModal({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}: LightboxModalProps) {
  const currentImage = images[currentIndex];
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      onNavigate(currentIndex - 1);
    } else {
      onNavigate(images.length - 1);
    }
  }, [currentIndex, images.length, onNavigate]);

  const handleNext = useCallback(() => {
    if (currentIndex < images.length - 1) {
      onNavigate(currentIndex + 1);
    } else {
      onNavigate(0);
    }
  }, [currentIndex, images.length, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handlePrev, handleNext, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (Math.abs(distance) > 50) {
      if (distance > 0) handleNext();
      else handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  if (!isOpen || !currentImage) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-[#111]/[0.98] p-3 md:p-8 select-none"
        onClick={onClose}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        role="dialog"
        aria-modal="true"
        aria-label="Image preview"
      >
        <div className="absolute top-0 inset-x-0 z-20 flex items-center justify-between p-4 md:p-6">
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-white/55">
            <span className="text-white">{String(currentIndex + 1).padStart(2, '0')}</span> / {String(images.length).padStart(2, '0')}
          </div>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="flex h-11 w-11 items-center justify-center bg-white text-brand-dark transition hover:bg-[#f3b61f] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            aria-label="Close photo viewer (Esc)"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {images.length > 1 && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-3 md:left-6 z-20 flex h-12 w-12 items-center justify-center border border-white/25 bg-black/30 text-white transition hover:bg-white hover:text-brand-dark active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            aria-label="Previous photo (Left arrow)"
          >
            <ChevronLeft className="h-7 w-7" />
          </button>
        )}

        {images.length > 1 && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-3 md:right-6 z-20 flex h-12 w-12 items-center justify-center border border-white/25 bg-black/30 text-white transition hover:bg-white hover:text-brand-dark active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            aria-label="Next photo (Right arrow)"
          >
            <ChevronRight className="h-7 w-7" />
          </button>
        )}

        <div
          className="relative h-full max-h-[88vh] w-full max-w-7xl flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <motion.img
            key={currentImage.id}
            src={currentImage.imageUrl}
            alt={currentImage.altText}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="max-h-[88vh] w-auto max-w-full object-contain shadow-2xl"
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
