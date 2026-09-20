import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site-config";
import { ArrowRightIcon } from "@/components/icons";

const menuLinks = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Process", href: "/process" },
];

const navigationLinks = [
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
];

const socialLinks = [
  { label: "LinkedIn", href: siteConfig.social.linkedin },
  { label: "GitHub", href: siteConfig.social.github },
  { label: "Twitter / X", href: siteConfig.social.twitter },
  { label: "Upwork", href: siteConfig.social.upwork },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white px-4 pb-4 pt-6 sm:px-6 lg:px-10 lg:pb-10">
      <div className="relative overflow-hidden rounded-[28px] bg-forest sm:rounded-[32px]">
        {/* soft glow, consistent with the Process / final-CTA sections */}
        <div
          className="pointer-events-none absolute -top-24 left-1/4 h-[360px] w-[360px] rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, #95BF47, transparent 70%)" }}
        />

        <div className="relative z-10 mx-auto max-w-[1320px] px-7 pb-10 pt-14 sm:px-10 lg:px-14 lg:pt-16">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {/* Brand column */}
            <div className="sm:col-span-2 lg:col-span-1">
              <Image
                src="/images/vishal-logo.png"
                alt={siteConfig.name}
                width={160}
                height={44}
                className="h-11 w-auto object-contain"
              />

              <p className="mt-5 max-w-xs text-[14px] leading-relaxed text-white/55">
                {siteConfig.role}, helping DTC and eCommerce brands build,
                optimize and scale their Shopify stores.
              </p>

              <Link
                href="/contact"
                className="group mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-[14px] font-semibold text-forest transition-colors hover:bg-shopify"
              >
                Start a Project
                <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>

              <p className="mt-8 text-[13px] text-white/40">
                © {year} {siteConfig.fullName}. All rights reserved.
              </p>
              <p className="mt-2 flex items-center gap-1.5 text-[13px] text-white/40">
                Built with
                <span className="text-shopify" aria-hidden="true">
                  ♥
                </span>
                by
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-shopify/20 text-[9px] font-bold text-shopify">
                  {siteConfig.name.charAt(0)}
                </span>
                <span className="font-medium text-white/70">{siteConfig.name}</span>
              </p>
            </div>

            {/* Menu column */}
            <div>
              <p className="text-[12px] font-semibold tracking-[0.1em] text-white/40">
                MENU
              </p>
              <ul className="mt-4 space-y-2.5">
                {menuLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-[14px] text-white/65 transition-colors hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Navigation column */}
            <div>
              <p className="text-[12px] font-semibold tracking-[0.1em] text-white/40">
                NAVIGATION
              </p>
              <ul className="mt-4 space-y-2.5">
                {navigationLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-[14px] text-white/65 transition-colors hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect column */}
            <div>
              <p className="text-[12px] font-semibold tracking-[0.1em] text-white/40">
                CONNECT
              </p>
              <ul className="mt-4 space-y-2.5">
                {socialLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-[14px] text-white/65 transition-colors hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-[14px] text-white/65 transition-colors hover:text-white"
                  >
                    {siteConfig.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Huge faded wordmark bleeding at the bottom edge of the card */}
        <div className="relative overflow-hidden leading-none">
          <p
            className="-mb-[0.06em] select-none whitespace-nowrap text-center font-bold text-white/[0.06]"
            style={{ fontSize: "clamp(4.5rem, 17vw, 15rem)" }}
            aria-hidden="true"
          >
            {siteConfig.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
