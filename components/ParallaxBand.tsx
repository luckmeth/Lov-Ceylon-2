"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { PhotoImage } from "./PhotoImage";
import { photoAlt } from "@/lib/photos";
import type { Photo } from "@/lib/types";

export function ParallaxBand({ photos }: { photos: Photo[] }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["-5%", "12%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["12%", "-10%"]);

  const [a, b, c] = photos;
  if (!a) return null;

  return (
    <section
      ref={ref}
      style={{
        position: "relative",
        minHeight: "85vh",
        overflow: "hidden",
        background: "var(--cream-deep)",
        padding: "4rem 5vw",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gap: "1rem",
          alignItems: "center",
          minHeight: "70vh",
        }}
      >
        {a && (
          <motion.div style={{ y: y1, gridColumn: "1 / 6", position: "relative", height: "55vh" }}>
            <div className="photo-tile frame-double" style={{ height: "100%", position: "relative" }}>
              <PhotoImage src={a.url} alt={photoAlt(a)} fill sizes="45vw" style={{ objectFit: "cover" }} />
            </div>
          </motion.div>
        )}
        {b && (
          <motion.div
            style={{
              y: y2,
              gridColumn: "5 / 10",
              position: "relative",
              height: "42vh",
              marginTop: "4rem",
            }}
          >
            <div className="photo-tile" style={{ height: "100%", position: "relative" }}>
              <PhotoImage src={b.url} alt={photoAlt(b)} fill sizes="40vw" style={{ objectFit: "cover" }} />
            </div>
          </motion.div>
        )}
        {c && (
          <motion.div style={{ y: y3, gridColumn: "9 / 13", position: "relative", height: "48vh" }}>
            <div className="photo-tile frame-double" style={{ height: "100%", position: "relative" }}>
              <PhotoImage src={c.url} alt={photoAlt(c)} fill sizes="30vw" style={{ objectFit: "cover" }} />
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
