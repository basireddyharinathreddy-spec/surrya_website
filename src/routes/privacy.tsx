import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Lock, Eye, FileText, ArrowRight, Mail } from "lucide-react";
import { BUSINESS } from "@/lib/config";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: `Privacy Policy — ${BUSINESS.name}` },
      { name: "description", content: `How ${BUSINESS.name} collects, uses, and protects your personal information.` },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Privacy,
});

const policySections = [
  {
    icon: Eye,
    title: "1. Information We Collect",
    text: "When you submit an enquiry through this website, we collect the details you provide: your name, mobile number, email address (if given), city and district, property type, service interest, monthly bill estimate, and any message you write.",
  },
  {
    icon: Lock,
    title: "2. How We Use Your Information",
    text: "We use your information solely to respond to your enquiry, provide customized solar quotations, arrange site assessments, and communicate regarding PM Surya Ghar subsidy application processing. We never sell, rent, or trade your personal information to third-party marketing companies.",
  },
  {
    icon: FileText,
    title: "3. Government Portal Submissions",
    text: "For customers claiming government subsidies, necessary documentation (such as electricity bills, Aadhaar details, and bank passbooks) is uploaded strictly to the official PM Surya Ghar National Portal and state DISCOM portals per MNRE regulatory guidelines.",
  },
  {
    icon: ShieldCheck,
    title: "4. Data Security & Retention",
    text: "We implement standard technical and organizational security measures to protect your enquiry records. We retain customer data only as long as required to service your installation, support your 25-year warranty lifecycle, and comply with legal requirements.",
  },
  {
    icon: Mail,
    title: "5. Your Rights & Communication",
    text: `You may request review, correction, or deletion of your personal records at any time by contacting our data protection officer at ${BUSINESS.email} or by phone at ${BUSINESS.phone}.`,
  },
];

function Privacy() {
  return (
    <div className="bg-cream py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center">
          <span className="inline-block rounded-full bg-solar-soft px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-primary">
            Legal &amp; Privacy Protection
          </span>
          <h1 className="mt-3 text-3xl font-extrabold sm:text-4xl text-foreground">
            Privacy Policy
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
            Last updated: October 2026 • Effective for all {BUSINESS.name} services
          </p>
        </div>

        <div className="mt-10 space-y-5">
          {policySections.map((sec) => (
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
            <h3 className="text-sm font-bold text-foreground">Have Questions About Your Data?</h3>
            <p className="text-xs text-muted-foreground mt-0.5">Reach out to our customer compliance desk anytime.</p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-5 py-2.5 text-xs font-bold text-primary-foreground shadow-soft hover:brightness-105"
          >
            Contact Privacy Team <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
