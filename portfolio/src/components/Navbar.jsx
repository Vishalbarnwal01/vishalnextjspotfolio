"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { MenuIcon, CloseIcon } from "@/components/icons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1320px] items-center justify-between px-6 py-4 lg:px-10">
        <Link
          href="/"
          className="text-[17px] font-semibold tracking-tight text-ink"
        >
          {siteConfig.name}
          <span className="text-shopify">.</span>
        </Link>

        <div className="hidden items-center gap-9 lg:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[15px] font-medium text-muted transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-lg bg-ink px-5 py-2.5 text-[15px] font-semibold text-white transition-colors hover:bg-shopify hover:text-forest"
          >
            Start a Project
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-9 w-9 items-center justify-center text-ink lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-x-0 top-[65px] z-40 origin-top border-b border-line bg-white px-6 pb-8 pt-4 transition-all duration-200 lg:hidden ${
          open ? "scale-y-100 opacity-100" : "pointer-events-none scale-y-95 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-[17px] font-medium text-ink transition-colors hover:bg-cream"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex items-center justify-center rounded-lg bg-ink px-5 py-3.5 text-[15px] font-semibold text-white"
          >
            Start a Project
          </Link>
        </div>
      </div>
    </header>
  );
}
