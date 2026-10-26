import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Sun, ShieldCheck, Zap, ArrowRight, CheckCircle2,
  MapPin, Clock, IndianRupee, Sparkles, Building2,
} from "lucide-react";
import heroImg from "@/assets/hero-home.jpg";
import commercialImg from "@/assets/commercial.jpg";
import installationImg from "@/assets/installation.jpg";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimatedCard, REVEAL_STYLES } from "@/components/AnimatedCard";
import { FAQ } from "@/components/FAQ";
import { SolarPackageCards } from "@/components/SolarPackageCards";
import { BUSINESS } from "@/lib/config";

export const Route = createFileRoute("/solar-tirupati")({
  head: () => ({
    meta: [
      { title: `Rooftop Solar in Tirupati | PM Surya Ghar Subsidy | ${BUSINESS.name}` },
      {
        name: "description",
        content: `Trusted rooftop solar company in Tirupati. Claim up to ₹78,000 PM Surya Ghar subsidy, APSPDCL headquarters net metering, and 25-year warranty with ${BUSINESS.name}. Free on-site survey.`,
      },
      { property: "og:title", content: `Rooftop Solar in Tirupati | PM Surya Ghar Subsidy | ${BUSINESS.name}` },
      { property: "og:description", content: `Clean rooftop solar for homes, hotels, and institutions in Tirupati. Up to ₹78,000 direct subsidy and fast APSPDCL net metering.` },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.surryagenpower.in/solar-tirupati" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://www.surryagenpower.in/solar-tirupati" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "https://www.surryagenpower.in/solar-tirupati#business",
          "name": "Surrya Gen Power — Rooftop Solar Tirupati",
          "url": "https://www.surryagenpower.in/solar-tirupati",
          "telephone": "+919391927443",
          "email": "atriasolar5859@gmail.com",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Tirupati",
            "addressRegion": "Andhra Pradesh",
            "addressCountry": "IN"
          },
          "areaServed": [
            { "@type": "City", "name": "Tirupati" },
            { "@type": "AdministrativeArea", "name": "Tirupati District" }
          ],
          "description": "Premier rooftop solar installer in Tirupati serving residential homeowners, hotels, guest houses, and educational institutions with turnkey EPC and net-metering."
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://www.surryagenpower.in/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Service Areas",
              "item": "https://www.surryagenpower.in/service-areas"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Rooftop Solar in Tirupati",
              "item": "https://www.surryagenpower.in/solar-tirupati"
            }
          ]
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How does PM Surya Ghar subsidy benefit Tirupati residents?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Residential consumers in Tirupati are eligible for ₹30,000 for 1 kW, ₹60,000 for 2 kW, and a maximum of ₹78,000 for 3 kW and higher systems under the PM Surya Ghar scheme. Subsidies are credited directly to your bank account via DBT."
              }
            },
            {
              "@type": "Question",
              "name": "Can hotels, hostels, and choultries in Tirupati install rooftop solar?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes! Commercial solar systems (15 kW to 100+ kW) are ideal for Tirupati's hospitality and educational institutions. They deliver rapid 3-to-4-year payback, 40% accelerated tax depreciation, and protection against high commercial slab tariffs."
              }
            },
            {
              "@type": "Question",
              "name": "How quickly can APSPDCL net metering be commissioned in Tirupati?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Because APSPDCL headquarters is located in Tirupati, the net-metering application, feasibility inspection, and bi-directional meter testing proceed smoothly, usually taking 3 to 4 weeks total."
              }
            },
            {
              "@type": "Question",
              "name": "Which localities in Tirupati do you cover for site surveys?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We cover all of Tirupati including MR Palli, Alipiri, Korlagunta, Bairagipatteda, Karakambadi Road, Renigunta, Chandragiri, Padmavati Nagar, Tiruchanur, and Srikalahasti."
              }
            }
          ]
        }),
      },
    ],
  }),
  component: SolarTirupati,
});

const tirupatiAdvantages = [
  {
    icon: Building2,
    title: "Direct APSPDCL Liaison",
    desc: "With APSPDCL headquarters right in Tirupati, our team expedites meter testing, drawing approvals, and net-meter synchronization.",
  },
  {
    icon: Sun,
    title: "Peak Solar Matching",
    desc: "Tirupati's sunny climate produces ~4 to 4.5 units per kW daily, directly offsetting high daytime AC and refrigeration consumption.",
  },
  {
    icon: ShieldCheck,
    title: "Commercial & Residential EPC",
    desc: "Proven installations for private residences, multi-storey villas, budget hotels, guest houses, and college campuses.",
  },
  {
    icon: Clock,
    title: "24-48h Site Survey Response",
    desc: "Dedicated field technicians provide complimentary roof assessments and 3D shadow simulations across Tirupati and Renigunta.",
  },
];

const tirupatiNeighborhoods = [
  "MR Palli",
  "Alipiri",
  "Korlagunta",
  "Bairagipatteda",
  "Karakambadi Road",
  "Renigunta",
  "Chandragiri",
  "Padmavati Nagar",
  "Tiruchanur",
  "SVIMS / University Road",
  "Air Bypass Road",
  "Srikalahasti",
];

const tirupatiFaqs = [
  {
    q: "How does PM Surya Ghar subsidy benefit Tirupati residents?",
    a: "Residential consumers in Tirupati are eligible for ₹30,000 for 1 kW, ₹60,000 for 2 kW, and a maximum of ₹78,000 for 3 kW and higher systems under the PM Surya Ghar scheme. Subsidies are credited directly to your bank account via DBT.",
  },
  {
    q: "Can hotels, hostels, and choultries in Tirupati install rooftop solar?",
    a: "Yes! Commercial solar systems (15 kW to 100+ kW) are ideal for Tirupati's hospitality and educational institutions. They deliver rapid 3-to-4-year payback, 40% accelerated tax depreciation, and protection against high commercial slab tariffs.",
  },
  {
    q: "How quickly can APSPDCL net metering be commissioned in Tirupati?",
    a: "Because APSPDCL headquarters is located in Tirupati, the net-metering application, feasibility inspection, and bi-directional meter testing proceed smoothly, usually taking 3 to 4 weeks total.",
  },
  {
    q: "Which localities in Tirupati do you cover for site surveys?",
    a: "We cover all of Tirupati including MR Palli, Alipiri, Korlagunta, Bairagipatteda, Karakambadi Road, Renigunta, Chandragiri, Padmavati Nagar, Tiruchanur, and Srikalahasti.",
  },
];

function SolarTirupati() {
  return (
    <div>
      <PageHero
        eyebrow="Tirupati & Temple City Region"
        title="Rooftop Solar Installation in Tirupati"
        description="Power your home, hotel, or institution with clean solar energy in Tirupati. Claim up to ₹78,000 PM Surya Ghar subsidy, prompt APSPDCL net metering, and 25-year performance warranty with Surrya Gen Power."
        image={commercialImg}
        imageAlt="Commercial and residential rooftop solar panels installed in Tirupati, Andhra Pradesh"
        badge="Residential & Commercial Solutions"
        badgeIcon={<Sparkles className="h-4 w-4 text-amber-500" />}
        primaryCta={{
          label: "Book Free Survey in Tirupati",
          to: "/contact",
          search: { area: "Tirupati" },
        }}
        secondaryCta={{ label: "Calculate Sizing", to: "/calculator" }}
      />

      {/* ADVANTAGES */}
      <section className="bg-cream py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Solar In Tirupati"
            title="Clean, Dependable Power for Homes & Businesses"
            description="Whether you run a residential household or manage commercial guest accommodation, solar delivers immense savings and grid independence in Tirupati."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {tirupatiAdvantages.map((adv, i) => {
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

      {/* PACKAGES */}
      <section className="bg-background py-16 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Tirupati Solar Packages"
            title="Complete Turnkey Solar Systems in Tirupati"
            description="Tier-1 panels, smart inverters, engineered GI structures, and complete PM Surya Ghar documentation."
          />
          <SolarPackageCards className="mt-12" />
        </div>
      </section>

      {/* LOCALITIES */}
      <section className="bg-cream py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Service Coverage"
            title="Localities We Serve Across Tirupati & Surroundings"
            description="Our local technicians provide fast, free rooftop assessments in all major residential and commercial sectors."
          />

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {tirupatiNeighborhoods.map((area) => (
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
              search={{ area: "Tirupati" }}
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:brightness-105"
            >
              Request a Free Survey in Tirupati <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQS */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Tirupati Solar FAQ"
            title="Frequently Asked Questions in Tirupati"
            description="Practical answers regarding rooftop solar installation, subsidies, and electricity bill savings in Tirupati."
          />
          <div className="mt-10">
            <FAQ items={tirupatiFaqs} />
          </div>
        </div>
      </section>
    </div>
  );
}
