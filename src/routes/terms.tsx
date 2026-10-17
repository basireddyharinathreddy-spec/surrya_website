import { createFileRoute } from "@tanstack/react-router";
import { BUSINESS } from "@/lib/config";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: `Terms & Conditions — ${BUSINESS.name}` },
      { name: "description", content: `Terms and conditions for using the ${BUSINESS.name} website and services.` },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Terms,
});

function Terms() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-extrabold sm:text-4xl">Terms &amp; Conditions</h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: October 2026</p>
      <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
        <div>
          <h2 className="mb-2 text-lg font-bold text-foreground">1. General</h2>
          <p>This website is operated by {BUSINESS.name}. By using this website, you agree to these terms. The website provides information about solar energy solutions and allows you to submit enquiries.</p>
        </div>
        <div>
          <h2 className="mb-2 text-lg font-bold text-foreground">2. Indicative Pricing</h2>
          <p>All prices shown on this website are indicative reference prices only. Final pricing is confirmed in a written quotation after a site assessment. Prices may change without notice.</p>
        </div>
        <div>
          <h2 className="mb-2 text-lg font-bold text-foreground">3. Estimates and Calculators</h2>
          <p>Savings estimates, generation figures, and calculator results are indicative only and based on stated assumptions. They are not guarantees of actual performance or savings.</p>
        </div>
        <div>
          <h2 className="mb-2 text-lg font-bold text-foreground">4. Government Subsidies</h2>
          <p>Information about government subsidies is provided for general guidance. Eligibility, amounts, and disbursement are determined solely by the relevant government authorities under the official scheme rules in force at the time of application. {BUSINESS.name} does not guarantee subsidy approval or amounts.</p>
        </div>
        <div>
          <h2 className="mb-2 text-lg font-bold text-foreground">5. Service Coverage</h2>
          <p>Service areas listed on this website indicate regions where we accept enquiries. Actual service coverage, site visits, and installation availability are confirmed per enquiry.</p>
        </div>
        <div>
          <h2 className="mb-2 text-lg font-bold text-foreground">6. Limitation of Liability</h2>
          <p>We strive for accuracy but do not warrant that all information on this website is complete or current. To the extent permitted by law, {BUSINESS.name} is not liable for decisions made based on website content.</p>
        </div>
        <div>
          <h2 className="mb-2 text-lg font-bold text-foreground">7. Contact</h2>
          <p>Questions about these terms? Contact us at {BUSINESS.email} or {BUSINESS.phone}.</p>
        </div>
      </div>
    </section>
  );
}
