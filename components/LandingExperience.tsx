"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BrandLogo } from "./BrandLogo";

export function LandingExperience() {
  const [phase, setPhase] = useState<"viewfinder" | "flash" | "reveal">("viewfinder");
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("flash"), 2200);
    const t2 = setTimeout(() => {
      setFlash(true);
      setPhase("reveal");
    }, 2600);
    const t3 = setTimeout(() => setFlash(false), 3100);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlash(true);
      setTimeout(() => setFlash(false), 180);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="landing">
      <AnimatePresence>
        {flash && (
          <motion.div
            className="landing__flash"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.08 }}
          />
        )}
      </AnimatePresence>

      <div className="landing__grain" aria-hidden />

      <div className="landing__viewfinder">
        <span className="landing__corner landing__corner--tl" />
        <span className="landing__corner landing__corner--tr" />
        <span className="landing__corner landing__corner--bl" />
        <span className="landing__corner landing__corner--br" />
        <motion.div
          className="landing__focus-ring"
          animate={{
            scale: [1, 0.92, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.div
        className="landing__shutter"
        initial={{ scaleY: 0 }}
        animate={
          phase === "flash"
            ? { scaleY: [0, 1, 0] }
            : { scaleY: 0 }
        }
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        aria-hidden
      />

      <motion.div
        className="landing__content"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: phase === "reveal" ? 1 : 0.3, y: 0 }}
        transition={{ delay: 0.5, duration: 1.2 }}
      >
        <p className="landing__label">Photography · Sri Lanka</p>
        <BrandLogo href={undefined} size="hero" />
        <p className="landing__tagline">Capturing moments — one frame at a time</p>

        <motion.div
          className="landing__actions"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <Link href="/home" className="btn-pill btn-pill--landing">
            Enter the Gallery
          </Link>
          <a href="tel:+94777807619" className="btn-pill btn-pill--landing-outline">
            +94 777 807 619
          </a>
        </motion.div>
      </motion.div>

      <motion.p
        className="landing__hint"
        animate={{ opacity: [0.4, 0.9, 0.4] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        {phase === "viewfinder" ? "Focusing…" : "Ready"}
      </motion.p>
    </section>
  );
}
