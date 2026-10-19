/**
 * Atria Renewable — Enquiry Form → Google Sheets Logger
 *
 * HOW TO DEPLOY:
 * 1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1lVl00s0AEN47m-8eLXA-cXJD99e7Rb8_T-4tHNfN5k8/edit
 * 2. Click Extensions → Apps Script
 * 3. Delete any existing code and paste ALL of this file's contents
 * 4. Click Save (💾), then click Deploy → New deployment
 * 5. Type: Web app
 * 6. Execute as: Me  (your Google account)
 * 7. Who has access: Anyone
 * 8. Click Deploy → Copy the Web App URL
 * 9. Paste that URL into your .env file as:
 *    GOOGLE_SHEET_WEBHOOK_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
 *
 * SHEET COLUMNS (auto-created on first run):
 * Timestamp | Name | Mobile | Email | City | District | Property Type | Service | Package | Monthly Bill | Message
 */

// ─── Config ──────────────────────────────────────────────────────────────────
const SPREADSHEET_ID = "1lVl00s0AEN47m-8eLXA-cXJD99e7Rb8_T-4tHNfN5k8";
const SHEET_NAME = "Enquiries";

// ─── Headers ─────────────────────────────────────────────────────────────────
const HEADERS = [
  "Timestamp",
  "Name",
  "Mobile",
  "Email",
  "City",
  "District",
  "Property Type",
  "Service",
  "Package Interest",
  "Monthly Bill (₹)",
  "Message",
];

// ─── Main entry point ─────────────────────────────────────────────────────────
function doPost(e) {
  try {
    const body = JSON.parse(e.postData.contents);
    appendRow(body);
    return ContentService.createTextOutput(
      JSON.stringify({ success: true })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ success: false, error: err.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

// Allow simple GET ping to verify deployment is alive
function doGet() {
  return ContentService.createTextOutput(
    JSON.stringify({ status: "Atria Renewable Sheet Logger is active ✅" })
  ).setMimeType(ContentService.MimeType.JSON);
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
function getOrCreateSheet() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  let sheet = ss.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(HEADERS);
    // Style the header row
    const headerRange = sheet.getRange(1, 1, 1, HEADERS.length);
    headerRange.setFontWeight("bold");
    headerRange.setBackground("#F59E0B");
    headerRange.setFontColor("#ffffff");
    sheet.setFrozenRows(1);
    // Auto-resize columns
    sheet.autoResizeColumns(1, HEADERS.length);
  }

  // Ensure headers exist if sheet was empty
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
  }

  return sheet;
}

function appendRow(data) {
  const sheet = getOrCreateSheet();
  sheet.appendRow([
    data.timestamp || new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
    data.name || "",
    data.mobile || "",
    data.email || "",
    data.city || "",
    data.district || "",
    data.propertyType || "",
    data.service || "",
    data.packageInterest || "",
    data.monthlyBill || "",
    data.message || "",
  ]);
}
