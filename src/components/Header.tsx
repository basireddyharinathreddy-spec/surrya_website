import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Phone, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";
import { NAV_LINKS, BUSINESS, telLink, whatsappLink } from "@/lib/config";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll for sticky header elevation effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle Escape key to close mobile menu & prevent body scrolling when open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
      }
    };

    if (open) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/80 bg-background/95 backdrop-blur-md shadow-sm"
          : "border-b border-border/50 bg-background/85 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 xl:gap-1.5 lg:flex" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="relative rounded-lg px-2.5 py-1.5 text-sm font-medium text-muted-foreground transition-all duration-200 hover:bg-muted/80 hover:text-foreground active:scale-95"
              activeProps={{
                className: "bg-solar-soft text-foreground font-semibold ring-1 ring-primary/20",
              }}
              activeOptions={{ exact: link.to === "/" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Quick Action */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={telLink()}
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lift active:scale-95 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            <Phone className="h-4 w-4" aria-hidden />
            <span>{BUSINESS.phone}</span>
          </a>
        </div>

        {/* Modern Mobile Menu Button (Hamburger to 'X' animated transformation) */}
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
            <div className="space-y-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-foreground transition-all duration-200 hover:bg-muted active:scale-[0.99]"
                  activeProps={{
                    className: "bg-solar-soft text-primary font-bold border-l-4 border-primary pl-3.5",
                  }}
                  activeOptions={{ exact: link.to === "/" }}
                >
                  <span>{link.label}</span>
                </Link>
              ))}
            </div>

            {/* Quick Contact Actions inside Mobile Menu */}
            <div className="mt-5 pt-4 border-t border-border/60 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <a
                href={telLink(BUSINESS.phone)}
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-transform active:scale-95"
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
                className="flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-sm font-semibold text-foreground shadow-soft transition-transform active:scale-95 hover:bg-muted sm:col-span-2"
              >
                <MessageCircle className="h-4 w-4 text-primary" aria-hidden />
                Chat on WhatsApp ({BUSINESS.phone})
              </a>
            </div>
          </nav>
        </>
      )}
    </header>
  );
}
