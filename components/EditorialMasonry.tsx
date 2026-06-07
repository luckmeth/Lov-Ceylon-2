"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { PhotoImage } from "./PhotoImage";
import { Lightbox } from "./Lightbox";
import { photoAlt } from "@/lib/photos";
import type { Photo } from "@/lib/types";

const spanPatterns = [
  { minH: 280 },
  { minH: 420 },
  { minH: 340 },
  { minH: 520 },
  { minH: 300 },
  { minH: 380 },
];

export function EditorialMasonry({
  photos,
  id,
  title,
  subtitle,
}: {
  photos: Photo[];
  id?: string;
  title: string;
  subtitle?: string;
}) {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const globalIndex = (local: number) => local;

  return (
    <section id={id} style={{ padding: "6rem 5vw" }}>
      <motion.header
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: "center", marginBottom: "3rem" }}
      >
        <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", color: "var(--hunter)" }}>
          {title}
        </h2>
        {subtitle && (
          <p
            style={{
              maxWidth: 560,
              margin: "1.25rem auto 0",
              color: "var(--moss)",
              textTransform: "none",
              letterSpacing: "0.02em",
              fontSize: "1.05rem",
            }}
          >
            {subtitle}
          </p>
        )}
      </motion.header>

      <div className="masonry">
        {photos.map((photo, i) => {
          const pattern = spanPatterns[i % spanPatterns.length];
          return (
            <motion.button
              key={photo.id}
              type="button"
              className="masonry-item photo-tile"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: (i % 6) * 0.05 }}
              onClick={() => setLightbox(globalIndex(i))}
              style={{
                width: "100%",
                border: "none",
                padding: 0,
                cursor: "pointer",
                position: "relative",
                minHeight: pattern.minH,
                display: "block",
              }}
            >
              <PhotoImage
                src={photo.url}
                alt={photoAlt(photo)}
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                style={{ objectFit: "cover" }}
              />
            </motion.button>
          );
        })}
      </div>

      <Lightbox
        photos={photos}
        index={lightbox}
        onClose={() => setLightbox(null)}
        onNavigate={setLightbox}
      />
    </section>
  );
}
