import { useState, useEffect, useRef } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  Phone,
  MessageCircle,
  Sparkles,
  Home,
  Sun,
  Building2,
  Package,
  Calculator,
  Landmark,
  MapPin,
  Info,
  PhoneCall,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import { Logo } from "./Logo";
import { LiveNoticeTicker } from "./LiveNoticeTicker";
import { NAV_LINKS, BUSINESS, telLink, whatsappLink } from "@/lib/config";

// Map nav links to icons for mobile navigation and enriched desktop cues
const linkIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "/": Home,
  "/residential": Sun,
  "/commercial": Building2,
  "/packages": Package,
  "/calculator": Calculator,
  "/subsidy-guide": Landmark,
  "/service-areas": MapPin,
  "/about": Info,
  "/contact": PhoneCall,
};

const ABOUT_SUBPAGES = [
  {
    to: "/about",
    label: "Company Overview",
    description: "Who we are, mission & values in Rayalaseema",
    icon: Info,
  },
  {
    to: "/residential",
    label: "Residential Solar",
    description: "Rooftop solar tailored for individual homes",
    icon: Sun,
    badge: "Subsidy Eligible",
  },
  {
    to: "/commercial",
    label: "Commercial Solar",
    description: "Solar systems for businesses, shops & schools",
    icon: Building2,
    badge: "ROI Fast",
  },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  const isAboutActive =
    currentPath === "/about" ||
    currentPath === "/residential" ||
    currentPath === "/commercial";

  // Monitor scroll for sticky header elevation effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setAboutDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (aboutDropdownOpen) setAboutDropdownOpen(false);
        if (open) setOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [aboutDropdownOpen, open]);

  // Handle body scrolling lock when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/80 bg-background/95 backdrop-blur-md shadow-soft"
          : "border-b border-border/50 bg-background/85 backdrop-blur-sm"
      }`}
    >
      {/* Dynamic Announcement Ticker (RVSU inspiration) */}
      <LiveNoticeTicker />

      {/* Main Navigation Bar */}
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Logo />

        {/* Desktop Navigation Pill Dock */}
        <nav
          className="hidden items-center gap-0.5 xl:gap-1 rounded-full border border-border/60 bg-muted/40 p-1 shadow-2xs backdrop-blur-md lg:flex"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((link) => {
            const isSubsidy = link.to === "/subsidy-guide";
            const isCalc = link.to === "/calculator";
            const isAbout = link.to === "/about";

            if (isAbout) {
              return (
                <div
                  key={link.to}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={() => setAboutDropdownOpen(true)}
                  onMouseLeave={() => setAboutDropdownOpen(false)}
                >
                  <div className="flex items-center">
                    <Link
                      to="/about"
                      onClick={() => setAboutDropdownOpen(false)}
                      className={`group relative flex items-center gap-1 rounded-full px-2.5 py-1.5 text-xs xl:text-[13px] font-semibold transition-all duration-200 hover:bg-background/90 hover:text-foreground hover:shadow-2xs active:scale-95 ${
                        isAboutActive
                          ? "bg-background text-foreground font-bold shadow-xs ring-1 ring-border/80"
                          : "text-muted-foreground"
                      }`}
                    >
                      <span>About</span>
                    </Link>
                    <button
                      type="button"
                      aria-label="Toggle About Submenu"
                      aria-expanded={aboutDropdownOpen}
                      onClick={() => setAboutDropdownOpen((prev) => !prev)}
                      className="p-1 -ml-1 text-muted-foreground hover:text-foreground rounded-full transition-colors"
                    >
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform duration-200 ${
                          aboutDropdownOpen ? "rotate-180 text-primary" : ""
                        }`}
                      />
                    </button>
                  </div>

                  {/* Desktop Dropdown Flyout Panel */}
                  {aboutDropdownOpen && (
                    <div className="absolute left-0 top-full pt-2 z-50 w-72 animate-in fade-in-0 zoom-in-95 duration-150">
                      <div className="rounded-2xl border border-border/80 bg-background/98 p-2 shadow-lift backdrop-blur-xl ring-1 ring-black/5">
                        <div className="px-3 py-2 border-b border-border/50 text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                          About &amp; Solar Solutions
                        </div>
                        <div className="mt-1 space-y-1">
                          {ABOUT_SUBPAGES.map((sub) => {
                            const SubIcon = sub.icon;
                            const isCurrent = currentPath === sub.to;
                            return (
                              <Link
                                key={sub.to}
                                to={sub.to}
                                onClick={() => setAboutDropdownOpen(false)}
                                className={`flex items-start gap-3 rounded-xl p-2.5 transition-all duration-150 ${
                                  isCurrent
                                    ? "bg-solar-soft text-primary font-semibold"
                                    : "hover:bg-muted/70 text-foreground"
                                }`}
                              >
                                <div
                                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                                    isCurrent
                                      ? "bg-primary text-primary-foreground"
                                      : "bg-muted text-foreground"
                                  }`}
                                >
                                  <SubIcon className="h-4.5 w-4.5" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center justify-between">
                                    <span className="text-xs font-bold">{sub.label}</span>
                                    {"badge" in sub && (
                                      <span className="rounded-full bg-primary/15 px-1.5 py-0.2 text-[9px] font-bold text-primary">
                                        {sub.badge}
                                      </span>
                                    )}
                                  </div>
                                  <p className="mt-0.5 text-[11px] text-muted-foreground leading-snug line-clamp-1">
                                    {sub.description}
                                  </p>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.to}
                to={link.to}
                className="group relative flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-xs xl:text-[13px] font-semibold text-muted-foreground transition-all duration-200 hover:bg-background/90 hover:text-foreground hover:shadow-2xs active:scale-95"
                activeProps={{
                  className:
                    "bg-background text-foreground font-bold shadow-xs ring-1 ring-border/80 [&>.indicator]:bg-primary",
                }}
                activeOptions={{ exact: link.to === "/" }}
              >
                <span>{link.label}</span>
                {isSubsidy && (
                  <span className="rounded-full bg-primary/15 px-1.5 py-0.5 text-[10px] font-bold text-primary ring-1 ring-primary/25">
                    ₹78k
                  </span>
                )}
                {isCalc && (
                  <span className="rounded-full bg-emerald-500/15 px-1.5 py-0.5 text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
                    Free
                  </span>
                )}
                <span className="indicator hidden h-1.5 w-1.5 rounded-full bg-transparent group-hover:bg-primary/40 transition-colors" />
              </Link>
            );
          })}
        </nav>

        {/* Desktop Quick Actions */}
        <div className="hidden items-center gap-2.5 lg:flex">
          {/* Quick WhatsApp Action */}
          <a
            href={whatsappLink(`Hello ${BUSINESS.brandName}, I would like to enquire about solar packages.`)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instant WhatsApp Consultation"
            title="Chat on WhatsApp"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-300/80 bg-emerald-50 text-emerald-600 shadow-2xs transition-all duration-200 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 hover:shadow-soft hover:scale-105 active:scale-95"
          >
            <MessageCircle className="h-4.5 w-4.5" aria-hidden />
          </a>

          {/* Call CTA with glowing status beacon and solar gradient */}
          <a
            href={telLink()}
            className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-xl bg-gradient-to-r from-amber-500 via-primary to-amber-600 px-4 py-2.5 text-xs xl:text-sm font-bold text-white shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lift hover:brightness-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
            </span>
            <Phone className="h-4 w-4 transition-transform group-hover:rotate-12" aria-hidden />
            <span className="tracking-tight">{BUSINESS.phone}</span>
          </a>
        </div>

        {/* Modern Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-border/80 bg-card text-foreground shadow-xs transition-all duration-200 hover:bg-solar-soft hover:border-primary/40 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 active:scale-95 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        >
          <div className="relative h-4 w-5 flex flex-col justify-between" aria-hidden>
            <span
              className={`h-0.5 w-5 rounded-full bg-foreground transition-all duration-300 ease-in-out ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 rounded-full bg-foreground transition-all duration-200 ease-in-out ${
                open ? "opacity-0 scale-x-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-0.5 w-5 rounded-full bg-foreground transition-all duration-300 ease-in-out ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Navigation Drawer & Backdrop */}
      {open && (
        <>
          {/* Backdrop Overlay */}
          <div
            className="fixed inset-0 top-16 z-40 bg-black/40 backdrop-blur-xs transition-opacity duration-300 lg:hidden"
            onClick={() => setOpen(false)}
            aria-hidden
          />

          {/* Slide-Down Mobile Navigation Panel */}
          <nav
            id="mobile-navigation"
            className="absolute left-0 right-0 top-full z-50 max-h-[calc(100vh-4.5rem)] overflow-y-auto border-b border-border/90 bg-background/98 px-5 py-5 shadow-lift backdrop-blur-xl animate-fade-up lg:hidden"
            aria-label="Mobile navigation"
          >
            {/* Mobile Header Banner */}
            <div className="mb-4 flex items-center justify-between rounded-xl bg-solar-soft p-3 text-xs">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-primary shrink-0" />
                <span className="font-semibold text-foreground">PM Surya Ghar Subsidy</span>
              </div>
              <span className="rounded-full bg-primary/20 px-2 py-0.5 font-bold text-foreground">
                Up to ₹78k
              </span>
            </div>

            <div className="space-y-1">
              {NAV_LINKS.map((link) => {
                const IconComponent = linkIcons[link.to] || Home;
                const isSubsidy = link.to === "/subsidy-guide";
                const isCalc = link.to === "/calculator";
                const isAbout = link.to === "/about";

                if (isAbout) {
                  return (
                    <div key={link.to} className="rounded-xl border border-border/60 bg-muted/20 overflow-hidden">
                      <div className="flex items-center justify-between px-3.5 py-3">
                        <Link
                          to="/about"
                          onClick={() => setOpen(false)}
                          className="flex items-center gap-3 text-sm font-semibold text-foreground flex-1"
                        >
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted text-foreground">
                            <Info className="h-4 w-4" />
                          </div>
                          <span>About</span>
                        </Link>
                        <button
                          type="button"
                          onClick={() => setMobileAboutOpen((prev) => !prev)}
                          aria-label="Expand About Subpages"
                          className="p-1 text-muted-foreground hover:text-foreground"
                        >
                          <ChevronDown
                            className={`h-4 w-4 transition-transform duration-200 ${
                              mobileAboutOpen ? "rotate-180 text-primary" : ""
                            }`}
                          />
                        </button>
                      </div>

                      {/* Accordion sub-links under About in mobile menu */}
                      {mobileAboutOpen && (
                        <div className="border-t border-border/40 bg-background/50 px-3 py-2 space-y-1">
                          {ABOUT_SUBPAGES.map((sub) => {
                            const SubIcon = sub.icon;
                            return (
                              <Link
                                key={sub.to}
                                to={sub.to}
                                onClick={() => setOpen(false)}
                                className="flex items-center justify-between rounded-lg px-3 py-2 text-xs font-semibold text-foreground hover:bg-muted"
                                activeProps={{
                                  className: "bg-solar-soft text-primary font-bold",
                                }}
                              >
                                <div className="flex items-center gap-2.5">
                                  <SubIcon className="h-3.5 w-3.5 text-primary" />
                                  <span>{sub.label}</span>
                                </div>
                                {"badge" in sub && (
                                  <span className="rounded-full bg-primary/15 px-1.5 py-0.5 text-[9px] font-bold text-primary">
                                    {sub.badge}
                                  </span>
                                )}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-xl px-3.5 py-3 text-sm font-semibold text-foreground transition-all duration-200 hover:bg-muted active:scale-[0.99]"
                    activeProps={{
                      className:
                        "bg-solar-soft text-primary font-bold border-l-4 border-primary pl-3 shadow-2xs",
                    }}
                    activeOptions={{ exact: link.to === "/" }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted text-foreground">
                        <IconComponent className="h-4 w-4" />
                      </div>
                      <span>{link.label}</span>
                    </div>

                    {isSubsidy ? (
                      <span className="rounded-full bg-primary/15 px-2 py-0.5 text-[11px] font-bold text-primary">
                        ₹78,000 Subsidy
                      </span>
                    ) : isCalc ? (
                      <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[11px] font-bold text-emerald-600">
                        Calculator
                      </span>
                    ) : (
                      <ArrowRight className="h-4 w-4 text-muted-foreground/60" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Quick Contact Actions inside Mobile Menu */}
            <div className="mt-5 pt-4 border-t border-border/60 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <a
                href={telLink(BUSINESS.phone)}
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 via-primary to-amber-600 px-4 py-3 text-sm font-bold text-white shadow-soft transition-transform active:scale-95"
              >
                <Phone className="h-4 w-4" aria-hidden />
                Call {BUSINESS.phone}
              </a>
              <a
                href={telLink(BUSINESS.secondaryPhone)}
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-sm font-semibold text-foreground shadow-soft transition-transform active:scale-95 hover:bg-muted"
              >
                <Phone className="h-4 w-4 text-primary" aria-hidden />
                Call {BUSINESS.secondaryPhone}
              </a>
              <a
                href={whatsappLink(`Hello ${BUSINESS.brandName}, I would like to enquire about solar packages.`)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl border border-emerald-300 bg-emerald-50 px-4 py-3 text-sm font-bold text-emerald-700 shadow-soft transition-transform active:scale-95 hover:bg-emerald-100 sm:col-span-2"
              >
                <MessageCircle className="h-4.5 w-4.5 text-emerald-600" aria-hidden />
                Chat on WhatsApp ({BUSINESS.phone})
              </a>
            </div>
          </nav>
        </>
      )}
    </header>
  );
}
