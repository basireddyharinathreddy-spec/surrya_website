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

export const Route = createFileRoute("/solar-chittoor")({
  head: () => ({
    meta: [
      { title: `Solar Panel Installation in Chittoor | Solar Company | ${BUSINESS.name}` },
      {
        name: "description",
        content: `Looking for solar panel installation in Chittoor? Surrya Gen Power is a leading solar company in Chittoor deploying the best solar panels in Andhra Pradesh with ₹78,000 PM Surya Ghar subsidy.`,
      },
      {
        property: "og:title",
        content: `Solar Panel Installation in Chittoor | Solar Company | ${BUSINESS.name}`,
      },
      {
        property: "og:description",
        content: `Premier solar company in Chittoor for residential & agro-industrial solar panel installation. Deploying the best solar panels in Andhra Pradesh with ₹78,000 subsidy.`,
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.surryagenpower.in/solar-chittoor" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.surryagenpower.in/solar-chittoor" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "https://www.surryagenpower.in/solar-chittoor#business",
          name: "Surrya Gen Power — Rooftop Solar Chittoor",
          url: "https://www.surryagenpower.in/solar-chittoor",
          telephone: "+919391927443",
          email: "atriasolar5859@gmail.com",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Chittoor",
            addressRegion: "Andhra Pradesh",
            addressCountry: "IN",
          },
          areaServed: [
            { "@type": "City", name: "Chittoor" },
            { "@type": "AdministrativeArea", name: "Chittoor District" },
          ],
          description:
            "Surrya Gen Power is a premier solar company in Chittoor providing residential and commercial solar panel installation in Chittoor with the best solar panels in Andhra Pradesh.",
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
              name: "Rooftop Solar in Chittoor",
              item: "https://www.surryagenpower.in/solar-chittoor",
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
              name: "How does PM Surya Ghar subsidy work in Chittoor?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Chittoor residential consumers receive ₹30,000 for 1 kW, ₹60,000 for 2 kW, and up to ₹78,000 for 3 kW and higher systems directly in their bank account under the PM Surya Ghar scheme. Surrya Gen Power manages all application and net-metering approvals.",
              },
            },
            {
              "@type": "Question",
              name: "Can agricultural processing, dairy, and cold storage units in Chittoor install solar?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes! Chittoor's extensive mango pulp, dairy, and cold storage facilities are ideal candidates for 30 kW to 250+ kW commercial solar systems. They benefit from 40% accelerated depreciation, daytime load matching, and rapid ROI in 3 to 4 years.",
              },
            },
            {
              "@type": "Question",
              name: "How does APSPDCL net metering operate in Chittoor?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Under the APSPDCL net-metering regulations, solar electricity produced during sunny hours powers your facility first. Excess generation is fed back to the grid and deducted from your monthly bill at tariff rates.",
              },
            },
            {
              "@type": "Question",
              name: "Which towns and mandals in Chittoor district do you cover?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We serve all localities in Chittoor town (Kongareddypalli, Mittoor, Greamspet, Murakambattu) as well as surrounding towns including Punganuru, Palamaner, Madanapalle, Nagari, and Puttur.",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: SolarChittoor,
});

const chittoorAdvantages = [
  {
    icon: Sun,
    title: "Abundant Year-Round Insolation",
    desc: "Chittoor's geographical position offers intense, consistent sunshine that yields superior solar generation across all seasons.",
  },
  {
    icon: Building2,
    title: "Agro & Cold Storage Solar",
    desc: "Specialized high-capacity rooftop solutions for Chittoor's fruit processing, dairy, and industrial cold storage infrastructure.",
  },
  {
    icon: ShieldCheck,
    title: "Tier-1 Certified Hardware",
    desc: "Only BIS/ALMM-approved DCR modules and smart inverters backed by a 25-year linear performance warranty.",
  },
  {
    icon: Clock,
    title: "Fast Regional Deployment",
    desc: "Field teams stationed locally in Chittoor and Punganuru provide quick on-site roof measurements and technical quotes.",
  },
];

const chittoorNeighborhoods = [
  "Kongareddypalli",
  "Mittoor",
  "Greamspet",
  "Murakambattu",
  "Iruvaram",
  "Kattamanchi",
  "Punganuru",
  "Palamaner",
  "Madanapalle",
  "Nagari",
  "Puttur",
  "Bangarupalem",
];

const chittoorFaqs = [
  {
    q: "How does PM Surya Ghar subsidy work in Chittoor?",
    a: "Chittoor residential consumers receive ₹30,000 for 1 kW, ₹60,000 for 2 kW, and up to ₹78,000 for 3 kW and higher systems directly in their bank account under the PM Surya Ghar scheme. Surrya Gen Power manages all application and net-metering approvals.",
  },
  {
    q: "Can agricultural processing, dairy, and cold storage units in Chittoor install solar?",
    a: "Yes! Chittoor's extensive mango pulp, dairy, and cold storage facilities are ideal candidates for 30 kW to 250+ kW commercial solar systems. They benefit from 40% accelerated depreciation, daytime load matching, and rapid ROI in 3 to 4 years.",
  },
  {
    q: "How does APSPDCL net metering operate in Chittoor?",
    a: "Under the APSPDCL net-metering regulations, solar electricity produced during sunny hours powers your facility first. Excess generation is fed back to the grid and deducted from your monthly bill at tariff rates.",
  },
  {
    q: "Which towns and mandals in Chittoor district do you cover?",
    a: "We serve all localities in Chittoor town (Kongareddypalli, Mittoor, Greamspet, Murakambattu) as well as surrounding towns including Punganuru, Palamaner, Madanapalle, Nagari, and Puttur.",
  },
];

function SolarChittoor() {
  return (
    <div>
      <PageHero
        eyebrow="Premier Solar Company in Chittoor"
        title="Solar Panel Installation in Chittoor"
        description="Transform your roof into an electricity asset with turnkey solar panel installation in Chittoor. We deploy the best solar panels in Andhra Pradesh for homes, dairy farms, and cold storage with ₹78,000 PM Surya Ghar subsidy and fast APSPDCL approvals."
        image={residentialImg}
        imageAlt="Solar panel installation in Chittoor by premier solar company Surrya Gen Power"
        badge="PM Surya Ghar Subsidy Empanelled"
        badgeIcon={<Sparkles className="h-4 w-4 text-amber-500" />}
        primaryCta={{
          label: "Book Free Survey in Chittoor",
          to: "/contact",
          search: { area: "Chittoor" },
        }}
        secondaryCta={{ label: "Calculate Sizing", to: "/calculator" }}
      />

      {/* ADVANTAGES */}
      <section className="bg-cream py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Trusted Solar Company in Chittoor"
            title="Clean Energy Powered by the Best Solar Panels in Andhra Pradesh"
            description="From residential homes eliminating electricity bills to dairy and cold storage plants reducing heavy operating tariffs, our solar company in Chittoor delivers unmatched long-term value."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {chittoorAdvantages.map((adv, i) => {
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
            eyebrow="Chittoor Solar Packages"
            title="Popular Rooftop Systems in Chittoor"
            description="Turnkey solar packages with complete net-metering approvals, structural mounting, and direct subsidy credit."
          />
          <SolarPackageCards className="mt-12" />
        </div>
      </section>

      {/* LOCALITIES */}
      <section className="bg-cream py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Service Coverage"
            title="Towns & Mandals We Serve Across Chittoor District"
            description="We dispatch technicians across Chittoor town, industrial hubs, and agricultural mandals for prompt site visits."
          />

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {chittoorNeighborhoods.map((area) => (
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
              search={{ area: "Chittoor" }}
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:brightness-105"
            >
              Request a Free Survey in Chittoor <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQS */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Chittoor Solar FAQ"
            title="Frequently Asked Questions in Chittoor"
            description="Clear guidance on residential subsidies, commercial agro-solar, and net metering in Chittoor."
          />
          <div className="mt-10">
            <FAQ items={chittoorFaqs} />
          </div>
        </div>
      </section>
    </div>
  );
}
