import Link from "next/link";
import Reveal from "@/components/Reveal";
import { siteConfig } from "@/data/site-config";
import { ArrowRightIcon } from "@/components/icons";

export default function FinalCTA({ headingLevel = "h2" }) {
  const Heading = headingLevel;
  return (
    <section className="relative overflow-hidden bg-white py-28 lg:py-36">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(ellipse, #95BF47, transparent 70%)" }}
      />
      <div className="relative mx-auto max-w-[860px] px-6 text-center lg:px-10">
        <Reveal>
          <Heading className="text-[36px] font-bold leading-[1.1] tracking-tight text-ink lg:text-[56px]">
            Let&apos;s Build a Better
            <br />
            Commerce Experience.
          </Heading>
        </Reveal>
        <Reveal delay={100}>
          <p className="mx-auto mt-6 max-w-lg text-[17px] leading-relaxed text-muted lg:text-[19px]">
            Have a Shopify store that could be faster, smarter or more
            profitable? Let&apos;s talk.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`mailto:${siteConfig.email}`}
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-ink px-7 py-4 text-[15px] font-semibold text-white transition-colors hover:bg-shopify hover:text-forest"
            >
              Start a Project
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <Link
              href={siteConfig.calendlyUrl}
              className="inline-flex items-center justify-center rounded-lg border border-line px-7 py-4 text-[15px] font-semibold text-ink transition-colors hover:border-ink"
            >
              Book a Discovery Call
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
