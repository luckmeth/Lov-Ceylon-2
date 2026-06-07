"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { PhotoImage } from "./PhotoImage";
import { photoAlt } from "@/lib/photos";
import type { Photo } from "@/lib/types";

export function HeroShowcase({ photos }: { photos: Photo[] }) {
  const [index, setIndex] = useState(0);
  const slides = photos.slice(0, Math.min(12, photos.length));

  useEffect(() => {
    if (slides.length < 2) return;
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 5000);
    return () => clearInterval(t);
  }, [slides.length]);

  const current = slides[index] ?? photos[0];

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        marginTop: 0,
        overflow: "hidden",
      }}
    >
      <AnimatePresence mode="wait">
        {current && (
          <motion.div
            key={current.id}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: "absolute", inset: 0 }}
          >
            <PhotoImage
              src={current.url}
              alt={photoAlt(current)}
              fill
              priority
              sizes="100vw"
              style={{ objectFit: "cover" }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(44,41,37,0.25) 0%, rgba(44,41,37,0.55) 70%, rgba(44,41,37,0.75) 100%)",
        }}
      />

      <div
        className="pattern-band"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "28vh",
          opacity: 0.85,
          maskImage: "linear-gradient(to bottom, black, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-end",
          padding: "calc(var(--header-h) + 2rem) 5vw 4rem",
          textAlign: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          style={{
            background: "rgba(247, 245, 240, 0.92)",
            padding: "2.5rem 3rem",
            maxWidth: 640,
            border: "1px solid var(--gold-line)",
            boxShadow: "0 24px 80px var(--shadow)",
          }}
        >
          <p
            style={{
              margin: "0 0 0.75rem",
              fontSize: "0.7rem",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "var(--olive)",
            }}
          >
            Sri Lanka · Weddings & Portraits
          </p>
          <h1
            style={{
              fontSize: "clamp(2rem, 6vw, 3.5rem)",
              color: "var(--hunter)",
              marginBottom: "1.25rem",
            }}
          >
            Lov&apos;Ceylon
          </h1>
          <p
            style={{
              margin: "0 0 1.75rem",
              fontSize: "1rem",
              color: "var(--moss)",
              letterSpacing: "0.02em",
              textTransform: "none",
              lineHeight: 1.8,
            }}
          >
            Intimate moments, beautifully frozen — editorial photography rooted
            in the soul of Ceylon.
          </p>
          <Link href="#contact" className="btn-pill">
            Inquire Now
          </Link>
        </motion.div>

        {slides.length > 1 && (
          <div
            style={{
              display: "flex",
              gap: "0.5rem",
              marginTop: "2rem",
            }}
          >
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Slide ${i + 1}`}
                onClick={() => setIndex(i)}
                style={{
                  width: i === index ? 32 : 8,
                  height: 8,
                  borderRadius: 999,
                  border: "none",
                  background:
                    i === index ? "var(--cream)" : "rgba(247,245,240,0.4)",
                  cursor: "pointer",
                  transition: "width 0.3s ease",
                }}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
