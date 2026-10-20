import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, CheckCircle2, Building2, TrendingDown, ShieldCheck,
  Zap, Award, BarChart3, Factory, School, HeartPulse, Warehouse,
  FileCheck2, ArrowUpRight,
} from "lucide-react";
import commercialImg from "@/assets/commercial.jpg";
import technologyImg from "@/assets/technology.jpg";
import installationImg from "@/assets/installation.jpg";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimatedCard, REVEAL_STYLES } from "@/components/AnimatedCard";
import { FAQ } from "@/components/FAQ";
import { BUSINESS } from "@/lib/config";

export const Route = createFileRoute("/commercial")({
  head: () => ({
    meta: [
      { title: `Commercial & Industrial Rooftop Solar — ${BUSINESS.name}` },
      { name: "description", content: `Slash operational costs with 10 kW to 250+ kW commercial rooftop solar installations across ${BUSINESS.region}. 40% accelerated tax depreciation & fast ROI.` },
      { property: "og:title", content: `Commercial & Industrial Solar — ${BUSINESS.name}` },
      { property: "og:description", content: `Commercial rooftop solar solutions for businesses and institutions across ${BUSINESS.region}.` },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Commercial,
});

const commercialSectors = [
  {
    icon: School,
    title: "Schools, Colleges & Universities",
    description: "Peak electrical demand occurs strictly during sunshine hours (8 AM - 4 PM), delivering near-100% solar self-consumption and green campus ratings.",
    tag: "High Daytime Match",
    capacity: "20 kW - 100 kW",
  },
  {
    icon: HeartPulse,
    title: "Hospitals & Healthcare Facilities",
    description: "Round-the-clock air conditioning, diagnostic centers, and medical machinery substantially cut their base power consumption.",
    tag: "Continuous Load",
    capacity: "30 kW - 150 kW",
  },
  {
    icon: Warehouse,
    title: "Cold Storage & Agro Processing",
    description: "Cold storage demand peaks precisely during summer months when solar irradiance and energy harvest are at their annual maximum.",
    tag: "Peak Summer Synergy",
    capacity: "50 kW - 250 kW",
  },
  {
    icon: Factory,
    title: "Manufacturing & Industrial Sheds",
    description: "Convert expansive tin/metal shed roofs into powerful generation assets. Drastically reduce high commercial LT/HT per-unit electricity bills.",
    tag: "Industrial Metal Roofs",
    capacity: "50 kW - 500+ kW",
  },
  {
    icon: Building2,
    title: "Hotels, Shopping Complexes & Offices",
    description: "Replace high commercial slab tariffs (₹8.50 - ₹12.00/kWh) with levelized solar energy cost under ₹2.50/kWh for 25 years.",
    tag: "Tariff Shield",
    capacity: "15 kW - 100 kW",
  },
];

const financialBenefits = [
  {
    icon: TrendingDown,
    title: "40% Accelerated Tax Depreciation",
    text: "Under Section 32 of the Income Tax Act, commercial enterprises can claim 40% accelerated depreciation on solar assets in Year 1, dramatically cutting corporate tax liability.",
    stat: "40% Tax Benefit",
  },
  {
    icon: BarChart3,
    title: "Rapid 3 to 4 Years Payback",
    text: "With high commercial electricity tariffs in Andhra Pradesh, commercial solar projects recover their complete capital investment in 36 to 48 months.",
    stat: "3-4 Year ROI",
  },
  {
    icon: Zap,
    title: "Levelized Cost Under ₹2.50 / Unit",
    text: "While commercial grid power costs ₹8.50 to ₹12.00 per unit and rises annually, solar generates clean electricity for 25 years at an effective fixed levelized cost.",
    stat: "75% Energy Cost Drop",
  },
  {
    icon: ShieldCheck,
    title: "25-Year Asset Longevity",
    text: "High-grade industrial equipment, zero recurring fuel costs, minimal operational maintenance, and continuous cloud-based generation monitoring.",
    stat: "25-Year Performance",
  },
];

const commercialWorkflow = [
  { step: "01", title: "Comprehensive Load Audit", desc: "We analyze your 12-month billing history, maximum demand (kVA), and time-of-day (TOD) power profiles." },
  { step: "02", title: "Structural & Shadow Engineering", desc: "Drone survey and 3D structural load engineering ensuring structural safety on RCC or industrial sheds." },
  { step: "03", title: "DISCOM HT/LT Sanctions", desc: "Complete liaisoning with electricity boards (APSPDCL / APCPDCL) for technical feasibility and CEIG approvals." },
  { step: "04", title: "Precision EPC Installation", desc: "Industrial-grade DC cabling, dual-earthing pits, lightning arresters, and Tier-1 TOPCon solar arrays." },
  { step: "05", title: "SCADA Telemetry & Commissioning", desc: "Real-time generation telemetry dashboard, bidirectional net-meter testing, and handover." },
];

const commercialFaqs = [
  {
    q: "Can commercial enterprises claim government subsidies?",
    a: "Direct capital subsidies like PM Surya Ghar are reserved for residential consumers. However, commercial businesses receive substantial fiscal incentives including 40% Accelerated Depreciation under Income Tax rules, GST input tax credits, and duty concessions.",
  },
  {
    q: "How does net metering work for commercial and industrial connections?",
    a: "Under state DISCOM net-metering regulations, excess power generated on weekends or non-operational hours is exported back to the grid and credited against your monthly commercial electricity bill.",
  },
  {
    q: "Can our industrial metal shed support the weight of solar panels?",
    a: "Yes. We conduct a thorough structural load calculation. Solar panels add approximately 12–15 kg per square meter. For metal roofs, we utilize non-penetrative or specialized mini-rail mounting systems that preserve roof waterproofing.",
  },
  {
    q: "What is the expected lifespan and maintenance requirement?",
    a: "Tier-1 solar modules are warrantied for 25 years of linear performance. Maintenance is minimal, primarily involving periodic dust cleaning and annual electrical health checkups.",
  },
  {
    q: "Can we install a hybrid solar system with battery storage or diesel generator synchronization?",
    a: "Yes. For facilities requiring uninterrupted power or running large diesel generator sets, we configure DG-Solar synchronizers (zero-export controllers) that prioritize solar power to drastically cut diesel consumption.",
  },
];

function Commercial() {
  return (
    <div>
      {/* PAGE HERO */}
      <PageHero
        eyebrow="Commercial & Industrial Solar"
        title="Slash Business Operating Costs with Commercial Rooftop Solar"
        description="High-yield 10 kW to 250+ kW solar installations for schools, hospitals, factories, cold storages, and commercial buildings across Rayalaseema. Capitalize on 40% accelerated tax depreciation and 3-4 year capital payback."
        image={commercialImg}
        imageAlt="Large industrial factory rooftop covered with high-efficiency solar panels"
        badge="40% Accelerated Tax Depreciation"
        badgeIcon={<Award className="h-4 w-4 text-emerald-400" />}
        primaryCta={{ label: "Request Commercial Site Audit", to: "/contact", search: { service: "Commercial Solar" } }}
        secondaryCta={{ label: "Estimate ROI", to: "/calculator" }}
      />

      {/* FINANCIAL IMPACT METRICS */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <SectionHeading
          eyebrow="Commercial Advantages"
          title="The Strongest Business Case on Your Balance Sheet"
          description="High commercial tariffs mean solar offers an unbeatable financial return with immediate tax and cash flow benefits."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {financialBenefits.map((item, i) => {
            const { anim, delay } = REVEAL_STYLES[i] ?? REVEAL_STYLES[0];
            return (
              <AnimatedCard key={item.title} animClass={anim} delayClass={delay}>
                <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border/80 bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-lift">
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-solar-soft text-primary transition-transform duration-300 group-hover:scale-110">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <span className="mt-4 inline-block rounded-full bg-cream px-2.5 py-0.5 text-[11px] font-bold text-primary border border-border/60">
                      {item.stat}
                    </span>
                    <h3 className="mt-3 text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                      {item.text}
                    </p>
                  </div>
                </div>
              </AnimatedCard>
            );
          })}
        </div>
      </section>

      {/* SECTOR APPLICATIONS */}
      <section className="bg-cream py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Industry Solutions"
            title="Engineered for Andhra Pradesh's Leading Sectors"
            description="Every commercial segment has unique power dynamics. We tailor engineering and inverter architecture accordingly."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {commercialSectors.map((sec, i) => (
              <div
                key={sec.title}
                className="group relative flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lift"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-solar-soft text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200">
                      <sec.icon className="h-5 w-5" />
                    </div>
                    <span className="rounded-full bg-cream px-3 py-1 text-[11px] font-bold text-muted-foreground border border-border">
                      {sec.tag}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {sec.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {sec.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Typical Sizing:</span>
                  <span className="font-bold text-foreground">{sec.capacity}</span>
                </div>
              </div>
            ))}

            {/* Custom Industrial Consultation Card */}
            <div className="flex flex-col justify-between rounded-2xl border border-primary/40 bg-solar-soft/60 p-6 shadow-soft">
              <div>
                <span className="inline-block rounded-full bg-primary/20 px-3 py-1 text-xs font-bold text-primary">
                  Custom Engineering
                </span>
                <h3 className="mt-4 text-xl font-bold text-foreground">
                  Heavy Industrial or Multi-MW Solar?
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Have multiple factory roofs, LT/HT metering, or diesel-generator synchronization needs? Talk directly with our senior solar engineers.
                </p>
              </div>

              <Link
                to="/contact"
                search={{ service: "Commercial Solar" }}
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-xs sm:text-sm font-bold text-primary-foreground shadow-soft hover:brightness-105"
              >
                Book Engineering Consultation <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* COMMERCIAL EPC EXECUTION STEPS */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <SectionHeading
          eyebrow="Turnkey Execution"
          title="From Energy Audit to CEIG Commissioning"
          description="A structured project timeline that guarantees minimal operational downtime and rapid grid clearance."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {commercialWorkflow.map((step) => (
            <div
              key={step.step}
              className="relative rounded-2xl border border-border bg-card p-5 shadow-soft transition-transform hover:-translate-y-1"
            >
              <span className="text-3xl font-extrabold text-primary/40 font-display">
                {step.step}
              </span>
              <h4 className="mt-2 text-base font-bold text-foreground">{step.title}</h4>
              <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* TECHNOLOGY & MONITORING SPLIT SECTION */}
      <section className="bg-cream py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-3xl shadow-lift aspect-[4/3]">
            <img
              src={technologyImg}
              alt="Industrial grade solar inverters and monitoring telemetry"
              width={1200}
              height={800}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          <div>
            <SectionHeading
              align="left"
              eyebrow="Industrial Quality"
              title="SCADA Telemetry, Top Tier Equipment & Zero Downtime"
              description="Commercial systems require heavy-duty components designed for harsh summer heat and uninterrupted power generation."
            />

            <ul className="mt-6 space-y-3.5 text-xs sm:text-sm text-foreground">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Multi-MPPT High-Efficiency Inverters:</strong> Maximize power yield even with partial roof shadow or multiple roof orientations.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Live Cloud Generation Dashboard:</strong> Monitor string voltages, current, daily units generated, and real-time degradation metrics.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>DG Synchronization &amp; Zero-Export Control:</strong> Run solar seamlessly alongside diesel backup generators without reverse current risks.</span>
              </li>
            </ul>

            <div className="mt-8">
              <Link
                to="/contact"
                search={{ service: "Commercial Solar" }}
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-xs sm:text-sm font-bold text-primary-foreground shadow-soft hover:brightness-105"
              >
                Request Itemized Commercial Proposal <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* COMMERCIAL FAQS */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <SectionHeading
          eyebrow="Commercial FAQ"
          title="Frequently Asked Questions by Businesses"
          description="Clear answers on depreciation, net metering, installation timelines, and system returns."
        />
        <div className="mx-auto mt-10 max-w-3xl">
          <FAQ items={commercialFaqs} />
        </div>
      </section>

      {/* BOTTOM CTA BANNER */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-14 text-center shadow-lift sm:px-12">
          <span className="inline-block rounded-full bg-primary-foreground/15 px-4 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground">
            Commercial Solar Engineering
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-primary-foreground text-balance sm:text-4xl">
            Turn High Electricity Expenses into Long-Term Profit
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-primary-foreground/85 text-sm sm:text-base leading-relaxed">
            Invite our engineering team for a zero-obligation roof assessment and get an itemized financial feasibility report for your facility.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              search={{ service: "Commercial Solar" }}
              className="inline-flex items-center gap-2 rounded-xl bg-card px-7 py-3.5 text-sm font-bold text-foreground shadow-soft transition-transform hover:-translate-y-0.5 active:scale-95"
            >
              Get Free Commercial Assessment <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/calculator"
              className="inline-flex items-center gap-2 rounded-xl border border-primary-foreground/40 px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 hover:bg-primary-foreground/10"
            >
              Calculate Commercial ROI
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
