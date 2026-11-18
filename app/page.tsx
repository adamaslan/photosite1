import Link from "next/link";

// Homepage collage (direction approved by Eden 2026-11-16): photos scattered
// at varied sizes with lots of white space, like her reference site. On
// desktop they sit at fixed positions next to the sidebar; on mobile they
// stack loosely down the page. The open gaps are room for her future
// handwritten notes. Each photo opens its own project page.
const COLLAGE_CSS = `
  .collage { position: relative; height: 1900px; }
  .collage a, .collage .photo { position: absolute; display: block; }
  .collage img { display: block; width: 100%; height: auto; }
  .c1 { left: 1.6%;  top: 30px;   width: 33%; }
  .c2 { left: 40%;   top: 70px;   width: 41.6%; }
  .c3 { left: 6.4%;  top: 620px;  width: 34.4%; }
  .c4 { left: 51.2%; top: 660px;  width: 30.4%; }
  .c5 { left: 12%;   top: 1180px; width: 25.6%; }
  .c6 { left: 68%; top: 1470px; width: 30%; }
  @media (max-width: 767px) {
    .collage { height: auto; padding: 20px 0 60px; }
    .collage a, .collage .photo { position: static; margin-bottom: 46px; }
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
      <Link href="/artwork/margo" className="c1" aria-label="Margo">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/img2.jpg" alt="Black and white photo of a woman with curly hair in a white dress standing in a river, a bridge behind her" />
      </Link>
      <Link href="/artwork/this-how-you-see-me" className="c2" aria-label="is this how you see me">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/13-comp-1.jpg" alt="Woman in white leaning over a concrete ledge by an orange container" />
      </Link>
      <Link href="/moving-image" className="c3" aria-label="Moving Image">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/comp-3.jpg" alt="Woman leaning over a set dining table" />
      </Link>
      <Link href="/artwork/this-how-you-see-me" className="c4" aria-label="is this how you see me">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/03%20copy.jpg" alt="Woman in a white dress standing in dark woods" />
      </Link>
      <Link href="/artwork/this-how-you-see-me" className="c5" aria-label="is this how you see me">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/comp-10.jpg" alt="Woman kneeling in a green field" />
      </Link>
      <Link href="/artwork/girls" className="c6" aria-label="girls">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/reggie05.jpg" alt="Woman with dark hair sitting on stacked wooden pallets in front of graffiti-covered box trucks" />
      </Link>
    </div>
  );
}
