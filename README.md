# photosite1

Portfolio site for Eden — Next.js (App Router) + Tailwind CSS, deployed with the Vercel CLI.

## Adding photos

Drop images into `public/images/`. That's it — no code changes.

- `img1.jpg` – `img4.jpg` are the landing page, and the first four on the Artwork page.
- Everything else in the folder shows on the Artwork page, in natural name order
  (`img5.jpg`, `img6.jpg`, … `img10.jpg`, … `img20.jpg`).
- `.jpg .jpeg .png .webp .avif .gif .svg` all work. Dimensions are read automatically.
- Missing landing images show a dashed placeholder naming the file that goes there.

## Editing text

| What | File |
|---|---|
| Name, email, Instagram, nav | `site.config.ts` |
| CV entries | `content/cv.ts` |
| Colors (dark red drawer, crosshair red) | `app/globals.css` (`@theme`) |
| Cursor | `public/cursor.svg` |

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy (Vercel CLI)

```bash
vercel          # preview deployment
vercel --prod   # production deployment
```

The repo is linked to a Vercel project and connected to GitHub, so pushes to `main`
also deploy to production automatically.
