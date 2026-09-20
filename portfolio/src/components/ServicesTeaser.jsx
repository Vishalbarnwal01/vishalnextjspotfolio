import Link from "next/link";
import Reveal from "@/components/Reveal";
import { services } from "@/data/services";
import {
  ShopifyIcon,
  LayersIcon,
  TargetIcon,
  MailIcon,
  ArrowRightIcon,
} from "@/components/icons";

const iconMap = {
  shopify: ShopifyIcon,
  layers: LayersIcon,
  target: TargetIcon,
  mail: MailIcon,
};

// Shows the first 4 of 8 services. Full grid of all 8 lives at /services.
export default function ServicesTeaser() {
  const featured = services.slice(0, 4);

  return (
    <section className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-xl">
              <p className="text-[13px] font-semibold tracking-[0.14em] text-shopify-dark">
                SERVICES
              </p>
              <h2 className="mt-4 text-[36px] font-bold leading-[1.1] tracking-tight text-ink lg:text-[48px]">
                Everything Your Shopify Store Needs to Grow.
              </h2>
            </div>
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 text-[15px] font-semibold text-ink transition-colors hover:text-shopify-dark"
            >
              View All Services
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <Reveal key={service.n} delay={i * 60} className="h-full">
                <article className="group flex h-full flex-col justify-between bg-white p-7">
                  <div>
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-cream text-shopify-dark transition-colors group-hover:bg-shopify/15">
                      <Icon className="h-4 w-4" />
                    </span>
                    <h3 className="mt-5 text-[16px] font-semibold text-ink">
                      {service.title}
                    </h3>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
