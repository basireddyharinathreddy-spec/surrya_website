import { createFileRoute, Link } from "@tanstack/react-router";
import { Scale, FileCheck, IndianRupee, Landmark, ShieldAlert, ArrowRight } from "lucide-react";
import { BUSINESS } from "@/lib/config";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: `Terms & Conditions — ${BUSINESS.name}` },
      { name: "description", content: `Terms and conditions for using the ${BUSINESS.name} website, quotations, and services.` },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Terms,
});

const termsSections = [
  {
    icon: Scale,
    title: "1. Acceptance of Terms",
    text: `This website is operated by ${BUSINESS.name}. By accessing or using this website, calculating estimates, or submitting enquiries, you agree to these terms. If you do not agree, please do not use this website.`,
  },
  {
    icon: IndianRupee,
    title: "2. Indicative Pricing & Quotations",
    text: "All package prices, equipment costs, and savings estimates shown on this website are indicative reference figures. Final commercial pricing is established through a signed formal proposal following a comprehensive physical site assessment.",
  },
  {
    icon: Landmark,
    title: "3. Government Subsidies & Approvals",
    text: "Subsidies under PM Surya Ghar Muft Bijli Yojana are governed exclusively by the Ministry of New and Renewable Energy (MNRE) and relevant state DISCOMs. While we provide complete documentation and liaisoning assistance, subsidy approval and DBT disbursement timing remain subject to official government portal verification.",
  },
  {
    icon: FileCheck,
    title: "4. Generation Estimates & Performance",
    text: "Generation metrics (such as 4 units per kW per day) are calculated based on standard solar irradiance data for Rayalaseema. Actual power yield varies according to local weather conditions, rooftop orientation, tilt angle, soiling, and shadow dynamics.",
  },
  {
    icon: ShieldAlert,
    title: "5. Limitation of Liability",
    text: "We strive to ensure that all information on this website is current and accurate. However, to the maximum extent permitted by applicable law, we make no warranties regarding completeness or uninterrupted website access.",
  },
];

function Terms() {
  return (
    <div className="bg-cream py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center">
          <span className="inline-block rounded-full bg-solar-soft px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-primary">
            Legal Terms of Service
          </span>
          <h1 className="mt-3 text-3xl font-extrabold sm:text-4xl text-foreground">
            Terms &amp; Conditions
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
            Last updated: October 2026 • Governing website access and preliminary quotations
          </p>
        </div>

        <div className="mt-10 space-y-5">
          {termsSections.map((sec) => (
            <div
              key={sec.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-200 hover:border-primary/40"
            >
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-solar-soft text-primary">
                  <sec.icon className="h-4 w-4" />
                </div>
                <h2 className="text-base font-bold text-foreground">{sec.title}</h2>
              </div>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                {sec.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-solar-soft/60 border border-primary/30 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-sm font-bold text-foreground">Questions About Our Terms or Services?</h3>
            <p className="text-xs text-muted-foreground mt-0.5">We are happy to answer any questions regarding terms or quotations.</p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-5 py-2.5 text-xs font-bold text-primary-foreground shadow-soft hover:brightness-105"
          >
            Contact Our Legal Desk <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
