"use client";

import { motion } from "framer-motion";
import { PhotoImage } from "./PhotoImage";
import type { Photo } from "@/lib/types";

export function ContactSection({ backdrop }: { backdrop?: Photo }) {
  return (
    <section
      id="contact"
      style={{
        position: "relative",
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {backdrop && (
        <>
          <PhotoImage
            src={backdrop.url}
            alt=""
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(26, 46, 34, 0.72)",
            }}
          />
        </>
      )}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          padding: "4rem 5vw",
          color: "var(--cream)",
          maxWidth: 640,
        }}
      >
        <h2
          style={{
            fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
            color: "var(--cream)",
            marginBottom: "1rem",
          }}
        >
          Let&apos;s Create Something Beautiful
        </h2>
        <p
          style={{
            textTransform: "none",
            letterSpacing: "0.03em",
            marginBottom: "2rem",
            opacity: 0.9,
          }}
        >
          Share your date, vision, and venue — we&apos;ll craft a bespoke
          photography experience across Sri Lanka.
        </p>
        <a href="mailto:hello@lovceylon.com" className="btn-pill btn-pill--light">
          hello@lovceylon.com
        </a>
      </motion.div>
    </section>
  );
}
