import Image from "next/image";
import Link from "next/link";
import { Placeholder } from "@/components/Placeholder";
import { LANDING_IMAGE_COUNT, getLandingArtworks } from "@/lib/images";

const LANDING_SIZES = "(min-width: 1536px) 25vw, (min-width: 768px) 50vw, 100vw";

export default function Home() {
  const artworks = getLandingArtworks();
  const missingCount = LANDING_IMAGE_COUNT - artworks.length;

  return (
    <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-2 2xl:grid-cols-4">
      {artworks.map((artwork, index) => (
        <Link key={artwork.file} href="/artwork" aria-label="View all artwork">
          <Image
            src={artwork.src}
            alt={artwork.file}
            width={artwork.width}
            height={artwork.height}
            sizes={LANDING_SIZES}
            loading="eager"
            fetchPriority={index === 0 ? "high" : "auto"}
            className="h-auto w-full"
          />
        </Link>
      ))}
      {Array.from({ length: missingCount }, (_, i) => (
        <Placeholder key={i} label={`img${artworks.length + i + 1}.jpg`} />
      ))}
    </div>
  );
}
