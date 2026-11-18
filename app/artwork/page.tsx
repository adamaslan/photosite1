import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Artwork" };

// Work is the project index: one cover photo per project, each linking to that
// project's page. Collage arrangement - varied sizes, staggered, loose white
// space - matching the homepage (Eden, 2026-11-18).
const WORK_COLLAGE_CSS = `
  .work-collage { position: relative; height: 1900px; }
  .work-collage a { position: absolute; display: block; }
  .work-collage img { display: block; width: 100%; height: auto; }
  .w-margo { left: 1%; top: 24px; width: 52%; }
  .w-thysm { left: 59%; top: 430px; width: 33%; }
  .w-girls { left: 10%; top: 900px; width: 30%; }
  @media (max-width: 767px) {
    .work-collage { height: auto; padding: 20px 0 60px; }
    .work-collage a { position: static; margin-bottom: 46px; }
    .w-margo { width: 86%; margin-left: 2%; }
    .w-thysm { width: 64%; margin-left: 30%; }
    .w-girls { width: 70%; margin-left: 12%; }
  }
`;

export default function ArtworkPage() {
  return (
    <div className="work-collage" aria-label="Projects">
      <style dangerouslySetInnerHTML={{ __html: WORK_COLLAGE_CSS }} />
      <Link href="/artwork/margo" className="w-margo" aria-label="Margo">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/img2.jpg" alt="Black and white photo of a woman with curly hair in a white dress standing in a river, a bridge behind her" />
        <span className="mt-2 inline-block text-blue underline">Margo</span>
      </Link>
      <Link href="/artwork/this-how-you-see-me" className="w-thysm" aria-label="is this how you see me">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/comp-10.jpg" alt="Woman kneeling in a green field" />
        <span className="mt-2 inline-block text-blue underline">is this how you see me</span>
      </Link>
      <Link href="/artwork/girls" className="w-girls" aria-label="girls">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/reggie05.jpg" alt="Woman in a grey camisole and jeans sitting on wooden pallets in front of a truck" />
        <span className="mt-2 inline-block text-blue underline">girls</span>
      </Link>
    </div>
  );
}
