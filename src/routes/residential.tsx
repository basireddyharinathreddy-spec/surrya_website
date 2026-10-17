import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import residentialImg from "@/assets/residential.jpg";
import familyImg from "@/assets/family.jpg";
import { SectionHeading, Card } from "@/components/SectionHeading";
import { BUSINESS } from "@/lib/config";

export const Route = createFileRoute("/residential")({
  head: () => ({
    meta: [
      { title: `Residential Solar — ${BUSINESS.name}` },
      { name: "description", content: `Rooftop solar for homes across ${BUSINESS.region}: roof assessment, system sizing, equipment options, installation coordination, and maintenance.` },
      { property: "og:title", content: `Residential Solar — ${BUSINESS.name}` },
      { property: "og:description", content: `Rooftop solar solutions for homes across ${BUSINESS.region}.` },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Residential,
});

const features = [
  { title: "Roof Assessment", text: "We evaluate your roof's size, direction, shading, and structure to understand what's possible." },
  { title: "System Sizing", text: "Your system is sized around your actual electricity consumption, not a one-size-fits-all guess." },
  { title: "Equipment Options", text: "We explain panel and inverter options clearly so you can choose with confidence." },
  { title: "Installation Coordination", text: "We coordinate professional installation and grid connection, keeping you informed at each step." },
  { title: "Maintenance Options", text: "Ask about cleaning and maintenance options to keep your system performing well." },
  { title: "Subsidy Guidance", text: "We help you understand current government scheme rules and the application process." },
];

function Residential() {
  return (
    <div>
      <section className="bg-cream">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Residential Solar</p>
            <h1 className="mt-3 text-4xl font-extrabold text-balance sm:text-5xl">Solar for your home, sized for your life</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Rooftop solar systems for homes across Rayalaseema — from first assessment to switch-on, with clear guidance at every step.
            </p>
            <Link
              to="/contact"
              search={{ service: "Residential Solar" }}
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft"
            >
              Get a Home Solar Quote <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <img
            src={residentialImg}
            alt="Solar panels installed on a family home rooftop"
            width={1200}
            height={800}
            className="w-full rounded-3xl object-cover shadow-lift"
            fetchPriority="high"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <SectionHeading
          eyebrow="What's Included"
          title="A complete residential solar service"
          description="Everything your home solar journey needs, explained plainly."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <Card key={f.title}>
              <CheckCircle2 className="h-6 w-6 text-primary" aria-hidden />
              <h3 className="mt-3 font-bold">{f.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{f.text}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-cream py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <img
            src={familyImg}
            alt="Indian family outside their home with rooftop solar panels"
            width={1200}
            height={800}
            loading="lazy"
            className="w-full rounded-3xl object-cover shadow-lift"
          />
          <div>
            <SectionHeading
              align="left"
              eyebrow="For Your Family"
              title="A quieter, cleaner way to power your home"
              description="Solar lets your household generate its own electricity from the sun — reducing bills and dependence on the grid."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/calculator" className="rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold shadow-soft">
                Estimate Your Savings
              </Link>
              <Link to="/packages" className="rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold shadow-soft">
                View Packages
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
