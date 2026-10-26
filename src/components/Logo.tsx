import { Link } from "@tanstack/react-router";
import surryagenLogo from "@/assets/surryagen-logo.png";

export function Logo() {
  return (
    <Link
      to="/"
      className="group flex items-center gap-2.5 transition-transform duration-200 active:scale-98"
      aria-label="Surrya Gen Power - Channel Partner of Atria home"
    >
      <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl overflow-hidden bg-white shadow-soft ring-2 ring-primary/20 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lift group-hover:ring-primary/40">
        <img
          src={surryagenLogo}
          alt="Surrya Gen Power logo"
          className="h-full w-full object-contain"
        />
      </span>
      <span className="leading-tight">
        <span className="block font-display text-base sm:text-lg font-bold tracking-tight text-foreground transition-colors group-hover:text-primary whitespace-nowrap">
          Surrya Gen Power
        </span>
        <span className="flex items-center gap-1 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.16em] text-primary whitespace-nowrap">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Powered by Channel Partner
        </span>
      </span>
    </Link>
  );
}
