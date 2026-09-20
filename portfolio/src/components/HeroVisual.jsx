import { BagIcon, BarsIcon, BellIcon } from "@/components/icons";

// A hand-built, non-generic representation of the commerce ecosystem:
// Shopify storefront at the center, connected to the tools around it.
// Pure HTML/CSS + one inline SVG for the connector lines — no images,
// no laptop mockup, nothing to download or lazy-load.
export default function HeroVisual() {
  const nodes = [
    { key: "klaviyo", top: "6%", left: "2%", align: "left" },
    { key: "order", top: "10%", left: "68%", align: "right" },
    { key: "sap", top: "78%", left: "0%", align: "left" },
    { key: "revenue", top: "80%", left: "66%", align: "right" },
  ];

  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-[480px] select-none">
      {/* connector lines */}
      <svg
        viewBox="0 0 100 125"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <line x1="50" y1="62" x2="14" y2="18" stroke="#95BF47" strokeWidth="0.6" className="animate-flow-line" opacity="0.6" />
        <line x1="50" y1="62" x2="84" y2="24" stroke="#95BF47" strokeWidth="0.6" className="animate-flow-line" opacity="0.6" />
        <line x1="50" y1="70" x2="10" y2="98" stroke="#95BF47" strokeWidth="0.6" className="animate-flow-line" opacity="0.6" />
        <line x1="50" y1="70" x2="88" y2="100" stroke="#95BF47" strokeWidth="0.6" className="animate-flow-line" opacity="0.6" />
      </svg>

      {/* faint dot-grid backdrop */}
      <div
        className="absolute inset-0 rounded-[28px] border border-line bg-cream"
        style={{
          backgroundImage:
            "radial-gradient(circle, #E5E9E0 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />

      {/* central storefront card */}
      <div className="absolute left-1/2 top-1/2 w-[58%] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-line bg-white p-4 shadow-[0_20px_50px_-20px_rgba(17,17,17,0.25)]">
        <div className="mb-3 flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-line" />
          <span className="h-2 w-2 rounded-full bg-line" />
          <span className="h-2 w-2 rounded-full bg-line" />
          <span className="ml-auto flex items-center gap-1 rounded-full bg-cream px-2 py-0.5 text-[9px] font-semibold text-shopify-dark">
            <ShopifyDot /> Live
          </span>
        </div>
        <div className="mb-3 grid grid-cols-2 gap-2">
          <div className="aspect-square rounded-lg bg-gradient-to-br from-cream to-line/60" />
          <div className="aspect-square rounded-lg bg-gradient-to-br from-shopify/25 to-cream" />
        </div>
        <div className="mb-1 h-2 w-3/4 rounded-full bg-line" />
        <div className="mb-3 h-2 w-1/2 rounded-full bg-line" />
        <div className="flex items-center justify-between rounded-lg bg-forest px-3 py-2">
          <span className="text-[10px] font-semibold text-white">Add to Cart</span>
          <BagIcon className="h-3.5 w-3.5 text-shopify" />
        </div>
      </div>

      {/* floating fragments */}
      <FloatingCard style={{ top: "6%", left: "0%" }} delay="0s">
        <BarsIcon className="h-3.5 w-3.5 text-shopify-dark" />
        <div>
          <p className="text-[10px] font-semibold text-ink">Klaviyo Flow</p>
          <p className="text-[9px] text-muted">Segment synced</p>
        </div>
      </FloatingCard>

      <FloatingCard style={{ top: "10%", right: "0%" }} delay="1.4s">
        <BellIcon className="h-3.5 w-3.5 text-shopify-dark" />
        <div>
          <p className="text-[10px] font-semibold text-ink">New order</p>
          <p className="text-[9px] text-muted">SAP sync · OK</p>
        </div>
      </FloatingCard>

      <FloatingCard style={{ bottom: "10%", left: "-2%" }} delay="0.7s">
        <div className="flex -space-x-1.5">
          <span className="h-4 w-4 rounded-full border border-white bg-shopify/40" />
          <span className="h-4 w-4 rounded-full border border-white bg-forest/30" />
        </div>
        <div>
          <p className="text-[10px] font-semibold text-ink">CRM Segment</p>
          <p className="text-[9px] text-muted">High-intent buyers</p>
        </div>
      </FloatingCard>

      <FloatingCard style={{ bottom: "8%", right: "-2%" }} delay="2s">
        <span className="text-[13px] font-bold text-shopify-dark">$XX,XXX</span>
        <div>
          <p className="text-[10px] font-semibold text-ink">Revenue</p>
          <p className="text-[9px] text-muted">This month</p>
        </div>
      </FloatingCard>
    </div>
  );
}

function ShopifyDot() {
  return <span className="inline-block h-1.5 w-1.5 rounded-full bg-shopify animate-soft-pulse" />;
}

function FloatingCard({ children, style, delay }) {
  return (
    <div
      className="animate-float absolute z-10 flex max-w-[150px] items-center gap-2 rounded-xl border border-line bg-white/95 px-3 py-2 shadow-[0_12px_30px_-14px_rgba(17,17,17,0.3)] backdrop-blur"
      style={{ ...style, animationDelay: delay }}
    >
      {children}
    </div>
  );
}
