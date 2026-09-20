import Reveal from "@/components/Reveal";
import { processSteps } from "@/data/process-steps";

export default function Process({ headingLevel = "h2" }) {
  const Heading = headingLevel;
  return (
    <section className="relative overflow-hidden bg-forest py-24 lg:py-32">
      {/* subtle radial glow, kept very soft */}
      <div
        className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #95BF47, transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-[1320px] px-6 lg:px-10">
        <Reveal>
          <p className="text-[13px] font-semibold tracking-[0.14em] text-shopify">
            PROCESS
          </p>
          <Heading className="mt-4 max-w-xl text-[36px] font-bold leading-[1.1] tracking-tight text-white lg:text-[48px]">
            From Idea to Scalable Commerce.
          </Heading>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {processSteps.map((step, i) => (
            <Reveal key={step.n} delay={i * 80}>
              <div className="relative">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[13px] font-semibold text-shopify">
                    {step.n}
                  </span>
                  {i < processSteps.length - 1 && (
                    <span className="hidden h-px flex-1 bg-gradient-to-r from-shopify/60 to-transparent lg:block" />
                  )}
                </div>
                <h3 className="mt-4 text-[19px] font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-white/60">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
