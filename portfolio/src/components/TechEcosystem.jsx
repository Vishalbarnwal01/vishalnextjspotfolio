import Reveal from "@/components/Reveal";
import { ecosystemNodes } from "@/data/tech-stack";

// Fixed orbit positions (percent) for 6 nodes evenly spaced around the center.
const positions = [
  { top: "6%", left: "50%" }, // top
  { top: "27%", left: "87%" }, // upper right
  { top: "69%", left: "87%" }, // lower right
  { top: "90%", left: "50%" }, // bottom
  { top: "69%", left: "13%" }, // lower left
  { top: "27%", left: "13%" }, // upper left
];

export default function TechEcosystem() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <Reveal>
          <div className="mx-auto max-w-xl text-center">
            <p className="text-[13px] font-semibold tracking-[0.14em] text-shopify-dark">
              TECHNOLOGY ECOSYSTEM
            </p>
            <h2 className="mt-4 text-[36px] font-bold leading-[1.1] tracking-tight text-ink lg:text-[48px]">
              Shopify Is the Core. Everything Else Connects Around It.
            </h2>
          </div>
        </Reveal>

        {/* Orbit diagram — desktop / tablet */}
        <Reveal delay={100}>
          <div className="relative mx-auto mt-16 hidden aspect-square w-full max-w-[560px] sm:block">
            <svg viewBox="0 0 100 100" className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true">
              {positions.map((p, i) => (
                <line
                  key={i}
                  x1="50"
                  y1="50"
                  x2={parseFloat(p.left)}
                  y2={parseFloat(p.top)}
                  stroke="#E5E9E0"
                  strokeWidth="0.6"
                />
              ))}
            </svg>

            {/* central Shopify node */}
            <div className="absolute left-1/2 top-1/2 flex h-[104px] w-[104px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-shopify/30 bg-forest shadow-[0_20px_45px_-18px_rgba(22,51,0,0.5)]">
              <span className="text-[15px] font-bold tracking-tight text-white">Shopify</span>
              <span className="mt-0.5 text-[9px] font-medium text-shopify">
                Commerce Core
              </span>
            </div>

            {positions.map((p, i) => {
              const node = ecosystemNodes[i];
              if (!node) return null;
              return (
                <div
                  key={node.label}
                  className="absolute w-[128px] -translate-x-1/2 -translate-y-1/2 rounded-xl border border-line bg-white px-3 py-2.5 text-center shadow-[0_10px_25px_-14px_rgba(17,17,17,0.25)] transition-shadow hover:shadow-[0_14px_30px_-14px_rgba(149,191,71,0.35)]"
                  style={{ top: p.top, left: p.left }}
                >
                  <p className="text-[12.5px] font-semibold text-ink">{node.label}</p>
                  <p className="mt-0.5 text-[10.5px] text-muted">{node.sub}</p>
                </div>
              );
            })}
          </div>
        </Reveal>

        {/* Simplified list — mobile */}
        <Reveal delay={100}>
          <div className="mt-12 sm:hidden">
            <div className="mx-auto flex w-fit flex-col items-center rounded-xl border border-shopify/30 bg-forest px-6 py-3 text-center">
              <span className="text-[15px] font-bold text-white">Shopify</span>
              <span className="text-[10px] font-medium text-shopify">Commerce Core</span>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {ecosystemNodes.map((node) => (
                <div
                  key={node.label}
                  className="rounded-xl border border-line bg-white px-3 py-3 text-center"
                >
                  <p className="text-[13px] font-semibold text-ink">{node.label}</p>
                  <p className="mt-0.5 text-[11px] text-muted">{node.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
