import { PageShell } from "@/components/layout/PageShell";
import { PackagesView } from "@/components/packages/PackagesView";

export const metadata = {
  title: "Packages | Lov'Ceylon",
};

export default function PackagesPage() {
  return (
    <PageShell>
      <PackagesView backdropLabel="Wedding · Homecoming · Pre-Casual — crafted for every chapter of your celebration." />
    </PageShell>
  );
}
