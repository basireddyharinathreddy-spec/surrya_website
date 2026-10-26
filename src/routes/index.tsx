import { useRef, useState, useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Sun,
  Building2,
  SlidersHorizontal,
  Home,
  Landmark,
  Wrench,
  MapPin,
  ArrowRight,
  PhoneCall,
  ClipboardList,
  FileText,
  Search,
  FileCheck,
  MonitorCheck,
} from "lucide-react";
import heroImg from "@/assets/hero-home.jpg";
import residentialImg from "@/assets/residential.jpg";
import commercialImg from "@/assets/commercial.jpg";
import familyImg from "@/assets/family.jpg";
import cleanEnergyImg from "@/assets/clean-energy.jpg";
import installationImg from "@/assets/installation.jpg";
import benefitCustomSolarImg from "@/assets/benefit-customized-solar.jpg";
import benefitResCommImg from "@/assets/benefit-residential-commercial.jpg";
import benefitSubsidyImg from "@/assets/benefit-subsidy-guidance.jpg";
import benefitInstallImg from "@/assets/benefit-installation-service.jpg";
import { SectionHeading, Card } from "@/components/SectionHeading";
import { FAQ } from "@/components/FAQ";
import { BUSINESS, SERVICE_AREAS } from "@/lib/config";
import { SolarPackageCards } from "@/components/SolarPackageCards";
import { DynamicHeroSlider } from "@/components/DynamicHeroSlider";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `Solar Panel Installation in Kadapa, Tirupati & Chittoor | ${BUSINESS.brandName}` },
      {
        name: "description",
        content: `Surrya Gen Power is a leading solar company in Kadapa, Tirupati, and Chittoor. We install the best solar panels in Andhra Pradesh with up to ₹78,000 PM Surya Ghar subsidy. Free site survey.`,
      },
      {
        property: "og:title",
        content: `Solar Panel Installation in Kadapa, Tirupati & Chittoor | ${BUSINESS.brandName}`,
      },
      {
        property: "og:description",
        content: `Premier solar company in Kadapa, Tirupati & Chittoor. Rooftop solar with the best solar panels in Andhra Pradesh and PM Surya Ghar subsidy. Call ${BUSINESS.phone}.`,
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.surryagenpower.in/" },
    ],
    links: [{ rel: "canonical", href: "https://www.surryagenpower.in/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "https://www.surryagenpower.in/#organization",
          name: "Surrya Gen Power",
          url: "https://www.surryagenpower.in",
          logo: "https://www.surryagenpower.in/favicon.svg",
          image: "https://www.surryagenpower.in/og-banner.jpg",
          description:
            "Surrya Gen Power is a premier solar company in Kadapa, Tirupati, and Chittoor offering residential and commercial solar panel installation with the best solar panels in Andhra Pradesh.",
          telephone: "+919391927443",
          email: "atriasolar5859@gmail.com",
          address: {
            "@type": "PostalAddress",
            addressRegion: "Andhra Pradesh",
            addressCountry: "IN",
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
          openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "09:00",
            closes: "19:00",
          },
          sameAs: [],
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
              name: "How much can I save with rooftop solar?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Savings depend on your electricity consumption, tariff, roof space, and system size. Use our savings calculator for an indicative estimate, or request a personalized quotation from Surrya Gen Power.",
              },
            },
            {
              "@type": "Question",
              name: "Is there a government subsidy for rooftop solar in Andhra Pradesh?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Central government schemes have offered subsidies for residential rooftop solar under PM Surya Ghar Muft Bijli Yojana, with up to ₹78,000 available for eligible residential installations. Eligibility and benefit amounts depend on current official scheme rules.",
              },
            },
            {
              "@type": "Question",
              name: "Which areas does Surrya Gen Power serve?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We take enquiries across Rayalaseema including Kadapa, Chittoor, Tirupati, Punganuru, Rayachoti, Anantapuramu, Kadiri, and Nandyal. Actual service coverage and site visits are confirmed per enquiry.",
              },
            },
            {
              "@type": "Question",
              name: "How long does solar installation take?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Timelines vary with system size, documentation, and grid approvals. We share an expected schedule with your quotation.",
              },
            },
            {
              "@type": "Question",
              name: "Do solar panels work during power cuts?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Standard on-grid systems shut down during outages for safety. Hybrid systems with batteries can provide backup — ask us about options during your consultation.",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

const benefits = [
  {
    icon: SlidersHorizontal,
    title: "Customized Solar Solutions",
    text: "Systems sized to your roof, usage, and budget.",
    img: benefitCustomSolarImg,
    alt: "Solar engineer planning customized rooftop solar design on digital tablet",
    tag: "Tailored Design",
    cta: "Calculate Sizing",
    to: "/calculator",
  },
  {
    icon: Home,
    title: "Residential & Commercial",
    text: "Rooftop systems for homes, shops, and institutions.",
    img: benefitResCommImg,
    alt: "Solar rooftop installations on modern residential and commercial buildings",
    tag: "Homes & Shops",
    cta: "Explore Systems",
    to: "/residential",
  },
  {
    icon: Landmark,
    title: "Subsidy Guidance",
    text: "Help understanding current government scheme rules.",
    img: benefitSubsidyImg,
    alt: "Solar consultant reviewing official government solar subsidy documents with Indian family",
    tag: "Up to ₹78,000",
    cta: "Check Subsidy",
    to: "/subsidy-guide",
  },
  {
    icon: Wrench,
    title: "Installation & Service",
    text: "Installation coordination and after-sales enquiries.",
    img: benefitInstallImg,
    alt: "Certified solar technicians installing rooftop solar panels with safety equipment",
    tag: "Certified Team",
    cta: "Book Consultation",
    to: "/contact",
  },
];

const solutions = [
  {
    img: residentialImg,
    alt: "Solar panels installed on a family home rooftop in India",
    icon: Home,
    title: "Residential Solar",
    text: "Roof assessment, system sizing, equipment options, installation coordination, and maintenance options for your home.",
    to: "/residential",
    cta: "Explore Residential Solar",
  },
  {
    img: commercialImg,
    alt: "Large commercial rooftop covered with solar panels",
    icon: Building2,
    title: "Commercial Solar",
    text: "Electricity consumption assessment, project sizing, quotations, installation planning, and monitoring for businesses.",
    to: "/commercial",
    cta: "Explore Commercial Solar",
  },
  {
    img: cleanEnergyImg,
    alt: "Rooftop solar panels under clear sunny skies",
    icon: Sun,
    title: "Solar Packages",
    text: "Indicative rooftop solar packages for homes and businesses with transparent pricing and full installation guidance.",
    to: "/packages",
    cta: "Explore Solar Packages",
  },
];

const processSteps = [
  {
    icon: PhoneCall,
    title: "Initial Consultation",
    text: "Share your electricity bill and requirements so we understand your needs.",
  },
  {
    icon: Search,
    title: "Roof & Site Assessment",
    text: "A site visit to assess roof space, shading, and structure, where applicable.",
  },
  {
    icon: FileText,
    title: "Customized Quotation",
    text: "A transparent quotation with system sizing and equipment options.",
  },
  {
    icon: FileCheck,
    title: "Documentation & Scheme Guidance",
    text: "Support with paperwork and guidance on applicable government schemes.",
  },
  {
    icon: Wrench,
    title: "Installation & Commissioning",
    text: "Professional installation and grid connection coordination.",
  },
  {
    icon: MonitorCheck,
    title: "Monitoring & After-Sales Support",
    text: "Generation monitoring guidance and ongoing service support.",
  },
];

const homeFaqs = [
  {
    q: "How much can I save with rooftop solar?",
    a: "Savings depend on your electricity consumption, tariff, roof space, and system size. Use our savings calculator for an indicative estimate, or request a personalized quotation.",
  },
  {
    q: "Is there a government subsidy for rooftop solar?",
    a: "Central government schemes have offered subsidies for residential rooftop solar, with the reference brochure mentioning up to ₹78,000. Eligibility and benefit amounts depend on current official scheme rules — see our Subsidy Guide for details.",
  },
  {
    q: "Which areas do you serve?",
    a: "We take enquiries across Rayalaseema including Kadapa, Chittoor, Tirupati, Punganuru, Rayachoti, Anantapuramu, Kadiri, and Nandyal. Actual service coverage and site visits are confirmed per enquiry.",
  },
  {
    q: "How long does installation take?",
    a: "Timelines vary with system size, documentation, and grid approvals. We share an expected schedule with your quotation.",
  },
  {
    q: "Do solar panels work during power cuts?",
    a: "Standard on-grid systems shut down during outages for safety. Hybrid systems with batteries can provide backup — ask us about options during your consultation.",
  },
];

// Scroll-reveal directions per card index
const REVEAL_STYLES = [
  { anim: "reveal-left", delay: "delay-0" },
  { anim: "reveal-up", delay: "delay-100" },
  { anim: "reveal-zoom", delay: "delay-200" },
  { anim: "reveal-right", delay: "delay-300" },
];

function AnimatedCard({
  children,
  animClass,
  delayClass,
}: {
  children: React.ReactNode;
  animClass: string;
  delayClass: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`${visible ? `${animClass} ${delayClass}` : "opacity-0"}`}>
      {children}
    </div>
  );
}

function Index() {
  return (
    <div>
      {/* DYNAMIC HERO SLIDER (RVSU inspiration) */}
      <DynamicHeroSlider />

      {/* BENEFITS */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
            Why Choose Surrya Gen Power
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-foreground sm:text-4xl text-balance">
            Complete Solar Solutions from Design to Subsidy
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-muted-foreground">
            End-to-end solar support tailored to your roof, maximum government subsidies, and
            certified installation across Rayalaseema.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => {
            const { anim, delay } = REVEAL_STYLES[i] ?? REVEAL_STYLES[0];
            return (
              <AnimatedCard key={b.title} animClass={anim} delayClass={delay}>
                <Link
                  to={b.to}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/80 bg-card shadow-soft transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-lift h-full"
                >
                  {/* Card Image Banner */}
                  <div className="relative aspect-[16/11] w-full overflow-hidden bg-muted">
                    <img
                      src={b.img}
                      alt={b.alt}
                      width={800}
                      height={550}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.08]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                    {/* Floating Tag */}
                    <span className="absolute top-3 right-3 rounded-full bg-background/90 px-2.5 py-0.5 text-[11px] font-bold text-foreground shadow-xs backdrop-blur-md ring-1 ring-border/50">
                      {b.tag}
                    </span>

                    {/* Overlapping Icon Badge */}
                    <div className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-xl bg-background/95 text-primary shadow-soft backdrop-blur-md ring-1 ring-primary/30 transition-transform duration-300 group-hover:scale-110">
                      <b.icon className="h-5 w-5" aria-hidden />
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                    <div>
                      <h3 className="font-display text-lg font-bold text-foreground transition-colors group-hover:text-primary">
                        {b.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
                    </div>

                    <div className="mt-5 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary group-hover:text-primary-foreground group-hover:bg-primary group-hover:py-1.5 group-hover:px-3 group-hover:rounded-lg transition-all duration-200 w-fit">
                      <span>{b.cta}</span>
                      <ArrowRight
                        className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1"
                        aria-hidden
                      />
                    </div>
                  </div>
                </Link>
              </AnimatedCard>
            );
          })}
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="bg-cream py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="What We Do"
            title="Solar solutions for every roof"
            description="From family homes to commercial buildings and rooftop solar packages — explore the right path for you."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {solutions.map((s) => (
              <article
                key={s.title}
                className="group overflow-hidden rounded-2xl border border-border bg-card shadow-soft"
              >
                <div className="aspect-[3/2] overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.alt}
                    width={1200}
                    height={800}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2">
                    <s.icon className="h-5 w-5 text-primary" aria-hidden />
                    <h3 className="text-lg font-bold">{s.title}</h3>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
                  <Link
                    to={s.to}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-primary"
                  >
                    {s.cta} <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES PREVIEW */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <SectionHeading
          eyebrow="Solar Package Prices"
          title="3.45kW, 4kW & 5kW Solar System Price in Andhra Pradesh"
          description="Compare 3.45kW, 4kW, and 5kW solar system prices featuring the best solar panels in Andhra Pradesh with ₹78,000 PM Surya Ghar subsidy deductions."
        />
        <SolarPackageCards className="mt-12" />
        <p className="mt-6 text-center text-xs text-muted-foreground">
          Prices are indicative reference prices pending confirmation by {BUSINESS.name}.
        </p>
      </section>

      {/* PROCESS TIMELINE */}
      <section className="bg-cream py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="How It Works"
            title="Our end-to-end service process"
            description="A clear, transparent journey from first conversation to switching on your system."
          />
          <ol className="relative mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, i) => (
              <li
                key={step.title}
                className="relative rounded-2xl border border-border bg-card p-6 shadow-soft"
              >
                <span className="absolute -top-4 left-6 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {i + 1}
                </span>
                <div className="mt-2 flex h-11 w-11 items-center justify-center rounded-xl bg-solar-soft">
                  <step.icon className="h-5 w-5 text-primary" aria-hidden />
                </div>
                <h3 className="mt-4 font-bold">{step.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* WHY SOLAR / BENEFITS WITH IMAGE */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative">
            <img
              src={familyImg}
              alt="Indian family outside their home with rooftop solar panels"
              width={1200}
              height={800}
              loading="lazy"
              className="w-full rounded-3xl object-cover shadow-lift"
            />
            <img
              src={cleanEnergyImg}
              alt="Solar panels under a bright blue sky"
              width={1200}
              height={800}
              loading="lazy"
              className="absolute -bottom-8 -right-4 hidden w-48 rounded-2xl border-4 border-background object-cover shadow-lift sm:block"
            />
          </div>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Why Choose Solar?"
              title="Lower bills, cleaner energy, greater independence"
              description="Rayalaseema enjoys some of the best sunlight in the country. Rooftop solar lets you put it to work."
            />
            <ul className="mt-8 space-y-4">
              {[
                "Reduce your monthly electricity bills by generating your own power",
                "Protect yourself from rising electricity tariffs",
                "Lower your household or business carbon footprint",
                "Increase the value and appeal of your property",
                "Benefit from applicable government schemes and subsidies",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Sun className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                  {point}
                </li>
              ))}
            </ul>
            <Link
              to="/calculator"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft"
            >
              Estimate Your Savings <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICE AREAS STRIP */}
      <section className="bg-cream py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Service Areas"
            title="Serving Rayalaseema"
            description="We take solar enquiries across the region. Coverage and site visits are confirmed per enquiry."
          />
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {SERVICE_AREAS.map((a) => {
              const cityPath =
                a.name === "Kadapa"
                  ? "/solar-kadapa"
                  : a.name === "Tirupati"
                    ? "/solar-tirupati"
                    : a.name === "Chittoor"
                      ? "/solar-chittoor"
                      : "/service-areas";
              return (
                <Link
                  key={a.name}
                  to={cityPath}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium shadow-soft transition-transform hover:-translate-y-0.5"
                >
                  <MapPin className="h-4 w-4 text-primary" aria-hidden />
                  {a.name}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* INSTALLATION IMAGE BAND */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="overflow-hidden rounded-3xl shadow-lift">
          <img
            src={installationImg}
            alt="Professional technicians installing rooftop solar panels"
            width={1200}
            height={800}
            loading="lazy"
            className="h-72 w-full object-cover sm:h-96"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />
          <div className="mt-10">
            <FAQ items={homeFaqs} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="rounded-3xl bg-primary px-6 py-14 text-center shadow-lift sm:px-12">
          <h2 className="text-3xl font-extrabold text-primary-foreground text-balance sm:text-4xl">
            Ready to explore solar for your roof?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-primary-foreground/80">
            Tell us about your home or business and we'll help you understand your options — no
            obligations.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-card px-7 py-3.5 text-sm font-semibold text-foreground shadow-soft transition-transform hover:-translate-y-0.5"
          >
            Get a Free Solar Quote <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </section>
    </div>
  );
}
