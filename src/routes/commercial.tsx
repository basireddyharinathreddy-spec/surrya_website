import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import commercialImg from "@/assets/commercial.jpg";
import technologyImg from "@/assets/technology.jpg";
import { SectionHeading, Card } from "@/components/SectionHeading";
import { BUSINESS } from "@/lib/config";

export const Route = createFileRoute("/commercial")({
  head: () => ({
    meta: [
      { title: `Commercial Solar — ${BUSINESS.name}` },
      { name: "description", content: `Commercial rooftop solar across ${BUSINESS.region}: consumption assessment, project sizing, quotations, installation planning, and monitoring.` },
      { property: "og:title", content: `Commercial Solar — ${BUSINESS.name}` },
      { property: "og:description", content: `Commercial rooftop solar solutions for businesses across ${BUSINESS.region}.` },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Commercial,
});

const features = [
  { title: "Consumption Assessment", text: "We study your electricity bills and load pattern to understand your real energy profile." },
  { title: "Project Sizing", text: "System capacity matched to your roof area, consumption, and budget." },
  { title: "Transparent Quotations", text: "Clear, itemized quotations so you know exactly what you're evaluating." },
  { title: "Installation Planning", text: "Careful scheduling to minimize disruption to your operations." },
  { title: "Monitoring", text: "Generation monitoring options so you can track performance over time." },
  { title: "Scalable Design", text: "Systems designed with future expansion in mind where roof space allows." },
];

function Commercial() {
  return (
    <div>
      <section className="bg-cream">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Commercial Solar</p>
            <h1 className="mt-3 text-4xl font-extrabold text-balance sm:text-5xl">Cut operating costs with rooftop solar</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Solar solutions for shops, offices, schools, hospitals, hotels, and industrial buildings across Rayalaseema.
            </p>
            <Link
              to="/contact"
              search={{ service: "Commercial Solar" }}
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft"
            >
              Request a Commercial Quote <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <img
            src={commercialImg}
            alt="Large commercial rooftop covered with solar panels"
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
          title="Commercial solar, end to end"
          description="A structured approach from energy audit to switch-on."
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
          <div>
            <SectionHeading
              align="left"
              eyebrow="The Technology"
              title="Reliable equipment, monitored performance"
              description="We explain panel, inverter, and mounting options in plain language, and help you choose equipment suited to your site and budget."
            />
            <Link
              to="/contact"
              search={{ service: "Commercial Solar" }}
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft"
            >
              Discuss Your Project <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <img
            src={technologyImg}
            alt="Close-up of solar panels and a solar inverter"
            width={1200}
            height={800}
            loading="lazy"
            className="w-full rounded-3xl object-cover shadow-lift"
          />
        </div>
      </section>
    </div>
  );
}
