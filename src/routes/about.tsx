import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sun, Target, HeartHandshake } from "lucide-react";
import installationImg from "@/assets/installation.jpg";
import technologyImg from "@/assets/technology.jpg";
import { SectionHeading, Card } from "@/components/SectionHeading";
import { BUSINESS } from "@/lib/config";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About Us — ${BUSINESS.name}` },
      { name: "description", content: `${BUSINESS.name} helps Andhra Pradesh homes and businesses explore solar energy with honest guidance and quality installations.` },
      { property: "og:title", content: `About Us — ${BUSINESS.name}` },
      { property: "og:description", content: `Helping homes and businesses explore solar energy across ${BUSINESS.region}.` },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const values = [
  { icon: Sun, title: "Honest Guidance", text: "We explain options, costs, and realistic expectations — no inflated promises." },
  { icon: Target, title: "Local Focus", text: "We understand Rayalaseema's climate, roofs, and electricity landscape because this is our home region." },
  { icon: HeartHandshake, title: "Long-Term Support", text: "Solar is a 25-year decision. We aim to be reachable long after installation day." },
];

function About() {
  return (
    <div>
      <section className="bg-cream">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">About Us</p>
            <h1 className="mt-3 text-4xl font-extrabold text-balance sm:text-5xl">{BUSINESS.tagline}</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              {BUSINESS.name} exists to help homes and businesses across Rayalaseema explore solar energy with confidence — clear information, transparent pricing, and dependable service.
            </p>
          </div>
          <img
            src={installationImg}
            alt="Professional technicians installing rooftop solar panels"
            width={1200}
            height={800}
            className="w-full rounded-3xl object-cover shadow-lift"
            fetchPriority="high"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <SectionHeading
          eyebrow="Our Values"
          title="What we stand for"
          description="The principles that guide every conversation and every installation."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {values.map((v) => (
            <Card key={v.title}>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-solar-soft">
                <v.icon className="h-5 w-5 text-primary" aria-hidden />
              </div>
              <h3 className="mt-4 font-bold">{v.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{v.text}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-cream py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <img
            src={technologyImg}
            alt="Close-up of solar panel cells and an inverter"
            width={1200}
            height={800}
            loading="lazy"
            className="w-full rounded-3xl object-cover shadow-lift"
          />
          <div>
            <SectionHeading
              align="left"
              eyebrow="Our Goal"
              title="Making solar simple for Rayalaseema"
              description="We want every household and business in the region to be able to explore solar with clear, honest information — and to move forward only when it genuinely makes sense for them."
            />
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft"
            >
              Talk to Us <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
