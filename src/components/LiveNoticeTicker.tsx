import { Link } from "@tanstack/react-router";
import { ArrowRight, Bell, Sparkles } from "lucide-react";

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
  // Duplicate array for seamless infinite horizontal loop
  const infiniteList = [...ANNOUNCEMENTS, ...ANNOUNCEMENTS];

  return (
    <div className="relative border-b border-amber-500/20 bg-gradient-to-r from-amber-500/10 via-primary/10 to-amber-500/10 py-2 text-xs overflow-hidden select-none">
      {/* Left/Right soft edge gradient fades for smooth infinite flow */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-16 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-16 bg-gradient-to-l from-background via-background/80 to-transparent z-10" />

      {/* Horizontal Infinity Loop Marquee Track */}
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center">
        {infiniteList.map((item, idx) => (
          <div key={`${item.tag}-${idx}`} className="flex items-center shrink-0">
            {/* Clickable Announcement Item */}
            <Link
              to={item.to}
              className="group inline-flex items-center gap-2.5 px-4 transition-colors hover:text-primary"
            >
              {/* Badge Pill */}
              <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/20 px-2.5 py-0.5 text-[11px] font-bold text-foreground ring-1 ring-amber-500/30">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-500 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500" />
                </span>
                <Bell className="h-3 w-3 text-amber-600" />
                <span className="uppercase tracking-wider">{item.tag}</span>
              </span>

              {/* Announcement Text */}
              <span className="font-medium text-foreground/90 group-hover:text-foreground">
                {item.text}
              </span>

              {/* Call to Action */}
              <span className="inline-flex items-center gap-1 font-bold text-primary group-hover:underline text-[11px]">
                <span>{item.linkText}</span>
                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>

            {/* Separator between ticker items */}
            <div className="flex items-center px-4 text-amber-500/50" aria-hidden>
              <Sparkles className="h-3 w-3" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
