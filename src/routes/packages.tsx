import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Info, ArrowRight, CheckCircle2, ShieldCheck, Sparkles,
  Zap, IndianRupee, Layers, FileCheck, Headphones,
} from "lucide-react";
import heroImg from "@/assets/hero-home.jpg";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { SolarPackageCards } from "@/components/SolarPackageCards";
import { AnimatedCard, REVEAL_STYLES } from "@/components/AnimatedCard";
import { FAQ } from "@/components/FAQ";
import { BUSINESS } from "@/lib/config";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: `Solar Packages & Pricing — ${BUSINESS.name}` },
      { name: "description", content: `Explore transparent rooftop solar packages: 3.45 kW, 4 kW, and 5 kW systems with ₹78,000 PM Surya Ghar subsidy deductions across ${BUSINESS.region}.` },
      { property: "og:title", content: `Solar Packages & Pricing — ${BUSINESS.name}` },
      { property: "og:description", content: `Indicative rooftop solar packages with reference pricing and full turnkey installation for ${BUSINESS.region}.` },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Packages,
});

const packageInclusions = [
  {
    icon: Zap,
    title: "Tier-1 TOPCon Panels",
    desc: "High-efficiency modules with superior low-light performance and 30-year linear generation warranty.",
  },
  {
    icon: Layers,
    title: "High Efficiency Smart Inverter",
    desc: "Grid-tied inverter with built-in WiFi data logger, rapid shutdown, and 5 to 10-year replacement warranty.",
  },
  {
    icon: ShieldCheck,
    title: "Hot-Dip Galvanized (GI) Mounting",
    desc: "Engineered structures tested to withstand winds of up to 150 km/h, corrosion-resistant for 25+ years.",
  },
  {
    icon: FileCheck,
    title: "Complete Net Metering & Portal Work",
    desc: "End-to-end liaisoning with APSPDCL/APCPDCL and registration on the national subsidy portal.",
  },
  {
    icon: IndianRupee,
    title: "Direct Subsidy Credit Assistance",
    desc: "Full verification of bills, Aadhaar bank links, and prompt document uploading for DBT disbursement.",
  },
  {
    icon: Headphones,
    title: "5-Year Free Workmanship & Service",
    desc: "Complimentary periodic maintenance, performance tracking, and rapid on-ground service support.",
  },
];

const packageFaqs = [
  {
    q: "Are the package prices final or indicative?",
    a: "Prices shown are indicative reference prices from our brochure. Final pricing is confirmed after a free site assessment to check your specific roof conditions, cable run length, structure height requirements, and meter location.",
  },
  {
    q: "Is the PM Surya Ghar subsidy already deducted from the package price?",
    a: "Under current government DBT (Direct Benefit Transfer) regulations, consumers pay the project cost to the empanelled vendor, and the Central Government disburses the subsidy (up to ₹78,000) directly into your Aadhaar-linked bank account within 30 to 45 days after net meter commissioning.",
  },
  {
    q: "Are solar loans or EMI options available for these packages?",
    a: "Yes! Major nationalized banks (such as SBI, Canara Bank, Union Bank) offer collateral-free solar loans under PM Surya Ghar at concessional interest rates (~7% p.a.). Your monthly EMI is often lower than your current electricity bill!",
  },
  {
    q: "What if I need a higher structure to use my roof space?",
    a: "We offer elevated structures (8 to 10 feet clearance) as an add-on, allowing you to use your terrace for recreation, gardening, or laundry while the solar panels generate power overhead.",
  },
  {
    q: "How long does the entire installation process take?",
    a: "The physical rooftop installation typically takes 2 to 3 days. Total turnaround including DISCOM approvals and net meter synchronization is usually 3 to 4 weeks.",
  },
];

function Packages() {
  return (
    <div>
      {/* RICH PAGE HERO */}
      <PageHero
        eyebrow="Solar Packages"
        title="Complete Turnkey Rooftop Solar Packages"
        description="Choose from our most popular residential and commercial systems. Transparent pricing, Tier-1 certified equipment, DISCOM net-metering approval, and full PM Surya Ghar subsidy assistance."
        image={heroImg}
        imageAlt="Modern home rooftop with premium solar panels in Andhra Pradesh"
        badge="PM Surya Ghar Subsidy: Up to ₹78,000"
        badgeIcon={<Sparkles className="h-4 w-4 text-amber-500" />}
        primaryCta={{ label: "Get a Personalized Quote", to: "/contact" }}
        secondaryCta={{ label: "Calculate Sizing", to: "/calculator" }}
      />

      {/* SOLAR PACKAGE CARDS SECTION */}
      <section className="bg-cream py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Brochure Packages"
            title="Choose a Starting Point for Your Roof"
            description="Indicative reference packages sized for typical Andhra Pradesh household usage. Customized capacities are also available on request."
          />

          <SolarPackageCards className="mt-12" />

          {/* Transparent Notice Card */}
          <div className="mx-auto mt-12 flex max-w-3xl items-start gap-3.5 rounded-2xl border border-primary/40 bg-solar-soft p-5 text-xs sm:text-sm text-foreground shadow-soft">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
            <p className="leading-relaxed">
              <strong>Transparent Pricing Policy:</strong> Prices shown are indicative reference prices from our current brochure. Final pricing depends on your roof orientation, shadow profile, cable length, and chosen inverter brand. All equipment details and warranties are itemized in your written quotation before you commit.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED IN EVERY PACKAGE */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <SectionHeading
          eyebrow="Turnkey Assurance"
          title="What is Included in Every Solar Package"
          description="We provide 100% turnkey delivery so you never have to worry about buying spare parts or chasing approvals."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {packageInclusions.map((item, i) => {
            const { anim, delay } = REVEAL_STYLES[i % REVEAL_STYLES.length]!;
            return (
              <AnimatedCard key={item.title} animClass={anim} delayClass={delay}>
                <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-border/80 bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lift">
                  <div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-solar-soft text-primary transition-transform duration-300 group-hover:scale-110">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-base font-bold text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    <span>Included as Standard</span>
                  </div>
                </div>
              </AnimatedCard>
            );
          })}
        </div>
      </section>

      {/* SOLAR FINANCING & LOW EMI HIGHLIGHT */}
      <section className="bg-cream py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="rounded-3xl border border-border bg-card p-8 sm:p-12 shadow-lift">
            <div className="grid items-center gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <span className="inline-block rounded-full bg-emerald-500/10 px-3.5 py-1 text-xs font-bold text-emerald-600">
                  Affordable Bank Financing Available
                </span>
                <h3 className="mt-3 text-2xl sm:text-3xl font-extrabold text-foreground">
                  Switch to Solar with Zero Burden on Your Monthly Budget
                </h3>
                <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Under the PM Surya Ghar scheme, leading public sector banks offer collateral-free rooftop solar loans at special rates starting around 7% p.a.
                  Your monthly electricity bill savings will easily cover your loan EMI!
                </p>
                <div className="mt-6 flex flex-wrap gap-4 text-xs sm:text-sm text-foreground">
                  <span className="flex items-center gap-1.5 font-semibold">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" /> Up to 10-Year Repayment Tenure
                  </span>
                  <span className="flex items-center gap-1.5 font-semibold">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" /> Minimum Documentation &amp; Fast Approval
                  </span>
                  <span className="flex items-center gap-1.5 font-semibold">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" /> No Collateral Required for Residential
                  </span>
                </div>
              </div>

              <div className="rounded-2xl border border-primary/30 bg-solar-soft/60 p-6 text-center">
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Indicative EMI</span>
                <p className="mt-1 text-3xl font-extrabold text-primary">₹2,450 /mo</p>
                <p className="mt-1 text-xs text-muted-foreground">For 3.45 kW System after Subsidy deduction</p>
                <Link
                  to="/contact"
                  search={{ service: "Solar Financing Enquiry" }}
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-xs sm:text-sm font-bold text-primary-foreground shadow-soft hover:brightness-105"
                >
                  Enquire About Solar Loan <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PACKAGES FAQS */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <SectionHeading
          eyebrow="Package FAQ"
          title="Frequently Asked Questions on Packages"
          description="Everything about inclusions, warranties, structural options, and subsidy timing."
        />
        <div className="mx-auto mt-10 max-w-3xl">
          <FAQ items={packageFaqs} />
        </div>
      </section>

      {/* BOTTOM CTA BANNER */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-14 text-center shadow-lift sm:px-12">
          <span className="inline-block rounded-full bg-primary-foreground/15 px-4 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground">
            Fast Free Site Inspection
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-primary-foreground text-balance sm:text-4xl">
            Not Sure Which Package Best Fits Your Roof?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-primary-foreground/85 text-sm sm:text-base leading-relaxed">
            Our solar technicians will inspect your terrace, measure shadow-free dimensions, and present a custom recommendation with exact savings.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-card px-7 py-3.5 text-sm font-bold text-foreground shadow-soft transition-transform hover:-translate-y-0.5 active:scale-95"
            >
              Book Free Site Inspection <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/calculator"
              className="inline-flex items-center gap-2 rounded-xl border border-primary-foreground/40 px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 hover:bg-primary-foreground/10"
            >
              Use Savings Calculator
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
