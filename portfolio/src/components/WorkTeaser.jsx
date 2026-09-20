import Link from "next/link";
import Reveal from "@/components/Reveal";
import { caseStudies } from "@/data/case-studies";
import { ArrowRightIcon } from "@/components/icons";

const visualStyles = ["from-cream via-white to-shopify/10", "from-forest/5 via-white to-cream"];

// Shows the first 2 of 4 case studies. Full set lives at /work.
export default function WorkTeaser() {
  const featured = caseStudies.slice(0, 2);

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-xl">
              <p className="text-[13px] font-semibold tracking-[0.14em] text-shopify-dark">
                CASE STUDIES
              </p>
              <h2 className="mt-4 text-[36px] font-bold leading-[1.1] tracking-tight text-ink lg:text-[48px]">
                Selected eCommerce Work.
              </h2>
            </div>
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 text-[15px] font-semibold text-ink transition-colors hover:text-shopify-dark"
            >
              View All Case Studies
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {featured.map((cs, i) => (
            <Reveal key={cs.slug} delay={i * 80}>
              <Link
                href="/work"
                className="group block overflow-hidden rounded-2xl border border-line bg-white transition-shadow hover:shadow-[0_24px_60px_-30px_rgba(17,17,17,0.25)]"
              >
                <div
                  className={`relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br ${visualStyles[i % visualStyles.length]}`}
                >
                  <span className="absolute bottom-4 left-5 font-mono text-[56px] font-bold leading-none text-ink/5">
                    0{i + 1}
                  </span>
                  <div className="absolute right-5 top-5 rounded-full border border-line bg-white/90 px-3 py-1 text-[11px] font-semibold text-shopify-dark backdrop-blur">
                    {cs.industry}
                  </div>
                </div>
                <div className="p-7">
                  <div className="flex flex-wrap gap-2">
                    {cs.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-line bg-cream px-3 py-1 text-[11px] font-medium text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="mt-4 flex items-center gap-2 text-[19px] font-semibold leading-snug text-ink">
                    {cs.title}
                    <ArrowRightIcon className="h-4 w-4 flex-shrink-0 text-line transition-all group-hover:translate-x-1 group-hover:text-shopify-dark" />
                  </h3>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
