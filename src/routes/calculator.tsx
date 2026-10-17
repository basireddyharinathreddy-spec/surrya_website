import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Calculator, Info, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { SERVICE_AREAS, BUSINESS } from "@/lib/config";

export const Route = createFileRoute("/calculator")({
  head: () => ({
    meta: [
      { title: `Solar Savings Calculator — ${BUSINESS.name}` },
      { name: "description", content: `Estimate your rooftop solar generation and savings potential with ${BUSINESS.name}. Indicative estimates, not guarantees.` },
      { property: "og:title", content: `Solar Savings Calculator — ${BUSINESS.name}` },
      { property: "og:description", content: "Estimate your rooftop solar savings potential with transparent assumptions." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CalculatorPage,
});

// Transparent assumptions:
// - 1 kW rooftop solar generates ~4 units (kWh) per day on average in Rayalaseema
// - 1 kW requires ~80 sq ft of shadow-free roof area
// - Usable roof fraction for residential: 70%, commercial: 80%
const UNITS_PER_KW_PER_MONTH = 120; // 4 units/day * 30 days
const SQFT_PER_KW = 80;

const inputCls =
  "w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:border-primary";

function CalculatorPage() {
  const [bill, setBill] = useState("3000");
  const [tariff, setTariff] = useState("8");
  const [roofArea, setRoofArea] = useState("500");
  const [propertyType, setPropertyType] = useState("Residential");
  const [location, setLocation] = useState("Kadapa");
  const [result, setResult] = useState<null | {
    monthlyUnits: number;
    maxKwByRoof: number;
    kwByUsage: number;
    recommendedKw: number;
    monthlyGeneration: number;
    monthlySavings: number;
    yearlySavings: number;
  }>(null);

  const calculate = () => {
    const billNum = Math.max(0, parseFloat(bill) || 0);
    const tariffNum = Math.max(0.1, parseFloat(tariff) || 8);
    const roofNum = Math.max(0, parseFloat(roofArea) || 0);

    const monthlyUnits = billNum / tariffNum;
    const usableFraction = propertyType === "Residential" ? 0.7 : 0.8;
    const maxKwByRoof = (roofNum * usableFraction) / SQFT_PER_KW;
    const kwByUsage = monthlyUnits / UNITS_PER_KW_PER_MONTH;
    const recommendedKw = Math.max(0, Math.min(maxKwByRoof, kwByUsage));
    const monthlyGeneration = recommendedKw * UNITS_PER_KW_PER_MONTH;
    const monthlySavings = Math.min(monthlyGeneration, monthlyUnits) * tariffNum;

    setResult({
      monthlyUnits: Math.round(monthlyUnits),
      maxKwByRoof: Math.round(maxKwByRoof * 10) / 10,
      kwByUsage: Math.round(kwByUsage * 10) / 10,
      recommendedKw: Math.round(recommendedKw * 10) / 10,
      monthlyGeneration: Math.round(monthlyGeneration),
      monthlySavings: Math.round(monthlySavings),
      yearlySavings: Math.round(monthlySavings * 12),
    });
  };

  return (
    <div>
      <section className="bg-cream py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Savings Calculator"
            title="Estimate your solar potential"
            description="Enter a few details to see indicative generation and savings estimates based on transparent assumptions."
          />
          <div className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8">
              <div className="grid gap-4">
                <div>
                  <label htmlFor="calc-bill" className="mb-1.5 block text-sm font-medium">Monthly electricity bill (₹)</label>
                  <input id="calc-bill" type="number" min="0" className={inputCls} value={bill} onChange={(e) => setBill(e.target.value)} />
                </div>
                <div>
                  <label htmlFor="calc-tariff" className="mb-1.5 block text-sm font-medium">Electricity tariff (₹ per unit)</label>
                  <input id="calc-tariff" type="number" min="0" step="0.1" className={inputCls} value={tariff} onChange={(e) => setTariff(e.target.value)} />
                </div>
                <div>
                  <label htmlFor="calc-roof" className="mb-1.5 block text-sm font-medium">Available roof area (sq ft)</label>
                  <input id="calc-roof" type="number" min="0" className={inputCls} value={roofArea} onChange={(e) => setRoofArea(e.target.value)} />
                </div>
                <div>
                  <label htmlFor="calc-type" className="mb-1.5 block text-sm font-medium">Property type</label>
                  <select id="calc-type" className={inputCls} value={propertyType} onChange={(e) => setPropertyType(e.target.value)}>
                    <option>Residential</option>
                    <option>Commercial</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="calc-location" className="mb-1.5 block text-sm font-medium">Location</label>
                  <select id="calc-location" className={inputCls} value={location} onChange={(e) => setLocation(e.target.value)}>
                    {SERVICE_AREAS.map((a) => <option key={a.name}>{a.name}</option>)}
                    <option>Other</option>
                  </select>
                </div>
                <button
                  onClick={calculate}
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft"
                >
                  <Calculator className="h-4 w-4" aria-hidden />
                  Calculate My Estimate
                </button>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8">
              {result ? (
                <div>
                  <h3 className="text-lg font-bold">Your indicative estimate</h3>
                  <dl className="mt-5 space-y-4">
                    {[
                      ["Estimated monthly consumption", `${result.monthlyUnits.toLocaleString("en-IN")} units`],
                      ["Suggested system size", `${result.recommendedKw} kW`],
                      ["Estimated monthly generation", `${result.monthlyGeneration.toLocaleString("en-IN")} units`],
                      ["Indicative monthly savings", `₹${result.monthlySavings.toLocaleString("en-IN")}`],
                      ["Indicative yearly savings", `₹${result.yearlySavings.toLocaleString("en-IN")}`],
                    ].map(([label, value]) => (
                      <div key={label} className="flex items-center justify-between border-b border-border pb-3">
                        <dt className="text-sm text-muted-foreground">{label}</dt>
                        <dd className="font-bold">{value}</dd>
                      </div>
                    ))}
                  </dl>
                  <p className="mt-5 flex items-start gap-2 rounded-xl bg-solar-soft p-4 text-xs text-muted-foreground">
                    <Info className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                    These are indicative estimates only, not guarantees. Assumptions: ~4 units per kW per day average generation, ~80 sq ft per kW, and typical usable roof fractions. Actual results depend on site conditions, shading, equipment, and your tariff.
                  </p>
                  <Link
                    to="/contact"
                    search={{ monthlyBill: bill, area: location, service: propertyType === "Residential" ? "Residential Solar" : "Commercial Solar" }}
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft"
                  >
                    Request a Personalized Quotation <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                </div>
              ) : (
                <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-solar-soft">
                    <Calculator className="h-8 w-8 text-primary" aria-hidden />
                  </div>
                  <h3 className="mt-4 font-bold">Your estimate will appear here</h3>
                  <p className="mt-2 max-w-xs text-sm text-muted-foreground">
                    Fill in your details and press "Calculate My Estimate" to see indicative results.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
