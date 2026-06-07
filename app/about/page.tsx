import { AboutSection } from "@/components/AboutSection";
import { PageShell } from "@/components/layout/PageShell";

export const metadata = {
  title: "About Our Sri Lankan Photography Studio",
  description:
    "Meet Lov'Ceylon — a Colombo-based photography studio specialising in wedding, homecoming and pre-shoot photography across Sri Lanka. Our story, services and process.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <PageShell>
      <AboutSection />
    </PageShell>
  );
}
