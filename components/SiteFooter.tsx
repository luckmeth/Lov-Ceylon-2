import Link from "next/link";
import { SITE } from "@/lib/site";

const links = [
  { href: "/home", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/gallery", label: "Gallery" },
  { href: "/packages", label: "Packages" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="pattern-band site-footer">
      <div className="site-footer__inner">
        <p className="site-footer__brand">{SITE.name}</p>
        <nav className="site-footer__nav">
          {links.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
        </nav>
        <a href={`tel:${SITE.phoneTel}`} className="site-footer__phone">
          {SITE.phone}
        </a>
        <p className="site-footer__copy">
          © {new Date().getFullYear()} Lov&apos;Ceylon Photography · {SITE.location}
        </p>
      </div>
    </footer>
  );
}
