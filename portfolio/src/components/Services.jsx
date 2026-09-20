import Reveal from "@/components/Reveal";
import { services } from "@/data/services";
import {
  ShopifyIcon,
  LayersIcon,
  TargetIcon,
  MailIcon,
  DatabaseIcon,
  PlugIcon,
  GaugeIcon,
  CodeIcon,
  ArrowUpRightIcon,
} from "@/components/icons";

const iconMap = {
  shopify: ShopifyIcon,
  layers: LayersIcon,
  target: TargetIcon,
  mail: MailIcon,
  database: DatabaseIcon,
  plug: PlugIcon,
  gauge: GaugeIcon,
  code: CodeIcon,
};

export default function Services({ headingLevel = "h2" }) {
  const Heading = headingLevel;
  return (
    <section className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-[13px] font-semibold tracking-[0.14em] text-shopify-dark">
              SERVICES
            </p>
            <Heading className="mt-4 text-[36px] font-bold leading-[1.1] tracking-tight text-ink lg:text-[48px]">
              Everything Your Shopify Store Needs to Grow.
            </Heading>
            <p className="mt-5 text-[17px] leading-relaxed text-muted">
              An eCommerce technology partner, not just a developer — covering
              Shopify development, conversion optimization and the integrations
              that connect your store to the rest of your business.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <Reveal key={service.n} delay={(i % 2) * 60} className="h-full">
                <article className="group flex h-full flex-col justify-between bg-white p-8 transition-colors hover:bg-white lg:p-10">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[13px] font-semibold text-muted">
                        {service.n}
                      </span>
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-cream text-shopify-dark transition-colors group-hover:bg-shopify/15">
                        <Icon className="h-4 w-4" />
                      </span>
                    </div>
                    <h3 className="mt-6 text-[19px] font-semibold text-ink">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-muted">
                      {service.description}
                    </p>
                  </div>
                  <ArrowUpRightIcon className="mt-8 h-4 w-4 text-line transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-shopify-dark" />
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
