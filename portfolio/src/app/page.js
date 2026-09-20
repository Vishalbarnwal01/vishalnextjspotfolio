import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import AboutTeaser from "@/components/AboutTeaser";
import ServicesTeaser from "@/components/ServicesTeaser";
import WorkTeaser from "@/components/WorkTeaser";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import { getFeaturedProjects } from "@/lib/projects";

// H1 lives inside <Hero /> — keep this the only H1 on the homepage.
// Work / Services / About / Process / Contact each have their own full page
// (see src/app/work, /services, /about, /process, /contact) — these are the
// condensed teaser versions that link out to them.
export default async function Home() {
  const featuredProjects = await getFeaturedProjects(2);

  return (
    <main className="flex-1">
      <Hero />
      <TrustBar />
      <AboutTeaser />
      <ServicesTeaser />
      <WorkTeaser featured={featuredProjects} />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
