import { PageShell } from "@/components/layout/PageShell";
import { PhotoGrid } from "@/components/PhotoGrid";
import { PatternStrip } from "@/components/PatternBackdrop";
import { getAllPhotos } from "@/lib/photos";

export const metadata = {
  title: "Photo Gallery",
  description:
    "The complete Lov'Ceylon photo gallery — every frame from our wedding, homecoming and portrait shoots across Sri Lanka, shown full size.",
  alternates: { canonical: "/gallery" },
};

export const revalidate = 120;

export default async function GalleryPage() {
  const photos = await getAllPhotos();

  return (
    <PageShell>
      <div className="page-intro">
        <p className="label-ultra">Gallery</p>
        <h1 className="title-ultra">Every Frame</h1>
        <p className="section-sub" style={{ marginTop: "1rem" }}>
          Tap any photograph to view full size. Images are shown in full — never
          cropped to fit.
        </p>
      </div>

      <PhotoGrid
        photos={photos}
        title="Complete Collection"
        subtitle={`${photos.length} photographs`}
      />

      <PatternStrip />
    </PageShell>
  );
}
