import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Globe,
  Clock,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import heroImg from "@/assets/hero-home.jpg";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { EnquiryForm } from "@/components/EnquiryForm";
import { FAQ } from "@/components/FAQ";
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
      { title: `Contact Surrya Gen Power | Free Solar Quote Kadapa, Tirupati, Chittoor` },
      {
        name: "description",
        content: `Get a free rooftop solar quote and site assessment from ${BUSINESS.name}. Call ${BUSINESS.phone}, WhatsApp, or submit an enquiry across Kadapa, Tirupati, Chittoor & Rayalaseema.`,
      },
      {
        property: "og:title",
        content: `Contact Surrya Gen Power | Free Solar Quote Kadapa, Tirupati, Chittoor`,
      },
      {
        property: "og:description",
        content: `Get a free solar quote for your home or business in Kadapa, Tirupati, Chittoor and Rayalaseema from ${BUSINESS.name}.`,
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.surryagenpower.in/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.surryagenpower.in/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "@id": "https://www.surryagenpower.in/contact#webpage",
          url: "https://www.surryagenpower.in/contact",
          name: "Contact Surrya Gen Power",
          description:
            "Contact Surrya Gen Power for rooftop solar consultation, quotes, and PM Surya Ghar subsidy processing across Rayalaseema, Andhra Pradesh.",
          mainEntity: {
            "@type": "LocalBusiness",
            name: "Surrya Gen Power",
            telephone: "+919391927443",
            email: "atriasolar5859@gmail.com",
            url: "https://www.surryagenpower.in",
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: "+919391927443",
                contactType: "customer service",
                areaServed: "IN",
                availableLanguage: ["English", "Telugu", "Hindi"],
              },
            ],
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.surryagenpower.in/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Contact Us",
              item: "https://www.surryagenpower.in/contact",
            },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "How fast will someone contact me after I submit this form?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Our customer advisory desk reviews incoming enquiries continually and typically calls back within 1 to 2 business hours (Monday to Saturday, 9 AM – 7 PM).",
              },
            },
            {
              "@type": "Question",
              name: "Is there any fee or commitment for a site inspection?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "None at all. Preliminary site inspections, roof shadow evaluations, and feasibility estimations are completely complimentary with zero commitment required.",
              },
            },
            {
              "@type": "Question",
              name: "What details should I have ready when your team calls?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Having your latest monthly electricity bill (specifically your average monthly units consumed or bill amount in rupees) and an approximate idea of your roof area is all that is required.",
              },
            },
            {
              "@type": "Question",
              name: "Can I discuss both residential and commercial solar installations?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes! Our engineering team handles residential 3 kW–10 kW PM Surya Ghar projects as well as 10 kW–250+ kW commercial, educational, and industrial rooftop projects.",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: Contact,
});

const responsePillars = [
  {
    icon: Clock,
    title: "Fast 2-Hour Response",
    desc: "Our solar team responds to all phone, WhatsApp, and form enquiries within 2 operational hours.",
  },
  {
    icon: ShieldCheck,
    title: "100% Free Site Survey",
    desc: "Zero-charge, zero-obligation on-site roof measurement and shadow assessment across Rayalaseema.",
  },
  {
    icon: Sparkles,
    title: "Transparent Quotations",
    desc: "Itemized proposals with panel brand, inverter specifications, structure details, and net subsidy deductions.",
  },
];

const contactFaqs = [
  {
    q: "How fast will someone contact me after I submit this form?",
    a: "Our customer advisory desk reviews incoming enquiries continually and typically calls back within 1 to 2 business hours (Monday to Saturday, 9 AM – 7 PM).",
  },
  {
    q: "Is there any fee or commitment for a site inspection?",
    a: "None at all. Preliminary site inspections, roof shadow evaluations, and feasibility estimations are completely complimentary with zero commitment required.",
  },
  {
    q: "What details should I have ready when your team calls?",
    a: "Having your latest monthly electricity bill (specifically your average monthly units consumed or bill amount in rupees) and an approximate idea of your roof area is all that is required.",
  },
  {
    q: "Can I discuss both residential and commercial solar installations?",
    a: "Yes! Our engineering team handles residential 3 kW–10 kW PM Surya Ghar projects as well as 10 kW–250+ kW commercial, educational, and industrial rooftop projects.",
  },
];

function Contact() {
  return (
    <div>
      {/* RICH PAGE HERO */}
      <PageHero
        eyebrow="Contact & Consultation"
        title="Get Your Free Rooftop Solar Quote & Site Inspection"
        description={`Reach out to ${BUSINESS.name} for honest solar guidance, 3D roof layouts, and PM Surya Ghar subsidy processing. Connect with us via phone, WhatsApp, or the enquiry form.`}
        image={heroImg}
        imageAlt="Consultant assisting homeowner with rooftop solar enquiry"
        badge="Response Time: Under 2 Hours"
        badgeIcon={<Clock className="h-4 w-4 text-emerald-500" />}
      />

      {/* 3 HIGHLIGHT PILLARS */}
      <section className="bg-cream border-b border-border py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-3">
            {responsePillars.map((p) => (
              <div key={p.title} className="flex items-start gap-3.5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-solar-soft text-primary font-bold">
                  <p.icon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">{p.title}</h4>
                  <p className="mt-0.5 text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN CONTACT INTERFACE */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Direct Channels & Online Enquiry"
          description="Choose whichever channel is most convenient for you — our team is ready to assist."
        />

        <div className="mx-auto mt-12 grid max-w-6xl gap-8 lg:grid-cols-5">
          {/* DIRECT CONTACT CARDS (2 COLUMNS) */}
          <div className="space-y-3.5 lg:col-span-2">
            {/* Primary Phone */}
            <a
              href={telLink(BUSINESS.phone)}
              className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-lift"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-solar-soft text-primary">
                <Phone className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <span className="block text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Primary Contact
                </span>
                <span className="font-bold text-foreground text-sm sm:text-base">
                  {BUSINESS.phone}
                </span>
              </div>
            </a>

            {/* Secondary Phone */}
            <a
              href={telLink(BUSINESS.secondaryPhone)}
              className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-lift"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-solar-soft text-primary">
                <Phone className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <span className="block text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Alternate Contact
                </span>
                <span className="font-bold text-foreground text-sm sm:text-base">
                  {BUSINESS.secondaryPhone}
                </span>
              </div>
            </a>

            {/* Direct WhatsApp Action */}
            <a
              href={whatsappLink(
                `Hello ${BUSINESS.brandName}, I would like to enquire about rooftop solar and subsidy guidance.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-4 shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-500/60 hover:shadow-lift"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500 text-white shadow-xs">
                <MessageCircle className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <span className="block text-[11px] font-semibold uppercase tracking-wider text-emerald-700">
                  Instant WhatsApp Chat
                </span>
                <span className="font-bold text-emerald-800 text-sm sm:text-base">
                  Click to Chat Now ({BUSINESS.phone})
                </span>
              </div>
            </a>

            {/* Official Website */}
            <a
              href={BUSINESS.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-lift"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-solar-soft text-primary">
                <Globe className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <span className="block text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Official Website
                </span>
                <span className="font-bold text-primary text-sm sm:text-base">
                  {BUSINESS.website}
                </span>
              </div>
            </a>

            {/* Primary Email */}
            <a
              href="mailto:atriasolar5859@gmail.com"
              className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-lift"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-solar-soft text-primary">
                <Mail className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <span className="block text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Primary Email
                </span>
                <span className="font-bold text-foreground text-sm sm:text-base">
                  atriasolar5859@gmail.com
                </span>
              </div>
            </a>

            {/* Alternate Email */}
            <a
              href="mailto:gnanasurrya@gmail.com"
              className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/50"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-solar-soft text-primary">
                <Mail className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <span className="block text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Alternate Email
                </span>
                <span className="font-bold text-foreground text-sm">gnanasurrya@gmail.com</span>
              </div>
            </a>

            {/* Regional Address */}
            <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-soft">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-solar-soft text-primary">
                <MapPin className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <span className="block text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Operating Region
                </span>
                <span className="font-bold text-foreground text-sm">{BUSINESS.address}</span>
              </div>
            </div>
          </div>

          {/* ONLINE ENQUIRY FORM (3 COLUMNS) */}
          <div className="lg:col-span-3">
            <EnquiryForm />
          </div>
        </div>
      </section>

      {/* CONTACT FAQS */}
      <section className="bg-cream py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Consultation FAQ"
            title="What to Expect When Contacting Us"
            description="Clear expectations on how we schedule site surveys and prepare quotations."
          />
          <div className="mx-auto mt-10 max-w-3xl">
            <FAQ items={contactFaqs} />
          </div>
        </div>
      </section>
    </div>
  );
}
