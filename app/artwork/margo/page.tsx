import type { Metadata } from "next";
import { Gallery } from "@/components/Gallery";
import { MARGO } from "@/lib/projects";

export const metadata: Metadata = { title: "Margo" };

export default function MargoPage() {
  return (
    <>
      <h1 className="sr-only">Margo</h1>
      <Gallery artworks={MARGO} tight />
    </>
  );
}
