import type { Metadata } from "next";
import { site } from "@/site.config";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div className="max-w-xl space-y-6 text-sm leading-relaxed">
      <h1 className="text-xs uppercase tracking-widest text-muted">Contact</h1>
      <p>
        <a href={`mailto:${site.email}`} className="underline underline-offset-4 hover:text-crosshair">
          {site.email}
        </a>
      </p>
      <p>
        <a
          href={site.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 hover:text-crosshair"
        >
          Instagram
        </a>
      </p>
    </div>
  );
}
