import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function base({ size = 24, strokeWidth = 1.7, ...props }: IconProps) {
  return {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    ...props,
  };
}

export function WhatsAppIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47s1.06 2.87 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.75-.71 2-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35Z" />
      <path d="M12.04 2C6.55 2 2.08 6.46 2.08 11.96c0 1.76.46 3.41 1.27 4.85L2 22l5.34-1.39a9.95 9.95 0 0 0 4.7 1.19h.01c5.49 0 9.96-4.46 9.96-9.96C22.01 6.46 17.53 2 12.04 2Zm0 18.13h-.01a8.3 8.3 0 0 1-4.21-1.15l-.3-.18-3.12.81.83-3.04-.2-.32a8.24 8.24 0 0 1-1.26-4.39c0-4.56 3.72-8.27 8.28-8.27 2.21 0 4.29.86 5.85 2.43a8.22 8.22 0 0 1 2.42 5.86c0 4.56-3.72 8.25-8.28 8.25Z" />
    </svg>
  );
}

export function InstagramIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17.4" cy="6.6" r="1.25" fill="currentColor" />
    </svg>
  );
}

export function GoogleIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M22.5 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.89a5.04 5.04 0 0 1-2.18 3.3v2.74h3.52c2.06-1.9 3.27-4.69 3.27-8.05Z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.94 0 5.4-.97 7.23-2.7l-3.53-2.74c-.98.66-2.23 1.05-3.7 1.05-2.85 0-5.26-1.92-6.12-4.5H2.24v2.83A11 11 0 0 0 12 23Z"
        fill="#34A853"
      />
      <path
        d="M5.88 14.11a6.6 6.6 0 0 1 0-4.22V7.06H2.24a11 11 0 0 0 0 9.88l3.64-2.83Z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.6 0 3.03.55 4.16 1.63l3.12-3.12A10.95 10.95 0 0 0 12 1 11 11 0 0 0 2.24 7.06l3.64 2.83C6.74 7.31 9.15 5.38 12 5.38Z"
        fill="#EA4335"
      />
    </svg>
  );
}

export function StarIcon({ size = 20, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="m12 2.6 2.86 5.97 6.54.93-4.77 4.58 1.16 6.5L12 17.47l-5.79 3.11 1.16-6.5L2.6 9.5l6.54-.93L12 2.6Z" />
    </svg>
  );
}

export function ArrowUpRight({ size = 20, ...props }: IconProps) {
  return (
    <svg {...base({ size, ...props })}>
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

export function ArrowRight({ size = 20, ...props }: IconProps) {
  return (
    <svg {...base({ size, ...props })}>
      <path d="M4 12h16M14 6l6 6-6 6" />
    </svg>
  );
}

export function ArrowDown({ size = 20, ...props }: IconProps) {
  return (
    <svg {...base({ size, ...props })}>
      <path d="M12 4v16M6 14l6 6 6-6" />
    </svg>
  );
}

export function CheckIcon({ size = 20, ...props }: IconProps) {
  return (
    <svg {...base({ size, ...props })}>
      <path d="m4.5 12.5 5 5 10-11" />
    </svg>
  );
}

export function MapPinIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg {...base({ size, ...props })}>
      <path d="M20 10.2c0 5.4-8 11.3-8 11.3s-8-5.9-8-11.3a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.9" />
    </svg>
  );
}

export function MenuIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg {...base({ size, ...props })}>
      <path d="M4 7h16M4 12h16M4 17h10" />
    </svg>
  );
}

export function CloseIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg {...base({ size, ...props })}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function CalculatorIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg {...base({ size, ...props })}>
      <rect x="4.5" y="2.5" width="15" height="19" rx="2.5" />
      <path d="M8 6.5h8M8 11h.01M12 11h.01M16 11h.01M8 15h.01M12 15h.01M16 15v3.5M8 18.5h.01M12 18.5h.01" />
    </svg>
  );
}

export function TaxIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg {...base({ size, ...props })}>
      <path d="M20.5 13.5V7a2 2 0 0 0-2-2H4.5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7" />
      <path d="M2.5 9.5h18M6 14h4M15.5 21.5 21.5 15.5M21.5 21.5v-5.2M21.5 21.5h-5.2" />
    </svg>
  );
}

export function ShieldIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg {...base({ size, ...props })}>
      <path d="M12 2.7 4 6v5.6c0 4.6 3.4 8.2 8 9.7 4.6-1.5 8-5.1 8-9.7V6l-8-3.3Z" />
      <path d="m8.4 12 2.5 2.5 4.8-5" />
    </svg>
  );
}

export function ChartIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg {...base({ size, ...props })}>
      <path d="M3 3v16.5a1.5 1.5 0 0 0 1.5 1.5H21" />
      <path d="m6.5 15 4-4.5 3.2 3 5.3-6.2" />
      <path d="M15.5 7.3H19v3.5" />
    </svg>
  );
}

export function BriefcaseIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg {...base({ size, ...props })}>
      <rect x="2.5" y="7" width="19" height="13.5" rx="2.5" />
      <path d="M8.5 7V5.2A2.2 2.2 0 0 1 10.7 3h2.6a2.2 2.2 0 0 1 2.2 2.2V7M2.5 12.5h19M10.5 12.5v2h3v-2" />
    </svg>
  );
}

export function HandshakeIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg {...base({ size, ...props })}>
      <path d="m11 17 2 2a1.8 1.8 0 0 0 2.6-2.6l-1.3-1.3" />
      <path d="m14.5 14.5 1.8 1.8a1.8 1.8 0 0 0 2.6-2.6L15 9.9" />
      <path d="m8.5 12.5-1.9-1.9a1.8 1.8 0 0 0-2.6 2.6l4 4a1.8 1.8 0 0 0 2.6 0" />
      <path d="M2.5 8.5 6 5h4l2 2 2-2h3.8l4 4" />
    </svg>
  );
}

export function TargetIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg {...base({ size, ...props })}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.3" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function CpuIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg {...base({ size, ...props })}>
      <rect x="6" y="6" width="12" height="12" rx="2.5" />
      <rect x="10" y="10" width="4" height="4" rx="1" />
      <path d="M9 2.5v3.5M15 2.5v3.5M9 18v3.5M15 18v3.5M2.5 9H6M2.5 15H6M18 9h3.5M18 15h3.5" />
    </svg>
  );
}

export function LockIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg {...base({ size, ...props })}>
      <rect x="4" y="10.5" width="16" height="11" rx="2.5" />
      <path d="M8 10.5V7.8a4 4 0 0 1 8 0v2.7M12 15v3" />
    </svg>
  );
}

export function SparkleIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg {...base({ size, ...props })}>
      <path d="M12 3.5c.6 4.4 2.1 5.9 6.5 6.5-4.4.6-5.9 2.1-6.5 6.5-.6-4.4-2.1-5.9-6.5-6.5 4.4-.6 5.9-2.1 6.5-6.5Z" />
      <path d="M18.5 15.5c.3 2.1 1 2.8 3 3-2 .3-2.7 1-3 3-.3-2-1-2.7-3-3 2-.2 2.7-.9 3-3Z" />
    </svg>
  );
}

export function ClockIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg {...base({ size, ...props })}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function LayersIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg {...base({ size, ...props })}>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3.5 12.5 8.5 4.7 8.5-4.7M3.5 16.8l8.5 4.7 8.5-4.7" />
    </svg>
  );
}

export function Logo({
  variant = "dark",
  className = "",
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  const word = variant === "light" ? "text-white" : "text-navy-900";
  const sub = variant === "light" ? "text-white/50" : "text-navy-900/50";

  return (
    <span className={`flex items-center gap-3 ${className}`} aria-label="Growth Contabilidade">
      <span className="relative grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-[14px] bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 shadow-[0_8px_22px_-8px_rgba(4,18,31,0.7)] ring-1 ring-white/10 sm:h-12 sm:w-12">
        <span className="absolute -right-2 -top-2 h-7 w-7 rounded-full bg-brand-500/40 blur-md" />
        <span className="absolute -bottom-2 -left-1 h-6 w-6 rounded-full bg-mint-400/30 blur-md" />
        <svg viewBox="0 0 40 40" className="relative h-7 w-7" fill="none" aria-hidden="true">
          <path
            d="M31 12.5A13.5 13.5 0 1 0 33.5 20v-2.4h-9"
            stroke="white"
            strokeWidth="3.4"
            strokeLinecap="round"
          />
          <path
            d="M24 22.5 30.8 15.7 35 20"
            stroke="#3ED9A2"
            strokeWidth="3.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="20" cy="20" r="3.1" fill="#3ED9A2" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-display text-[22px] font-semibold tracking-[-0.04em] sm:text-[24px] ${word}`}>
          growth
        </span>
        <span className={`mt-1 font-sans text-[8px] font-semibold uppercase tracking-[0.34em] sm:text-[8.5px] ${sub}`}>
          Contabilidade
        </span>
      </span>
    </span>
  );
}
