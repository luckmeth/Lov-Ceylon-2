"use client";

import { motion } from "framer-motion";
import { VineCorner } from "./Botanical";
import { PhotoImage } from "./PhotoImage";
import type { Photo } from "@/lib/types";

export function AboutSection({ portrait }: { portrait?: Photo }) {
  return (
    <section
      id="about"
      style={{
        padding: "6rem 5vw",
        background: "var(--cream)",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 24,
          right: 24,
          width: 100,
          height: 100,
          color: "var(--sage)",
          opacity: 0.6,
        }}
      >
        <VineCorner className="about-vine" />
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr)",
          gap: "3rem",
          maxWidth: 1100,
          margin: "0 auto",
          alignItems: "center",
        }}
        className="about-layout"
      >
        {portrait && (
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="frame-double"
            style={{ position: "relative", aspectRatio: "3/4", maxHeight: 560 }}
          >
            <PhotoImage
              src={portrait.url}
              alt="Behind the lens"
              fill
              sizes="(max-width: 900px) 100vw, 40vw"
              style={{ objectFit: "cover" }}
            />
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              color: "var(--hunter)",
              marginBottom: "1.5rem",
            }}
          >
            Our Philosophy
          </h2>
          <p style={{ textTransform: "none", letterSpacing: "0", marginBottom: "1.25rem" }}>
            Lov&apos;Ceylon is rooted in the island&apos;s light — golden hour over
            tea country, monsoon greens, and the quiet grace of celebration. We
            document weddings and portraits with an editorial eye: honest,
            artful, never performative.
          </p>
          <p style={{ textTransform: "none", letterSpacing: "0", color: "var(--moss)" }}>
            Every frame is built around your story. We move gently, observe
            deeply, and deliver galleries that feel like heirloom magazines —
            timeless pieces of art you will return to for generations.
          </p>
        </motion.div>
      </div>

    </section>
  );
}
