import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, Sun, Target, HeartHandshake, Building2,
  CheckCircle2, Sparkles, ShieldCheck, Award, Users,
  Zap, Wrench, Clock,
} from "lucide-react";
import installationImg from "@/assets/installation.jpg";
import technologyImg from "@/assets/technology.jpg";
import residentialImg from "@/assets/residential.jpg";
import commercialImg from "@/assets/commercial.jpg";
import partnershipImg from "@/assets/partnership.jpg";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimatedCard, REVEAL_STYLES } from "@/components/AnimatedCard";
import { FAQ } from "@/components/FAQ";
import { BUSINESS } from "@/lib/config";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About Us — ${BUSINESS.name}` },
      { name: "description", content: `${BUSINESS.name} is Rayalaseema's premier rooftop solar EPC partner. Certified engineering, transparent pricing, and PM Surya Ghar subsidy processing.` },
      { property: "og:title", content: `About Us — ${BUSINESS.name}` },
      { property: "og:description", content: `Empowering homes and businesses across ${BUSINESS.region} with clean, reliable solar power.` },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const values = [
  {
    icon: Sun,
    title: "Honest Engineering & Guidance",
    text: "We explain system sizing, generation expectations, and true equipment costs upfront — zero inflated generation promises.",
  },
  {
    icon: Target,
    title: "Deep Rayalaseema Regional Focus",
    text: "We know Rayalaseema's heat irradiance, wind conditions, and DISCOM processes because our engineers live and work here.",
  },
  {
    icon: HeartHandshake,
    title: "25-Year Lifecycle Commitment",
    text: "Solar is a quarter-century investment. Our service team is always reachable for maintenance, panel cleaning, and grid updates.",
  },
];

const pillars = [
  {
    icon: ShieldCheck,
    title: "ALMM & BIS Certified Equipment",
    desc: "Only Tier-1 Mono PERC & TOPCon modules and dual-MPPT smart inverters tested for harsh Andhra Pradesh summers.",
  },
  {
    icon: Award,
    title: "PM Surya Ghar Empanelled",
    desc: "Seamless national portal registration and direct bank account subsidy credit assistance up to ₹78,000.",
  },
  {
    icon: Wrench,
    title: "Engineered GI Structures",
    desc: "Hot-dip galvanized mounting structures rated for 150 km/h wind speeds, resistant to corrosion for 25+ years.",
  },
  {
    icon: Clock,
    title: "Fast 24-48h Site Inspection",
    desc: "Dedicated field engineers across Kadapa, Chittoor, Tirupati, Kurnool, and Anantapuramu for rapid turnarounds.",
  },
];

const aboutFaqs = [
  {
    q: `Who is behind ${BUSINESS.name}?`,
    a: `${BUSINESS.name} was established by experienced solar engineers and power professionals in Andhra Pradesh with a mission to bring transparent, high-yield rooftop solar to Rayalaseema's homeowners and commercial enterprises.`,
  },
  {
    q: "Do you manufacture solar panels or install third-party equipment?",
    a: "We are a full-service EPC (Engineering, Procurement, Construction) provider. We source premium Tier-1 ALMM/BIS certified modules and top-tier inverters directly from leading manufacturers, ensuring full warranty validity.",
  },
  {
    q: "What after-sales service do you provide after installation?",
    a: "We provide comprehensive 5-year workmanship warranties, remote generation monitoring assistance, annual electrical safety health checks, and routine module cleaning support.",
  },
  {
    q: "How can I verify your past rooftop solar installations?",
    a: "We are proud of our 1,250+ energized rooftops across the state. Our representative will gladly share customer references and photos of completed projects in your specific town.",
  },
];

function About() {
  return (
    <div>
      {/* PAGE HERO */}
      <PageHero
        eyebrow="About Surrya Gen Power"
        title="Rayalaseema's Premier Rooftop Solar Engineering Partner"
        description={`${BUSINESS.name} helps homes, institutions, and businesses across ${BUSINESS.region} transition to clean, dependable solar energy with honest guidance, Tier-1 equipment, and guaranteed government subsidies.`}
        image={installationImg}
        imageAlt="Surrya Gen Power certified solar technicians installing rooftop solar panels"
        badge="1,250+ Rooftops Energized"
        badgeIcon={<Sparkles className="h-4 w-4 text-amber-500" />}
        primaryCta={{ label: "Get a Free Solar Quote", to: "/contact" }}
        secondaryCta={{ label: "Explore Packages", to: "/packages" }}
      />

      {/* DEDICATED RESIDENTIAL & COMMERCIAL SOLUTIONS */}
      <section className="py-16 md:py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Our Specialized Divisions"
            title="Engineered Solutions for Every Rooftop"
            description="Explore our dedicated residential and commercial solar teams with turnkey engineering and DISCOM net metering."
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {/* Residential Solar Card */}
            <div className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lift">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={residentialImg}
                  alt="Residential Rooftop Solar Installation in Andhra Pradesh"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-primary/90 px-3 py-1 text-xs font-bold text-white shadow-xs backdrop-blur-md">
                  <Sparkles className="h-3.5 w-3.5" /> PM Surya Ghar Eligible
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-2">
                    <Sun className="h-5 w-5 text-amber-400" />
                    <h3 className="text-2xl font-bold">Residential Solar</h3>
                  </div>
                  <p className="mt-1 text-xs text-white/80">Tailored 3 kW to 10 kW systems for homes and apartments</p>
                </div>
              </div>

              <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
                <div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Designed specifically for homeowners across Rayalaseema looking to eliminate monthly electricity bills with up to ₹78,000 central government direct subsidies.
                  </p>
                  <ul className="mt-4 space-y-2.5 text-xs sm:text-sm text-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>Customized sizing based on actual monthly units and roof direction</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>End-to-end DISCOM net metering &amp; portal registration</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>Tier-1 mono PERC/TOPCon solar panels with 25-year warranty</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-border flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-semibold text-muted-foreground uppercase">Starting from</span>
                    <p className="text-lg font-extrabold text-foreground">₹2,15,000 <span className="text-xs font-normal text-muted-foreground">(Before Subsidy)</span></p>
                  </div>
                  <Link
                    to="/residential"
                    className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-xs sm:text-sm font-bold text-primary-foreground shadow-soft transition-all duration-200 hover:brightness-105 active:scale-95"
                  >
                    View Residential Page <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Commercial Solar Card */}
            <div className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lift">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={commercialImg}
                  alt="Commercial Solar Rooftop Installation for Business and Institutions"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-emerald-600/90 px-3 py-1 text-xs font-bold text-white shadow-xs backdrop-blur-md">
                  <Building2 className="h-3.5 w-3.5" /> High ROI &amp; Depreciation
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-amber-400" />
                    <h3 className="text-2xl font-bold">Commercial Solar</h3>
                  </div>
                  <p className="mt-1 text-xs text-white/80">Scalable 10 kW to 250+ kW commercial &amp; institutional setups</p>
                </div>
              </div>

              <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
                <div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Engineered for schools, hospitals, cold storage, manufacturing plants, and offices to lower high commercial tariffs and capitalize on 40% accelerated tax depreciation.
                  </p>
                  <ul className="mt-4 space-y-2.5 text-xs sm:text-sm text-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>Comprehensive load analysis and real-time generation telemetry</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>Rapid payback period (typically 3 to 4 years return on capital)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>Engineered galvanized structure suitable for windy and industrial rooftops</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-border flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-semibold text-muted-foreground uppercase">Consultation</span>
                    <p className="text-lg font-extrabold text-foreground">Custom Itemized Quote</p>
                  </div>
                  <Link
                    to="/commercial"
                    className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-xs sm:text-sm font-bold text-primary-foreground shadow-soft transition-all duration-200 hover:brightness-105 active:scale-95"
                  >
                    View Commercial Page <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES WITH ANIMATED CARDS */}
      <section className="bg-cream py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Our Principles"
            title="What We Stand For Every Day"
            description="The values that guide every consultation, every bolt tightened, and every customer relationship."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {values.map((v, i) => {
              const { anim, delay } = REVEAL_STYLES[i] ?? REVEAL_STYLES[0];
              return (
                <AnimatedCard key={v.title} animClass={anim} delayClass={delay}>
                  <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-lift">
                    <div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-solar-soft text-primary transition-transform duration-300 group-hover:scale-110">
                        <v.icon className="h-6 w-6" />
                      </div>
                      <h3 className="mt-4 text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                        {v.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {v.text}
                      </p>
                    </div>
                  </div>
                </AnimatedCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* ENGINEERING PILLARS SECTION */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <SectionHeading
          eyebrow="The Surrya Gen Standard"
          title="Why Homeowners & Businesses Trust Us"
          description="High standards in equipment quality, engineering precision, and post-installation service."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className="group relative flex flex-col justify-between rounded-2xl border border-border/80 bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lift"
            >
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-solar-soft text-primary transition-transform duration-300 group-hover:scale-110">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-bold text-foreground group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TECHNOLOGY & TRUST SPLIT SECTION */}
      <section className="bg-cream py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-3xl shadow-lift aspect-[4/3]">
            <img
              src={technologyImg}
              alt="Close-up of high-efficiency solar panel cells and an inverter"
              width={1200}
              height={800}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          <div>
            <SectionHeading
              align="left"
              eyebrow="Our Mission"
              title="Making Clean Solar Power Effortless for Andhra Pradesh"
              description="We want every family and business across the state to experience the financial freedom of generating their own power — supported by honest advice and dependable service."
            />

            <div className="mt-6 space-y-3 text-xs sm:text-sm text-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>100% Empanelled under PM Surya Ghar Muft Bijli Yojana</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Over 4.8 MW+ clean solar capacity energized in the state</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Zero-hassle DISCOM net metering and CEIG compliance</span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-xs sm:text-sm font-bold text-primary-foreground shadow-soft hover:brightness-105"
              >
                Talk to Our Solar Experts <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/service-areas"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3.5 text-xs sm:text-sm font-bold text-foreground hover:bg-muted"
              >
                View Service Areas
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT US FAQS */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <SectionHeading
          eyebrow="Company FAQ"
          title="Frequently Asked Questions About Us"
          description="Learn more about our certifications, warranty service, and project delivery."
        />
        <div className="mx-auto mt-10 max-w-3xl">
          <FAQ items={aboutFaqs} />
        </div>
      </section>

      {/* BOTTOM CTA BANNER */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-14 text-center shadow-lift sm:px-12">
          <span className="inline-block rounded-full bg-primary-foreground/15 px-4 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground">
            Experience Regional Excellence
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-primary-foreground text-balance sm:text-4xl">
            Ready to Begin Your Clean Solar Journey?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-primary-foreground/85 text-sm sm:text-base leading-relaxed">
            Reach out today for honest advice, a transparent quotation, and full guidance on government solar subsidies.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-card px-7 py-3.5 text-sm font-bold text-foreground shadow-soft transition-transform hover:-translate-y-0.5 active:scale-95"
            >
              Get a Free Solar Quote <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/calculator"
              className="inline-flex items-center gap-2 rounded-xl border border-primary-foreground/40 px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 hover:bg-primary-foreground/10"
            >
              Calculate Your Savings
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
