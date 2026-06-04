"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { LoadingScreen } from "./LoadingScreen";

const MIN_LOAD_MS = 2400;

export function AppProviders({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [bootReady, setBootReady] = useState(false);
  const [routeLoading, setRouteLoading] = useState(false);
  const firstNav = useRef(true);

  /* Initial site open — branded loading screen */
  useEffect(() => {
    const started = Date.now();
    const finish = () => {
      const elapsed = Date.now() - started;
      const wait = Math.max(0, MIN_LOAD_MS - elapsed);
      window.setTimeout(() => setBootReady(true), wait);
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish, { once: true });
      return () => window.removeEventListener("load", finish);
    }
  }, []);

  /* Route changes — scroll reset + short loader (skip first paint) */
  useEffect(() => {
    if (firstNav.current) {
      firstNav.current = false;
      return;
    }
    if (!bootReady) return;

    setRouteLoading(true);
    window.scrollTo(0, 0);
    document.documentElement.classList.remove("lenis", "lenis-smooth");
    document.body.style.overflow = "";
    document.body.style.pointerEvents = "";

    const t = window.setTimeout(() => setRouteLoading(false), 320);
    return () => window.clearTimeout(t);
  }, [pathname, bootReady]);

  const showBoot = !bootReady;
  const showRoute = bootReady && routeLoading;

  return (
    <>
      {showBoot && <LoadingScreen message="Preparing your experience" />}
      {showRoute && <LoadingScreen message="Loading" />}
      <div
        className="app-root"
        style={{
          visibility: showBoot ? "hidden" : "visible",
          opacity: showBoot ? 0 : 1,
          transition: "opacity 0.5s ease",
        }}
      >
        {children}
      </div>
    </>
  );
}
