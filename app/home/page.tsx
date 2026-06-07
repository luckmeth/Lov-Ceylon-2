import { CinematicHero } from "@/components/CinematicHero";
import { MasonryFrames } from "@/components/MasonryFrames";
import { PageShell } from "@/components/layout/PageShell";
import { PatternStrip } from "@/components/PatternBackdrop";
import { PhotoMarquee } from "@/components/PhotoMarquee";
import Link from "next/link";
import { getAllPhotos, pickFeatured, shuffle } from "@/lib/photos";

export const metadata = {
  title: "Wedding & Portrait Photography in Sri Lanka",
  description:
    "Featured frames from Lov'Ceylon — wedding, homecoming and portrait photography across Sri Lanka. View our galleries, packages and prices.",
  alternates: { canonical: "/home" },
};

export const revalidate = 120;

export default async function HomePage() {
  const photos = await getAllPhotos();
  const heroPool = shuffle(photos);
  const wallPhotos = pickFeatured(shuffle(photos), 12);
  const marquee = shuffle(photos).slice(0, 20);

  return (
    <PageShell headerVariant="transparent">
      {photos.length > 0 ? (
        <CinematicHero photos={heroPool.length ? heroPool : photos} />
      ) : (
        <div className="page-pad page-intro">
          <h1 className="title-ultra">Lov&apos;Ceylon</h1>
          <p>Gallery loading from Supabase…</p>
        </div>
      )}

      <PatternStrip />

      {wallPhotos.length > 0 && (
        <MasonryFrames photos={wallPhotos} title="Featured Frames" showLink />
      )}

      {marquee.length > 0 && <PhotoMarquee photos={marquee} />}

      <section className="home-teaser">
        <p className="label-ultra">Our Philosophy</p>
        <p>
          We believe every love story deserves to be told with art — not just
          photographs, but frames that breathe, carry feeling, and endure time.
        </p>
      </section>

      <div className="home-links">
        <Link href="/portfolio" className="btn-pill">
          Portfolio
        </Link>
        <Link href="/packages" className="btn-pill">
          Packages
        </Link>
        <Link href="/contact" className="btn-pill">
          Contact
        </Link>
      </div>

      <PatternStrip />
    </PageShell>
  );
}
