import Link from "next/link";
import Reveal from "@/components/Reveal";
import { siteConfig } from "@/data/site-config";
import { ArrowRightIcon } from "@/components/icons";

export default function AboutMe() {
  const initials = siteConfig.fullName
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-5">
            {/*
              Portrait placeholder — replace with a real photo.
              Swap this block for:
              <Image src="/portrait.jpg" alt={siteConfig.fullName} fill className="object-cover rounded-2xl" />
              inside a `relative aspect-[4/5]` wrapper.
            */}
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-cream via-white to-shopify/10">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[96px] font-bold tracking-tight text-ink/10">
                  {initials}
                </span>
              </div>
              <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-line bg-white/95 px-4 py-3 backdrop-blur">
                <p className="text-[13px] font-semibold text-ink">
                  {siteConfig.fullName}
                </p>
                <p className="text-[12px] text-muted">{siteConfig.role}</p>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-[13px] font-semibold tracking-[0.14em] text-shopify-dark">
                ABOUT
              </p>
              <h2 className="mt-4 text-[32px] font-bold leading-[1.15] tracking-tight text-ink lg:text-[42px]">
                An Independent Shopify Partner for Global eCommerce Brands.
              </h2>
            </Reveal>

            <Reveal delay={100}>
              <div className="mt-6 space-y-4 text-[17px] leading-relaxed text-muted">
                <p>
                  I&apos;m an independent Shopify Developer and eCommerce
                  Solutions Provider helping brands build, optimize and scale
                  their online stores.
                </p>
                <p>
                  My work spans Shopify development, Shopify Plus, conversion
                  rate optimization, performance, Klaviyo, SAP/ERP integrations,
                  custom APIs and headless commerce.
                </p>
                <p>
                  I work closely with founders, marketing teams and eCommerce
                  managers to turn business requirements into reliable,
                  high-performing digital commerce experiences.
                </p>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <p className="mt-6 text-[14px] font-medium text-ink">
                {siteConfig.location} &middot; {siteConfig.workingScope}
              </p>

              <Link
                href="#contact"
                className="group mt-8 inline-flex items-center gap-2 rounded-lg bg-ink px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-shopify hover:text-forest"
              >
                Let&apos;s Talk About Your Store
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
