import { AboutSection } from "@/components/AboutSection";
import { PageShell } from "@/components/layout/PageShell";

export const metadata = {
  title: "About | Lov'Ceylon",
};

export default function AboutPage() {
  return (
    <PageShell>
      <AboutSection />
    </PageShell>
  );
}
