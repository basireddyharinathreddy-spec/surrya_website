import { Link } from "@tanstack/react-router";

export function Logo() {
  return (
    <Link
      to="/"
      className="group flex items-center gap-2.5 transition-transform duration-200 active:scale-98"
      aria-label="Surrya Gen Power - Powered by Atria home"
    >
      <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 via-primary to-amber-600 text-white shadow-soft ring-2 ring-primary/20 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lift group-hover:ring-primary/40">
        {/* Atria apex / renewable arch emblem */}
        <svg viewBox="0 0 28 28" className="h-5.5 w-5.5 drop-shadow-xs" fill="currentColor">
          <path d="M14 3L2 23h5.2l6.8-11.8L20.8 23H26L14 3z" />
          <path d="M14 14.5L10 21.5h8L14 14.5z" opacity="0.9" />
        </svg>
        <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-amber-300 ring-2 ring-background animate-pulse" />
      </span>
      <span className="leading-tight">
        <span className="block font-display text-base sm:text-lg font-bold tracking-tight text-foreground transition-colors group-hover:text-primary whitespace-nowrap">
          Surrya Gen Power
        </span>
        <span className="flex items-center gap-1 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.16em] text-primary whitespace-nowrap">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Powered by Atria
        </span>
      </span>
    </Link>
  );
}

