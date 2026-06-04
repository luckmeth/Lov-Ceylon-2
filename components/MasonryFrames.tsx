"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { AdaptivePhoto } from "./AdaptivePhoto";
import { Lightbox } from "./Lightbox";
import type { Photo } from "@/lib/types";

export function MasonryFrames({
  photos,
  title = "Featured Frames",
  showLink,
  columns = 3,
}: {
  photos: Photo[];
  title?: string;
  showLink?: boolean;
  columns?: 2 | 3 | 4;
}) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  if (photos.length === 0) return null;

  return (
    <section className="masonry-frames-section">
      {(title || showLink) && (
        <div className="section-head">
          {title ? <h2 className="title-section">{title}</h2> : <span />}
          {showLink && (
            <Link href="/gallery" className="link-ultra">
              View full gallery →
            </Link>
          )}
        </div>
      )}

      <div className={`masonry-frames masonry-frames--cols-${columns}`}>
        {photos.map((photo, i) => (
          <motion.div
            key={photo.id}
            className="masonry-frames__item"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.45, delay: (i % 6) * 0.05 }}
          >
            <AdaptivePhoto
              src={photo.url}
              alt={photo.name}
              onClick={() => setLightbox(i)}
              priority={i < 4}
            />
          </motion.div>
        ))}
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
