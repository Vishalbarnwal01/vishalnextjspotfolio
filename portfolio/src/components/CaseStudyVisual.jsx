import {
  ShopifyIcon,
  BellIcon,
  DatabaseIcon,
  CodeIcon,
  BagIcon,
} from "@/components/icons";

const gradients = [
  "from-cream via-white to-shopify/10",
  "from-forest/5 via-white to-cream",
  "from-shopify/15 via-white to-cream",
  "from-cream via-white to-forest/5",
];

function iconForTags(tags = []) {
  const joined = tags.join(" ").toLowerCase();
  if (joined.includes("klaviyo")) return BellIcon;
  if (joined.includes("sap") || joined.includes("erp")) return DatabaseIcon;
  if (joined.includes("headless") || joined.includes("react") || joined.includes("api"))
    return CodeIcon;
  return ShopifyIcon;
}

// A hand-built browser-window mockup that stands in for a real project
// screenshot. Swap this for an <Image> of the live site once one exists.
export default function CaseStudyVisual({ cs, index = 0, className = "" }) {
  const Icon = iconForTags(cs.tags || []);
  const gradient = gradients[index % gradients.length];

  if (cs.cover_image_url) {
    return (
      <div
        className={`relative overflow-hidden rounded-xl border border-line bg-cream ${className || "aspect-[4/3]"}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={cs.cover_image_url}
          alt={cs.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute right-5 top-5 rounded-full border border-line bg-white/90 px-3 py-1 text-[11px] font-semibold text-shopify-dark backdrop-blur">
          {cs.industry}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-line bg-gradient-to-br ${gradient} ${className || "aspect-[4/3]"}`}
    >
      <div className="h-full w-full p-5">
        {/* fake browser chrome */}
        <div className="flex items-center gap-1.5 rounded-t-lg border border-b-0 border-line/70 bg-white/80 px-3 py-2 backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-line" />
          <span className="h-1.5 w-1.5 rounded-full bg-line" />
          <span className="h-1.5 w-1.5 rounded-full bg-line" />
          <span className="ml-3 h-1.5 w-24 rounded-full bg-line/70" />
        </div>

        {/* fake storefront body */}
        <div className="flex h-[calc(100%-30px)] flex-col gap-2.5 rounded-b-lg border border-t-0 border-line/70 bg-white/70 p-3.5 backdrop-blur">
          <div className="flex items-center justify-between">
            <div className="h-2 w-16 rounded-full bg-ink/15" />
            <Icon className="h-4 w-4 text-shopify-dark" />
          </div>
          <div className="grid flex-1 grid-cols-3 gap-2">
            <div className="col-span-2 rounded-md bg-gradient-to-br from-shopify/25 to-cream" />
            <div className="flex flex-col gap-2">
              <div className="flex-1 rounded-md bg-line/40" />
              <div className="flex-1 rounded-md bg-line/25" />
            </div>
          </div>
          <div className="flex items-center justify-between rounded-md bg-forest px-2.5 py-1.5">
            <span className="h-1.5 w-14 rounded-full bg-white/70" />
            <BagIcon className="h-3 w-3 text-shopify" />
          </div>
        </div>
      </div>

      <div className="absolute right-5 top-5 rounded-full border border-line bg-white/90 px-3 py-1 text-[11px] font-semibold text-shopify-dark backdrop-blur">
        {cs.industry}
      </div>
    </div>
  );
}
