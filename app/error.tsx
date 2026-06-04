"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="page-pad page-intro" style={{ minHeight: "80vh", textAlign: "center" }}>
      <p className="label-ultra">Something went wrong</p>
      <h1 className="title-ultra">Please try again</h1>
      <p className="section-sub" style={{ marginTop: "1rem" }}>
        A page failed to load. This often clears after a refresh.
      </p>
      <div className="home-links" style={{ marginTop: "2rem" }}>
        <button type="button" className="btn-pill" onClick={() => reset()}>
          Retry
        </button>
        <Link href="/" className="btn-pill">
          Back to start
        </Link>
      </div>
    </div>
  );
}
