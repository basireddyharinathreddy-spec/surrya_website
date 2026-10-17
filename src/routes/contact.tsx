import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { Phone, Mail, MapPin, MessageCircle, Globe } from "lucide-react";
import { EnquiryForm } from "@/components/EnquiryForm";
import { SectionHeading } from "@/components/SectionHeading";
import { BUSINESS, telLink, whatsappLink } from "@/lib/config";

const contactSearchSchema = z.object({
  package: z.string().optional(),
  area: z.string().optional(),
  service: z.string().optional(),
  monthlyBill: z.string().optional(),
});

export const Route = createFileRoute("/contact")({
  validateSearch: (search) => contactSearchSchema.parse(search),
  head: () => ({
    meta: [
      { title: `Contact Us — ${BUSINESS.name}` },
      { name: "description", content: `Get a free rooftop solar quote from ${BUSINESS.name}. Call, WhatsApp, or send an enquiry across Andhra Pradesh.` },
      { property: "og:title", content: `Contact Us — ${BUSINESS.name}` },
      { property: "og:description", content: `Get a free solar quote for your home or business in Andhra Pradesh.` },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <section className="bg-cream py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Contact Us"
          title="Get your free solar quote"
          description="Reach us by phone, WhatsApp, or the enquiry form — whichever suits you."
        />
        <div className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            {/* Primary Phone */}
            <a
              href={telLink(BUSINESS.phone)}
              className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft transition-transform hover:-translate-y-0.5 hover:border-primary/50"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-solar-soft">
                <Phone className="h-5 w-5 text-primary" aria-hidden />
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Primary Contact</span>
                <span className="font-bold">{BUSINESS.phone}</span>
              </span>
            </a>

            {/* Secondary Phone */}
            <a
              href={telLink(BUSINESS.secondaryPhone)}
              className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft transition-transform hover:-translate-y-0.5 hover:border-primary/50"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-solar-soft">
                <Phone className="h-5 w-5 text-primary" aria-hidden />
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Alternate Contact</span>
                <span className="font-bold">{BUSINESS.secondaryPhone}</span>
              </span>
            </a>

            {/* WhatsApp */}
            <a
              href={whatsappLink(`Hello ${BUSINESS.brandName}, I would like to enquire about solar solutions.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft transition-transform hover:-translate-y-0.5 hover:border-primary/50"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-solar-soft">
                <MessageCircle className="h-5 w-5 text-primary" aria-hidden />
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">WhatsApp</span>
                <span className="font-bold">Chat with us ({BUSINESS.phone})</span>
              </span>
            </a>

            {/* Website URL */}
            <a
              href={BUSINESS.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft transition-transform hover:-translate-y-0.5 hover:border-primary/50"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-solar-soft">
                <Globe className="h-5 w-5 text-primary" aria-hidden />
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Official Website</span>
                <span className="font-bold text-primary">{BUSINESS.website}</span>
              </span>
            </a>

            {/* Email */}
            <a
              href={`mailto:${BUSINESS.email}`}
              className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft transition-transform hover:-translate-y-0.5 hover:border-primary/50"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-solar-soft">
                <Mail className="h-5 w-5 text-primary" aria-hidden />
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Email</span>
                <span className="font-bold">{BUSINESS.email}</span>
              </span>
            </a>

            {/* Region / Address */}
            <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-solar-soft">
                <MapPin className="h-5 w-5 text-primary" aria-hidden />
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Region</span>
                <span className="font-bold">{BUSINESS.address}</span>
              </span>
            </div>
          </div>
          <div className="lg:col-span-3">
            <EnquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
}
