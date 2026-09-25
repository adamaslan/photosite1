import type { Metadata } from "next";
import { Gallery } from "@/components/Gallery";
import { Placeholder } from "@/components/Placeholder";
import { LANDING_IMAGE_COUNT, getArtworks } from "@/lib/images";

export const metadata: Metadata = { title: "Artwork" };

export default function ArtworkPage() {
  const artworks = getArtworks();

  if (artworks.length === 0) {
    return (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: LANDING_IMAGE_COUNT }, (_, i) => (
          <Placeholder key={i} label={`img${i + 1}.jpg`} />
        ))}
      </div>
    );
  }

  return <Gallery artworks={artworks} />;
}
