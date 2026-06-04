"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
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

  if (isLanding && minimal) return null;

  return (
    <header
      className={`site-header site-header--solid ${
        variant === "transparent" && pathname === "/home"
          ? "site-header--on-hero"
          : ""
      }`}
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
            className="nav-mobile-btn site-header__menu"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            Menu
          </button>
        )}
      </nav>

      {open && !minimal && (
        <div className="site-header__drawer">
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
        </div>
      )}
    </header>
  );
}
