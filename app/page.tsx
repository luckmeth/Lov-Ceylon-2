import { LandingExperience } from "@/components/LandingExperience";
import { BrandLogo } from "@/components/BrandLogo";
import Link from "next/link";

export const metadata = {
  title: "Lov'Ceylon | Photography",
  description: "Timeless wedding and portrait photography in Sri Lanka.",
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
