import type { Metadata } from "next";
import { Gallery } from "@/components/Gallery";
import { GIRLS } from "@/lib/projects";

export const metadata: Metadata = { title: "girls" };

export default function GirlsPage() {
  return (
    <>
      <h1 className="sr-only">girls</h1>
      <Gallery artworks={GIRLS} tight />
    </>
  );
}
