import Reveal from "@/components/Reveal";
import { caseStudies } from "@/data/case-studies";

// Rotates through a few tasteful gradient treatments so each case study
// visual feels distinct without needing a real screenshot yet.
const visualStyles = [
  "from-cream via-white to-shopify/10",
  "from-forest/5 via-white to-cream",
  "from-shopify/15 via-white to-cream",
  "from-cream via-white to-forest/5",
];

export default function CaseStudies({ headingLevel = "h2" }) {
  const Heading = headingLevel;
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-[13px] font-semibold tracking-[0.14em] text-shopify-dark">
              CASE STUDIES
            </p>
            <Heading className="mt-4 text-[36px] font-bold leading-[1.1] tracking-tight text-ink lg:text-[48px]">
              Selected eCommerce Work.
            </Heading>
          </div>
        </Reveal>

        <div className="mt-14 flex flex-col gap-6">
          {caseStudies.map((cs, i) => (
            <Reveal key={cs.slug} delay={i * 60}>
              <article className="group grid grid-cols-1 gap-8 rounded-2xl border border-line bg-white p-6 transition-shadow hover:shadow-[0_24px_60px_-30px_rgba(17,17,17,0.25)] lg:grid-cols-12 lg:gap-10 lg:p-10">
                <div
                  className={`relative order-1 overflow-hidden rounded-xl bg-gradient-to-br ${
                    visualStyles[i % visualStyles.length]
                  } lg:col-span-5 lg:order-none ${
                    i % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <div className="aspect-[4/3] w-full" />
                  <span className="absolute bottom-4 left-5 font-mono text-[64px] font-bold leading-none text-ink/5">
                    0{i + 1}
                  </span>
                  <div className="absolute right-5 top-5 rounded-full border border-line bg-white/90 px-3 py-1 text-[11px] font-semibold text-shopify-dark backdrop-blur">
                    {cs.industry}
                  </div>
                </div>

                <div
                  className={`flex flex-col justify-center lg:col-span-7 ${
                    i % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <div className="flex flex-wrap gap-2">
                    {cs.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-line bg-cream px-3 py-1 text-[12px] font-medium text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="mt-5 text-[24px] font-bold leading-snug tracking-tight text-ink lg:text-[28px]">
                    {cs.title}
                  </h3>

                  <div className="mt-5 space-y-3 text-[15px] leading-relaxed text-muted">
                    <p>
                      <span className="font-semibold text-ink">Challenge — </span>
                      {cs.challenge}
                    </p>
                    <p>
                      <span className="font-semibold text-ink">Approach — </span>
                      {cs.solution}
                    </p>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-x-4 gap-y-1 text-[13px] text-muted">
                    {cs.technology.map((t) => (
                      <span key={t} className="font-mono">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 grid grid-cols-3 gap-4 border-t border-line pt-6">
                    {cs.results.map((r) => (
                      <div key={r.label}>
                        <p className="text-[20px] font-bold text-shopify-dark lg:text-[24px]">
                          {r.value}
                        </p>
                        <p className="mt-1 text-[12px] leading-snug text-muted">
                          {r.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
