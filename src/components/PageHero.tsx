import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  badge?: string;
  badgeIcon?: ReactNode;
  primaryCta?: { label: string; to: string; search?: Record<string, string> };
  secondaryCta?: { label: string; to: string };
  flip?: boolean;
}

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  badge,
  badgeIcon,
  primaryCta,
  secondaryCta,
  flip = false,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-solar-soft/30 to-background">
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" style={{ animation: "pulse 4s ease-in-out infinite" }} />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-amber-400/10 blur-3xl" style={{ animation: "pulse 4s ease-in-out infinite", animationDelay: "1.5s" }} />

      <div className={`mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2${flip ? " [&>*:first-child]:lg:order-2" : ""}`}>
        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
            {eyebrow}
          </span>
          <h1 className="mt-4 text-4xl font-extrabold text-balance leading-tight sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            {description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {primaryCta && (
              <Link
                to={primaryCta.to}
                search={primaryCta.search}
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:brightness-105 active:scale-95"
              >
                {primaryCta.label} <ArrowRight className="h-4 w-4" />
              </Link>
            )}
            {secondaryCta && (
              <Link
                to={secondaryCta.to}
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3.5 text-sm font-bold text-foreground shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:bg-muted active:scale-95"
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        </div>

        <div className="relative">
          {badge && (
            <div className="absolute -top-4 right-4 z-20 flex items-center gap-1.5 rounded-2xl bg-card/90 px-4 py-2.5 text-xs font-bold shadow-lift backdrop-blur-md border border-border" style={{ animation: "float 3s ease-in-out infinite" }}>
              {badgeIcon}
              <span>{badge}</span>
            </div>
          )}
          <img
            src={image}
            alt={imageAlt}
            width={1200}
            height={800}
            fetchPriority="high"
            className="w-full rounded-3xl object-cover shadow-lift ring-1 ring-border transition-transform duration-700 hover:scale-[1.02]"
          />
          <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-primary/10 blur-2xl" />
        </div>
      </div>
    </section>
  );
}
