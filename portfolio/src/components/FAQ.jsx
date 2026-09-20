"use client";

import { useState } from "react";
import { faqs } from "@/data/faq";
import { ChevronDownIcon } from "@/components/icons";
import Reveal from "@/components/Reveal";

// FAQPage structured data — helps these questions surface as rich results.
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-cream py-24 lg:py-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="mx-auto max-w-[860px] px-6 lg:px-10">
        <Reveal>
          <div className="text-center">
            <p className="text-[13px] font-semibold tracking-[0.14em] text-shopify-dark">
              FAQ
            </p>
            <h2 className="mt-4 text-[32px] font-bold leading-[1.1] tracking-tight text-ink lg:text-[42px]">
              Common Questions About Shopify Development.
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 divide-y divide-line border-y border-line">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="text-[16px] font-semibold text-ink lg:text-[17px]">
                    {item.q}
                  </span>
                  <ChevronDownIcon
                    className={`h-5 w-5 flex-shrink-0 text-shopify-dark transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                  style={{ display: "grid" }}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-2xl text-[15px] leading-relaxed text-muted">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
