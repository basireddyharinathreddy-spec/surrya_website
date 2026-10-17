import { useState, type FormEvent } from "react";
import { useSearch } from "@tanstack/react-router";
import { Send, MessageCircle, CheckCircle, Loader2, Mail } from "lucide-react";
import { PACKAGES, SERVICE_AREAS, BUSINESS, whatsappLink, telLink } from "@/lib/config";
import { sendEnquiryEmail } from "@/lib/sendEnquiry";

const inputCls =
  "w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors";

export interface EnquiryPrefill {
  package?: string;
  area?: string;
  service?: string;
  monthlyBill?: string;
}

export function EnquiryForm({ prefill = {}, heading = "Request a Free Solar Quote" }: { prefill?: EnquiryPrefill; heading?: string }) {
  // Also read URL search params so links like /contact?package=4kw prefill the form.
  const searchRaw = useSearch({ strict: false }) as Partial<Record<string, string>>;
  const sp = (key: string): string | undefined => searchRaw[key];

  const initial = {
    package: sp("package") ?? prefill.package,
    area: sp("area") ?? prefill.area,
    service: sp("service") ?? prefill.service,
    monthlyBill: sp("monthlyBill") ?? prefill.monthlyBill,
  };

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    city: initial.area ?? "",
    district: "",
    propertyType: "Residential",
    service: initial.service ?? "Residential Solar",
    packageInterest: (() => {
      const p = sp("package") ?? prefill.package;
      if (!p) return "";
      const found = PACKAGES.find(
        (pkg) =>
          pkg.capacity.toLowerCase() === p.toLowerCase() ||
          pkg.id.toLowerCase() === p.toLowerCase() ||
          p.toLowerCase().includes(pkg.capacity.toLowerCase())
      );
      return found ? found.capacity : p;
    })(),
    monthlyBill: initial.monthlyBill ?? "",
    message: "",
    consent: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);

  const set = (key: string, value: string | boolean) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: "" }));
  };

  const selectedPkg = PACKAGES.find((p) => p.capacity === form.packageInterest);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form["name"].trim()) e["name"] = "Please enter your full name.";
    if (!/^[6-9]\d{9}$/.test(form["mobile"].replace(/\s/g, ""))) e["mobile"] = "Enter a valid 10-digit Indian mobile number.";
    if (form["email"] && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form["email"])) e["email"] = "Enter a valid email address.";
    if (!form["city"].trim()) e["city"] = "Please enter your city or town.";
    if (!form["consent"]) e["consent"] = "Please allow us to contact you about your enquiry.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const buildWhatsAppMessage = () =>
    [
      `New solar enquiry for ${BUSINESS.name}:`,
      `Name: ${form.name}`,
      `Mobile: ${form.mobile}`,
      form.email && `Email: ${form.email}`,
      `City: ${form.city}${form.district ? `, ${form.district}` : ""}`,
      `Property type: ${form.propertyType}`,
      `Service interest: ${form.service}`,
      form.packageInterest && `Package interest: ${form.packageInterest}`,
      form.monthlyBill && `Monthly electricity bill: ₹${form.monthlyBill}`,
      form.message && `Message: ${form.message}`,
    ]
      .filter(Boolean)
      .join("\n");

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setSending(true);
    setSubmitted(true);
    setSendError(null);

    try {
      let isSuccess = false;

      // 1. Attempt server function
      try {
        const res = await sendEnquiryEmail({
          data: {
            name: form.name,
            mobile: form.mobile,
            email: form.email || undefined,
            city: form.city,
            district: form.district || undefined,
            propertyType: form.propertyType,
            service: form.service,
            packageInterest: form.packageInterest || undefined,
            monthlyBill: form.monthlyBill || undefined,
            message: form.message || undefined,
          },
        });
        if (res && res.success) {
          isSuccess = true;
        }
      } catch (serverErr) {
        console.warn("[EnquiryForm] Server email attempt error:", serverErr);
      }

      // 2. Client-side fallback to Web3Forms if VITE_WEB3FORMS_ACCESS_KEY is available
      const clientWeb3Key = (
        (import.meta as unknown as { env?: Record<string, string> }).env?.[
          "VITE_WEB3FORMS_ACCESS_KEY"
        ] || ""
      ).trim();

      if (!isSuccess && clientWeb3Key) {
        try {
          const resp = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              access_key: clientWeb3Key,
              subject: `New Solar Enquiry from ${form.name} — Atria Renewable`,
              from_name: "Atria Renewable Website",
              name: form.name,
              phone: form.mobile,
              email: form.email || "no-reply@atriarenewable.com",
              city: form.city,
              district: form.district || "N/A",
              property_type: form.propertyType,
              service_interest: form.service,
              package_interest: form.packageInterest || "N/A",
              monthly_bill: form.monthlyBill ? `₹${form.monthlyBill}` : "N/A",
              message: form.message || "N/A",
            }),
          });
          if (resp.ok) {
            const data = (await resp.json()) as { success?: boolean };
            if (data.success) {
              isSuccess = true;
            }
          }
        } catch (clientErr) {
          console.warn("[EnquiryForm] Client Web3Forms fallback error:", clientErr);
        }
      }

      if (isSuccess) {
        setEmailSent(true);
      } else {
        setEmailSent(false);
        setSendError(
          "Direct email service is not yet configured in your deployment settings. Please send your enquiry directly to our team via WhatsApp!"
        );
      }
    } catch (err) {
      console.error(err);
      setEmailSent(false);
      setSendError("Please use WhatsApp below to send your enquiry directly to our team.");
    } finally {
      setSending(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-soft">
        {sending ? (
          <>
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-solar-soft">
              <Loader2 className="h-7 w-7 text-primary animate-spin" aria-hidden />
            </div>
            <h3 className="mt-4 text-xl font-bold">Sending your enquiry…</h3>
            <p className="mt-2 text-sm text-muted-foreground">Please wait while we forward your details to our team.</p>
          </>
        ) : emailSent ? (
          <>
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
              <CheckCircle className="h-7 w-7 text-green-600" aria-hidden />
            </div>
            <h3 className="mt-4 text-xl font-bold text-green-700">Enquiry Sent Successfully! 🎉</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Your enquiry has been emailed directly to our team at <strong>{BUSINESS.name}</strong>. We'll get back to you within 24 hours.
            </p>
            <div className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-green-50 border border-green-200 px-4 py-2.5 text-sm text-green-700">
              <Mail className="h-4 w-4 shrink-0" />
              <span>Email sent to <strong>maheshmahi95944@gmail.com</strong></span>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              Want an even faster response? Also reach us on WhatsApp.
            </p>
          </>
        ) : (
          <>
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-amber-100">
              <MessageCircle className="h-7 w-7 text-amber-600" aria-hidden />
            </div>
            <h3 className="mt-4 text-xl font-bold">Your enquiry is ready! ☀️</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              To make sure your enquiry reaches our team immediately, send it directly via WhatsApp with one click or give us a call.
            </p>
          </>
        )}

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href={whatsappLink(buildWhatsAppMessage())}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white shadow-soft hover:bg-[#1ebe5d] transition-colors"
          >
            <MessageCircle className="h-4 w-4" aria-hidden />
            {emailSent ? "Also Send on WhatsApp" : "Send Enquiry on WhatsApp"}
          </a>
          <a
            href={telLink(BUSINESS.phone)}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-5 py-3 text-sm font-medium hover:bg-muted transition-colors"
          >
            Call Us: {BUSINESS.phone}
          </a>
        </div>

        <button
          onClick={() => {
            setSubmitted(false);
            setEmailSent(false);
            setSendError(null);
          }}
          className="mt-5 block w-full text-xs font-medium text-muted-foreground hover:text-foreground underline"
        >
          ← Edit my details
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8">
      <h3 className="text-xl font-bold">{heading}</h3>
      <p className="mt-1 text-sm text-muted-foreground">Fill in your details and we'll email our team and get back to you within 24 hours.</p>

      {form.packageInterest && (
        <div className="mt-4 flex items-center justify-between rounded-xl border border-primary/30 bg-solar-soft px-4 py-3 text-sm animate-fade-up">
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
              ✓
            </span>
            <span>
              Selected Package: <strong className="font-bold text-foreground">{form.packageInterest} Solar Package</strong>
              {selectedPkg?.price ? ` (${selectedPkg.price})` : ""}
            </span>
          </div>
          <button
            type="button"
            onClick={() => set("packageInterest", "")}
            className="text-xs font-semibold text-muted-foreground underline hover:text-foreground"
          >
            Clear
          </button>
        </div>
      )}

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="eq-name" className="mb-1.5 block text-sm font-medium">Full name *</label>
          <input id="eq-name" className={inputCls} value={form.name} onChange={(e) => set("name", e.target.value)} autoComplete="name" placeholder="Your full name" />
          {errors["name"] && <p className="mt-1 text-xs text-destructive">{errors["name"]}</p>}
        </div>
        <div>
          <label htmlFor="eq-mobile" className="mb-1.5 block text-sm font-medium">Mobile number *</label>
          <input id="eq-mobile" type="tel" className={inputCls} value={form.mobile} onChange={(e) => set("mobile", e.target.value)} autoComplete="tel" placeholder="10-digit mobile" />
          {errors["mobile"] && <p className="mt-1 text-xs text-destructive">{errors["mobile"]}</p>}
        </div>
        <div>
          <label htmlFor="eq-email" className="mb-1.5 block text-sm font-medium">Email (optional)</label>
          <input id="eq-email" type="email" className={inputCls} value={form.email} onChange={(e) => set("email", e.target.value)} autoComplete="email" placeholder="yourname@email.com" />
          {errors["email"] && <p className="mt-1 text-xs text-destructive">{errors["email"]}</p>}
        </div>
        <div>
          <label htmlFor="eq-city" className="mb-1.5 block text-sm font-medium">City / town *</label>
          <input id="eq-city" className={inputCls} list="sg-areas" value={form.city} onChange={(e) => set("city", e.target.value)} placeholder="e.g. Kadapa" />
          <datalist id="sg-areas">
            {SERVICE_AREAS.map((a) => <option key={a.name} value={a.name} />)}
          </datalist>
          {errors["city"] && <p className="mt-1 text-xs text-destructive">{errors["city"]}</p>}
        </div>
        <div>
          <label htmlFor="eq-district" className="mb-1.5 block text-sm font-medium">District</label>
          <input id="eq-district" className={inputCls} value={form.district} onChange={(e) => set("district", e.target.value)} placeholder="e.g. YSR Kadapa" />
        </div>
        <div>
          <label htmlFor="eq-property" className="mb-1.5 block text-sm font-medium">Property type</label>
          <select id="eq-property" className={inputCls} value={form.propertyType} onChange={(e) => set("propertyType", e.target.value)}>
            <option>Residential</option>
            <option>Commercial</option>
            <option>Industrial</option>
            <option>Institutional</option>
          </select>
        </div>
        <div>
          <label htmlFor="eq-service" className="mb-1.5 block text-sm font-medium">Service interest</label>
          <select id="eq-service" className={inputCls} value={form.service} onChange={(e) => set("service", e.target.value)}>
            <option>Residential Solar</option>
            <option>Commercial Solar</option>
            <option>Subsidy Guidance</option>
            <option>Maintenance / Service</option>
            <option>General Enquiry</option>
          </select>
        </div>
        <div>
          <label htmlFor="eq-package" className="mb-1.5 block text-sm font-medium">Package interest (optional)</label>
          <select id="eq-package" className={inputCls} value={form.packageInterest} onChange={(e) => set("packageInterest", e.target.value)}>
            <option value="">Not sure yet</option>
            {PACKAGES.map((p) => <option key={p.id} value={p.capacity}>{p.capacity} — {p.price}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="eq-bill" className="mb-1.5 block text-sm font-medium">Monthly electricity bill (₹, optional)</label>
          <input id="eq-bill" type="number" min="0" className={inputCls} value={form.monthlyBill} onChange={(e) => set("monthlyBill", e.target.value)} placeholder="e.g. 2000" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="eq-message" className="mb-1.5 block text-sm font-medium">Message (optional)</label>
          <textarea id="eq-message" rows={3} className={inputCls} value={form.message} onChange={(e) => set("message", e.target.value)} placeholder="Tell us more about your requirements…" />
        </div>
        <div className="sm:col-span-2">
          <label className="flex items-start gap-3 text-sm text-muted-foreground">
            <input
              type="checkbox"
              className="mt-1 h-4 w-4 rounded border-input accent-[oklch(0.72_0.14_85)]"
              checked={form.consent}
              onChange={(e) => set("consent", e.target.checked)}
            />
            I agree to be contacted by {BUSINESS.name} about my enquiry.
          </label>
          {errors["consent"] && <p className="mt-1 text-xs text-destructive">{errors["consent"]}</p>}
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
      >
        <Send className="h-4 w-4" aria-hidden />
        Submit Enquiry
      </button>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        📧 Your enquiry will be emailed to our team at <strong>maheshmahi95944@gmail.com</strong>
      </p>
    </form>
  );
}
