import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Globe, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";
import { BUSINESS, NAV_LINKS, telLink, whatsappLink } from "@/lib/config";

export function Footer() {
  return (
    <footer className="border-t border-border bg-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-muted-foreground leading-relaxed">
            {BUSINESS.tagline}. Rooftop solar solutions for homes and businesses across{" "}
            {BUSINESS.region}.
          </p>
          <p className="mt-2 text-xs font-semibold text-primary">{BUSINESS.teluguTagline}</p>
        </div>
        <nav aria-label="Footer navigation">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Pages</h3>
          <ul className="mt-4 grid grid-cols-2 gap-2">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-sm text-muted-foreground hover:text-foreground">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground">
                Terms &amp; Conditions
              </Link>
            </li>
            <li className="col-span-2 pt-2 border-t border-border/60 text-xs font-bold uppercase tracking-wider text-primary">
              City Solar Centers
            </li>
            <li>
              <Link
                to="/solar-kadapa"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Solar in Kadapa
              </Link>
            </li>
            <li>
              <Link
                to="/solar-tirupati"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Solar in Tirupati
              </Link>
            </li>
            <li>
              <Link
                to="/solar-chittoor"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Solar in Chittoor
              </Link>
            </li>
          </ul>
        </nav>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li>
              <a
                href={telLink(BUSINESS.phone)}
                className="flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <Phone className="h-4 w-4 text-primary shrink-0" aria-hidden /> {BUSINESS.phone}
              </a>
            </li>
            <li>
              <a
                href={telLink(BUSINESS.secondaryPhone)}
                className="flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <Phone className="h-4 w-4 text-primary shrink-0" aria-hidden />{" "}
                {BUSINESS.secondaryPhone}
              </a>
            </li>
            <li>
              <a
                href={BUSINESS.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <Globe className="h-4 w-4 text-primary shrink-0" aria-hidden /> {BUSINESS.website}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${BUSINESS.email}`}
                className="flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <Mail className="h-4 w-4 text-primary shrink-0" aria-hidden /> {BUSINESS.email}
              </a>
            </li>
            <li>
              <a
                href="mailto:gnanasurrya@gmail.com"
                className="flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <Mail className="h-4 w-4 text-primary shrink-0" aria-hidden /> gnanasurrya@gmail.com
              </a>
            </li>
            <li>
              <a
                href="mailto:atriasolar5859@gmail.com"
                className="flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <Mail className="h-4 w-4 text-primary shrink-0" aria-hidden />{" "}
                atriasolar5859@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />{" "}
              {BUSINESS.address}
            </li>
          </ul>
          <a
            href={whatsappLink(
              `Hello ${BUSINESS.brandName}, I would like to enquire about solar solutions.`,
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
          >
            <MessageCircle className="h-4 w-4" aria-hidden />
            Chat on WhatsApp
          </a>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2">
        <span>
          © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
        </span>
        <span className="hidden sm:inline text-border">•</span>
        <span>
          Built by{" "}
          <a
            href="https://dailsmart.in"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-primary hover:underline transition-colors tracking-wide"
          >
            DAILSMART.IN
          </a>
        </span>
      </div>
    </footer>
  );
}
