import { PageShell } from "@/components/layout/PageShell";
import { PatternStrip } from "@/components/PatternBackdrop";
import { CollectionGrid } from "@/components/CollectionGrid";
import { MasonryFrames } from "@/components/MasonryFrames";
import { getAllPhotos, getPhotoGroups, pickFeatured, shuffle } from "@/lib/photos";

export const metadata = {
  title: "Wedding Photography Portfolio",
  description:
    "Browse Lov'Ceylon's wedding, portrait and celebration photography portfolio — beautifully frozen moments captured across Sri Lanka.",
  alternates: { canonical: "/portfolio" },
};

export const revalidate = 120;

export default async function PortfolioPage() {
  const photos = await getAllPhotos();
  const groups = await getPhotoGroups();
  const featured = pickFeatured(shuffle(photos), 8);

  return (
    <PageShell>
      <div className="page-intro">
        <p className="label-ultra">Portfolio</p>
        <h1 className="title-ultra">Our Work</h1>
        <p className="section-sub" style={{ marginTop: "1rem" }}>
          Beautifully frozen moments — weddings, portraits, and celebrations
          across Sri Lanka.
        </p>
      </div>

      {featured.length > 0 && (
        <MasonryFrames photos={featured} title="Curated Selection" columns={3} />
      )}

      {groups.length > 0 && <CollectionGrid groups={groups} />}

      <PatternStrip />
    </PageShell>
  );
}
