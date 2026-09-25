/** Shown where an image is expected but not yet in public/images. */
export function Placeholder({ label }: { label: string }) {
  return (
    <div className="flex aspect-[4/5] w-full items-center justify-center border border-dashed border-muted/60 bg-neutral-50 text-xs text-muted">
      public/images/{label}
    </div>
  );
}
