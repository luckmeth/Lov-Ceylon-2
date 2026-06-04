export function PatternBackdrop() {
  return (
    <div className="pattern-fill-global" aria-hidden>
      <div className="pattern-fill-corner pattern-fill-corner--tl" />
      <div className="pattern-fill-corner pattern-fill-corner--br" />
    </div>
  );
}

export function PatternStrip({ className = "" }: { className?: string }) {
  return <div className={`pattern-strip ${className}`.trim()} aria-hidden />;
}
