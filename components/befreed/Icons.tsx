import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function ChevronDown(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path d="m5 7.5 5 5 5-5" fill="none" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

export function SearchIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <circle cx="10.7" cy="10.7" r="6.2" fill="currentColor" />
      <path d="m15.3 15.3 5 5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

export function GiftIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M4 10h16v10H4zM3 7h18v4H3zM12 7v13" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 7c-4.8.5-5.9-4.5-2.4-4.5C11.3 2.5 12 7 12 7Zm0 0c4.8.5 5.9-4.5 2.4-4.5C12.7 2.5 12 7 12 7Z" fill="none" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export function GlobeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path d="M4 12h16M12 4c2.2 2.2 3.2 4.9 3.2 8s-1 5.8-3.2 8c-2.2-2.2-3.2-4.9-3.2-8S9.8 6.2 12 4Z" fill="none" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M4 6h16M4 12h16M4 18h16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function PlayIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="m9 6 9 6-9 6Z" fill="currentColor" />
    </svg>
  );
}

export function PauseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M7 6h3.5v12H7zm6.5 0H17v12h-3.5z" fill="currentColor" />
    </svg>
  );
}

export function DownloadIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M12 3v11m0 0 4-4m-4 4-4-4M5 15v5h14v-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowUpRight(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M7 17 17 7M9 7h8v8" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
