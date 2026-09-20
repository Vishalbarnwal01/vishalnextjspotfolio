import Link from "next/link";
import HeroVisual from "@/components/HeroVisual";
import Reveal from "@/components/Reveal";
import { siteConfig } from "@/data/site-config";
import { ArrowRightIcon } from "@/components/icons";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-14 pb-20 lg:pt-20 lg:pb-28">
      <div className="mx-auto grid max-w-[1320px] grid-cols-1 items-center gap-14 px-6 lg:grid-cols-12 lg:gap-8 lg:px-10">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="text-[13px] font-semibold tracking-[0.14em] text-shopify-dark">
              SHOPIFY &middot; CRO &middot; eCOMMERCE TECHNOLOGY
            </p>
          </Reveal>

          {/* Single H1 for the page */}
          <Reveal delay={80}>
            <h1 className="mt-5 max-w-xl text-[44px] font-bold leading-[1.06] tracking-tight text-ink sm:text-[58px] lg:text-[76px]">
              Shopify Experiences Built to{" "}
              <span className="text-shopify-dark">Convert</span>, Integrate &amp;
              Scale.
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-muted lg:text-[19px]">
              I help DTC and eCommerce brands build faster, higher-converting
              Shopify experiences — from custom storefronts and CRO to Klaviyo,
              SAP, ERP and API integrations.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-ink px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-shopify hover:text-forest"
              >
                Start a Project
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="#work"
                className="inline-flex items-center justify-center rounded-lg border border-line px-6 py-3.5 text-[15px] font-semibold text-ink transition-colors hover:border-ink"
              >
                View Selected Work
              </Link>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-8 flex items-center gap-2 text-[13px] font-medium text-muted">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-shopify opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-shopify-dark" />
              </span>
              {siteConfig.availability}
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal delay={200}>
            <HeroVisual />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
