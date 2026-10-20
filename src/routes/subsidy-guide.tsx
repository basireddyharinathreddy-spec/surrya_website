import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, FileSearch, ClipboardCheck, Send, Wrench, IndianRupee,
  Info, Sparkles, CheckCircle2, XCircle, FileText, Landmark,
  ShieldCheck, AlertCircle,
} from "lucide-react";
import cleanEnergyImg from "@/assets/clean-energy.jpg";
import benefitSubsidyImg from "@/assets/benefit-subsidy-guidance.jpg";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimatedCard, REVEAL_STYLES } from "@/components/AnimatedCard";
import { FAQ } from "@/components/FAQ";
import { BUSINESS } from "@/lib/config";

export const Route = createFileRoute("/subsidy-guide")({
  head: () => ({
    meta: [
      { title: `PM Surya Ghar Subsidy Guide — ${BUSINESS.name}` },
      { name: "description", content: "Complete guide to claiming up to ₹78,000 rooftop solar subsidy under PM Surya Ghar Muft Bijli Yojana in Andhra Pradesh. Eligibility, documents, and DBT process." },
      { property: "og:title", content: `PM Surya Ghar Subsidy Guide — ${BUSINESS.name}` },
      { property: "og:description", content: "Step-by-step rooftop solar subsidy guide for homes in Andhra Pradesh." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SubsidyGuide,
});

const subsidySlabs = [
  {
    capacity: "1 kW System",
    subsidy: "₹30,000",
    description: "Ideal for compact 1-2 BHK homes consuming ~100 to 120 units monthly. Direct bank deposit upon commissioning.",
    tag: "Small Homes",
  },
  {
    capacity: "2 kW System",
    subsidy: "₹60,000",
    description: "Sized for standard 2-3 BHK homes consuming ~200 to 240 units monthly. Up to 80% bill elimination.",
    tag: "Medium Homes",
  },
  {
    capacity: "3 kW to 10 kW System",
    subsidy: "₹78,000 (Maximum)",
    description: "Flat maximum central capital subsidy for 3 kW and larger residential rooftop installations.",
    tag: "Highest Subsidy Cap",
    highlight: true,
  },
];

const requiredDocs = [
  {
    icon: FileText,
    title: "Latest Electricity Bill",
    desc: "Active residential power connection bill (APSPDCL / APCPDCL) showing consumer Service Connection Number (SC No).",
  },
  {
    icon: Landmark,
    title: "Aadhaar Linked Bank Passbook",
    desc: "First page or cancelled cheque of the applicant's bank account where DBT subsidy will be credited directly.",
  },
  {
    icon: ShieldCheck,
    title: "Aadhaar Card of Owner",
    desc: "Identity verification matching the primary name on the electricity service connection record.",
  },
  {
    icon: ClipboardCheck,
    title: "Rooftop Photograph & Coordinates",
    desc: "Geo-tagged photograph of the shadow-free rooftop terrace taken by our site surveyor.",
  },
];

const subsidySteps = [
  {
    step: "01",
    title: "National Portal Registration",
    desc: "We submit your initial application on the official PM Surya Ghar portal with your DISCOM consumer number and phone.",
  },
  {
    step: "02",
    title: "DISCOM Feasibility Approval",
    desc: "Your electricity board inspects transformer capacity and issues technical feasibility approval (TFA).",
  },
  {
    step: "03",
    title: "Installation by Empanelled Vendor",
    desc: `${BUSINESS.name} supplies ALMM-approved DCR modules and executes the complete rooftop installation.`,
  },
  {
    step: "04",
    title: "Net-Meter Inspection & Commissioning",
    desc: "DISCOM officials install the bidirectional net meter and generate the official Work Completion Report (WCR).",
  },
  {
    step: "05",
    title: "Direct DBT Bank Disbursement",
    desc: "The central government transfers the ₹78,000 subsidy directly into your bank account within 30 to 45 days.",
  },
];

const subsidyFaqs = [
  {
    q: "Who is eligible for the PM Surya Ghar ₹78,000 subsidy?",
    a: "Any Indian citizen owning a residential home with a dedicated residential electricity meter and adequate shadow-free roof space is eligible. Group housing societies and residential welfare associations (RWAs) can also claim up to ₹18,000 per kW for common areas.",
  },
  {
    q: "How is the subsidy amount paid to the homeowner?",
    a: "The subsidy is disbursed directly to your Aadhaar-seeded bank account through Direct Benefit Transfer (DBT) by the Ministry of New and Renewable Energy (MNRE). It does not pass through intermediaries.",
  },
  {
    q: "Are commercial or industrial establishments eligible for this subsidy?",
    a: "No. The PM Surya Ghar subsidy is strictly reserved for residential households. However, commercial and industrial enterprises receive 40% accelerated tax depreciation and GST benefits.",
  },
  {
    q: `Does ${BUSINESS.name} assist with all the paperwork?`,
    a: "Yes! We handle 100% of the portal submissions, DISCOM net-meter applications, drawing preparations, commissioning reports, and subsidy tracking until the amount is credited to your bank.",
  },
  {
    q: "What are DCR (Domestic Content Requirement) solar modules?",
    a: "To qualify for central government subsidies, the solar cells and modules must be manufactured in India (DCR compliant). We strictly use ALMM-approved Tier-1 Indian manufactured DCR panels for all subsidy projects.",
  },
];

function SubsidyGuide() {
  return (
    <div>
      {/* PAGE HERO */}
      <PageHero
        eyebrow="Government Subsidy Guide"
        title="Claim Up to ₹78,000 PM Surya Ghar Solar Subsidy"
        description="A complete walkthrough of the Central Government's PM Surya Ghar Muft Bijli Yojana in Andhra Pradesh. Learn how direct bank transfer subsidies make rooftop solar affordable for every family."
        image={benefitSubsidyImg}
        imageAlt="Solar consultant reviewing government solar subsidy approval documents with Indian family"
        badge="Direct Bank Transfer (DBT) Credited"
        badgeIcon={<Sparkles className="h-4 w-4 text-amber-500" />}
        primaryCta={{ label: "Check Your Subsidy Eligibility", to: "/contact", search: { service: "Subsidy Guidance" } }}
        secondaryCta={{ label: "Calculate Sizing", to: "/calculator" }}
      />

      {/* OFFICIAL SUBSIDY SLABS */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <SectionHeading
          eyebrow="PM Surya Ghar Yojana"
          title="Official Central Government Subsidy Structure"
          description="Fixed financial assistance credited directly into your bank account under current national scheme regulations."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {subsidySlabs.map((slab, i) => {
            const { anim, delay } = REVEAL_STYLES[i] ?? REVEAL_STYLES[0];
            return (
              <AnimatedCard key={slab.capacity} animClass={anim} delayClass={delay}>
                <div
                  className={`relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border ${
                    slab.highlight
                      ? "border-primary bg-card ring-2 ring-primary/30 shadow-lift"
                      : "border-border/80 bg-card shadow-soft hover:border-primary/50"
                  } p-6 sm:p-8 transition-all duration-300 hover:-translate-y-2`}
                >
                  {slab.highlight && (
                    <span className="absolute top-0 right-0 rounded-bl-2xl bg-primary px-4 py-1 text-xs font-bold text-primary-foreground">
                      Max Benefit
                    </span>
                  )}

                  <div>
                    <span className="rounded-full bg-solar-soft px-3 py-1 text-xs font-bold text-primary">
                      {slab.tag}
                    </span>
                    <h3 className="mt-4 text-xl font-bold text-foreground">{slab.capacity}</h3>
                    <div className="mt-4 rounded-2xl bg-cream p-4 border border-border/80">
                      <span className="text-xs text-muted-foreground block font-medium">Direct Bank Subsidy</span>
                      <p className="text-2xl font-extrabold text-emerald-600 mt-1 font-display">
                        {slab.subsidy}
                      </p>
                    </div>
                    <p className="mt-4 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {slab.description}
                    </p>
                  </div>

                  <Link
                    to="/contact"
                    search={{ package: slab.capacity, service: "Subsidy Guidance" }}
                    className={`mt-6 inline-flex items-center justify-center gap-2 rounded-xl py-3 text-xs sm:text-sm font-bold transition-all ${
                      slab.highlight
                        ? "bg-primary text-primary-foreground shadow-soft hover:brightness-105"
                        : "border border-border bg-card text-foreground hover:bg-muted"
                    }`}
                  >
                    Apply for {slab.capacity} <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </AnimatedCard>
            );
          })}
        </div>
      </section>

      {/* REQUIRED DOCUMENTS CHECKLIST */}
      <section className="bg-cream py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Application Checklist"
            title="Documents Required for Subsidy Approval"
            description="Keep these basic documents ready. Our team handles complete scanning, portal upload, and verification."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {requiredDocs.map((doc, i) => (
              <div
                key={doc.title}
                className="group relative flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lift"
              >
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-solar-soft text-primary transition-transform duration-300 group-hover:scale-110">
                    <doc.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-foreground group-hover:text-primary transition-colors">
                    {doc.title}
                  </h3>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                    {doc.desc}
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  <span>Mandatory Requirement</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5-STEP SUBSIDY DISBURSEMENT TIMELINE */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <SectionHeading
          eyebrow="Step by Step"
          title="The 5-Step Subsidy Disbursement Journey"
          description="How your application transitions from registration to money credited into your bank account."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {subsidySteps.map((step) => (
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

      {/* CRITICAL DO'S AND DON'TS */}
      <section className="bg-cream py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Subsidy Safeguards"
            title="Important Guidelines for Hassle-Free Approval"
            description="Avoid common mistakes that cause portal delays or subsidy rejection."
          />

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl border border-emerald-500/30 bg-card p-6 sm:p-8 shadow-soft">
              <div className="flex items-center gap-2 text-emerald-700 font-bold text-base">
                <CheckCircle2 className="h-5 w-5" />
                <span>What to Ensure (Do's)</span>
              </div>
              <ul className="mt-5 space-y-3 text-xs sm:text-sm text-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Ensure your electricity bill name matches your Aadhaar card spelling.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Use an Aadhaar-seeded active bank account for seamless DBT disbursement.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Install through an empanelled vendor using ALMM-certified DCR modules.</span>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-red-500/30 bg-card p-6 sm:p-8 shadow-soft">
              <div className="flex items-center gap-2 text-red-600 font-bold text-base">
                <AlertCircle className="h-5 w-5" />
                <span>What to Avoid (Don'ts)</span>
              </div>
              <ul className="mt-5 space-y-3 text-xs sm:text-sm text-foreground">
                <li className="flex items-start gap-2">
                  <XCircle className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                  <span>Do not use non-DCR imported solar panels (these are not eligible for subsidy).</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                  <span>Do not apply under commercial or non-domestic electricity tariff connections.</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                  <span>Do not begin physical installation before securing DISCOM portal technical approval.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SUBSIDY FAQS */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <SectionHeading
          eyebrow="Common Questions"
          title="Frequently Asked Questions on Subsidies"
          description="Everything you need to know about bank credits, timelines, and eligibility."
        />
        <div className="mx-auto mt-10 max-w-3xl">
          <FAQ items={subsidyFaqs} />
        </div>
      </section>

      {/* BOTTOM CTA BANNER */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-14 text-center shadow-lift sm:px-12">
          <span className="inline-block rounded-full bg-primary-foreground/15 px-4 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground">
            100% Subsidy Paperwork Handled By Us
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-primary-foreground text-balance sm:text-4xl">
            Let Us Handle Your Subsidy From Start to Finish
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-primary-foreground/85 text-sm sm:text-base leading-relaxed">
            Don't get lost in portal paperwork. Our dedicated liaisoning team in Rayalaseema ensures speedy verification and direct bank account credit.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              search={{ service: "Subsidy Guidance" }}
              className="inline-flex items-center gap-2 rounded-xl bg-card px-7 py-3.5 text-sm font-bold text-foreground shadow-soft transition-transform hover:-translate-y-0.5 active:scale-95"
            >
              Get Free Subsidy Consultation <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/calculator"
              className="inline-flex items-center gap-2 rounded-xl border border-primary-foreground/40 px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 hover:bg-primary-foreground/10"
            >
              Calculate Your Sizing First
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
