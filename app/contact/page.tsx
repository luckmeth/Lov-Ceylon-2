import { PageShell } from "@/components/layout/PageShell";
import { PatternStrip } from "@/components/PatternBackdrop";
import { PhotoImage } from "@/components/PhotoImage";
import { SITE } from "@/lib/site";
import { getAllPhotos } from "@/lib/photos";
import Link from "next/link";

export const metadata = {
  title: "Contact & Booking",
  description:
    "Book your wedding, homecoming or pre-shoot with Lov'Ceylon photography in Colombo, Sri Lanka. Call, email or message us on WhatsApp — we reply within 24 hours.",
  alternates: { canonical: "/contact" },
};

export const revalidate = 120;

export default async function ContactPage() {
  const photos = await getAllPhotos();
  const backdrop = photos[photos.length - 1];

  return (
    <PageShell>
      <section className="contact-page">
        <div className="contact-hero">
          {backdrop && (
            <>
              <PhotoImage
                src={backdrop.url}
                alt=""
                fill
                fit="cover"
                sizes="100vw"
              />
              <div className="contact-hero__veil" />
            </>
          )}
          <div className="contact-card">
            <p className="label-ultra">Get in Touch</p>
            <h1 className="title-ultra">Let&apos;s Tell Your Story</h1>
            <p className="section-sub" style={{ marginTop: "1rem" }}>
              We typically respond within 24 hours.
            </p>
            <ul className="contact-list">
              <li>
                <span>Phone</span>
                <a href={`tel:${SITE.phoneTel}`}>{SITE.phone}</a>
              </li>
              <li>
                <span>Email</span>
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </li>
              <li>
                <span>Location</span>
                <p style={{ margin: 0, fontFamily: "var(--font-label)", fontSize: "0.75rem", letterSpacing: "0.1em" }}>
                  {SITE.location}
                </p>
              </li>
            </ul>
            <div style={{ marginTop: "2rem", display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center" }}>
              <a href={SITE.whatsapp} className="btn-pill" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
              <Link href="/packages" className="btn-pill">
                View Packages
              </Link>
            </div>
          </div>
        </div>
      </section>
      <PatternStrip />
    </PageShell>
  );
}
