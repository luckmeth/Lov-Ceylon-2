import { AboutSection } from "@/components/AboutSection";
import { PageShell } from "@/components/layout/PageShell";
import { PatternStrip } from "@/components/PatternBackdrop";
import { getAllPhotos } from "@/lib/photos";

export const metadata = {
  title: "About | Lov'Ceylon",
};

export const revalidate = 120;

export default async function AboutPage() {
  const photos = await getAllPhotos();
  const portrait = photos[Math.floor(photos.length / 4)];

  return (
    <PageShell>
      <div className="page-intro">
        <p className="label-ultra">About</p>
        <h1 className="title-ultra">Our Story</h1>
      </div>
      <AboutSection portrait={portrait} />
      <PatternStrip />
    </PageShell>
  );
}
