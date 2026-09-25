import type { Metadata } from "next";
import { Gallery } from "@/components/Gallery";
import { HorizontalStrip } from "@/components/HorizontalStrip";
import { EMPTY_ARTWORK_PLACEHOLDER_COUNT, Placeholder } from "@/components/Placeholder";
import { getArtworks } from "@/lib/images";

export const metadata: Metadata = { title: "Artwork" };

export default function ArtworkPage() {
  const artworks = getArtworks();

  if (artworks.length === 0) {
    return (
      <HorizontalStrip>
        {Array.from({ length: EMPTY_ARTWORK_PLACEHOLDER_COUNT }, (_, i) => (
          <Placeholder key={i} index={i} />
        ))}
      </HorizontalStrip>
    );
  }

  return <Gallery artworks={artworks} />;
}
