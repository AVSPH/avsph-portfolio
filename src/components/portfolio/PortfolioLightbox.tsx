"use client";

import { useCallback, useEffect, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type PortfolioLightboxProps = {
  src?: string;
  images?: string[];
  alt: string;
  enabled?: boolean;
  className?: string;
  children: ReactNode;
};

export default function PortfolioLightbox({
  src,
  images,
  alt,
  enabled = true,
  className,
  children,
}: PortfolioLightboxProps) {
  const allImages = images && images.length > 0 ? images : src ? [src] : [];
  const canOpen = enabled && allImages.length > 0;
  const isCarousel = allImages.length > 1;

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const prev = useCallback(() => {
    setCurrentIndex((i) => (i > 0 ? i - 1 : allImages.length - 1));
  }, [allImages.length]);

  const next = useCallback(() => {
    setCurrentIndex((i) => (i < allImages.length - 1 ? i + 1 : 0));
  }, [allImages.length]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
      if (isCarousel && event.key === "ArrowLeft") prev();
      if (isCarousel && event.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, isCarousel, prev, next]);

  if (!canOpen) {
    return <div className={className}>{children}</div>;
  }

  const handleOpen = () => {
    setCurrentIndex(0);
    setIsOpen(true);
  };

  const overlay = isOpen ? (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 p-6 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={`${alt} full view`}
      onClick={() => setIsOpen(false)}
    >
      <div
        className="relative w-full max-w-5xl overflow-hidden rounded-3xl bg-[var(--background)] shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Close */}
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[var(--primary)] shadow-sm transition hover:bg-white"
          aria-label="Close full view"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Counter */}
        {isCarousel && (
          <div className="absolute left-4 top-4 z-10 rounded-full bg-black/50 px-3 py-1 text-xs font-semibold text-white">
            {currentIndex + 1} / {allImages.length}
          </div>
        )}

        {/* Image */}
        <div className="relative h-[70vh] w-full bg-[var(--background-alt)]">
          <Image
            key={allImages[currentIndex]}
            src={allImages[currentIndex]}
            alt={isCarousel ? `${alt} — ${currentIndex + 1} of ${allImages.length}` : alt}
            fill
            sizes="100vw"
            className="object-contain"
          />
        </div>

        {/* Prev / Next */}
        {isCarousel && (
          <>
            <button
              type="button"
              onClick={prev}
              className="absolute left-4 top-1/2 z-10 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[var(--primary)] shadow-sm transition hover:bg-white"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={next}
              className="absolute right-4 top-1/2 z-10 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[var(--primary)] shadow-sm transition hover:bg-white"
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Dot indicators */}
            <div className="flex justify-center gap-2 py-4">
              {allImages.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === currentIndex
                      ? "w-6 bg-[var(--primary)]"
                      : "w-2 bg-[var(--border-light)] hover:bg-[var(--muted)]"
                  }`}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  ) : null;

  return (
    <>
      <button
        type="button"
        onClick={handleOpen}
        className={`group relative w-full cursor-zoom-in text-left ${className ?? ""}`}
        aria-label={`Open full view of ${alt}`}
      >
        {children}
        <span className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent transition group-hover:ring-[var(--accent)]/40" />
        <span className="pointer-events-none absolute bottom-4 right-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-[var(--primary)] opacity-0 shadow-sm transition group-hover:opacity-100">
          {isCarousel ? `View ${allImages.length} images` : "Click to expand"}
        </span>
      </button>

      {mounted && createPortal(overlay, document.body)}
    </>
  );
}
