import type { Metadata } from "next";

export const metadata: Metadata = { title: "Moving Image" };

// Eden asked for the side menu in blue underlined Garamond on this page
// (iMessage 2026-11-15: "Can the font actually be Garamond", "the side menu is
// blue underlined Garamond not red"). The site's code loads EB Garamond
// (app/layout.tsx) but never applies it, so this page-scoped rule applies it to
// the nav on THIS page only - other pages keep their current look. The a[href]
// selectors also force the active link blue, overriding the active ink styling.
// With output: "export" this style ships only in moving-image/index.html.
const NAV_GARAMOND = `
  aside a, header a, aside nav a, [id="mobile-drawer"] a {
    font-family: var(--font-eb-garamond), ui-serif, Georgia, "Times New Roman", serif;
  }
  @layer utilities {
    aside a[href], header a[href], aside nav a[href], [id="mobile-drawer"] a[href] {
      color: blue !important;
      text-decoration: underline !important;
    }
  }
`;

// Placeholder boxes stand in for the film stills, which Eden has not sent yet.
// When the stills arrive, drop them in a new public/stills/ folder (NOT
// public/images/ - that folder auto-feeds the Work gallery) and swap these
// boxes for <Image> components.
function StillPlaceholder({ className }: { className: string }) {
  return (
    <div
      aria-hidden
      className={`border border-[#dedede] bg-[#f4f4f4] ${className}`}
    />
  );
}

export default function MovingImagePage() {
  return (
    <div className="max-w-3xl space-y-24 pb-24">
      <style dangerouslySetInnerHTML={{ __html: NAV_GARAMOND }} />

      <section className="grid grid-cols-3 gap-4" aria-label="Stills">
        {Array.from({ length: 9 }, (_, i) => (
          <StillPlaceholder key={i} className="aspect-square" />
        ))}
      </section>

      <section className="space-y-24">
        <figure className="flex items-start gap-4">
          <StillPlaceholder className="aspect-[7/5] w-1/2" />
          <figcaption className="text-sm text-muted">caption</figcaption>
        </figure>
        <div className="flex items-end gap-6">
          <StillPlaceholder className="aspect-square w-1/4" />
          <p className="self-start text-sm text-muted">caption</p>
          <StillPlaceholder className="ml-auto aspect-[7/5] w-1/2" />
        </div>
      </section>

      <section aria-label="Film">
        <div className="relative aspect-video w-full">
          <iframe
            src="https://player.vimeo.com/video/707903566"
            title="delirios del desarrollo"
            className="absolute inset-0 h-full w-full"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>
    </div>
  );
}