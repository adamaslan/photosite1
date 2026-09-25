import type { Metadata } from "next";
import { cv } from "@/content/cv";

export const metadata: Metadata = { title: "CV" };

export default function CvPage() {
  return (
    <div className="max-w-3xl space-y-10 text-sm leading-relaxed">
      {cv.map((section) => (
        <section key={section.heading}>
          <h2 className="mb-3 text-xs uppercase tracking-widest text-muted">{section.heading}</h2>
          <ul className="space-y-1">
            {section.entries.map((entry) => (
              <li key={`${entry.year}-${entry.text}`} className="grid grid-cols-[4rem_1fr] gap-4">
                <span className="text-muted">{entry.year}</span>
                <span>{entry.text}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
