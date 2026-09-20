import CaseStudies from "@/components/CaseStudies";
import FinalCTA from "@/components/FinalCTA";
import { siteConfig } from "@/data/site-config";

export const metadata = {
  title: `Selected eCommerce Work | ${siteConfig.name}`,
  description:
    "Shopify case studies covering custom theme development, CRO, Klaviyo automation, headless Shopify and SAP integration for DTC and eCommerce brands.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <main className="flex-1">
      <CaseStudies headingLevel="h1" />
      <FinalCTA />
    </main>
  );
}
