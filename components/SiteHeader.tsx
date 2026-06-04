"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BrandLogo } from "./BrandLogo";

const links = [
  { href: "/home", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/gallery", label: "Gallery" },
  { href: "/stories", label: "Stories" },
  { href: "/about", label: "About" },
  { href: "/packages", label: "Packages" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader({
  variant = "solid",
  minimal = false,
}: {
  variant?: "solid" | "transparent";
  minimal?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isLanding = pathname === "/";

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      document.body.style.pointerEvents = "";
      return;
    }
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  if (isLanding && minimal) return null;

  return (
    <header
      className={`site-header site-header--solid ${
        variant === "transparent" && pathname === "/home"
          ? "site-header--on-hero"
          : ""
      } ${open ? "site-header--menu-open" : ""}`}
    >
      <nav className="site-header__nav">
        <BrandLogo href="/home" size="sm" />

        {!minimal && (
          <ul className="site-header__links nav-desktop">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={pathname === l.href ? "is-active" : ""}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        )}

        {!minimal && (
          <button
            type="button"
            className={`nav-mobile-btn site-header__menu ${open ? "is-open" : ""}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? "Close" : "Menu"}
          </button>
        )}
      </nav>

      {open && !minimal && (
        <>
          <button
            type="button"
            className="site-header__backdrop"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          />
          <nav className="site-header__drawer" aria-label="Mobile navigation">
            <p className="site-header__drawer-title">Navigate</p>
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={pathname === l.href ? "is-active" : ""}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <a
              href="tel:+94777807619"
              className="site-header__drawer-phone"
              onClick={() => setOpen(false)}
            >
              +94 777 807 619
            </a>
          </nav>
        </>
      )}
    </header>
  );
}
