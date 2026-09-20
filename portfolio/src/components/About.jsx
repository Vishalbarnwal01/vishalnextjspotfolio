import Reveal from "@/components/Reveal";

const principles = [
  { n: "01", label: "Shopify Development" },
  { n: "02", label: "CRO & Performance" },
  { n: "03", label: "Klaviyo & CRM" },
  { n: "04", label: "SAP / ERP Integrations" },
];

// headingLevel: "h1" when this is the top heading of its own page (/about),
// "h2" (default) when used as a supporting section elsewhere.
export default function About({ headingLevel = "h2" }) {
  const Heading = headingLevel;
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="text-[13px] font-semibold tracking-[0.14em] text-shopify-dark">
                THE DIFFERENCE
              </p>
              <Heading className="mt-4 text-[36px] font-bold leading-[1.1] tracking-tight text-ink lg:text-[48px]">
                More Than a Shopify Developer.
              </Heading>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={100}>
              <p className="text-[22px] font-semibold leading-snug text-ink lg:text-[28px]">
                I build commerce systems, not just storefronts.
              </p>
              <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-muted">
                From conversion-focused Shopify themes to complex integrations, I
                combine development, UX, performance and eCommerce strategy to
                create digital experiences that are built for real business
                growth. I work at the intersection of eCommerce, technology and
                conversion, designing around customer journeys and business
                operations, not just pages.
              </p>
            </Reveal>

            <Reveal delay={180}>
              <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-line pt-10 sm:grid-cols-4">
                {principles.map((p) => (
                  <div key={p.n}>
                    <p className="text-[13px] font-mono font-semibold text-shopify-dark">
                      {p.n}
                    </p>
                    <p className="mt-2 text-[14px] font-medium leading-snug text-ink">
                      {p.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
