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

export const sendEnquiryEmail = createServerFn({ method: "POST" })
  .validator((data: unknown) => EnquirySchema.parse(data))
  .handler(async ({ data }) => {
    // Dynamic import to keep nodemailer server-only
    const nodemailer = await import("nodemailer");

    const recipientEmail = "maheshmahi95944@gmail.com";

    // Create transporter using Gmail SMTP via App Password or environment variables
    // Users should set GMAIL_USER and GMAIL_APP_PASSWORD in their environment
    const gmailUser = (process.env["GMAIL_USER"] || "").trim();
    const gmailPass = (process.env["GMAIL_APP_PASSWORD"] || "").replace(/\s+/g, "");

    if (!gmailUser || !gmailPass) {
      // Fallback: Use Ethereal test account for development
      // In production the user must set GMAIL_USER and GMAIL_APP_PASSWORD
      const testAccount = await nodemailer.default.createTestAccount();
      const transporter = nodemailer.default.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      });

      const info = await transporter.sendMail({
        from: `"Atria Renewable Website" <${testAccount.user}>`,
        to: recipientEmail,
        subject: `New Solar Enquiry from ${data.name}`,
        text: buildPlainText(data),
        html: buildHtml(data),
      });

      console.log("[EnquiryEmail] Preview URL:", nodemailer.default.getTestMessageUrl(info));
      return { success: true, preview: nodemailer.default.getTestMessageUrl(info) };
    }

    // Production: Use Gmail SMTP
    const transporter = nodemailer.default.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    });

    await transporter.sendMail({
      from: `"Atria Renewable Website" <${gmailUser}>`,
      to: recipientEmail,
      replyTo: data.email || gmailUser,
      subject: `New Solar Enquiry from ${data.name} — Atria Renewable`,
      text: buildPlainText(data),
      html: buildHtml(data),
    });

    return { success: true };
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
