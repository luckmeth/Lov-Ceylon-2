"use client";

import { MasonryFrames } from "./MasonryFrames";
import type { Photo } from "@/lib/types";

export function PhotoGrid({
  photos,
  title,
  subtitle,
}: {
  photos: Photo[];
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="photo-grid-section">
      <header className="section-head section-head--center">
        <h2 className="title-section">{title}</h2>
        {subtitle && <p className="section-sub">{subtitle}</p>}
      </header>
      <MasonryFrames photos={photos} columns={4} />
    </section>
  );
}
