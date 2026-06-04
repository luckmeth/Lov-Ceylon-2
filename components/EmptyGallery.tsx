export function EmptyGallery() {
  return (
    <section
      style={{
        padding: "8rem 5vw",
        textAlign: "center",
        background: "var(--cream-deep)",
      }}
    >
      <h2 style={{ color: "var(--hunter)", marginBottom: "1rem" }}>
        Gallery Loading
      </h2>
      <p style={{ maxWidth: 480, margin: "0 auto", textTransform: "none" }}>
        We&apos;re connecting to your Supabase storage. Ensure photos are in a
        public bucket (photos, gallery, or images) and buckets are marked public.
      </p>
    </section>
  );
}
