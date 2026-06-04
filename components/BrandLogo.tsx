"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type Props = {
  href?: string;
  size?: "sm" | "md" | "lg" | "hero";
  className?: string;
};

const sizes = {
  sm: "brand-logo--sm",
  md: "brand-logo--md",
  lg: "brand-logo--lg",
  hero: "brand-logo--hero",
};

export function BrandLogo({ href = "/home", size = "md", className = "" }: Props) {
  const content = (
    <motion.span
      className={`brand-logo ${sizes[size]} ${className}`.trim()}
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="brand-logo__glow" aria-hidden />
      <span className="brand-logo__text">Lov&apos;Ceylon</span>
    </motion.span>
  );

  if (href) {
    return (
      <Link href={href} className="brand-logo__link">
        {content}
      </Link>
    );
  }

  return content;
}
