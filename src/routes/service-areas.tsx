import { createFileRoute, Link } from "@tanstack/react-router";
import {
  MapPin, ArrowRight, Info, Sun, Sparkles, CheckCircle2,
  Clock, ShieldCheck, Zap,
} from "lucide-react";
import heroImg from "@/assets/hero-home.jpg";
import residentialImg from "@/assets/residential.jpg";
import commercialImg from "@/assets/commercial.jpg";
import cleanEnergyImg from "@/assets/clean-energy.jpg";
import installationImg from "@/assets/installation.jpg";
import familyImg from "@/assets/family.jpg";
import technologyImg from "@/assets/technology.jpg";
import benefitCustomSolarImg from "@/assets/benefit-customized-solar.jpg";
import benefitResCommImg from "@/assets/benefit-residential-commercial.jpg";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimatedCard, REVEAL_STYLES } from "@/components/AnimatedCard";
import { FAQ } from "@/components/FAQ";
import { SERVICE_AREAS, BUSINESS } from "@/lib/config";

export const Route = createFileRoute("/service-areas")({
  head: () => ({
    meta: [
      { title: `Solar Service Areas in Andhra Pradesh — ${BUSINESS.name}` },
      { name: "description", content: `Rooftop solar installation & PM Surya Ghar subsidy processing across Kadapa, Chittoor, Tirupati, Madanapalle, Rayachoti, Anantapuramu, Kurnool, and Nandyal.` },
      { property: "og:title", content: `Solar Service Areas — ${BUSINESS.name}` },
      { property: "og:description", content: `Prompt rooftop solar surveys and installations across Rayalaseema with ${BUSINESS.name}.` },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServiceAreas,
});

const areaImages = [
  heroImg,
  residentialImg,
  commercialImg,
  cleanEnergyImg,
  installationImg,
  familyImg,
  technologyImg,
  benefitCustomSolarImg,
  benefitResCommImg,
];

const regionalAdvantages = [
  {
    icon: Sun,
    title: "300+ Annual Sunny Days",
    desc: "Rayalaseema boasts one of the highest solar insolation levels in India (~4.8 to 5.2 kWh/sq.m/day), yielding top-tier power production.",
  },
  {
    icon: Clock,
    title: "Rapid 24-48h Site Visits",
    desc: "Our solar engineers are stationed regionally across major district hubs for prompt physical rooftop surveys and measurements.",
  },
  {
    icon: Zap,
    title: "Direct DISCOM Coordination",
    desc: "Extensive experience working with APSPDCL and APCPDCL circle offices for speedy bi-directional net meter clearances.",
  },
  {
    icon: ShieldCheck,
    title: "Local After-Sales Support",
    desc: "Direct regional presence ensures prompt warranty support, routine health inspections, and inverter service across all towns.",
  },
];

const serviceFaqs = [
  {
    q: "Do you charge any fee for on-site roof surveys in these areas?",
    a: "No! We provide 100% free preliminary rooftop surveys and quotation consultations across all our primary service districts in Rayalaseema.",
  },
  {
    q: "What if my town or village is outside the listed cities?",
    a: "We actively serve adjoining mandals, villages, and rural clusters across Kadapa, Chittoor, Tirupati, Annamayya, Sri Sathya Sai, Anantapuramu, Kurnool, and Nandyal districts. Contact us with your location details to confirm a visit.",
  },
  {
    q: "How does grid net metering differ between APSPDCL and APCPDCL?",
    a: "Both DISCOMs follow the Andhra Pradesh Electricity Regulatory Commission (APERC) solar net-metering framework. We handle all paperwork, meter testing, and liaisoning directly with your local circle office.",
  },
  {
    q: "How fast can installation begin after site confirmation?",
    a: "Once DISCOM feasibility approval is issued on the PM Surya Ghar portal, our installation crew arrives with equipment within 5 to 7 business days.",
  },
];

function ServiceAreas() {
  return (
    <div>
      {/* PAGE HERO */}
      <PageHero
        eyebrow="Regional Coverage"
        title="Powering Homes & Businesses Across Rayalaseema"
        description={`We provide end-to-end rooftop solar engineering, installation, and PM Surya Ghar subsidy processing across ${BUSINESS.region}. Request a fast, free site visit for your property.`}
        image={installationImg}
        imageAlt="Solar installation engineers at work on a rooftop in Andhra Pradesh"
        badge="Prompt Regional Site Surveys"
        badgeIcon={<Sparkles className="h-4 w-4 text-amber-500" />}
        primaryCta={{ label: "Book Free Local Survey", to: "/contact" }}
        secondaryCta={{ label: "Calculate Sizing", to: "/calculator" }}
      />

      {/* REGIONAL ADVANTAGES */}
      <section className="bg-cream py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Why Rayalaseema Leads in Solar"
            title="The Solar Capital of Andhra Pradesh"
            description="Abundant natural irradiance combined with dedicated regional technicians ensures maximum lifetime electricity generation."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {regionalAdvantages.map((adv, i) => {
              const { anim, delay } = REVEAL_STYLES[i] ?? REVEAL_STYLES[0];
              return (
                <AnimatedCard key={adv.title} animClass={anim} delayClass={delay}>
                  <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-border/80 bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-lift">
                    <div>
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-solar-soft text-primary transition-transform duration-300 group-hover:scale-110">
                        <adv.icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-4 text-base font-bold text-foreground group-hover:text-primary transition-colors">
                        {adv.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {adv.desc}
                      </p>
                    </div>
                  </div>
                </AnimatedCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* SERVICE AREAS GRID */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <SectionHeading
          eyebrow="Our Locations"
          title="Select Your Town for Free On-Site Inspection"
          description="Click your area to submit a location-specific enquiry. Our local representative will get in touch within 24 hours."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICE_AREAS.map((area, i) => {
            const img = areaImages[i % areaImages.length]!;
            const { anim, delay } = REVEAL_STYLES[i % REVEAL_STYLES.length]!;
            return (
              <AnimatedCard key={area.name} animClass={anim} delayClass={delay}>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/80 bg-card shadow-soft transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-lift">
                  <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                    <img
                      src={img}
                      alt={`Rooftop solar installation in ${area.name}`}
                      width={800}
                      height={500}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <span className="absolute top-3 right-3 rounded-full bg-background/90 px-2.5 py-0.5 text-[11px] font-bold text-foreground shadow-xs backdrop-blur-md">
                      Active Coverage
                    </span>
                    <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-white">
                      <MapPin className="h-4 w-4 text-amber-400" />
                      <span className="font-bold text-base">{area.name}</span>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {area.description}
                      </p>
                      <div className="mt-4 flex items-center gap-2 text-xs text-emerald-600 font-semibold">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        <span>Direct Net Meter Liaisoning</span>
                      </div>
                    </div>

                    <Link
                      to="/contact"
                      search={{ area: area.name }}
                      className="mt-6 inline-flex items-center justify-between rounded-xl border border-border bg-card px-4 py-2.5 text-xs font-bold text-foreground transition-all duration-200 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary"
                    >
                      <span>Enquire for {area.name}</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </article>
              </AnimatedCard>
            );
          })}
        </div>

        {/* Notice Info Box */}
        <div className="mx-auto mt-12 flex max-w-2xl items-start gap-3 rounded-2xl border border-primary/40 bg-solar-soft p-5 text-xs sm:text-sm text-foreground shadow-soft">
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
          <p>
            Don't see your specific mandal or village listed above? We actively accept inquiries across all Rayalaseema districts. Reach out directly and our dispatch team will confirm inspection feasibility for your address.
          </p>
        </div>
      </section>

      {/* SERVICE AREAS FAQS */}
      <section className="bg-cream py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Service Coverage FAQ"
            title="Questions About Site Visits &amp; Availability"
            description="Clear answers regarding response times, survey appointments, and regional DISCOM rules."
          />
          <div className="mx-auto mt-10 max-w-3xl">
            <FAQ items={serviceFaqs} />
          </div>
        </div>
      </section>

      {/* BOTTOM CTA BANNER */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-14 text-center shadow-lift sm:px-12">
          <span className="inline-block rounded-full bg-primary-foreground/15 px-4 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground">
            Free Rooftop Inspection
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-primary-foreground text-balance sm:text-4xl">
            Ready for a Site Survey in Your Town?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-primary-foreground/85 text-sm sm:text-base leading-relaxed">
            Connect with our regional team today. We'll inspect your roof, evaluate shadows, and design a custom solar system with guaranteed output.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-card px-7 py-3.5 text-sm font-bold text-foreground shadow-soft transition-transform hover:-translate-y-0.5 active:scale-95"
            >
              Book Site Survey Now <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/calculator"
              className="inline-flex items-center gap-2 rounded-xl border border-primary-foreground/40 px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 hover:bg-primary-foreground/10"
            >
              Calculate Solar Savings
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
