import CaseStudies from "@/components/CaseStudies";
import FinalCTA from "@/components/FinalCTA";
import { siteConfig } from "@/data/site-config";
import { getProjects } from "@/lib/projects";

export const metadata = {
  title: `Selected eCommerce Work | ${siteConfig.name}`,
  description:
    "Shopify case studies covering custom theme development, CRO, Klaviyo automation, headless Shopify and SAP integration for DTC and eCommerce brands.",
  alternates: { canonical: "/work" },
};

export default async function WorkPage() {
  const caseStudies = await getProjects();

  return (
    <main className="flex-1">
      <CaseStudies caseStudies={caseStudies} headingLevel="h1" />
      <FinalCTA />
    </main>
  );
}
