import type { Artwork } from "@/lib/images";

// Project pages: named bodies of work that homepage collage photos link to
// (direction from Eden, 2026-11-16, like michaelangelh.com project links).
// Photos that belong only to a project live in public/images/<project>/ so
// they stay out of the main Work gallery (lib/images reads only the top
// level of public/images).

/** Margo - linked from the homepage river photo (collage c1). */
export const MARGO: Artwork[] = [
  { file: "img2.jpg", src: "/images/img2.jpg", width: 2400, height: 1591 },
  { file: "Comp15.jpg", src: "/images/Comp15.jpg", width: 3089, height: 2048 },
  { file: "margo-river-tree.jpg", src: "/images/margo/margo-river-tree.jpg", width: 2400, height: 1591 },
  { file: "margo-church.jpg", src: "/images/margo/margo-church.jpg", width: 1600, height: 2400 },
  { file: "margo-waters-edge.jpg", src: "/images/margo/margo-waters-edge.jpg", width: 1591, height: 2400 },
  { file: "comp17.jpg", src: "/images/comp17.jpg", width: 1983, height: 2990 },
  { file: "margo-lamppost.jpg", src: "/images/margo/margo-lamppost.jpg", width: 1600, height: 2400 },
  { file: "comp-19.jpg", src: "/images/comp-19.jpg", width: 1800, height: 2700 },
];

/** this how you see me - linked from homepage collage c2, c4, c5, c6. */
export const THIS_HOW_YOU_SEE_ME: Artwork[] = [
  { file: "13-comp-1.jpg", src: "/images/13-comp-1.jpg", width: 6600, height: 6309 },
  { file: "03 copy.jpg", src: "/images/03%20copy.jpg", width: 6600, height: 6554 },
  { file: "Compressed1.jpg", src: "/images/Compressed1.jpg", width: 6600, height: 6341 },
  { file: "comp-18.jpg", src: "/images/this-how-you-see-me/comp-18.jpg", width: 1094, height: 1564 },
  { file: "comp-10.jpg", src: "/images/comp-10.jpg", width: 1115, height: 1571 },
  { file: "16-comp-2.jpg", src: "/images/16-comp-2.jpg", width: 1694, height: 1699 },
];

/** girls - new project (Eden, 2026-11-18); photos in her sent order. */
export const GIRLS: Artwork[] = [
  { file: "reggie05.jpg", src: "/images/reggie05.jpg", width: 4832, height: 4760 },
  { file: "girls-1.jpg", src: "/images/girls/girls-1.jpg", width: 1600, height: 2400 },
  { file: "girls-2.jpg", src: "/images/girls/girls-2.jpg", width: 1591, height: 2400 },
  { file: "girls-3.jpg", src: "/images/girls/girls-3.jpg", width: 1024, height: 1545 },
  { file: "girls-6.jpg", src: "/images/girls/girls-6.jpg", width: 3387, height: 2246 },
  { file: "girls-4.jpg", src: "/images/girls/girls-4.jpg", width: 1591, height: 2400 },
  { file: "girls-5.jpg", src: "/images/girls/girls-5.jpg", width: 4000, height: 6000 },
];
