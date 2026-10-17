import { createFileRoute, Link } from "@tanstack/react-router";
import { Info } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { BUSINESS } from "@/lib/config";
import { SolarPackageCards } from "@/components/SolarPackageCards";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: `Solar Packages — ${BUSINESS.name}` },
      { name: "description", content: `Indicative rooftop solar packages: 3.45 kW, 4 kW, and 5 kW systems with reference pricing for homes and businesses across ${BUSINESS.region}.` },
      { property: "og:title", content: `Solar Packages — ${BUSINESS.name}` },
      { property: "og:description", content: `Indicative rooftop solar packages with reference pricing for ${BUSINESS.region}.` },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Packages,
});

function Packages() {
  return (
    <div>
      <section className="bg-cream py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Solar Packages"
            title="Choose a starting point"
            description="Indicative reference packages from our current brochure. Your final system and price are confirmed after a roof and site assessment."
          />
          <SolarPackageCards className="mt-12" />
          <div className="mx-auto mt-12 flex max-w-2xl items-start gap-3 rounded-2xl border border-border bg-card p-5 text-sm text-muted-foreground shadow-soft">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
            <p>
              Prices shown are indicative reference prices pending confirmation by {BUSINESS.name}. Final pricing depends on your roof, equipment selection, and site conditions. Equipment details, inclusions, and warranty terms are shared with your personalized quotation.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="rounded-3xl bg-primary px-6 py-12 text-center shadow-lift">
          <h2 className="text-2xl font-extrabold text-primary-foreground sm:text-3xl">Not sure which size fits?</h2>
          <p className="mx-auto mt-2 max-w-lg text-primary-foreground/80">
            Use our savings calculator or request a free assessment — we'll recommend a system based on your actual usage.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link to="/calculator" className="rounded-xl bg-card px-6 py-3 text-sm font-semibold text-foreground shadow-soft">
              Try the Calculator
            </Link>
            <Link to="/contact" className="rounded-xl border border-primary-foreground/40 px-6 py-3 text-sm font-semibold text-primary-foreground">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
