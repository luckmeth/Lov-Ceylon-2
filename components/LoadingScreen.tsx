"use client";

import { motion } from "framer-motion";

export function LoadingScreen({ message = "Loading gallery" }: { message?: string }) {
  return (
    <div className="loading-screen" role="status" aria-live="polite" aria-busy="true">
      <div className="loading-screen__inner">
        <motion.div
          className="loading-screen__aperture"
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          aria-hidden
        >
          <span className="loading-screen__blade" />
          <span className="loading-screen__blade" />
          <span className="loading-screen__blade" />
          <span className="loading-screen__blade" />
          <span className="loading-screen__blade" />
          <span className="loading-screen__blade" />
        </motion.div>

        <p className="loading-screen__brand">Lov&apos;Ceylon</p>
        <p className="loading-screen__message">{message}</p>

        <div className="loading-screen__bar">
          <motion.div
            className="loading-screen__bar-fill"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>

        <p className="loading-screen__hint">Calibrating light…</p>
      </div>
    </div>
  );
}
