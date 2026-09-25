"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { Artwork } from "@/lib/images";

const GALLERY_SIZES = "(min-width: 1536px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw";

/** Masonry grid of artworks; clicking one opens a full-screen viewer. */
export function Gallery({ artworks }: { artworks: Artwork[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const step = useCallback(
    (delta: number) =>
      setOpenIndex((current) =>
        current === null ? null : (current + delta + artworks.length) % artworks.length,
      ),
    [artworks.length],
  );

  useEffect(() => {
    if (openIndex === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [openIndex, close, step]);

  const current = openIndex === null ? null : artworks[openIndex];

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 2xl:columns-4">
        {artworks.map((artwork, index) => (
          <button
            key={artwork.file}
            type="button"
            onClick={() => setOpenIndex(index)}
            className="mb-4 block w-full break-inside-avoid"
            aria-label={`View ${artwork.file}`}
          >
            <Image
              src={artwork.src}
              alt={artwork.file}
              width={artwork.width}
              height={artwork.height}
              sizes={GALLERY_SIZES}
              loading={index < 4 ? "eager" : "lazy"}
              className="h-auto w-full transition-opacity hover:opacity-90"
            />
          </button>
        ))}
      </div>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.file}
          className="fixed inset-0 z-50 flex items-center justify-center bg-paper"
          onClick={close}
        >
          <Image
            src={current.src}
            alt={current.file}
            width={current.width}
            height={current.height}
            sizes="100vw"
            className="max-h-[88vh] w-auto max-w-[92vw] object-contain"
            onClick={(event) => {
              event.stopPropagation();
              step(1);
            }}
          />
          <button type="button" onClick={close} aria-label="Close" className="absolute right-4 top-3 p-2 text-3xl leading-none">
            ×
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              step(-1);
            }}
            aria-label="Previous"
            className="absolute inset-y-0 left-0 w-1/5"
          />
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              step(1);
            }}
            aria-label="Next"
            className="absolute inset-y-0 right-0 w-1/5"
          />
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-muted">
            {(openIndex ?? 0) + 1} / {artworks.length}
          </p>
        </div>
      )}
    </>
  );
}
