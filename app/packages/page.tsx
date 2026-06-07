import { PageShell } from "@/components/layout/PageShell";
import { PackagesView } from "@/components/packages/PackagesView";
import { PackagesFaq } from "@/components/packages/PackagesFaq";
import { faqJsonLd, jsonLdScript, packagesJsonLd } from "@/lib/seo";

export const metadata = {
  title: "Photography Packages & Prices in Sri Lanka",
  description:
    "Lov'Ceylon photography packages & prices for weddings, homecomings and pre-shoots in Sri Lanka — from LKR 25,000. Compare tiers and enquire on WhatsApp.",
  alternates: { canonical: "/packages" },
};

export default function PackagesPage() {
  return (
    <PageShell>
      <script {...jsonLdScript(packagesJsonLd)} />
      <script {...jsonLdScript(faqJsonLd)} />
      <PackagesView backdropLabel="Wedding · Homecoming · Pre-Casual — crafted for every chapter of your celebration." />
      <PackagesFaq />
    </PageShell>
  );
}
