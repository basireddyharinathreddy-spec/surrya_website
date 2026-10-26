import { useState, useMemo } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Calculator, Info, ArrowRight, Sun, Zap, IndianRupee,
  ShieldCheck, Leaf, Sparkles, CheckCircle2, RotateCcw,
} from "lucide-react";
import cleanEnergyImg from "@/assets/clean-energy.jpg";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimatedCard, REVEAL_STYLES } from "@/components/AnimatedCard";
import { FAQ } from "@/components/FAQ";
import { SERVICE_AREAS, BUSINESS } from "@/lib/config";

export const Route = createFileRoute("/calculator")({
  head: () => ({
    meta: [
      { title: `Solar Savings & PM Surya Ghar Subsidy Calculator | ${BUSINESS.name}` },
      {
        name: "description",
        content: `Calculate rooftop solar sizing, monthly generation, electricity bill savings, and PM Surya Ghar subsidy in Andhra Pradesh with ${BUSINESS.name}. Instant Rayalaseema estimates.`,
      },
      { property: "og:title", content: `Solar Savings & Subsidy Calculator | ${BUSINESS.name}` },
      { property: "og:description", content: "Instant solar generation and PM Surya Ghar subsidy calculations based on Rayalaseema weather irradiance." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.surryagenpower.in/calculator" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://www.surryagenpower.in/calculator" },
    ],
    scripts: [
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
              "name": "Solar Calculator",
              "item": "https://www.surryagenpower.in/calculator"
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
              "name": "How accurate are these calculator figures?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The calculations are indicative and grounded in Rayalaseema's actual solar insolation data (~4 to 4.5 kWh/sq.m/day) and standard AP electricity tariffs. Exact generation depends on seasonal variation, panel cleanliness, and your rooftop's shadow-free direction."
              }
            },
            {
              "@type": "Question",
              "name": "How is the government subsidy calculated in the results?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "For residential systems under PM Surya Ghar, the subsidy is ₹30,000 for 1 kW, ₹60,000 for 2 kW, and capped at ₹78,000 for systems of 3 kW or greater. Commercial installations do not get direct DBT subsidies but receive 40% accelerated depreciation."
              }
            },
            {
              "@type": "Question",
              "name": "What if my roof has partial tree or parapet shadow?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our calculator accounts for usable roof fraction (70% for residential, 80% for commercial). During a physical site visit, our engineer uses 3D sun-path simulation software to position modules strictly outside shadow zones."
              }
            },
            {
              "@type": "Question",
              "name": "Can I export excess units to the electricity grid?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Andhra Pradesh DISCOMs (APSPDCL and APCPDCL) provide bi-directional net-metering. Excess units generated during sunny hours roll over to offset your nighttime and rainy-day usage."
              }
            }
          ]
        }),
      },
    ],
  }),
  component: CalculatorPage,
});

const UNITS_PER_KW_PER_MONTH = 120; // ~4 units/kW/day * 30 days in Rayalaseema
const SQFT_PER_KW = 80;

const PRESETS = [
  { label: "2 BHK Flat / Small Home", bill: "2500", roof: "300", type: "Residential", tariff: "7.5" },
  { label: "3 BHK House / Medium", bill: "4500", roof: "500", type: "Residential", tariff: "8.0" },
  { label: "Large Villa / Joint Family", bill: "9000", roof: "900", type: "Residential", tariff: "8.5" },
  { label: "Commercial Shop / Hospital", bill: "25000", roof: "2000", type: "Commercial", tariff: "10.0" },
];

const calculatorFaqs = [
  {
    q: "How accurate are these calculator figures?",
    a: "The calculations are indicative and grounded in Rayalaseema's actual solar insolation data (~4 to 4.5 kWh/sq.m/day) and standard AP electricity tariffs. Exact generation depends on seasonal variation, panel cleanliness, and your rooftop's shadow-free direction.",
  },
  {
    q: "How is the government subsidy calculated in the results?",
    a: "For residential systems under PM Surya Ghar, the subsidy is ₹30,000 for 1 kW, ₹60,000 for 2 kW, and capped at ₹78,000 for systems of 3 kW or greater. Commercial installations do not get direct DBT subsidies but receive 40% accelerated depreciation.",
  },
  {
    q: "What if my roof has partial tree or parapet shadow?",
    a: "Our calculator accounts for usable roof fraction (70% for residential, 80% for commercial). During a physical site visit, our engineer uses 3D sun-path simulation software to position modules strictly outside shadow zones.",
  },
  {
    q: "Can I export excess units to the electricity grid?",
    a: "Yes. Andhra Pradesh DISCOMs (APSPDCL and APCPDCL) provide bi-directional net-metering. Excess units generated during sunny hours roll over to offset your nighttime and rainy-day usage.",
  },
];

const inputCls =
  "w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary transition-all";

function CalculatorPage() {
  const [bill, setBill] = useState("3312");
  const [tariff, setTariff] = useState("8.0");
  const [roofArea, setRoofArea] = useState("450");
  const [propertyType, setPropertyType] = useState("Residential");
  const [location, setLocation] = useState("Kadapa");

  const results = useMemo(() => {
    const billNum = Math.max(0, parseFloat(bill) || 0);
    const tariffNum = Math.max(0.1, parseFloat(tariff) || 8);
    const roofNum = Math.max(0, parseFloat(roofArea) || 0);

    const monthlyUnits = billNum / tariffNum;
    const usableFraction = propertyType === "Residential" ? 0.7 : 0.8;
    const maxKwByRoof = (roofNum * usableFraction) / SQFT_PER_KW;
    const kwByUsage = monthlyUnits / UNITS_PER_KW_PER_MONTH;
    const recommendedKw = Math.max(0.5, Math.min(maxKwByRoof, kwByUsage));
    const roundedKw = Math.round(recommendedKw * 10) / 10;

    const monthlyGeneration = Math.round(roundedKw * UNITS_PER_KW_PER_MONTH);
    const monthlySavings = Math.round(Math.min(monthlyGeneration, monthlyUnits) * tariffNum);
    const yearlySavings = monthlySavings * 12;
    const twentyFiveYearSavings = yearlySavings * 25;

    // Estimate Subsidy (PM Surya Ghar rules for residential)
    let estimatedSubsidy = 0;
    if (propertyType === "Residential") {
      if (roundedKw >= 3) {
        estimatedSubsidy = 78000;
      } else if (roundedKw >= 2) {
        estimatedSubsidy = 60000;
      } else if (roundedKw >= 1) {
        estimatedSubsidy = 30000;
      }
    }

    // Rough approximate gross cost (~₹62,000/kW)
    const approximateGrossCost = Math.round(roundedKw * 62000);
    const netEstimatedCost = Math.max(0, approximateGrossCost - estimatedSubsidy);
    const paybackYears = yearlySavings > 0 ? (netEstimatedCost / yearlySavings).toFixed(1) : "3.5";

    // CO2 offset (~0.82 kg CO2 per kWh)
    const annualCo2Kg = Math.round(monthlyGeneration * 12 * 0.82);
    const treesEquivalent = Math.round(annualCo2Kg / 20);

    return {
      monthlyUnits: Math.round(monthlyUnits),
      recommendedKw: roundedKw,
      monthlyGeneration,
      monthlySavings,
      yearlySavings,
      twentyFiveYearSavings,
      estimatedSubsidy,
      approximateGrossCost,
      netEstimatedCost,
      paybackYears,
      annualCo2Kg,
      treesEquivalent,
    };
  }, [bill, tariff, roofArea, propertyType]);

  const applyPreset = (preset: typeof PRESETS[0]) => {
    setBill(preset.bill);
    setRoofArea(preset.roof);
    setPropertyType(preset.type);
    setTariff(preset.tariff);
  };

  return (
    <div>
      {/* PAGE HERO */}
      <PageHero
        eyebrow="Interactive Solar Calculator"
        title="Estimate Your Rooftop Solar Potential &amp; Government Subsidy"
        description="Enter your monthly power bill and available roof space to calculate recommended system size, monthly unit generation, financial payback, and PM Surya Ghar subsidy."
        image={cleanEnergyImg}
        imageAlt="Bright sunlight shining on high efficiency solar panels in Andhra Pradesh"
        badge="Grounded in Andhra Pradesh Solar Yields"
        badgeIcon={<Sparkles className="h-4 w-4 text-amber-500" />}
        primaryCta={{ label: "Request Physical Roof Assessment", to: "/contact" }}
        secondaryCta={{ label: "View Pre-Sized Packages", to: "/packages" }}
      />

      {/* QUICK PRESETS STRIP */}
      <section className="bg-cream border-b border-border py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              ⚡ Quick Scenario Presets:
            </span>
            <div className="flex flex-wrap gap-2">
              {PRESETS.map((p) => (
                <button
                  key={p.label}
                  type="button"
                  onClick={() => applyPreset(p)}
                  className="rounded-xl border border-border bg-card px-3.5 py-1.5 text-xs font-semibold text-foreground shadow-2xs hover:border-primary hover:bg-solar-soft transition-all active:scale-95"
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CALCULATOR INTERFACE */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-12">
          {/* INPUT FORM (5 COLUMNS) */}
          <div className="lg:col-span-5 rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-soft">
            <div className="flex items-center justify-between pb-4 border-b border-border">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-solar-soft text-primary font-bold">
                  <Calculator className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">Your Electricity Profile</h3>
                  <p className="text-xs text-muted-foreground">Adjust numbers to see real-time estimates</p>
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label htmlFor="calc-bill" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Monthly Electricity Bill (₹)
                  </label>
                  <span className="text-xs font-bold text-primary">₹{parseFloat(bill || "0").toLocaleString("en-IN")}</span>
                </div>
                <input
                  id="calc-bill"
                  type="number"
                  min="500"
                  max="1000000"
                  step="100"
                  className={inputCls}
                  value={bill}
                  onChange={(e) => setBill(e.target.value)}
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label htmlFor="calc-tariff" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Tariff Rate (₹ / Unit)
                  </label>
                  <span className="text-xs font-bold text-muted-foreground">Typical AP: ₹7.5 - ₹9.0</span>
                </div>
                <input
                  id="calc-tariff"
                  type="number"
                  min="3"
                  max="20"
                  step="0.1"
                  className={inputCls}
                  value={tariff}
                  onChange={(e) => setTariff(e.target.value)}
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label htmlFor="calc-roof" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Available Rooftop Area (Sq. Ft.)
                  </label>
                  <span className="text-xs font-bold text-primary">{roofArea} sq ft</span>
                </div>
                <input
                  id="calc-roof"
                  type="number"
                  min="100"
                  max="100000"
                  step="50"
                  className={inputCls}
                  value={roofArea}
                  onChange={(e) => setRoofArea(e.target.value)}
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="calc-type" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Property Type
                  </label>
                  <select
                    id="calc-type"
                    className={inputCls}
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                  >
                    <option value="Residential">Residential</option>
                    <option value="Commercial">Commercial</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="calc-location" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    City / Town
                  </label>
                  <select
                    id="calc-location"
                    className={inputCls}
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  >
                    {SERVICE_AREAS.map((a) => (
                      <option key={a.name} value={a.name}>{a.name}</option>
                    ))}
                    <option value="Other">Other AP Town</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-2xl bg-cream p-4 border border-border/80 text-xs text-muted-foreground flex items-start gap-2.5">
              <Info className="h-4 w-4 shrink-0 text-primary mt-0.5" />
              <span>
                Calculated assuming ~120 units per month per 1 kW (avg 4 units/day in Rayalaseema) with 80 sq ft shadow-free area per kW.
              </span>
            </div>
          </div>

          {/* DYNAMIC RESULTS DASHBOARD (7 COLUMNS) */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-3xl border border-primary/40 bg-card p-6 sm:p-8 shadow-lift ring-1 ring-primary/20">
            <div>
              {/* Header Badge */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-border">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
                    Estimated System Recommendation
                  </span>
                  <h3 className="text-2xl font-extrabold text-foreground">
                    {results.recommendedKw} kW Rooftop Solar System
                  </h3>
                </div>
                {propertyType === "Residential" && results.estimatedSubsidy > 0 && (
                  <span className="rounded-full bg-emerald-500/10 px-3.5 py-1 text-xs font-bold text-emerald-600 border border-emerald-500/20">
                    ₹{results.estimatedSubsidy.toLocaleString("en-IN")} PM Surya Ghar Subsidy
                  </span>
                )}
              </div>

              {/* 4 Primary Highlight Cards */}
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="rounded-2xl bg-cream p-3.5 border border-border">
                  <span className="text-[11px] text-muted-foreground block font-medium">Monthly Gen.</span>
                  <p className="text-lg font-extrabold text-foreground mt-0.5">
                    {results.monthlyGeneration.toLocaleString("en-IN")} <span className="text-xs font-normal">units</span>
                  </p>
                </div>
                <div className="rounded-2xl bg-cream p-3.5 border border-border">
                  <span className="text-[11px] text-muted-foreground block font-medium">Monthly Bill Drop</span>
                  <p className="text-lg font-extrabold text-emerald-600 mt-0.5">
                    ₹{results.monthlySavings.toLocaleString("en-IN")}
                  </p>
                </div>
                <div className="rounded-2xl bg-cream p-3.5 border border-border">
                  <span className="text-[11px] text-muted-foreground block font-medium">Annual Savings</span>
                  <p className="text-lg font-extrabold text-foreground mt-0.5">
                    ₹{results.yearlySavings.toLocaleString("en-IN")}
                  </p>
                </div>
                <div className="rounded-2xl bg-cream p-3.5 border border-border">
                  <span className="text-[11px] text-muted-foreground block font-medium">Est. Payback</span>
                  <p className="text-lg font-extrabold text-primary mt-0.5">
                    {results.paybackYears} <span className="text-xs font-normal">years</span>
                  </p>
                </div>
              </div>

              {/* Financial Breakdown Table */}
              <div className="mt-6 space-y-3 rounded-2xl bg-solar-soft/40 p-4 border border-border/80 text-xs sm:text-sm">
                <div className="flex items-center justify-between pb-2 border-b border-border/60">
                  <span className="text-muted-foreground">Monthly Consumption Need:</span>
                  <span className="font-semibold">{results.monthlyUnits} units/month</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-border/60">
                  <span className="text-muted-foreground">Approximate Gross System Cost:</span>
                  <span className="font-semibold">₹{results.approximateGrossCost.toLocaleString("en-IN")}</span>
                </div>
                {propertyType === "Residential" && (
                  <div className="flex items-center justify-between pb-2 border-b border-border/60 text-emerald-600 font-bold">
                    <span>Direct Central Subsidy (DBT):</span>
                    <span>- ₹{results.estimatedSubsidy.toLocaleString("en-IN")}</span>
                  </div>
                )}
                <div className="flex items-center justify-between pt-1 text-sm sm:text-base font-extrabold">
                  <span>Net Estimated Capital Investment:</span>
                  <span className="text-primary font-display">₹{results.netEstimatedCost.toLocaleString("en-IN")}*</span>
                </div>
                <div className="flex items-center justify-between text-xs text-muted-foreground pt-1">
                  <span>25-Year Cumulative Savings:</span>
                  <span className="font-bold text-foreground">₹{results.twentyFiveYearSavings.toLocaleString("en-IN")}</span>
                </div>
              </div>

              {/* Environmental Impact Counter */}
              <div className="mt-5 flex items-center justify-between rounded-2xl bg-emerald-500/10 px-4 py-3 border border-emerald-500/20 text-xs text-emerald-800">
                <div className="flex items-center gap-2">
                  <Leaf className="h-4 w-4 text-emerald-600" />
                  <span>Annual Green Impact:</span>
                </div>
                <span className="font-bold">
                  {results.annualCo2Kg.toLocaleString("en-IN")} kg CO₂ Avoided (~{results.treesEquivalent} Trees planted)
                </span>
              </div>
            </div>

            {/* Personalized Quotation CTA */}
            <div className="mt-8 pt-4 border-t border-border flex flex-col sm:flex-row items-center gap-3">
              <Link
                to="/contact"
                search={{
                  monthlyBill: bill,
                  area: location,
                  service: propertyType === "Residential" ? "Residential Solar" : "Commercial Solar",
                  package: `${results.recommendedKw} kW System`,
                }}
                className="inline-flex w-full sm:w-auto flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-soft hover:brightness-105 active:scale-95"
              >
                Request Quote For {results.recommendedKw} kW System <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/packages"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-border bg-card px-5 py-3.5 text-sm font-semibold text-foreground hover:bg-muted"
              >
                Compare Packages
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CALCULATOR FAQS */}
      <section className="bg-cream py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Calculation Guidance"
            title="How Our Estimates Work"
            description="Clear details on our solar irradiance formula, roof area ratios, and DISCOM net metering."
          />
          <div className="mx-auto mt-10 max-w-3xl">
            <FAQ items={calculatorFaqs} />
          </div>
        </div>
      </section>

      {/* BOTTOM CTA BANNER */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-14 text-center shadow-lift sm:px-12">
          <span className="inline-block rounded-full bg-primary-foreground/15 px-4 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground">
            Zero Obligation Free Site Assessment
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-primary-foreground text-balance sm:text-4xl">
            Turn These Estimates into Real Monthly Savings
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-primary-foreground/85 text-sm sm:text-base leading-relaxed">
            Invite our certified solar technicians to survey your terrace in Rayalaseema and provide an engineering report with guaranteed output metrics.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-card px-7 py-3.5 text-sm font-bold text-foreground shadow-soft transition-transform hover:-translate-y-0.5 active:scale-95"
            >
              Book Free Site Survey <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/subsidy-guide"
              className="inline-flex items-center gap-2 rounded-xl border border-primary-foreground/40 px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 hover:bg-primary-foreground/10"
            >
              Verify Subsidy Rules
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
