// Receives the request form on yitingchen.de/kontakt and forwards it to her mailbox.
// Deployed as a web app from the Google Workspace account of mail@yitingchen.de (setup in README.md).
// It stores nothing: the email in her inbox is the only copy.

const RECIPIENT = 'mail@yitingchen.de';
// The same limits as the form's maxlength attributes in src/components/pages/ContactPage.astro.
const MAX_LENGTH = { name: 200, email: 254, message: 5000 };
// A script can skip the honeypot, so at most this many requests per hour reach her inbox.
const MAX_MAILS_PER_HOUR = 20;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Shown only when the form was posted without JavaScript. With JS the page shows its own messages,
// form.sent and form.failed in src/data/pages/contact.ts, which these mirror.
const PAGES = {
  de: {
    sent: 'Danke, Ihre Anfrage ist angekommen. Ich melde mich bei Ihnen.',
    failed: 'Das hat leider nicht geklappt. Bitte schreiben Sie mir direkt an mail@yitingchen.de.',
    back: 'Zurück zur Website',
    home: 'https://yitingchen.de/',
  },
  en: {
    sent: "Thank you, your request has arrived. I'll get back to you.",
    failed: 'Sorry, that did not work. Please write to me directly at mail@yitingchen.de.',
    back: 'Back to the website',
    home: 'https://yitingchen.de/en/',
  },
  zh: {
    sent: '谢谢，您的咨询已成功发送。我会与您联系。',
    failed: '很抱歉，发送未成功。请直接发送电子邮件至 mail@yitingchen.de。',
    back: '返回网站',
    home: 'https://yitingchen.de/zh/',
  },
};

function doPost(e) {
  const params = e.parameter;
  const lang = PAGES[params.lang] ? params.lang : 'de';
  const respond = (ok) => (params.js === '1' ? json(ok) : page(ok, lang));

  // Bots fill the hidden field; let them believe it worked.
  if (params.website) return respond(true);

  const name = field(params.name, MAX_LENGTH.name).replace(/\s+/g, ' ');
  const email = field(params.email, MAX_LENGTH.email);
  const message = field(params.message, MAX_LENGTH.message);
  if (!name || !message || !EMAIL_PATTERN.test(email)) return respond(false);
  if (!withinHourlyLimit()) return respond(false);

  try {
    MailApp.sendEmail({
      to: RECIPIENT,
      replyTo: email,
      name: 'yitingchen.de',
      subject: `Anfrage von ${name}`,
      body: `${message}\n\n—\nName: ${name}\nE-Mail: ${email}\nSprache der Website: ${lang.toUpperCase()}`,
    });
  } catch (error) {
    console.error(error);
    return respond(false);
  }
  return respond(true);
}

// Counts requests per clock hour in the script cache; the lock keeps parallel requests from losing counts.
function withinHourlyLimit() {
  const lock = LockService.getScriptLock();
  if (!lock.tryLock(10000)) return false;
  try {
    const cache = CacheService.getScriptCache();
    const key = `mails-${Math.floor(Date.now() / 3600000)}`;
    const count = Number(cache.get(key) || 0);
    if (count >= MAX_MAILS_PER_HOUR) return false;
    cache.put(key, String(count + 1), 3600);
    return true;
  } finally {
    lock.releaseLock();
  }
}

// Trimmed text, or '' when missing or longer than the form allows. A form posted without JavaScript
// sends line breaks as CRLF, while maxlength counted them as one character.
function field(value, maxLength) {
  const text = String(value || '')
    .replace(/\r\n/g, '\n')
    .trim();
  return text.length <= maxLength ? text : '';
}

function json(ok) {
  return ContentService.createTextOutput(JSON.stringify({ ok })).setMimeType(ContentService.MimeType.JSON);
}

function page(ok, lang) {
  const t = PAGES[lang];
  return HtmlService.createHtmlOutput(
    `<p>${ok ? t.sent : t.failed}</p><p><a href="${t.home}" target="_top">${t.back}</a></p>`,
  ).setTitle('yitingchen.de');
}
