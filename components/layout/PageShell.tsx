import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { PatternBackdrop } from "@/components/PatternBackdrop";

export function PageShell({
  children,
  headerVariant = "solid",
}: {
  children: React.ReactNode;
  headerVariant?: "solid" | "transparent";
}) {
  return (
    <>
      <SiteHeader variant={headerVariant} />
      <PatternBackdrop />
      <main style={{ position: "relative", zIndex: 1 }}>{children}</main>
      <SiteFooter />
    </>
  );
}
