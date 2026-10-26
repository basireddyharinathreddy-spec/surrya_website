import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Sun,
  Building2,
  Calculator,
  ShieldCheck,
} from "lucide-react";
import heroImg from "@/assets/hero-home.jpg";
import residentialImg from "@/assets/residential.jpg";
import commercialImg from "@/assets/commercial.jpg";
import installationImg from "@/assets/installation.jpg";
import { BUSINESS } from "@/lib/config";

const SLIDES = [
  {
    tag: "PM Surya Ghar Yojana",
    title: "Best Solar Panels in Andhra Pradesh — Power Your Future",
    description:
      "Your trusted solar company in Kadapa, Tirupati, Chittoor & Rayalaseema. Premier rooftop solar installation with PM Surya Ghar subsidy up to ₹78,000.",
    primaryCta: { label: "Get a Free Solar Quote", to: "/contact" },
    secondaryCta: { label: "Explore Packages", to: "/packages" },
    badge: "Govt Subsidy Eligible",
    img: heroImg,
    alt: "Best solar panels in Andhra Pradesh installed on modern home rooftop",
  },
  {
    tag: "Residential Rooftop Systems",
    title: "Residential Solar Installation Andhra Pradesh",
    description:
      "Sized for 3.45 kW to 10 kW household requirements with the best solar panels in Andhra Pradesh, DISCOM net metering, and 30-year performance warranty.",
    primaryCta: { label: "Explore Residential", to: "/residential" },
    secondaryCta: { label: "Solar Calculator", to: "/calculator" },
    badge: "Save up to 90% Bill",
    img: residentialImg,
    alt: "Residential solar installation Andhra Pradesh on family home terrace",
  },
  {
    tag: "Commercial & Industrial",
    title: "Commercial Solar Installation Andhra Pradesh",
    description:
      "High-yield commercial rooftop solar for schools, hospitals, factories, and cold storage across Rayalaseema with 40% accelerated tax depreciation.",
    primaryCta: { label: "Commercial Solutions", to: "/commercial" },
    secondaryCta: { label: "Talk to Engineers", to: "/contact" },
    badge: "Fast 3-4 Year Payback",
    img: commercialImg,
    alt: "Commercial solar installation Andhra Pradesh on industrial rooftop shed",
  },
];

export function DynamicHeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const slide = SLIDES[current % SLIDES.length]!;

  return (
    <section
      className="relative overflow-hidden bg-cream"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Slide Text Content */}
          <div key={current} className="animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-solar-soft px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-foreground">
              <Sparkles className="h-3.5 w-3.5 text-primary" aria-hidden />
              {slide.tag}
            </div>

            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-balance text-foreground sm:text-5xl lg:text-6xl">
              {slide.title.split(". ")[0]}.{" "}
              <span className="text-primary">{slide.title.split(". ")[1] || ""}</span>
            </h1>

            <p className="mt-5 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
              {slide.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to={slide.primaryCta.to}
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lift active:scale-95"
              >
                {slide.primaryCta.label} <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to={slide.secondaryCta.to}
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3.5 text-sm font-semibold text-foreground shadow-soft transition-all duration-200 hover:-translate-y-0.5 active:scale-95 hover:bg-muted"
              >
                {slide.secondaryCta.label}
              </Link>
            </div>

            {/* Quick slide indicators and navigation arrows */}
            <div className="mt-8 flex items-center gap-4 pt-4 border-t border-border/60">
              <div className="flex gap-2">
                {SLIDES.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrent(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      current === idx
                        ? "w-8 bg-primary"
                        : "w-2.5 bg-border hover:bg-muted-foreground/40"
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-1.5 ml-auto">
                <button
                  type="button"
                  onClick={() => setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length)}
                  aria-label="Previous slide"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-foreground shadow-2xs hover:bg-muted hover:border-primary/40 active:scale-95 transition-all"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setCurrent((prev) => (prev + 1) % SLIDES.length)}
                  aria-label="Next slide"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-foreground shadow-2xs hover:bg-muted hover:border-primary/40 active:scale-95 transition-all"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Slide Visual Image with floating glass badge */}
          <div className="relative animate-fade-up">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-solar-soft" aria-hidden />
            <div className="relative overflow-hidden rounded-3xl shadow-lift aspect-[16/10] bg-muted">
              <img
                key={slide.img}
                src={slide.img}
                alt={slide.alt}
                width={1600}
                height={1008}
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-white">
                <div className="inline-flex items-center gap-2 rounded-xl bg-black/50 backdrop-blur-md px-3.5 py-1.5 text-xs font-semibold ring-1 ring-white/20">
                  <ShieldCheck className="h-4 w-4 text-emerald-400" />
                  <span>{slide.badge}</span>
                </div>
                <span className="text-xs text-white/80 font-medium">
                  {current + 1} / {SLIDES.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
