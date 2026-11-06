import Image from "next/image";
import { site } from "@/content";

/** The full logo from the brand pack. Its font is embedded in the SVG. */
export function Logo() {
  return (
    <Image
      src="/brand/listinglabs-logo.svg"
      alt={site.name}
      width={174}
      height={30}
      priority
      unoptimized
    />
  );
}

/** The app icon from the brand pack, drawn inline. */
export function LogoIcon({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 74 74"
      aria-hidden="true"
      className="flex-none"
    >
      <rect width="74" height="74" rx="20" fill="#06141B" />
      <g transform="translate(14 14) scale(1.0455)">
        <path
          d="M7 21 L22 9 L37 21 V36 H7 Z"
          stroke="#CCD0CF"
          strokeWidth="5"
          fill="none"
          strokeLinejoin="round"
        />
        <path
          d="M17 36 V27 H27 V36"
          stroke="#CCD0CF"
          strokeWidth="4.5"
          fill="none"
          strokeLinejoin="round"
        />
        <circle cx="35" cy="9" r="4.5" fill="#9BA8AB" />
      </g>
    </svg>
  );
}
