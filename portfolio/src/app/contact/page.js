import Link from "next/link";
import FinalCTA from "@/components/FinalCTA";
import Reveal from "@/components/Reveal";
import { siteConfig } from "@/data/site-config";
import { MailIcon, TargetIcon, LayersIcon } from "@/components/icons";

export const metadata = {
  title: `Contact | ${siteConfig.name} — Start a Shopify Project`,
  description:
    "Get in touch to start a Shopify development, CRO or integration project. Working remotely with US-based DTC and eCommerce brands.",
  alternates: { canonical: "/contact" },
};

const details = [
  {
    icon: MailIcon,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: TargetIcon,
    label: "Availability",
    value: siteConfig.availability,
  },
  {
    icon: LayersIcon,
    label: "Location",
    value: `${siteConfig.location} · ${siteConfig.workingScope}`,
  },
];

export default function ContactPage() {
  return (
    <main className="flex-1">
      <FinalCTA headingLevel="h1" />

      <section className="bg-cream py-20">
        <div className="mx-auto max-w-[720px] px-6 lg:px-10">
          <Reveal>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {details.map((d) => (
                <div
                  key={d.label}
                  className="rounded-xl border border-line bg-white p-6 text-center"
                >
                  <span className="mx-auto flex h-9 w-9 items-center justify-center rounded-lg bg-cream text-shopify-dark">
                    <d.icon className="h-4 w-4" />
                  </span>
                  <p className="mt-4 text-[12px] font-semibold tracking-[0.1em] text-muted">
                    {d.label.toUpperCase()}
                  </p>
                  {d.href ? (
                    <Link
                      href={d.href}
                      className="mt-1 block text-[14px] font-medium text-ink hover:text-shopify-dark"
                    >
                      {d.value}
                    </Link>
                  ) : (
                    <p className="mt-1 text-[14px] font-medium text-ink">{d.value}</p>
                  )}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
