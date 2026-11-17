import Link from "next/link";

// Homepage collage (direction approved by Eden 2026-11-16): photos scattered
// at varied sizes with lots of white space, like her reference site. On
// desktop they sit at fixed positions next to the sidebar; on mobile they
// stack loosely down the page. The open gaps are room for her future
// handwritten notes. Every photo links to the Work page.
const COLLAGE_CSS = `
  .collage { position: relative; height: 1900px; }
  .collage a { position: absolute; display: block; }
  .collage img { display: block; width: 100%; height: auto; }
  .c1 { left: 1.6%;  top: 30px;   width: 33%; }
  .c2 { left: 40%;   top: 70px;   width: 41.6%; }
  .c3 { left: 6.4%;  top: 620px;  width: 34.4%; }
  .c4 { left: 51.2%; top: 660px;  width: 30.4%; }
  .c5 { left: 12%;   top: 1180px; width: 25.6%; }
  .c6 { left: 71.2%; top: 1500px; width: 24.8%; }
  @media (max-width: 767px) {
    .collage { height: auto; padding: 20px 0 60px; }
    .collage a { position: static; margin-bottom: 46px; }
    .c1 { width: 72%; margin-left: 6%; }
    .c2 { width: 82%; margin-left: 12%; }
    .c3 { width: 80%; margin-left: 4%; }
    .c4 { width: 70%; margin-left: 26%; }
    .c5 { width: 62%; margin-left: 8%; }
    .c6 { width: 58%; margin-left: 34%; }
  }
`;

export default function Home() {
  return (
    <div className="collage" aria-label="Selected work">
      <style dangerouslySetInnerHTML={{ __html: COLLAGE_CSS }} />
      <Link href="/artwork" className="c1" aria-label="View all artwork">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/img2.jpg" alt="Black and white photo of a woman with curly hair in a white dress standing in a river, a bridge behind her" />
      </Link>
      <Link href="/artwork" className="c2" aria-label="View all artwork">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/13-comp-1.jpg" alt="Woman in white leaning over a concrete ledge by an orange container" />
      </Link>
      <Link href="/artwork" className="c3" aria-label="View all artwork">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/comp-3.jpg" alt="Woman leaning over a set dining table" />
      </Link>
      <Link href="/artwork" className="c4" aria-label="View all artwork">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/03%20copy.jpg" alt="Woman in a white dress standing in dark woods" />
      </Link>
      <Link href="/artwork" className="c5" aria-label="View all artwork">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/comp-10.jpg" alt="Woman kneeling in a green field" />
      </Link>
      <Link href="/artwork" className="c6" aria-label="View all artwork">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/16-comp-2.jpg" alt="Person in a red cloak standing in a sunlit field" />
      </Link>
    </div>
  );
}