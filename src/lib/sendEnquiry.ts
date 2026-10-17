import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const EnquirySchema = z.object({
  name: z.string().min(1),
  mobile: z.string().min(1),
  email: z.string().optional(),
  city: z.string().min(1),
  district: z.string().optional(),
  propertyType: z.string(),
  service: z.string(),
  packageInterest: z.string().optional(),
  monthlyBill: z.string().optional(),
  message: z.string().optional(),
});

export type EnquiryData = z.infer<typeof EnquirySchema>;

export interface SendEnquiryResult {
  success: boolean;
  provider?: "resend" | "web3forms" | "gmail";
  error?: string;
  message?: string;
}

export const sendEnquiryEmail = createServerFn({ method: "POST" })
  .validator((data: unknown) => EnquirySchema.parse(data))
  .handler(async ({ data }): Promise<SendEnquiryResult> => {
    const recipientEmail = "maheshmahi95944@gmail.com";

    // 1. Resend API (Edge/Serverless HTTPS REST API)
    const resendKey = (
      process.env["RESEND_API_KEY"] ||
      process.env["VITE_RESEND_API_KEY"] ||
      ""
    ).trim();
    if (resendKey) {
      try {
        const res = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "Atria Renewable Website <onboarding@resend.dev>",
            to: [recipientEmail],
            reply_to: data.email || undefined,
            subject: `New Solar Enquiry from ${data.name} — Atria Renewable`,
            text: buildPlainText(data),
            html: buildHtml(data),
          }),
        });

        if (res.ok) {
          return { success: true, provider: "resend" };
        }
        const errText = await res.text();
        console.error("[Resend Error]:", errText);
      } catch (err) {
        console.error("[Resend Fetch Error]:", err);
      }
    }

    // 2. Web3Forms API (Zero-setup HTTPS REST API, 100% edge/serverless compatible)
    const web3Key = (
      process.env["WEB3FORMS_ACCESS_KEY"] ||
      process.env["VITE_WEB3FORMS_ACCESS_KEY"] ||
      ""
    ).trim();
    if (web3Key) {
      try {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: web3Key,
            subject: `New Solar Enquiry from ${data.name} — Atria Renewable`,
            from_name: "Atria Renewable Website",
            name: data.name,
            phone: data.mobile,
            email: data.email || "no-reply@atriarenewable.com",
            city: data.city,
            district: data.district || "N/A",
            property_type: data.propertyType,
            service_interest: data.service,
            package_interest: data.packageInterest || "N/A",
            monthly_bill: data.monthlyBill ? `₹${data.monthlyBill}` : "N/A",
            message: data.message || "N/A",
          }),
        });

        if (res.ok) {
          const json = (await res.json()) as { success?: boolean };
          if (json.success) {
            return { success: true, provider: "web3forms" };
          }
        }
      } catch (err) {
        console.error("[Web3Forms Fetch Error]:", err);
      }
    }

    // 3. Gmail SMTP via Nodemailer (For Node.js / Docker / local environments with sockets)
    const gmailUser = (process.env["GMAIL_USER"] || "").trim();
    const gmailPass = (process.env["GMAIL_APP_PASSWORD"] || "").replace(/\s+/g, "");

    if (gmailUser && gmailPass) {
      try {
        const nodemailer = await import("nodemailer");
        const transporter = nodemailer.default.createTransport({
          service: "gmail",
          auth: {
            user: gmailUser,
            pass: gmailPass,
          },
          connectionTimeout: 8000,
          greetingTimeout: 8000,
          socketTimeout: 8000,
        });

        await transporter.sendMail({
          from: `"Atria Renewable Website" <${gmailUser}>`,
          to: recipientEmail,
          replyTo: data.email || gmailUser,
          subject: `New Solar Enquiry from ${data.name} — Atria Renewable`,
          text: buildPlainText(data),
          html: buildHtml(data),
        });

        return { success: true, provider: "gmail" };
      } catch (err) {
        console.error("[Nodemailer SMTP Error]:", err);
        return {
          success: false,
          error: err instanceof Error ? err.message : "SMTP connection failed",
        };
      }
    }

    // No email service configured on this host
    return {
      success: false,
      error: "NO_EMAIL_SERVICE_CONFIGURED",
      message:
        "No email service credentials (WEB3FORMS_ACCESS_KEY, RESEND_API_KEY, or GMAIL_APP_PASSWORD) configured in environment.",
    };
  });

function buildPlainText(data: EnquiryData): string {
  return [
    "NEW SOLAR ENQUIRY — Atria Renewable Private Limited",
    "=".repeat(50),
    `Name: ${data.name}`,
    `Mobile: ${data.mobile}`,
    data.email ? `Email: ${data.email}` : null,
    `City: ${data.city}${data.district ? `, ${data.district}` : ""}`,
    `Property Type: ${data.propertyType}`,
    `Service Interest: ${data.service}`,
    data.packageInterest ? `Package Interest: ${data.packageInterest}` : null,
    data.monthlyBill ? `Monthly Bill: ₹${data.monthlyBill}` : null,
    data.message ? `\nMessage:\n${data.message}` : null,
    "\n" + "=".repeat(50),
    "Sent from: www.atriarenewable.com",
  ]
    .filter(Boolean)
    .join("\n");
}

function buildHtml(data: EnquiryData): string {
  const rows = [
    ["Name", data.name],
    ["Mobile", `<a href="tel:${data.mobile}">${data.mobile}</a>`],
    data.email ? ["Email", `<a href="mailto:${data.email}">${data.email}</a>`] : null,
    ["City", `${data.city}${data.district ? `, ${data.district}` : ""}`],
    ["Property Type", data.propertyType],
    ["Service Interest", data.service],
    data.packageInterest ? ["Package Interest", data.packageInterest] : null,
    data.monthlyBill ? ["Monthly Bill", `₹${data.monthlyBill}`] : null,
    data.message ? ["Message", data.message.replace(/\n/g, "<br>")] : null,
  ].filter(Boolean) as [string, string][];

  const tableRows = rows
    .map(
      ([label, value]) => `
      <tr>
        <td style="padding:10px 16px;font-weight:600;color:#555;white-space:nowrap;background:#f9f9f9;border-bottom:1px solid #eee;">${label}</td>
        <td style="padding:10px 16px;color:#222;border-bottom:1px solid #eee;">${value}</td>
      </tr>`
    )
    .join("");

  return `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;font-family:system-ui,sans-serif;background:#f4f4f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 2px 16px rgba(0,0,0,.08);max-width:100%;">
        <tr>
          <td style="background:linear-gradient(135deg,#f59e0b,#d97706);padding:32px 24px;text-align:center;">
            <h1 style="margin:0;color:#fff;font-size:22px;font-weight:700;">☀ New Solar Enquiry</h1>
            <p style="margin:8px 0 0;color:rgba(255,255,255,.85);font-size:14px;">Atria Renewable Private Limited</p>
          </td>
        </tr>
        <tr>
          <td style="padding:24px;">
            <p style="margin:0 0 20px;color:#555;font-size:14px;">A new enquiry has been submitted via the website. Please follow up promptly.</p>
            <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #eee;border-radius:10px;overflow:hidden;">
              ${tableRows}
            </table>
            <div style="margin-top:24px;padding:16px;background:#fffbeb;border-left:4px solid #f59e0b;border-radius:8px;">
              <p style="margin:0;font-size:13px;color:#92400e;">
                <strong>Quick Actions:</strong><br>
                Call: <a href="tel:${data.mobile}">${data.mobile}</a>${data.email ? ` | Email: <a href="mailto:${data.email}">${data.email}</a>` : ""}
              </p>
            </div>
          </td>
        </tr>
        <tr>
          <td style="padding:16px 24px;background:#f9f9f9;text-align:center;border-top:1px solid #eee;">
            <p style="margin:0;font-size:12px;color:#999;">Sent from <a href="https://www.atriarenewable.com" style="color:#d97706;">www.atriarenewable.com</a></p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}
