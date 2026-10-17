import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, ArrowRight, Info } from "lucide-react";
import heroImg from "@/assets/hero-home.jpg";
import residentialImg from "@/assets/residential.jpg";
import commercialImg from "@/assets/commercial.jpg";
import cleanEnergyImg from "@/assets/clean-energy.jpg";
import installationImg from "@/assets/installation.jpg";
import familyImg from "@/assets/family.jpg";
import technologyImg from "@/assets/technology.jpg";
import { SectionHeading } from "@/components/SectionHeading";
import { SERVICE_AREAS, BUSINESS } from "@/lib/config";

export const Route = createFileRoute("/service-areas")({
  head: () => ({
    meta: [
      { title: `Service Areas — ${BUSINESS.name}` },
      { name: "description", content: `Solar enquiries across Andhra Pradesh cities with ${BUSINESS.name}.` },
      { property: "og:title", content: `Service Areas — ${BUSINESS.name}` },
      { property: "og:description", content: `Solar enquiries across ${BUSINESS.region}.` },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServiceAreas,
});

const areaImages = [heroImg, residentialImg, commercialImg, cleanEnergyImg, installationImg, familyImg, technologyImg, residentialImg, commercialImg];
const areaAlts = [
  "Modern home with rooftop solar panels in Kadapa",
  "Residential rooftop solar panels in Chittoor",
  "Commercial rooftop solar installation in Tirupati",
  "Solar panels under blue sky in Madanapalle",
  "Technicians installing solar panels in Rayachoti",
  "Family home with rooftop solar in Anantapuramu",
  "Solar panel and inverter technology in Puttaparthi",
  "Home rooftop solar system in Kurnool",
  "Commercial solar rooftop in Nandyal",
];

function ServiceAreas() {
  return (
    <div>
      <section className="bg-cream py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Service Areas"
            title="Solar across Rayalaseema"
            description="We take rooftop solar enquiries across the region. Select your town to start an enquiry."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICE_AREAS.map((area, i) => (
              <article key={area.name} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
                <div className="aspect-[3/2] overflow-hidden">
                  <img
                    src={areaImages[i]}
                    alt={areaAlts[i]}
                    width={1200}
                    height={800}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="flex items-center gap-2 text-lg font-bold">
                    <MapPin className="h-5 w-5 text-primary" aria-hidden />
                    {area.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{area.description}</p>
                  <Link
                    to="/contact"
                    search={{ area: area.name }}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-primary"
                  >
                    Enquire for This Area <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="mx-auto mt-10 flex max-w-2xl items-start gap-3 rounded-2xl border border-border bg-card p-5 text-sm text-muted-foreground">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
            <p>
              Actual service coverage and site visits must be confirmed for each enquiry. We do not operate a local office in every town — contact us to confirm availability for your location.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
