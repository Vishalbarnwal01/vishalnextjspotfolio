import Reveal from "@/components/Reveal";

const principles = [
  {
    n: "01",
    title: "Business First",
    description: "Technology decisions aligned with your commercial goals.",
  },
  {
    n: "02",
    title: "Performance First",
    description: "Fast storefronts, clean code and conversion-focused experiences.",
  },
  {
    n: "03",
    title: "Long-Term Thinking",
    description: "Solutions designed to evolve as your business grows.",
  },
];

export default function WhyWorkWithMe() {
  return (
    <section className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <Reveal>
          <h2 className="max-w-xl text-[36px] font-bold leading-[1.1] tracking-tight text-ink lg:text-[48px]">
            Built for Brands That Expect More From Shopify.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-10 border-t border-line pt-12 sm:grid-cols-3 sm:gap-8">
          {principles.map((p, i) => (
            <Reveal key={p.n} delay={i * 90}>
              <span className="font-mono text-[13px] font-semibold text-shopify-dark">
                {p.n}
              </span>
              <h3 className="mt-4 text-[22px] font-bold tracking-tight text-ink">
                {p.title}
              </h3>
              <p className="mt-3 max-w-xs text-[15px] leading-relaxed text-muted">
                {p.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
