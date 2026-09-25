import fs from "node:fs";
import path from "node:path";
import { imageSize } from "image-size";

export type Artwork = {
  file: string;
  src: string;
  width: number;
  height: number;
};

const IMAGES_DIR = path.join(process.cwd(), "public", "images");
const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif", ".gif"]);
const FALLBACK_SIZE = { width: 1200, height: 1500 };

export const LANDING_IMAGE_COUNT = 4;

// Natural sort so img2 comes before img10.
const byNaturalName = new Intl.Collator(undefined, { numeric: true, sensitivity: "base" }).compare;

function readDimensions(file: string) {
  try {
    const { width, height } = imageSize(fs.readFileSync(path.join(IMAGES_DIR, file)));
    if (!width || !height) return FALLBACK_SIZE;
    return { width, height };
  } catch {
    return FALLBACK_SIZE;
  }
}

/** Every image in public/images, in natural filename order (img1, img2, … img20). */
export function getArtworks(): Artwork[] {
  if (!fs.existsSync(IMAGES_DIR)) return [];

  return fs
    .readdirSync(IMAGES_DIR)
    .filter((file) => IMAGE_EXTENSIONS.has(path.extname(file).toLowerCase()))
    .sort(byNaturalName)
    .map((file) => ({
      file,
      src: `/images/${encodeURIComponent(file)}`,
      ...readDimensions(file),
    }));
}

/** The first four images (img1–img4) shown on the landing page. */
export function getLandingArtworks(): Artwork[] {
  return getArtworks().slice(0, LANDING_IMAGE_COUNT);
}
