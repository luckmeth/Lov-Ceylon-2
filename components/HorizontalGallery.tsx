"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { PhotoImage } from "./PhotoImage";
import { photoAlt } from "@/lib/photos";
import type { Photo } from "@/lib/types";

const widths = [320, 420, 280, 500, 360, 440, 300];

export function HorizontalGallery({
  photos,
  title,
}: {
  photos: Photo[];
  title: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section
      id="stories"
      style={{
        padding: "5rem 0 6rem",
        background: "var(--hunter)",
        color: "var(--cream)",
        overflow: "hidden",
      }}
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        style={{ padding: "0 5vw 2.5rem" }}
      >
        <h2
          style={{
            fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)",
            color: "var(--cream)",
          }}
        >
          {title}
        </h2>
        <p
          style={{
            marginTop: "0.75rem",
            opacity: 0.85,
            textTransform: "none",
            letterSpacing: "0.04em",
            fontSize: "0.95rem",
            maxWidth: 480,
          }}
        >
          Drag through frozen chapters of love — each frame a quiet celebration.
        </p>
      </motion.div>

      <div ref={ref} className="h-scroll">
        {photos.map((photo, i) => {
          const w = widths[i % widths.length];
          const h = Math.round(w * (i % 2 === 0 ? 1.35 : 0.72));
          return (
            <motion.div
              key={photo.id}
              className="h-scroll-item photo-frame"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.5, delay: (i % 5) * 0.06 }}
              style={{
                width: w,
                height: h,
                position: "relative",
                borderRadius: 2,
              }}
            >
              <PhotoImage
                src={photo.url}
                alt={photoAlt(photo)}
                fill
                fit="contain"
                sizes={`${w}px`}
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
