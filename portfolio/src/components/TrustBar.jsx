import { trustStack } from "@/data/tech-stack";

export default function TrustBar() {
  const loop = [...trustStack, ...trustStack];

  return (
    <section className="border-y border-line bg-cream py-8">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <p className="mb-5 text-center text-[12px] font-semibold tracking-[0.14em] text-muted">
          BUILD &middot; OPTIMIZE &middot; INTEGRATE &middot; SCALE
        </p>
      </div>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-cream to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-cream to-transparent" />
        <div className="animate-marquee flex w-max items-center gap-14 px-7">
          {loop.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="whitespace-nowrap text-[17px] font-semibold text-ink/40 transition-colors hover:text-shopify-dark"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
