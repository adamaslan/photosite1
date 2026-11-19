import type { Metadata } from "next";

export const metadata: Metadata = { title: "Moving Image" };


// Stills live in public/stills/ (NOT public/images/ - that folder feeds the
// Work gallery). Every still sits in the same 16:9 cell so the grid is even;
// object-contain shows each whole frame with no cropping.
function Still({ n, alt }: { n: number; alt: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/stills/still-${n}.jpg`}
      alt={alt}
      loading="lazy"
      className="aspect-video h-full w-full bg-black object-contain"
    />
  );
}

export default function MovingImagePage() {
  return (
    <div className="max-w-5xl space-y-16 pb-24">
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3" aria-label="Stills">
        <Still n={1} alt="Two girls at an upright piano, one holding a hand mirror" />
        <Still n={2} alt="A hand on piano keys seen through white bars" />
        <Still n={3} alt="A face lit in red" />
        <Still n={4} alt="A church steeple with a cross against a pale sky" />
        <Still n={5} alt="A girl in a green dress holding a Santa Biblia in front of a white gate" />
        <Still n={6} alt="A woman braiding a girl's hair, seen through white window bars" />
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
