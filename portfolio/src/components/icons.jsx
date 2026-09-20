// Lightweight hand-coded stroke icons — no icon library, keeps the bundle tiny.
// All icons accept a className so callers control size/color via Tailwind.

const base = "stroke-current fill-none";
const strokeProps = { strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" };

export function ShopifyIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={`${base} ${className}`} {...strokeProps}>
      <path d="M6 8h11l1 12H5L6 8Z" />
      <path d="M9 8a3 3 0 0 1 6 0" />
      <path d="M9 12h.01M15 12h.01" />
    </svg>
  );
}

export function LayersIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={`${base} ${className}`} {...strokeProps}>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 13 9 5 9-5" />
    </svg>
  );
}

export function TargetIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={`${base} ${className}`} {...strokeProps}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="0.5" />
    </svg>
  );
}

export function MailIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={`${base} ${className}`} {...strokeProps}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export function DatabaseIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={`${base} ${className}`} {...strokeProps}>
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v6c0 1.66 3.13 3 7 3s7-1.34 7-3V6" />
      <path d="M5 12v6c0 1.66 3.13 3 7 3s7-1.34 7-3v-6" />
    </svg>
  );
}

export function PlugIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={`${base} ${className}`} {...strokeProps}>
      <path d="M9 3v5M15 3v5" />
      <path d="M6 8h12v3a6 6 0 0 1-6 6 6 6 0 0 1-6-6V8Z" />
      <path d="M12 17v4" />
    </svg>
  );
}

export function GaugeIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={`${base} ${className}`} {...strokeProps}>
      <path d="M4 14a8 8 0 1 1 16 0" />
      <path d="M12 14 16 9" />
      <path d="M12 14h.01" />
    </svg>
  );
}

export function CodeIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={`${base} ${className}`} {...strokeProps}>
      <path d="m9 8-4 4 4 4" />
      <path d="m15 8 4 4-4 4" />
    </svg>
  );
}

export function ArrowUpRightIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={`${base} ${className}`} {...strokeProps}>
      <path d="M7 17 17 7" />
      <path d="M9 7h8v8" />
    </svg>
  );
}

export function ArrowRightIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={`${base} ${className}`} {...strokeProps}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function ChevronDownIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={`${base} ${className}`} {...strokeProps}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function MenuIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={`${base} ${className}`} {...strokeProps}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={`${base} ${className}`} {...strokeProps}>
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}

export function CheckIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={`${base} ${className}`} {...strokeProps}>
      <path d="m5 13 4 4 10-10" />
    </svg>
  );
}

// Small icon set used for the floating UI fragments in the hero visual
export function BarsIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={`${base} ${className}`} {...strokeProps}>
      <path d="M5 18V10M12 18V5M19 18v-5" />
    </svg>
  );
}

export function BagIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={`${base} ${className}`} {...strokeProps}>
      <path d="M6 8h12l-1 12H7L6 8Z" />
      <path d="M9 8a3 3 0 0 1 6 0" />
    </svg>
  );
}

export function BellIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={`${base} ${className}`} {...strokeProps}>
      <path d="M6 10a6 6 0 1 1 12 0c0 4 1.5 5 1.5 5h-15S6 14 6 10Z" />
      <path d="M10 19a2 2 0 0 0 4 0" />
    </svg>
  );
}
