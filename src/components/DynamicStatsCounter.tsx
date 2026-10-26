import { useState, useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { Zap, Users, Award, ShieldCheck, IndianRupee, ArrowUpRight } from "lucide-react";

interface CounterItem {
  id: string;
  target: number;
  prefix?: string;
  suffix: string;
  decimals?: number;
  label: string;
  subtext: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
}

const STATS_DATA: CounterItem[] = [
  {
    id: "capacity",
    target: 4.8,
    decimals: 1,
    suffix: " MW+",
    label: "Clean Solar Capacity",
    subtext: "Installed across Andhra Pradesh",
    icon: Zap,
    accentColor: "from-amber-500 to-primary",
  },
  {
    id: "installations",
    target: 1250,
    prefix: "",
    suffix: "+",
    label: "Happy Homes & Businesses",
    subtext: "Rooftop solar projects energized",
    icon: Users,
    accentColor: "from-emerald-500 to-teal-600",
  },
  {
    id: "subsidy",
    target: 7.2,
    decimals: 1,
    prefix: "₹",
    suffix: " Cr+",
    label: "PM Surya Ghar Subsidies",
    subtext: "Directly credited to our customers",
    icon: IndianRupee,
    accentColor: "from-blue-500 to-indigo-600",
  },
  {
    id: "experience",
    target: 25,
    suffix: " Years",
    label: "Performance Guarantee",
    subtext: "Tier-1 warranty & lifelong service",
    icon: ShieldCheck,
    accentColor: "from-amber-600 to-orange-600",
  },
];

export function DynamicStatsCounter({ compact = false }: { compact?: boolean }) {
  const [counts, setCounts] = useState<{ [key: string]: number }>({
    capacity: 0,
    installations: 0,
    subsidy: 0,
    experience: 0,
  });
  const [hasStarted, setHasStarted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.25 },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const duration = 2000; // ms
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);

      const nextCounts: { [key: string]: number } = {};
      STATS_DATA.forEach((stat) => {
        nextCounts[stat.id] = parseFloat((stat.target * eased).toFixed(stat.decimals || 0));
      });

      setCounts(nextCounts);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [hasStarted]);

  return (
    <section
      ref={containerRef}
      className={`relative overflow-hidden ${
        compact ? "py-10" : "py-16 md:py-20"
      } bg-gradient-to-b from-card via-background to-card/50 border-y border-border/80`}
    >
      {/* Decorative ambient background glows */}
      <div className="pointer-events-none absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-1/4 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header Badge & Title */}
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary">
            <Award className="h-3.5 w-3.5" />
            <span>Proven Regional Excellence & Impact</span>
          </div>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground">
            Powering Andhra Pradesh with Measurable Results
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm sm:text-base text-muted-foreground">
            Real-time live operational benchmarks across Rayalaseema and neighboring districts under
            PM Surya Ghar Muft Bijli Yojana.
          </p>
        </div>

        {/* Counter Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STATS_DATA.map((stat) => {
            const Icon = stat.icon;
            const currentVal = counts[stat.id] ?? 0;
            const formattedVal =
              stat.decimals && stat.decimals > 0
                ? currentVal.toFixed(stat.decimals)
                : Math.floor(currentVal).toLocaleString();

            return (
              <div
                key={stat.id}
                className="group relative overflow-hidden rounded-2xl border border-border/80 bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lift"
              >
                {/* Subtle top indicator bar */}
                <div
                  className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${stat.accentColor}`}
                />

                <div className="flex items-center justify-between">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${stat.accentColor} text-white shadow-xs group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                </div>

                <div className="mt-5">
                  <div className="flex items-baseline font-extrabold tracking-tight text-3xl sm:text-4xl text-foreground">
                    {stat.prefix && (
                      <span className="mr-0.5 text-2xl text-primary">{stat.prefix}</span>
                    )}
                    <span>{formattedVal}</span>
                    <span className="ml-1 text-xl sm:text-2xl text-primary">{stat.suffix}</span>
                  </div>
                  <h3 className="mt-2 text-base font-bold text-foreground group-hover:text-primary transition-colors">
                    {stat.label}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                    {stat.subtext}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-border/50 flex items-center justify-between text-[11px] font-medium text-muted-foreground group-hover:text-primary">
                  <span>Verified Benchmark</span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic CTA Strip */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-medium text-muted-foreground">
          <span>Ready to join over 1,250+ solar powered properties?</span>
          <Link
            to="/calculator"
            className="inline-flex items-center gap-1 font-bold text-primary hover:underline"
          >
            Calculate Your Solar Savings Free →
          </Link>
        </div>
      </div>
    </section>
  );
}
