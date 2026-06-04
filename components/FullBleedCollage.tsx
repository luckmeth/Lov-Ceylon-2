"use client";

import { motion } from "framer-motion";
import { PhotoImage } from "./PhotoImage";
import type { Photo } from "@/lib/types";

export function FullBleedCollage({ photos }: { photos: Photo[] }) {
  const a = photos[0];
  const b = photos[1];
  const c = photos[2];
  const d = photos[3];
  const e = photos[4];

  if (!a) return null;

  return (
    <section
      className="fullbleed-collage"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(12, 1fr)",
        gridTemplateRows: "repeat(2, minmax(240px, 42vh))",
        gap: "0.5rem",
        padding: "0.5rem",
        background: "var(--forest)",
      }}
    >
      {a && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="photo-tile"
          style={{ gridColumn: "1 / 8", gridRow: "1 / 3", position: "relative" }}
        >
          <PhotoImage src={a.url} alt={a.name} fill sizes="60vw" style={{ objectFit: "cover" }} />
        </motion.div>
      )}
      {b && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="photo-tile"
          style={{ gridColumn: "8 / 13", gridRow: "1 / 2", position: "relative" }}
        >
          <PhotoImage src={b.url} alt={b.name} fill sizes="40vw" style={{ objectFit: "cover" }} />
        </motion.div>
      )}
      {c && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="photo-tile"
          style={{ gridColumn: "8 / 11", gridRow: "2 / 3", position: "relative" }}
        >
          <PhotoImage src={c.url} alt={c.name} fill sizes="25vw" style={{ objectFit: "cover" }} />
        </motion.div>
      )}
      {d && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="photo-tile"
          style={{ gridColumn: "11 / 13", gridRow: "2 / 3", position: "relative" }}
        >
          <PhotoImage src={d.url} alt={d.name} fill sizes="20vw" style={{ objectFit: "cover" }} />
        </motion.div>
      )}
      {e && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="photo-tile"
          style={{
            display: "none",
          }}
        >
          <PhotoImage src={e.url} alt={e.name} fill sizes="20vw" style={{ objectFit: "cover" }} />
        </motion.div>
      )}
    </section>
  );
}
