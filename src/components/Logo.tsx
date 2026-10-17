import { Link } from "@tanstack/react-router";
import { BUSINESS } from "@/lib/config";

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5" aria-label="Surrya Gen Power - Powered by Atria home">
      <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-soft">
        {/* Atria apex / renewable arch emblem */}
        <svg viewBox="0 0 28 28" className="h-6 w-6" fill="currentColor">
          <path d="M14 3L2 23h5.2l6.8-11.8L20.8 23H26L14 3z" />
          <path d="M14 14.5L10 21.5h8L14 14.5z" opacity="0.85" />
        </svg>
      </span>
      <span className="leading-tight">
        <span className="block font-display text-base sm:text-lg font-bold tracking-tight text-foreground whitespace-nowrap">
          Surrya Gen Power
        </span>
        <span className="block text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.15em] text-primary whitespace-nowrap">
          Powered by Atria
        </span>
      </span>
    </Link>
  );
}
