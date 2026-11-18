import type { Metadata } from "next";
import { Gallery } from "@/components/Gallery";
import { THIS_HOW_YOU_SEE_ME } from "@/lib/projects";

export const metadata: Metadata = { title: "is this how you see me" };

export default function ThisHowYouSeeMePage() {
  return (
    <>
      <h1 className="sr-only">is this how you see me</h1>
      <Gallery artworks={THIS_HOW_YOU_SEE_ME} tight />
    </>
  );
}
