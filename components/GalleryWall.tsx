"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Lightbox } from "./Lightbox";
import { PhotoImage } from "./PhotoImage";
import { photoAlt } from "@/lib/photos";
import type { Photo } from "@/lib/types";

const WALL_SLOTS: {
  gridColumn: string;
  gridRow: string;
  aspect: string;
  label?: string;
}[] = [
  { gridColumn: "1 / 4", gridRow: "1 / 3", aspect: "4/5" },
  { gridColumn: "4 / 9", gridRow: "1 / 4", aspect: "4/5", label: "16 × 20" },
  { gridColumn: "9 / 13", gridRow: "1 / 2", aspect: "3/4" },
  { gridColumn: "1 / 5", gridRow: "3 / 4", aspect: "11/14" },
  { gridColumn: "5 / 9", gridRow: "3 / 4", aspect: "4/3" },
  { gridColumn: "9 / 13", gridRow: "2 / 4", aspect: "4/5" },
  { gridColumn: "1 / 5", gridRow: "4 / 5", aspect: "4/5" },
  { gridColumn: "5 / 13", gridRow: "4 / 5", aspect: "16/9", label: "16 × 20" },
];

export function GalleryWall({
  photos,
  title = "Gallery Wall",
  showLink,
}: {
  photos: Photo[];
  title?: string;
  showLink?: boolean;
}) {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const wallPhotos = WALL_SLOTS.map((_, i) => photos[i % photos.length]).filter(
    Boolean
  );
  const slots = WALL_SLOTS.map((slot, i) => ({
    ...slot,
    photo: photos[i % photos.length],
    index: i,
  }));

  return (
    <section className="gallery-wall-section">
      <div className="section-head">
        <h2 className="title-section">{title}</h2>
        {showLink && (
          <Link href="/gallery" className="link-ultra">
            View full gallery →
          </Link>
        )}
      </div>

      <div className="gallery-wall">
        {slots.map((slot, i) =>
          slot.photo ? (
            <motion.button
              key={`${slot.photo.id}-${i}`}
              type="button"
              className="gallery-wall__frame photo-frame"
              style={{ gridColumn: slot.gridColumn, gridRow: slot.gridRow }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              onClick={() => setLightbox(slot.index)}
            >
              <div
                className="gallery-wall__inner"
                style={{ aspectRatio: slot.aspect.replace(" ", "/") }}
              >
                <PhotoImage
                  src={slot.photo.url}
                  alt={photoAlt(slot.photo)}
                  fill
                  fit="contain"
                  sizes="(max-width: 900px) 50vw, 25vw"
                />
              </div>
              {slot.label && <span className="gallery-wall__size">{slot.label}</span>}
            </motion.button>
          ) : null
        )}
      </div>

      <Lightbox
        photos={wallPhotos}
        index={lightbox}
        onClose={() => setLightbox(null)}
        onNavigate={setLightbox}
      />
    </section>
  );
}
