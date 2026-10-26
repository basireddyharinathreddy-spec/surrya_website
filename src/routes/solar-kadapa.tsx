import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Sun,
  ShieldCheck,
  Zap,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Clock,
  IndianRupee,
  Sparkles,
  Building2,
} from "lucide-react";
import heroImg from "@/assets/hero-home.jpg";
import residentialImg from "@/assets/residential.jpg";
import installationImg from "@/assets/installation.jpg";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimatedCard, REVEAL_STYLES } from "@/components/AnimatedCard";
import { FAQ } from "@/components/FAQ";
import { SolarPackageCards } from "@/components/SolarPackageCards";
import { BUSINESS } from "@/lib/config";

export const Route = createFileRoute("/solar-kadapa")({
  head: () => ({
    meta: [
      { title: `Solar Panel Installation in Kadapa | Solar Company | ${BUSINESS.name}` },
      {
        name: "description",
        content: `Looking for solar panel installation in Kadapa? Surrya Gen Power is the trusted solar company in Kadapa offering rooftop solar installation with the best solar panels in Andhra Pradesh and ₹78,000 PM Surya Ghar subsidy.`,
      },
      {
        property: "og:title",
        content: `Solar Panel Installation in Kadapa | Solar Company | ${BUSINESS.name}`,
      },
      {
        property: "og:description",
        content: `Premier solar company in Kadapa for rooftop solar installation. We deploy the best solar panels in Andhra Pradesh with ₹78,000 subsidy & APSPDCL net metering.`,
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.surryagenpower.in/solar-kadapa" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.surryagenpower.in/solar-kadapa" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "https://www.surryagenpower.in/solar-kadapa#business",
          name: "Surrya Gen Power — Rooftop Solar Kadapa",
          url: "https://www.surryagenpower.in/solar-kadapa",
          telephone: "+919391927443",
          email: "atriasolar5859@gmail.com",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Kadapa",
            addressRegion: "Andhra Pradesh",
            addressCountry: "IN",
          },
          areaServed: [
            { "@type": "City", name: "Kadapa" },
            { "@type": "AdministrativeArea", name: "YSR Kadapa District" },
          ],
          description:
            "Surrya Gen Power is a leading solar company in Kadapa specializing in rooftop solar installation in Kadapa using the best solar panels in Andhra Pradesh.",
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
              name: "Service Areas",
              item: "https://www.surryagenpower.in/service-areas",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Rooftop Solar in Kadapa",
              item: "https://www.surryagenpower.in/solar-kadapa",
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
              name: "How does PM Surya Ghar subsidy work for homes in Kadapa?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Homeowners in Kadapa receive up to ₹78,000 direct bank transfer subsidy for residential systems of 3 kW or higher under PM Surya Ghar Muft Bijli Yojana. Surrya Gen Power handles 100% of the portal documentation and APSPDCL net-meter synchronization.",
              },
            },
            {
              "@type": "Question",
              name: "Why is Kadapa ideal for rooftop solar installation?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Kadapa experiences over 310 sunny days annually with high global horizontal irradiance (~5.0 kWh/sq.m/day), resulting in exceptional energy generation (approx. 4.2 to 4.5 units per kW installed per day).",
              },
            },
            {
              "@type": "Question",
              name: "How long does APSPDCL net-metering approval take in Kadapa?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "With our direct liaisoning at the APSPDCL Kadapa Circle Office, technical feasibility and bi-directional meter synchronization typically take 3 to 4 weeks from application.",
              },
            },
            {
              "@type": "Question",
              name: "Which areas in and around Kadapa do you serve?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We serve all Kadapa city localities including Yerramukkapalli, Nagarajupeta, RIMS Road, Akkayapalli, Chemmumiahpet, and Chinnachowk, as well as nearby towns like Proddatur, Pulivendula, Rayachoti, Kamalapuram, and Badvel.",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: SolarKadapa,
});

const kadapaAdvantages = [
  {
    icon: Sun,
    title: "5.0+ kWh/sq.m Daily Irradiance",
    desc: "Kadapa is one of the highest solar insolation regions in Andhra Pradesh, maximizing return on your solar investment.",
  },
  {
    icon: Zap,
    title: "APSPDCL Kadapa Fast-Track",
    desc: "Established net-metering workflow with Kadapa circle officials ensures seamless bidirectional meter commissioning.",
  },
  {
    icon: ShieldCheck,
    title: "High-Heat Engineered Mounting",
    desc: "Hot-dip galvanized structures designed to withstand intense Kadapa summer temperatures and high seasonal winds.",
  },
  {
    icon: Clock,
    title: "Local Engineers in Kadapa",
    desc: "Our field engineers are stationed in Kadapa for 24-hour site visits, module cleaning guidance, and prompt maintenance.",
  },
];

const kadapaNeighborhoods = [
  "Yerramukkapalli",
  "Nagarajupeta",
  "RIMS Road",
  "Akkayapalli",
  "Chemmumiahpet",
  "Chinnachowk",
  "Ravindra Nagar",
  "RTC Bus Stand Area",
  "Seven Roads Junction",
  "Proddatur",
  "Pulivendula",
  "Rayachoti",
];

const kadapaFaqs = [
  {
    q: "How does PM Surya Ghar subsidy work for homes in Kadapa?",
    a: "Homeowners in Kadapa receive up to ₹78,000 direct bank transfer subsidy for residential systems of 3 kW or higher under PM Surya Ghar Muft Bijli Yojana. Surrya Gen Power handles 100% of the portal documentation and APSPDCL net-meter synchronization.",
  },
  {
    q: "Why is Kadapa ideal for rooftop solar installation?",
    a: "Kadapa experiences over 310 sunny days annually with high global horizontal irradiance (~5.0 kWh/sq.m/day), resulting in exceptional energy generation (approx. 4.2 to 4.5 units per kW installed per day).",
  },
  {
    q: "How long does APSPDCL net-metering approval take in Kadapa?",
    a: "With our direct liaisoning at the APSPDCL Kadapa Circle Office, technical feasibility and bi-directional meter synchronization typically take 3 to 4 weeks from application.",
  },
  {
    q: "Which areas in and around Kadapa do you serve?",
    a: "We serve all Kadapa city localities including Yerramukkapalli, Nagarajupeta, RIMS Road, Akkayapalli, Chemmumiahpet, and Chinnachowk, as well as nearby towns like Proddatur, Pulivendula, Rayachoti, Kamalapuram, and Badvel.",
  },
];

function SolarKadapa() {
  return (
    <div>
      <PageHero
        eyebrow="Premier Solar Company in Kadapa"
        title="Solar Panel Installation in Kadapa"
        description="Surrya Gen Power provides turnkey rooftop solar installation in Kadapa using the best solar panels in Andhra Pradesh. Cut your power bills by up to 90% with ₹78,000 PM Surya Ghar subsidy, fast APSPDCL net metering, and 25-year performance warranty."
        image={heroImg}
        imageAlt="Solar panel installation in Kadapa by premier solar company Surrya Gen Power"
        badge="APSPDCL Net Metering Support"
        badgeIcon={<Sparkles className="h-4 w-4 text-amber-500" />}
        primaryCta={{
          label: "Book Free Survey in Kadapa",
          to: "/contact",
          search: { area: "Kadapa" },
        }}
        secondaryCta={{ label: "Calculate Savings", to: "/calculator" }}
      />

      {/* WHY KADAPA SOLAR */}
      <section className="bg-cream py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Why Choose Our Solar Company in Kadapa"
            title="Engineered with the Best Solar Panels in Andhra Pradesh"
            description="Kadapa's intense heat and solar irradiance require precision engineering. We deploy Tier-1 TOPCon modules and dual-MPPT inverters built to deliver peak rooftop solar installation performance year-round."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {kadapaAdvantages.map((adv, i) => {
              const { anim, delay } = REVEAL_STYLES[i] ?? REVEAL_STYLES[0];
              const Icon = adv.icon;
              return (
                <AnimatedCard key={adv.title} animClass={anim} delayClass={delay}>
                  <div className="flex h-full flex-col rounded-2xl border border-border/80 bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-lift">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 text-base font-bold text-foreground">{adv.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{adv.desc}</p>
                  </div>
                </AnimatedCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* PACKAGES SECTION */}
      <section className="bg-background py-16 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Kadapa Solar Pricing"
            title="Transparent Rooftop Packages for Kadapa Homes"
            description="Complete turnkey systems with DISCOM approvals, mounting structures, and direct PM Surya Ghar subsidy assistance."
          />
          <SolarPackageCards className="mt-12" />
        </div>
      </section>

      {/* NEIGHBORHOODS SERVED */}
      <section className="bg-cream py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Service Coverage"
            title="Localities & Towns We Serve in Kadapa District"
            description="Our solar installation crews provide prompt on-site surveys across Kadapa town and surrounding mandals."
          />

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {kadapaNeighborhoods.map((area) => (
              <span
                key={area}
                className="inline-flex items-center gap-2 rounded-xl border border-border/80 bg-card px-4 py-2.5 text-sm font-semibold text-foreground shadow-xs transition-colors hover:border-primary/50"
              >
                <MapPin className="h-4 w-4 text-primary" />
                {area}
              </span>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/contact"
              search={{ area: "Kadapa" }}
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:brightness-105"
            >
              Request a Free Survey in Your Area <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQS */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Kadapa Solar Questions"
            title="Frequently Asked Questions in Kadapa"
            description="Answers to common questions about rooftop solar subsidies, net metering, and installation in Kadapa."
          />
          <div className="mt-10">
            <FAQ items={kadapaFaqs} />
          </div>
        </div>
      </section>
    </div>
  );
}
