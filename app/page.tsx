import Image from "next/image";
import Link from "next/link";
import { HorizontalStrip } from "@/components/HorizontalStrip";
import { Placeholder } from "@/components/Placeholder";
import { LANDING_IMAGE_COUNT, getLandingArtworks } from "@/lib/images";

const LANDING_SIZES = "(min-width: 768px) 70vw, 100vw";

export default function Home() {
  const artworks = getLandingArtworks();
  const missingCount = LANDING_IMAGE_COUNT - artworks.length;

  return (
    <HorizontalStrip>
      {artworks.map((artwork, index) => (
        <Link key={artwork.file} href="/artwork" aria-label="View all artwork" className="md:h-full">
          <Image
            src={artwork.src}
            alt={artwork.file}
            width={artwork.width}
            height={artwork.height}
            sizes={LANDING_SIZES}
            loading="eager"
            fetchPriority={index === 0 ? "high" : "auto"}
            className="h-auto w-full md:h-full md:w-auto"
          />
        </Link>
      ))}
      {Array.from({ length: missingCount }, (_, i) => (
        <Placeholder key={i} index={artworks.length + i} />
      ))}
    </HorizontalStrip>
  );
}
