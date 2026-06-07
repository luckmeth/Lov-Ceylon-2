import type { Metadata } from "next";
import { LandingExperience } from "@/components/LandingExperience";
import { BrandLogo } from "@/components/BrandLogo";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    absolute:
      "Lov'Ceylon Photography | Best Wedding Photography in Sri Lanka",
  },
  description:
    "Lov'Ceylon — timeless wedding, homecoming & pre-shoot photography in Colombo, Sri Lanka. Browse our portfolio, packages & prices, and book your shoot today.",
  alternates: { canonical: "/" },
  openGraph: {
    title:
      "Lov'Ceylon Photography | Best Wedding Photography in Sri Lanka",
    description:
      "Timeless wedding, homecoming & pre-shoot photography in Colombo, Sri Lanka. Browse our portfolio, packages & prices.",
    url: "/",
  },
};

export default function LandingPage() {
  return (
    <>
      <header className="landing-header">
        <BrandLogo href="/home" size="sm" />
        <Link href="/home" className="landing-header__skip">
          Skip intro →
        </Link>
      </header>
      <LandingExperience />
    </>
  );
}
