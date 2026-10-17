import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import pkg345Img from "@/assets/package-3-45kw.jpg";
import pkg4Img from "@/assets/package-4kw.jpg";
import pkg5Img from "@/assets/package-5kw.jpg";

export interface PackageDetail {
  id: string;
  capacity: string;
  title: string;
  price: string;
  description: string;
  popular?: boolean;
  image: string;
  alt: string;
}

export const SOLAR_PACKAGES: PackageDetail[] = [
  {
    id: "3.45kw",
    capacity: "3.45 kW",
    title: "3.45 kW Solar Package",
    price: "₹2,15,000",
    description: "A compact rooftop system suited to smaller homes with moderate daytime electricity use.",
    image: pkg345Img,
    alt: "3.45 kW rooftop solar panel system installed on a residential terrace in India",
  },
  {
    id: "4kw",
    capacity: "4 kW",
    title: "4 kW Solar Package",
    price: "₹2,58,000",
    description: "A balanced system for typical family homes looking to offset a large share of their bill.",
    popular: true,
    image: pkg4Img,
    alt: "4 kW residential rooftop solar panel installation on an Indian home terrace",
  },
  {
    id: "5kw",
    capacity: "5 kW",
    title: "5 kW Solar Package",
    price: "₹3,15,000",
    description: "A larger system for bigger homes or small commercial spaces with higher consumption.",
    image: pkg5Img,
    alt: "5 kW elevated rooftop solar pergola installation on a modern Indian residential terrace",
  },
];

interface SolarPackageCardsProps {
  className?: string;
}

export function SolarPackageCards({ className = "" }: SolarPackageCardsProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 ${className}`}>
      {SOLAR_PACKAGES.map((pkg, idx) => (
        <article
          key={pkg.id}
          className={`group relative flex flex-col h-full rounded-2xl sm:rounded-3xl border bg-card overflow-hidden shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift ${
            pkg.popular
              ? "border-primary ring-2 ring-primary/20 bg-gradient-to-b from-solar-soft/30 via-card to-card"
              : "border-border/80 hover:border-primary/50"
          }`}
        >
          {/* Card Top Image Container with zoom effect */}
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
            <img
              src={pkg.image}
              alt={pkg.alt}
              width={1200}
              height={750}
              loading={idx === 0 ? "eager" : "lazy"}
              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
            {/* Gradient overlay for contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

            {/* Popular Badge */}
            {pkg.popular && (
              <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground shadow-sm">
                <Sparkles className="h-3 w-3" aria-hidden />
                Popular Choice
              </div>
            )}

            {/* Capacity pill over image */}
            <div className="absolute bottom-3 left-3 z-10">
              <span className="inline-flex items-center gap-1.5 rounded-lg bg-background/90 backdrop-blur-md px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-primary shadow-xs">
                {pkg.capacity} System
              </span>
            </div>
          </div>

          {/* Card Body */}
          <div className="flex flex-1 flex-col p-6 sm:p-7">
            {/* Prominent Package Title */}
            <h3 className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
              {pkg.title}
            </h3>

            {/* Price section */}
            <div className="mt-3 pb-4 border-b border-border/60">
              <div className="flex items-baseline gap-1.5">
                <span className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
                  {pkg.price}
                </span>
              </div>
              <p className="mt-1 text-xs font-medium text-muted-foreground">
                Indicative reference price
              </p>
            </div>

            {/* Existing description preserved */}
            <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
              {pkg.description}
            </p>

            {/* Key Inclusions hint matching brochure */}
            <div className="mt-5 space-y-1.5 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" aria-hidden />
                <span>Rooftop solar panels &amp; mounting structure</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" aria-hidden />
                <span>On-grid inverter &amp; safety protections</span>
              </div>
            </div>

            {/* Enquiry Button */}
            <Link
              to="/contact"
              search={{ package: pkg.capacity }}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-all duration-200 hover:bg-primary/90 hover:shadow-lift active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              <span>Request This Package</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden />
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
