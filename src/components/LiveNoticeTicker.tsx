import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Sparkles, ArrowRight, Bell, ShieldCheck, Zap } from "lucide-react";

const ANNOUNCEMENTS = [
  {
    tag: "PM Surya Ghar",
    text: "Direct Central Government Subsidies up to ₹78,000 for Rooftop Solar in Rayalaseema & Andhra Pradesh.",
    linkText: "Check Subsidy",
    to: "/subsidy-guide",
  },
  {
    tag: "AP Discom Update",
    text: "Fast-track Net Metering approvals active across SPDCL & EPDCL regions for 3kW – 10kW systems.",
    linkText: "Learn More",
    to: "/about",
  },
  {
    tag: "Solar Savings",
    text: "Zero-down financing options available with verified 3 to 4 year return on investment.",
    linkText: "Calculate Savings",
    to: "/calculator",
  },
  {
    tag: "Free Site Visit",
    text: "Book your free shadow analysis & solar feasibility inspection in Kadapa, Tirupati, Chittoor & Kurnool.",
    linkText: "Book Inspection",
    to: "/contact",
  },
];

export function LiveNoticeTicker() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % ANNOUNCEMENTS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const activeNotice = ANNOUNCEMENTS[index % ANNOUNCEMENTS.length]!;

  return (
    <div className="border-b border-amber-500/20 bg-gradient-to-r from-amber-500/10 via-primary/10 to-amber-500/10 py-1.5 px-4 text-xs">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
        {/* Notice Badge & Fading Content */}
        <div className="flex items-center gap-2 overflow-hidden flex-1">
          <div className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-amber-500/20 px-2.5 py-0.5 font-bold text-foreground ring-1 ring-amber-500/30">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500" />
            </span>
            <Bell className="h-3 w-3 text-amber-600" />
            <span className="text-[11px] uppercase tracking-wider">{activeNotice.tag}</span>
          </div>

          <div className="truncate text-foreground/90 font-medium transition-all duration-300">
            {activeNotice.text}
          </div>
        </div>

        {/* Dynamic CTA Link */}
        <Link
          to={activeNotice.to}
          className="shrink-0 hidden sm:inline-flex items-center gap-1 font-bold text-primary hover:underline group text-[11px]"
        >
          <span>{activeNotice.linkText}</span>
          <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </div>
  );
}
