import Link from "next/link";
import { siteConfig } from "@/data/site-config";

const columns = [
  "Shopify Development",
  "Shopify Plus",
  "Conversion Rate Optimization",
  "Klaviyo Integration",
  "SAP / ERP Integration",
  "Headless Commerce",
  "API Development",
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-white py-16">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-[17px] font-semibold tracking-tight text-ink">
              {siteConfig.name}
              <span className="text-shopify">.</span>
            </p>
            <p className="mt-2 max-w-xs text-[14px] leading-relaxed text-muted">
              {siteConfig.role}
            </p>
            <div className="mt-6 flex items-center gap-5 text-[13px] font-medium text-muted">
              {siteConfig.social.linkedin !== "#" && (
                <Link href={siteConfig.social.linkedin} className="hover:text-ink">
                  LinkedIn
                </Link>
              )}
              {siteConfig.social.github !== "#" && (
                <Link href={siteConfig.social.github} className="hover:text-ink">
                  GitHub
                </Link>
              )}
              <a href={`mailto:${siteConfig.email}`} className="hover:text-ink">
                {siteConfig.email}
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 lg:col-start-7">
            <p className="text-[13px] font-semibold tracking-[0.1em] text-muted">
              SERVICES
            </p>
            <ul className="mt-4 space-y-2.5">
              {columns.map((c) => (
                <li key={c}>
                  <Link
                    href="/services"
                    className="text-[14px] text-muted transition-colors hover:text-ink"
                  >
                    {c}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="text-[13px] font-semibold tracking-[0.1em] text-muted">
              SITE
            </p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link href="/work" className="text-[14px] text-muted hover:text-ink">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-[14px] text-muted hover:text-ink">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[14px] text-muted hover:text-ink">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-line pt-8 text-[13px] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {siteConfig.fullName}. All rights reserved.</p>
          <p>{siteConfig.location} &middot; {siteConfig.workingScope}</p>
        </div>
      </div>
    </footer>
  );
}
