"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
  className?: string;
  style?: React.CSSProperties;
  fit?: "cover" | "contain";
};

export function PhotoImage({
  src,
  alt,
  fill = true,
  width,
  height,
  priority,
  sizes = "(max-width: 768px) 100vw, 50vw",
  className,
  style,
  fit = "cover",
}: Props) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        className={className}
        style={{
          ...style,
          background: "var(--cream-deep)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--sage)",
          fontSize: "0.75rem",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          fontFamily: "var(--font-label)",
        }}
      >
        Lov&apos;Ceylon
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      width={!fill ? width : undefined}
      height={!fill ? height : undefined}
      priority={priority}
      sizes={sizes}
      className={`photo-img photo-img--${fit} ${className ?? ""}`}
      style={style}
      unoptimized
      onError={() => setError(true)}
    />
  );
}
