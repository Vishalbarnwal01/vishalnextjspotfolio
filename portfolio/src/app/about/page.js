import About from "@/components/About";
import AboutMe from "@/components/AboutMe";
import WhyWorkWithMe from "@/components/WhyWorkWithMe";
import FinalCTA from "@/components/FinalCTA";
import { siteConfig } from "@/data/site-config";

export const metadata = {
  title: `About | ${siteConfig.name}: Shopify Developer & eCommerce Solutions Provider`,
  description:
    "An independent Shopify Developer and eCommerce Solutions Provider helping DTC and eCommerce brands build, optimize and scale their Shopify stores.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main className="flex-1">
      <About headingLevel="h1" />
      <AboutMe />
      <WhyWorkWithMe />
      <FinalCTA />
    </main>
  );
}
