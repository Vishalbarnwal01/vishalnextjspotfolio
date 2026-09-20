import Link from "next/link";
import Reveal from "@/components/Reveal";
import { ArrowRightIcon } from "@/components/icons";

// Condensed version of the About story for the homepage.
// Full story (positioning + bio + principles) lives at /about.
export default function AboutTeaser() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="text-[13px] font-semibold tracking-[0.14em] text-shopify-dark">
                THE DIFFERENCE
              </p>
              <h2 className="mt-4 text-[36px] font-bold leading-[1.1] tracking-tight text-ink lg:text-[48px]">
                More Than a Shopify Developer.
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={100}>
              <p className="text-[22px] font-semibold leading-snug text-ink lg:text-[26px]">
                I build commerce systems — not just storefronts.
              </p>
              <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-muted">
                From conversion-focused Shopify themes to complex integrations, I
                combine development, UX, performance and eCommerce strategy to
                create digital experiences built for real business growth.
              </p>
              <Link
                href="/about"
                className="group mt-7 inline-flex items-center gap-2 text-[15px] font-semibold text-ink transition-colors hover:text-shopify-dark"
              >
                Learn more about me
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
