import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";

interface CircularSpinningBadgeProps {
  text?: string;
  className?: string;
  size?: number; // diameter in px
  to?: string;
}

export function CircularSpinningBadge({
  text = "PM SURYA GHAR YOJANA • GOVT SUBSIDY • ",
  className = "",
  size = 110,
  to = "/subsidy-guide",
}: CircularSpinningBadgeProps) {
  // SVG coordinates for a circle path centered at (100, 100) with radius 64
  const pathId = "circular-text-path";
  const r = 64;
  const pathD = `M 100, 100 m -${r}, 0 a ${r},${r} 0 1,1 ${r * 2},0 a ${r},${r} 0 1,1 -${r * 2},0`;

  const content = (
    <div
      className={`group relative flex items-center justify-center select-none cursor-pointer ${className}`}
      style={{ width: size, height: size }}
      title="PM Surya Ghar Yojana - Click to learn about subsidies"
    >
      {/* Outer ambient glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-500/25 via-primary/30 to-amber-400/20 blur-md transition-all duration-300 group-hover:scale-115 group-hover:opacity-100 opacity-75" />

      {/* Rotating SVG with curved circular text */}
      <svg
        viewBox="0 0 200 200"
        className="absolute inset-0 h-full w-full animate-spin-slow group-hover:[animation-duration:8s] transition-all"
        style={{ transformOrigin: "center" }}
      >
        <defs>
          <path id={pathId} d={pathD} fill="none" />
        </defs>

        <text className="fill-foreground font-display text-[14px] font-extrabold uppercase tracking-[0.24em] transition-colors group-hover:fill-primary">
          <textPath href={`#${pathId}`} startOffset="0%">
            {text}
          </textPath>
        </text>
      </svg>

      {/* Center stationary gently pulsing solar emblem */}
      <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 via-primary to-amber-500 text-primary-foreground shadow-lift ring-2 ring-background transition-transform duration-300 group-hover:scale-110">
        <Sparkles className="h-5 w-5 animate-pulse text-primary-foreground" aria-hidden />
      </div>
    </div>
  );

  if (to) {
    return (
      <Link to={to} className="inline-block transition-transform active:scale-95">
        {content}
      </Link>
    );
  }

  return content;
}
