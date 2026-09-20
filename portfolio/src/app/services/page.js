import Services from "@/components/Services";
import TechEcosystem from "@/components/TechEcosystem";
import FinalCTA from "@/components/FinalCTA";
import { siteConfig } from "@/data/site-config";

export const metadata = {
  title: `Shopify Development & eCommerce Services | ${siteConfig.name}`,
  description:
    "Shopify 2.0 theme development, Shopify Plus, conversion rate optimization, Klaviyo integration, SAP/ERP integration, custom APIs, performance optimization and headless Shopify.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <main className="flex-1">
      <Services headingLevel="h1" />
      <TechEcosystem />
      <FinalCTA />
    </main>
  );
}
