"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { SITE } from "@/lib/site";
import type { Photo } from "@/lib/types";

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function CinematicHero({ photos }: { photos: Photo[] }) {
  const pool = useMemo(
    () => shuffleArray(photos).slice(0, Math.min(16, photos.length)),
    [photos]
  );
  const [index, setIndex] = useState(0);

  const pickNext = useCallback(() => {
    if (pool.length <= 1) return;
    setIndex((prev) => {
      let next = Math.floor(Math.random() * pool.length);
      while (next === prev && pool.length > 1) {
        next = Math.floor(Math.random() * pool.length);
      }
      return next;
    });
  }, [pool.length]);

  useEffect(() => {
    if (pool.length < 2) return;
    const delay = 5500 + Math.random() * 2000;
    const t = setTimeout(pickNext, delay);
    return () => clearTimeout(t);
  }, [index, pool.length, pickNext]);

  const current = pool[index];

  return (
    <section className="cinematic-hero cinematic-hero--full">
      <AnimatePresence mode="wait" initial={false}>
        {current && (
          <motion.div
            key={current.id}
            className="cinematic-hero__slide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Blurred ambient backdrop */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={current.url}
              alt=""
              className="cinematic-hero__backdrop"
              aria-hidden
            />
            {/* Full picture — never cropped */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <motion.img
              src={current.url}
              alt="Lov'Ceylon photography"
              className="cinematic-hero__main"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              draggable={false}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="cinematic-hero__veil" />
      <div className="cinematic-hero__grain" />

      <div className="cinematic-hero__content">
        <motion.div
          className="cinematic-hero__card"
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          <p className="label-ultra cinematic-hero__label">Sri Lanka · Weddings</p>
          <h1 className="cinematic-hero__title">Lov&apos;Ceylon</h1>
          <p className="cinematic-hero__tagline cinematic-hero__tagline--desktop">
            Intimate moments, beautifully frozen — editorial photography rooted in
            the soul of Ceylon.
          </p>
          <div className="cinematic-hero__actions">
            <Link href="/contact" className="btn-pill btn-pill--compact">
              Inquire
            </Link>
            <a
              href={`tel:${SITE.phoneTel}`}
              className="btn-pill btn-pill--phone btn-pill--compact"
            >
              Call
            </a>
          </div>
        </motion.div>

        {pool.length > 1 && (
          <div className="cinematic-hero__dots">
            {pool.slice(0, 8).map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Slide ${i + 1}`}
                className={i === index % 8 ? "is-active" : ""}
                onClick={() => setIndex(i % pool.length)}
              />
            ))}
          </div>
        )}
      </div>

      <p className="cinematic-hero__scroll">Scroll</p>
    </section>
  );
}
