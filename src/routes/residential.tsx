import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Sun,
  Sparkles,
  ShieldCheck,
  Zap,
  Wrench,
  FileCheck,
  ArrowUpRight,
  Clock,
  HelpCircle,
} from "lucide-react";
import residentialImg from "@/assets/residential.jpg";
import familyImg from "@/assets/family.jpg";
import installationImg from "@/assets/installation.jpg";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimatedCard, REVEAL_STYLES } from "@/components/AnimatedCard";
import { FAQ } from "@/components/FAQ";
import { BUSINESS } from "@/lib/config";

export const Route = createFileRoute("/residential")({
  head: () => ({
    meta: [
      { title: `Residential Solar Installation Andhra Pradesh | Surrya Gen Power` },
      {
        name: "description",
        content: `Expert residential solar installation Andhra Pradesh using the best solar panels in Andhra Pradesh. Avail up to ₹78,000 rooftop solar subsidy Andhra Pradesh under PM Surya Ghar with Surrya Gen Power in Kadapa, Tirupati, Chittoor & Rayalaseema.`,
      },
      {
        property: "og:title",
        content: `Residential Solar Installation Andhra Pradesh | Surrya Gen Power`,
      },
      {
        property: "og:description",
        content: `Power your home with turnkey residential solar installation Andhra Pradesh. Claim up to ₹78,000 rooftop solar subsidy Andhra Pradesh with the best solar panels in Andhra Pradesh.`,
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.surryagenpower.in/residential" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.surryagenpower.in/residential" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": "https://www.surryagenpower.in/residential#service",
          name: "Residential Rooftop Solar Installation",
          serviceType: "Solar Energy System Installation",
          provider: {
            "@type": "LocalBusiness",
            name: "Surrya Gen Power",
            url: "https://www.surryagenpower.in",
            telephone: "+919391927443",
          },
          areaServed: [
            { "@type": "City", name: "Kadapa" },
            { "@type": "City", name: "Tirupati" },
            { "@type": "City", name: "Chittoor" },
            { "@type": "City", name: "Punganuru" },
            { "@type": "City", name: "Rayachoti" },
            { "@type": "City", name: "Anantapuramu" },
            { "@type": "City", name: "Kadiri" },
            { "@type": "City", name: "Nandyal" },
          ],
          description:
            "Turnkey residential rooftop solar EPC installation with DISCOM net metering approval and PM Surya Ghar Muft Bijli Yojana subsidy assistance up to ₹78,000.",
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
              name: "Residential Solar",
              item: "https://www.surryagenpower.in/residential",
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
              name: "How much government subsidy do I get for my home in Andhra Pradesh?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Under the PM Surya Ghar Muft Bijli Yojana, residential consumers receive ₹30,000 for 1 kW, ₹60,000 for 2 kW, and a maximum of ₹78,000 for systems of 3 kW and above. The subsidy is directly credited to your Aadhaar-linked bank account.",
              },
            },
            {
              "@type": "Question",
              name: "How much can I reduce my monthly electricity bill?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "A properly sized residential rooftop solar system reduces 80% to 95% of your grid electricity bill. You only pay the nominal fixed DISCOM grid charges each month.",
              },
            },
            {
              "@type": "Question",
              name: "What happens during cloudy or rainy days?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Solar panels still generate electricity on overcast days using diffuse sunlight (typically 20% to 40% of peak output). At night or during heavy rains, your home seamlessly draws power from the grid via net metering.",
              },
            },
            {
              "@type": "Question",
              name: "How much shadow-free roof area is needed?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "As a thumb rule, each 1 kW of solar installation requires approximately 80 to 90 sq ft of shadow-free rooftop space facing South or Southwest.",
              },
            },
            {
              "@type": "Question",
              name: "What is the lifespan and warranty of the system?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "The solar panels come with a 25-year performance warranty (guaranteeing over 80% output at year 25). The solar inverters typically carry a 5 to 10-year replacement warranty.",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: Residential,
});

const residentialTiers = [
  {
    capacity: "3.45 kW System",
    tag: "Most Popular for 2-3 BHK",
    idealFor: "Monthly bill ₹2,500 – ₹4,000",
    units: "400 - 450 units/mo",
    area: "~280 sq ft shadow-free",
    grossPrice: "₹2,15,000",
    subsidy: "₹78,000",
    netPrice: "₹1,37,000",
    features: [
      "Tier-1 TOPCon Bifacial Solar Panels",
      "High-efficiency 3.3 kW On-Grid Inverter",
      "DISCOM Net-metering approval handling",
      "30-Year Panel Performance Warranty",
    ],
    highlight: true,
  },
  {
    capacity: "5 kW System",
    tag: "Ideal for Large Homes / ACs",
    idealFor: "Monthly bill ₹4,500 – ₹7,500",
    units: "600 - 650 units/mo",
    area: "~400 sq ft shadow-free",
    grossPrice: "₹2,85,000",
    subsidy: "₹78,000",
    netPrice: "₹2,07,000",
    features: [
      "Tier-1 High-Wattage TOPCon Panels",
      "5 kW 3-Phase or 1-Phase Smart Inverter",
      "Elevated GI structure options for rooftop utility",
      "Real-time mobile WiFi monitoring app",
    ],
    highlight: false,
  },
  {
    capacity: "8 - 10 kW System",
    tag: "Joint Families & Luxury Villas",
    idealFor: "Monthly bill ₹8,000 – ₹15,000+",
    units: "1,000 - 1,250 units/mo",
    area: "~650 - 800 sq ft shadow-free",
    grossPrice: "Custom Quote",
    subsidy: "₹78,000 (Max Cap)",
    netPrice: "Best Volume Rate",
    features: [
      "High power density TOPCon Solar Modules",
      "Dual MPPT 3-Phase Industrial Grade Inverter",
      "Dual earthing & SPD surge protection kit",
      "Priority 5-year free maintenance & cleaning",
    ],
    highlight: false,
  },
];

const features = [
  {
    icon: Sun,
    title: "Precision Roof Assessment",
    text: "We evaluate your roof's azimuth, shadow cast, structural integrity, and load capability to design the highest-yielding layout.",
  },
  {
    icon: Zap,
    title: "Customized System Sizing",
    text: "Engineered specifically to your 12-month power consumption pattern so you don't overpay for unused capacity.",
  },
  {
    icon: ShieldCheck,
    title: "Tier-1 Equipment Quality",
    text: "We only deploy BIS & ALMM-certified Tier-1 solar panels and top-rated inverters backed by a 25-year performance guarantee.",
  },
  {
    icon: FileCheck,
    title: "Direct Subsidy Processing",
    text: "We manage end-to-end documentation on the PM Surya Ghar National Portal to ensure your ₹78,000 subsidy reaches your bank.",
  },
  {
    icon: Wrench,
    title: "DISCOM Net-Metering",
    text: "Complete liaisoning with APSPDCL / APCPDCL for bidirectional bi-directional net meter installation and synchronization.",
  },
  {
    icon: Clock,
    title: "Lifetime Service & Support",
    text: "Periodic generation checks, panel cleaning guidance, and prompt technical support across Rayalaseema.",
  },
];

const residentialSteps = [
  {
    step: "01",
    title: "Free Consultation",
    desc: "Share your latest power bill. We assess suitability and offer an instant estimate.",
  },
  {
    step: "02",
    title: "Site Survey & 3D Design",
    desc: "Our solar engineer visits your roof to map azimuth, shadows, and structure.",
  },
  {
    step: "03",
    title: "DISCOM Approval & Portal",
    desc: "We register your project on PM Surya Ghar portal and secure net-meter approval.",
  },
  {
    step: "04",
    title: "Turnkey Installation",
    desc: "Expert technicians install modules, inverters, and earthing in 2–3 business days.",
  },
  {
    step: "05",
    title: "Net Meter & Subsidy",
    desc: "Grid inspection, bidirectional meter commissioning, and direct subsidy credit.",
  },
];

const residentialFaqs = [
  {
    q: "How much government subsidy do I get for my home in Andhra Pradesh?",
    a: "Under the PM Surya Ghar Muft Bijli Yojana, residential consumers receive ₹30,000 for 1 kW, ₹60,000 for 2 kW, and a maximum of ₹78,000 for systems of 3 kW and above. The subsidy is directly credited to your Aadhaar-linked bank account.",
  },
  {
    q: "How much can I reduce my monthly electricity bill?",
    a: "A properly sized residential rooftop solar system reduces 80% to 95% of your grid electricity bill. You only pay the nominal fixed DISCOM grid charges each month.",
  },
  {
    q: "What happens during cloudy or rainy days?",
    a: "Solar panels still generate electricity on overcast days using diffuse sunlight (typically 20% to 40% of peak output). At night or during heavy rains, your home seamlessly draws power from the grid via net metering.",
  },
  {
    q: "How much shadow-free roof area is needed?",
    a: "As a thumb rule, each 1 kW of solar installation requires approximately 80 to 90 sq ft of shadow-free rooftop space facing South or Southwest.",
  },
  {
    q: "What is the lifespan and warranty of the system?",
    a: "The solar panels come with a 25-year performance warranty (guaranteeing over 80% output at year 25). The solar inverters typically carry a 5 to 10-year replacement warranty.",
  },
];

function Residential() {
  return (
    <div>
      {/* RICH PAGE HERO */}
      <PageHero
        eyebrow="Residential Solar Installation Andhra Pradesh"
        title="Power Your Home With the Best Solar Panels in Andhra Pradesh"
        description="Premium residential solar installation Andhra Pradesh engineered for modern homes. Unlock up to ₹78,000 rooftop solar subsidy Andhra Pradesh under PM Surya Ghar, complete DISCOM net metering, and up to 90% power bill savings."
        image={residentialImg}
        imageAlt="Residential solar installation Andhra Pradesh with high-efficiency rooftop panels"
        badge="Rooftop Solar Subsidy Andhra Pradesh: Up to ₹78,000"
        badgeIcon={<Sparkles className="h-4 w-4 text-amber-500" />}
        primaryCta={{
          label: "Get Free Home Solar Quote",
          to: "/contact",
          search: { service: "Residential Solar" },
        }}
        secondaryCta={{ label: "Calculate Savings", to: "/calculator" }}
      />

      {/* POPULAR RESIDENTIAL SYSTEM CAPACITIES */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <SectionHeading
          eyebrow="System Options & Pricing"
          title="Popular Residential Solar Capacities"
          description="Indicative turnkey packages including Tier-1 panels, smart inverter, structure, wiring, and PM Surya Ghar subsidy guidance."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {residentialTiers.map((tier, i) => {
            const { anim, delay } = REVEAL_STYLES[i] ?? REVEAL_STYLES[0];
            return (
              <AnimatedCard key={tier.capacity} animClass={anim} delayClass={delay}>
                <div
                  className={`relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border ${
                    tier.highlight
                      ? "border-primary bg-card ring-2 ring-primary/30 shadow-lift"
                      : "border-border/80 bg-card shadow-soft hover:border-primary/50"
                  } p-6 sm:p-8 transition-all duration-300 hover:-translate-y-2`}
                >
                  {tier.highlight && (
                    <span className="absolute top-0 right-0 rounded-bl-2xl bg-primary px-4 py-1 text-xs font-bold text-primary-foreground">
                      Best Value
                    </span>
                  )}

                  <div>
                    <span className="inline-block rounded-full bg-solar-soft px-3 py-1 text-xs font-bold text-primary">
                      {tier.tag}
                    </span>
                    <h3 className="mt-4 text-2xl font-extrabold text-foreground">
                      {tier.capacity}
                    </h3>
                    <p className="mt-1 text-xs font-medium text-muted-foreground">
                      {tier.idealFor}
                    </p>

                    <div className="mt-6 rounded-2xl bg-cream p-4 border border-border/60">
                      <div className="flex items-baseline justify-between text-xs text-muted-foreground">
                        <span>Gross Price</span>
                        <span className="font-semibold line-through">{tier.grossPrice}</span>
                      </div>
                      <div className="mt-1 flex items-baseline justify-between text-xs text-emerald-600 font-bold">
                        <span>Central Subsidy</span>
                        <span>- {tier.subsidy}</span>
                      </div>
                      <div className="mt-2 pt-2 border-t border-border flex items-baseline justify-between">
                        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                          Net Effective Cost
                        </span>
                        <span className="text-xl font-extrabold text-foreground">
                          {tier.netPrice}
                        </span>
                      </div>
                    </div>

                    <div className="mt-5 grid grid-cols-2 gap-2 text-xs">
                      <div className="rounded-xl border border-border/60 p-2.5">
                        <span className="text-muted-foreground block">Monthly Gen:</span>
                        <span className="font-bold text-foreground">{tier.units}</span>
                      </div>
                      <div className="rounded-xl border border-border/60 p-2.5">
                        <span className="text-muted-foreground block">Roof Space:</span>
                        <span className="font-bold text-foreground">{tier.area}</span>
                      </div>
                    </div>

                    <ul className="mt-6 space-y-2.5 text-xs text-muted-foreground">
                      {tier.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to="/contact"
                    search={{ package: tier.capacity, service: "Residential Solar" }}
                    className={`mt-8 inline-flex items-center justify-center gap-2 rounded-xl py-3 text-xs sm:text-sm font-bold transition-all ${
                      tier.highlight
                        ? "bg-primary text-primary-foreground shadow-soft hover:brightness-105"
                        : "border border-border bg-card text-foreground hover:bg-muted hover:border-primary/40"
                    }`}
                  >
                    Enquire for {tier.capacity} <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </AnimatedCard>
            );
          })}
        </div>
      </section>

      {/* WHY CHOOSE RESIDENTIAL SOLAR WITH SPLIT IMAGE */}
      <section className="bg-cream py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-lift aspect-[4/3]">
                <img
                  src={familyImg}
                  alt="Happy Indian family celebrating zero electricity bills outside solar home"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 hidden sm:flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-lift">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-solar-soft text-primary font-bold">
                  25y
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">Long-Term Savings</h4>
                  <p className="text-xs text-muted-foreground">
                    Return on capital in just 3-4 years
                  </p>
                </div>
              </div>
            </div>

            <div>
              <SectionHeading
                align="left"
                eyebrow="Key Homeowner Advantages"
                title="Transform Your Rooftop into a Personal Power Station"
                description="Power your lights, fans, refrigerator, washing machine, and ACs straight from the sun, without fear of rising tariffs."
              />

              <div className="mt-8 space-y-4">
                {[
                  {
                    title: "Slash Bills by up to 90%",
                    desc: "Generate your daily consumption during daylight hours and bank excess energy with DISCOM.",
                  },
                  {
                    title: "Shield Against Tariff Hikes",
                    desc: "Lock in your electricity costs for the next 25 years as state electricity unit charges increase.",
                  },
                  {
                    title: "Enhance Property Valuation",
                    desc: "A home with a pre-installed, net-metered rooftop solar system commands high resale appeal.",
                  },
                  {
                    title: "Direct Bank Account Subsidy",
                    desc: "Zero middlemen. The government deposits ₹78,000 directly via DBT into your registered bank account.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3.5">
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-foreground">{item.title}</h4>
                      <p className="mt-0.5 text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/calculator"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-xs sm:text-sm font-bold text-primary-foreground shadow-soft hover:brightness-105"
                >
                  Test Your Home Savings <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/subsidy-guide"
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3.5 text-xs sm:text-sm font-bold text-foreground shadow-2xs hover:bg-muted"
                >
                  Read Subsidy Guide
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPLETE SERVICE FEATURES GRID */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <SectionHeading
          eyebrow="Comprehensive Service"
          title="Turnkey Engineering for Every Home"
          description="From structural analysis and portal filing to commissioning and monitoring, we manage every step."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => {
            const { anim, delay } = REVEAL_STYLES[i % REVEAL_STYLES.length]!;
            return (
              <AnimatedCard key={f.title} animClass={anim} delayClass={delay}>
                <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-border/80 bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lift">
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-solar-soft text-primary transition-transform duration-300 group-hover:scale-110">
                      <f.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {f.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
                  </div>
                  <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-primary">
                    <span>Included in all packages</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </div>
                </div>
              </AnimatedCard>
            );
          })}
        </div>
      </section>

      {/* 5-STEP INSTALLATION JOURNEY */}
      <section className="bg-cream py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Simple & Transparent"
            title="Your 5-Step Solar Journey"
            description="We make the transition smooth, handling all government approvals, installation, and meter sync."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {residentialSteps.map((step) => (
              <div
                key={step.step}
                className="relative rounded-2xl border border-border bg-card p-5 shadow-soft transition-transform hover:-translate-y-1"
              >
                <span className="text-3xl font-extrabold text-primary/40 font-display">
                  {step.step}
                </span>
                <h4 className="mt-2 text-base font-bold text-foreground">{step.title}</h4>
                <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESIDENTIAL FAQS */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <SectionHeading
          eyebrow="Frequently Asked Questions"
          title="Common Questions About Home Solar"
          description="Everything you need to know about system selection, net metering, and PM Surya Ghar subsidies."
        />
        <div className="mx-auto mt-10 max-w-3xl">
          <FAQ items={residentialFaqs} />
        </div>
      </section>

      {/* HIGH-IMPACT BOTTOM CTA BANNER */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-14 text-center shadow-lift sm:px-12">
          <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-amber-400/20 blur-2xl" />

          <span className="inline-block rounded-full bg-primary-foreground/15 px-4 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground">
            Fast Site Inspection &amp; Quote
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-primary-foreground text-balance sm:text-4xl">
            Ready to Zero Out Your Home Electricity Bill?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-primary-foreground/85 text-sm sm:text-base leading-relaxed">
            Get an exact system recommendation, 3D roof layout, and subsidy calculation tailored to
            your home in Rayalaseema.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              search={{ service: "Residential Solar" }}
              className="inline-flex items-center gap-2 rounded-xl bg-card px-7 py-3.5 text-sm font-bold text-foreground shadow-soft transition-transform hover:-translate-y-0.5 active:scale-95"
            >
              Get Free Home Quote <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/calculator"
              className="inline-flex items-center gap-2 rounded-xl border border-primary-foreground/40 px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 hover:bg-primary-foreground/10"
            >
              Estimate Savings First
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
