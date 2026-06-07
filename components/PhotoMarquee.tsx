"use client";

import { AdaptivePhoto } from "./AdaptivePhoto";
import { photoAlt } from "@/lib/photos";
import type { Photo } from "@/lib/types";

export function PhotoMarquee({ photos }: { photos: Photo[] }) {
  if (photos.length === 0) return null;
  const row = [...photos, ...photos];

  return (
    <section
      aria-label="Featured moments"
      style={{
        overflow: "hidden",
        padding: "3rem 0",
        background: "var(--cream-deep)",
        borderTop: "1px solid var(--gold-line)",
        borderBottom: "1px solid var(--gold-line)",
      }}
    >
      <div className="marquee-track">
        {row.map((photo, i) => (
          <div key={`${photo.id}-${i}`} className="marquee-frame-wrap">
            <AdaptivePhoto src={photo.url} alt={photoAlt(photo)} framed />
          </div>
        ))}
      </div>
    </section>
  );
}
