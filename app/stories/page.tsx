import { PageShell } from "@/components/layout/PageShell";
import { HorizontalGallery } from "@/components/HorizontalGallery";
import { PatternStrip } from "@/components/PatternBackdrop";
import { PhotoGrid } from "@/components/PhotoGrid";
import { getAllPhotos, getPhotoGroups, shuffle } from "@/lib/photos";

export const metadata = {
  title: "Wedding Stories & Featured Shoots",
  description:
    "Real love stories told through light — featured wedding and couple shoots by Lov'Ceylon photography in Sri Lanka.",
  alternates: { canonical: "/stories" },
};

export const revalidate = 120;

export default async function StoriesPage() {
  const photos = await getAllPhotos();
  const groups = await getPhotoGroups();
  const scrollPhotos = shuffle(photos).slice(0, 16);

  return (
    <PageShell>
      <div className="page-intro">
        <p className="label-ultra">Stories</p>
        <h1 className="title-ultra">Frozen Chapters</h1>
        <p className="section-sub" style={{ marginTop: "1rem" }}>
          Love stories told through light — scroll through chapters of our
          couples.
        </p>
      </div>

      {scrollPhotos.length > 0 && (
        <HorizontalGallery photos={scrollPhotos} title="Moments in Motion" />
      )}

      {groups.map((group) => (
        <PhotoGrid
          key={group.slug}
          photos={group.photos}
          title={group.title}
          subtitle={`${group.photos.length} photographs`}
        />
      ))}

      <PatternStrip />
    </PageShell>
  );
}
