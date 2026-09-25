// Stand-ins shown where an image is expected but not yet in public/images.
// Each slot gets its own color, shape and caption so an empty site still looks intentional.
const SWATCHES = [
  { bg: "bg-blood", text: "text-white", aspect: "aspect-[4/5]" },
  { bg: "bg-[#f4d6cc]", text: "text-blood", aspect: "aspect-[3/4]" },
  { bg: "bg-ink", text: "text-crosshair", aspect: "aspect-square" },
  { bg: "bg-crosshair", text: "text-ink", aspect: "aspect-[2/3]" },
  { bg: "bg-[#cfe3d6]", text: "text-ink", aspect: "aspect-[16/10]" },
  { bg: "bg-[#ffd400]", text: "text-blood", aspect: "aspect-[4/5]" },
  { bg: "bg-[#e9e4dc]", text: "text-ink", aspect: "aspect-[3/2]" },
  { bg: "bg-[#2b2d6e]", text: "text-[#f4d6cc]", aspect: "aspect-[3/4]" },
] as const;

const CAPTIONS = [
  "your art here",
  "frame pending",
  "hang me",
  "coming soon",
  "still drying",
  "in the darkroom",
  "wall space",
  "work in progress",
  "reserved for a masterpiece",
  "developing…",
];

export const EMPTY_ARTWORK_PLACEHOLDER_COUNT = 20;

export function Placeholder({ index }: { index: number }) {
  const swatch = SWATCHES[index % SWATCHES.length];
  const caption = CAPTIONS[index % CAPTIONS.length];
  const number = index + 1;

  return (
    <div
      className={`group relative flex w-full flex-col justify-between overflow-hidden p-5 md:h-full md:w-auto ${swatch.bg} ${swatch.text} ${swatch.aspect}`}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 opacity-20 transition-transform duration-700 group-hover:rotate-90"
      >
        <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-current" />
        <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-current" />
      </span>
      <span className="text-6xl font-medium leading-none tracking-tighter md:text-8xl">{number}</span>
      <span className="space-y-1">
        <span className="block text-sm italic">{caption}</span>
        <span className="block text-[11px] opacity-70">public/images/img{number}.jpg</span>
      </span>
    </div>
  );
}
