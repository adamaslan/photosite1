"use client";

import { useEffect, useRef, type ReactNode } from "react";

const DESKTOP_QUERY = "(min-width: 768px)";

/**
 * Mobile: a single vertical column.
 * Desktop: one full-height row that scrolls sideways; a vertical mouse wheel
 * is translated into horizontal scroll so it works without a trackpad.
 */
export function HorizontalStrip({ children }: { children: ReactNode }) {
  const stripRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const strip = stripRef.current;
    if (!strip) return;
    const desktop = window.matchMedia(DESKTOP_QUERY);

    const onWheel = (event: WheelEvent) => {
      if (!desktop.matches) return;
      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
      event.preventDefault();
      strip.scrollLeft += event.deltaY;
    };

    strip.addEventListener("wheel", onWheel, { passive: false });
    return () => strip.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <div
      ref={stripRef}
      className="flex flex-col gap-4 md:h-[calc(100svh-5rem)] md:flex-row md:overflow-x-auto md:overflow-y-hidden md:overscroll-x-contain md:pb-3 [&>*]:shrink-0"
    >
      {children}
    </div>
  );
}
