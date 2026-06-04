"use client";

import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
  framed?: boolean;
  onClick?: () => void;
  priority?: boolean;
};

export function AdaptivePhoto({
  src,
  alt,
  className = "",
  framed = true,
  onClick,
  priority,
}: Props) {
  const [loaded, setLoaded] = useState(false);
  const Wrapper = onClick ? "button" : "div";

  return (
    <Wrapper
      type={onClick ? "button" : undefined}
      className={`adaptive-photo ${framed ? "adaptive-photo--framed" : ""} ${className}`.trim()}
      onClick={onClick}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
        className={loaded ? "is-loaded" : ""}
      />
    </Wrapper>
  );
}
