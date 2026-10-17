import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, FileSearch, ClipboardCheck, Send, Wrench, IndianRupee, Info } from "lucide-react";
import cleanEnergyImg from "@/assets/clean-energy.jpg";
import { SectionHeading } from "@/components/SectionHeading";
import { FAQ } from "@/components/FAQ";
import { BUSINESS } from "@/lib/config";

export const Route = createFileRoute("/subsidy-guide")({
  head: () => ({
    meta: [
      { title: `Government Subsidy Guide — ${BUSINESS.name}` },
      { name: "description", content: "A step-by-step guide to rooftop solar subsidies in India: enquiry, eligibility, application, installation, and disbursement. Eligibility depends on current official scheme rules." },
      { property: "og:title", content: `Government Subsidy Guide — ${BUSINESS.name}` },
      { property: "og:description", content: "A step-by-step guide to rooftop solar subsidies in India." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SubsidyGuide,
});

const steps = [
  { icon: FileSearch, title: "1. Enquiry & Information", text: "Start by understanding whether your property and electricity connection type are likely to qualify under the current scheme." },
  { icon: ClipboardCheck, title: "2. Eligibility Check", text: "Eligibility typically depends on factors like residential use, a valid electricity connection, and rooftop ownership. Rules change — always verify against the current official scheme." },
  { icon: Send, title: "3. Application", text: "Applications are generally submitted through the official government portal with your electricity bill and identity documents." },
  { icon: Wrench, title: "4. Installation Requirements", text: "Systems usually must be installed by empanelled vendors using approved equipment to qualify for benefits." },
  { icon: IndianRupee, title: "5. Disbursement", text: "After installation, inspection, and commissioning, the applicable subsidy is disbursed per the scheme's process — often directly to your bank account." },
];

const subsidyFaqs = [
  { q: "How much subsidy can I get?", a: "Our reference brochure mentions up to ₹78,000 for residential rooftop solar under the current central scheme. However, the actual amount depends on your system size and the official scheme rules in force when you apply. It is not guaranteed or universally applicable." },
  { q: "Who is eligible for the subsidy?", a: "Eligibility generally covers residential consumers with a valid electricity connection and suitable rooftop. Exact criteria are defined by the official scheme and may change." },
  { q: "Can commercial properties get the subsidy?", a: "Central subsidy schemes have generally focused on residential consumers. Commercial projects may benefit from other mechanisms such as accelerated depreciation — consult a tax professional." },
  { q: `Does ${BUSINESS.name} guarantee the subsidy?`, a: "No. Subsidy approval and disbursement are handled by government authorities per official scheme rules. We provide guidance on the process, but cannot guarantee approval, amounts, or timelines." },
];

function SubsidyGuide() {
  return (
    <div>
      <section className="bg-cream">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Government Subsidy Guide</p>
            <h1 className="mt-3 text-4xl font-extrabold text-balance sm:text-5xl">Understanding rooftop solar subsidies</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Government schemes can significantly reduce the cost of residential rooftop solar. Here's how the process generally works.
            </p>
            <div className="mt-6 flex items-start gap-3 rounded-2xl border border-primary/40 bg-solar-soft p-5 text-sm text-muted-foreground">
              <Info className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
              <p>
                Our reference brochure mentions subsidies of up to <strong className="text-foreground">₹78,000</strong>. This is not guaranteed or universally applicable — eligibility and benefits depend on current official scheme rules.
              </p>
            </div>
          </div>
          <img
            src={cleanEnergyImg}
            alt="Solar panels under a bright blue sky"
            width={1200}
            height={800}
            className="w-full rounded-3xl object-cover shadow-lift"
            fetchPriority="high"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <SectionHeading
          eyebrow="Step by Step"
          title="The subsidy journey"
          description="A general overview of how the subsidy process typically unfolds."
        />
        <ol className="mx-auto mt-12 max-w-3xl space-y-0">
          {steps.map((step, i) => (
            <li key={step.title} className="relative flex gap-6 pb-10 last:pb-0">
              {i < steps.length - 1 && (
                <span className="absolute left-6 top-14 h-full w-px bg-border" aria-hidden />
              )}
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-solar-soft">
                <step.icon className="h-5 w-5 text-primary" aria-hidden />
              </span>
              <div className="pt-1.5">
                <h3 className="font-bold">{step.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-cream py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading eyebrow="Common Questions" title="Subsidy FAQs" />
          <div className="mt-10">
            <FAQ items={subsidyFaqs} />
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/contact"
              search={{ service: "Subsidy Guidance" }}
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft"
            >
              Ask Us About Subsidies <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
