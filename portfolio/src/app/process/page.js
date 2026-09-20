import Process from "@/components/Process";
import FinalCTA from "@/components/FinalCTA";
import { siteConfig } from "@/data/site-config";

export const metadata = {
  title: `Process | ${siteConfig.name}`,
  description:
    "From discovery to scale — how Shopify projects get built: discover, strategize, build, optimize and scale.",
  alternates: { canonical: "/process" },
};

export default function ProcessPage() {
  return (
    <main className="flex-1">
      <Process headingLevel="h1" />
      <FinalCTA />
    </main>
  );
}
