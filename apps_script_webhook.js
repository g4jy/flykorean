/**
 * Fly Korean - Contact Form Webhook
 *
 * Setup:
 * 1. Create a new Google Spreadsheet called "Fly Korean - Inquiries"
 * 2. Go to Extensions > Apps Script
 * 3. Paste this code
 * 4. Deploy as web app (Execute as: Me, Access: Anyone)
 * 5. Copy the webhook URL and paste it into index.html FORM_WEBHOOK constant
 *
 * The spreadsheet will have columns:
 * Timestamp | Name | Email | Package | Addons | Lessons/Week | Message | Source
 *
 * An email notification will also be sent to the configured address.
 */

const NOTIFICATION_EMAIL = 'impressive261@gmail.com'; // Change this to your email
const SHEET_NAME = 'Inquiries';

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    // Get or create the sheet
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(SHEET_NAME);
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      sheet.appendRow(['Timestamp', 'Name', 'Email', 'Package', 'Addons', 'Lessons/Week', 'Message', 'Source']);
      sheet.getRange(1, 1, 1, 8).setFontWeight('bold');
    }

    // Append the row
    const timestamp = new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' });
    sheet.appendRow([
      timestamp,
      data.name || '',
      data.email || '',
      data.package || '',
      data.addons || '',
      data.lessonsPerWeek || '',
      data.message || '',
      data.source || 'flykorean'
    ]);

    // Send email notification
    if (NOTIFICATION_EMAIL) {
      const subject = `[Fly Korean] New inquiry from ${data.name}`;
      const body = `
New inquiry received from flykorean.com!

Name: ${data.name}
Email: ${data.email}
Package: ${data.package}
Add-ons: ${data.addons || 'None'}
Lessons/Week: ${data.lessonsPerWeek}x
Message: ${data.message || '(no message)'}

Timestamp: ${timestamp}
---
Reply to: ${data.email}
      `.trim();

      MailApp.sendEmail({
        to: NOTIFICATION_EMAIL,
        subject: subject,
        body: body,
        replyTo: data.email
      });
    }

    return ContentService.createTextOutput(
      JSON.stringify({ status: 'success' })
    ).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ status: 'error', message: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput(
    JSON.stringify({ status: 'ok', service: 'Fly Korean Contact Form' })
  ).setMimeType(ContentService.MimeType.JSON);
}
