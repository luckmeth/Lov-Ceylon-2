export function VineCorner({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M8 112C20 80 35 55 55 40c18-14 38-22 57-28M15 95c12-8 28-18 42-32"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M48 28c-6 10-8 22-6 34 3 18 14 32 28 42"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.7"
      />
      <ellipse cx="62" cy="22" rx="8" ry="12" stroke="currentColor" strokeWidth="0.9" />
      <ellipse cx="78" cy="38" rx="6" ry="9" stroke="currentColor" strokeWidth="0.8" opacity="0.8" />
      <path
        d="M70 18c4-6 12-10 20-8"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function BotanicalDivider() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "1.5rem",
        padding: "2.5rem 0",
        color: "var(--olive)",
      }}
      aria-hidden
    >
      <span style={{ width: 80, height: 1, background: "var(--gold-line)" }} />
      <svg width="48" height="24" viewBox="0 0 48 24" fill="none">
        <path
          d="M24 12c-8-10-16-10-20 0 4 10 12 10 20 0 4-10 12-10 20 0"
          stroke="currentColor"
          strokeWidth="1"
        />
        <circle cx="24" cy="12" r="3" stroke="currentColor" strokeWidth="1" />
      </svg>
      <span style={{ width: 80, height: 1, background: "var(--gold-line)" }} />
    </div>
  );
}
