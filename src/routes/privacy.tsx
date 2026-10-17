import { createFileRoute } from "@tanstack/react-router";
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

function Privacy() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-extrabold sm:text-4xl">Privacy Policy</h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: October 2026</p>
      <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
        <div>
          <h2 className="mb-2 text-lg font-bold text-foreground">1. Information We Collect</h2>
          <p>When you submit an enquiry through this website, we collect the details you provide: your name, mobile number, email address (if given), city and district, property type, service interest, and any message you write.</p>
        </div>
        <div>
          <h2 className="mb-2 text-lg font-bold text-foreground">2. How We Use Your Information</h2>
          <p>We use your information solely to respond to your enquiry, provide quotations, arrange site assessments, and communicate about our solar services. We do not sell your personal information to third parties.</p>
        </div>
        <div>
          <h2 className="mb-2 text-lg font-bold text-foreground">3. WhatsApp Communication</h2>
          <p>If you choose to contact us via WhatsApp, your communication is subject to WhatsApp's own privacy policy in addition to this one.</p>
        </div>
        <div>
          <h2 className="mb-2 text-lg font-bold text-foreground">4. Data Retention</h2>
          <p>We retain enquiry details only as long as needed to serve your request and maintain our business records as required by law.</p>
        </div>
        <div>
          <h2 className="mb-2 text-lg font-bold text-foreground">5. Your Rights</h2>
          <p>You may ask us to correct or delete your personal information at any time by contacting us at {BUSINESS.email} or {BUSINESS.phone}.</p>
        </div>
        <div>
          <h2 className="mb-2 text-lg font-bold text-foreground">6. Changes to This Policy</h2>
          <p>We may update this policy from time to time. The latest version will always be available on this page.</p>
        </div>
        <div>
          <h2 className="mb-2 text-lg font-bold text-foreground">7. Contact</h2>
          <p>Questions about this policy? Contact {BUSINESS.name} at {BUSINESS.email} or {BUSINESS.phone}.</p>
        </div>
      </div>
    </section>
  );
}
