export const WEBSITE_URL = "https://www.rg-oilgas.com";
export const COMPANY_NAME = "Rysgally Gün";
export const COMPANY_TAGLINE = "TOTAL ENERGY SOLUTIONS";
export const LOGO_URL = "https://www.rg-oilgas.com/android-chrome-192x192.png";
export const CONTACT_EMAIL = "info@rg-oilgas.com";

export interface AutoReplyTranslation {
  subject: string;
  badge: string;
  title: string;
  greeting: string;
  body1: string;
  body2: string;
  regards: string;
  senderRole: string;
  contactTitle: string;
  websiteLabel: string;
  emailLabel: string;
  linksTitle: string;
  divisionsTitle: string;
  legalTitle: string;
  links: {
    home: string;
    about: string;
    services: string;
    contact: string;
  };
  divisions: {
    construction: string;
    manufacture: string;
    supply: string;
    maintain: string;
  };
  legal: {
    privacy: string;
    terms: string;
    cookie: string;
  };
  rightsReserved: string;
}

export const autoReplyTranslations: Record<string, AutoReplyTranslation> = {
  en: {
    subject: `Inquiry Acknowledgment - ${COMPANY_NAME} (${COMPANY_TAGLINE})`,
    badge: "Automated Corporate Dispatch",
    title: "Transmission Logged",
    greeting: "Attention:",
    body1: `Your corporate inquiry has been securely received by the ${COMPANY_NAME} (${COMPANY_TAGLINE}) network. Our system has logged your parameters and routed the dossier to the designated operational division.`,
    body2:
      "Our engineering and commercial specialists will review your requirements. You can expect direct communication from an authorized representative within one standard business day.",
    regards: "With regards",
    senderRole: "Client Relations & Operations Desk",
    contactTitle: "Corporate Headquarters & Dispatch",
    websiteLabel: "Official Portal:",
    emailLabel: "Direct Dispatch:",
    linksTitle: "Navigation",
    divisionsTitle: "Core Divisions",
    legalTitle: "Compliance & Legal",
    links: {
      home: "Home Page",
      about: "About Company",
      services: "Our Services",
      contact: "Contact Desk",
    },
    divisions: {
      construction: "Construction & EPC",
      manufacture: "Machine Shop & Manufacturing",
      supply: "Procurement & Supply",
      maintain: "Technical Maintenance",
    },
    legal: {
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      cookie: "Cookie Policy",
    },
    rightsReserved: "All rights reserved.",
  }
};

export const getOwnerEmailHtml = (
  fullName: string,
  company: string,
  email: string,
  department: string,
  message: string,
) => {
  const timestamp = new Date().toISOString().replace("T", " ").substring(0, 19) + " UTC";

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Incoming Corporate Inquiry - ${COMPANY_NAME}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #001429; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; -webkit-font-smoothing: antialiased;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #001429; padding: 40px 16px;">
    <tr>
      <td align="center">
        <div style="max-width: 640px; margin: 0 auto; background-color: #001E3D; border: 1px solid #004080; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5);">
          
          <!-- Top Brand Bar -->
          <div style="background-color: #002E5C; padding: 24px 40px; border-bottom: 1px solid #004080;">
            <table width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td valign="middle" align="left">
                  <a href="${WEBSITE_URL}" target="_blank" style="text-decoration: none; display: inline-block; background-color: #ffffff; padding: 8px 14px; border-radius: 2px; border-left: 4px solid #B9C0C7;">
                    <img src="${LOGO_URL}" alt="${COMPANY_NAME}" width="48" style="display: block; border: none; outline: none; height: auto;" />
                  </a>
                </td>
                <td valign="middle" align="right">
                  <p style="margin: 0; color: #ffffff; font-size: 16px; font-weight: 800; letter-spacing: 1.5px; text-transform: uppercase;">
                    ${COMPANY_NAME}
                  </p>
                  <p style="margin: 4px 0 0 0; color: #B9C0C7; font-size: 10px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase;">
                    ${COMPANY_TAGLINE}
                  </p>
                </td>
              </tr>
            </table>
          </div>

          <!-- Alert Header -->
          <div style="padding: 32px 40px; background-color: #001E3D; border-bottom: 3px solid #B9C0C7;">
            <div style="display: inline-block; border-left: 3px solid #B9C0C7; background-color: rgba(255, 255, 255, 0.05); padding: 4px 12px; margin-bottom: 12px;">
              <span style="color: #E1E4E7; font-size: 10px; font-weight: bold; text-transform: uppercase; letter-spacing: 2px;">
                Internal System Notification • rg-oilgas.com
              </span>
            </div>
            <h2 style="margin: 0; color: #ffffff; font-size: 20px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px;">
              Incoming Corporate Inquiry
            </h2>
            <p style="margin: 8px 0 0 0; color: #8A99AD; font-size: 11px; font-family: monospace;">
              TIMESTAMP LOGGED: ${timestamp}
            </p>
          </div>

          <!-- Sender Data Grid -->
          <div style="padding: 40px;">
            <p style="margin: 0 0 12px 0; font-size: 11px; font-weight: bold; color: #B9C0C7; text-transform: uppercase; letter-spacing: 2px;">
              1. Sender Dossier
            </p>
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 32px; border-collapse: collapse;">
              <tr>
                <td width="50%" valign="top" style="padding: 20px; border: 1px solid #004080; background-color: #002E5C;">
                  <p style="margin: 0; font-size: 10px; font-weight: bold; color: #B9C0C7; text-transform: uppercase; letter-spacing: 2px;">Organization / Company</p>
                  <p style="margin: 8px 0 0 0; font-size: 15px; font-weight: bold; color: #ffffff;">${company || "Not specified"}</p>
                </td>
                <td width="50%" valign="top" style="padding: 20px; border: 1px solid #004080; background-color: #00264D;">
                  <p style="margin: 0; font-size: 10px; font-weight: bold; color: #B9C0C7; text-transform: uppercase; letter-spacing: 2px;">Contact Person (Sender)</p>
                  <p style="margin: 8px 0 0 0; font-size: 15px; font-weight: bold; color: #ffffff;">${fullName}</p>
                </td>
              </tr>
              <tr>
                <td width="50%" valign="top" style="padding: 20px; border: 1px solid #004080; background-color: #00264D;">
                  <p style="margin: 0; font-size: 10px; font-weight: bold; color: #B9C0C7; text-transform: uppercase; letter-spacing: 2px;">Email Address (Reply-To)</p>
                  <p style="margin: 8px 0 0 0; font-size: 14px; font-weight: bold;">
                    <a href="mailto:${email}" style="color: #E1E4E7; text-decoration: underline;">${email}</a>
                  </p>
                </td>
                <td width="50%" valign="top" style="padding: 20px; border: 1px solid #004080; background-color: #002E5C;">
                  <p style="margin: 0; font-size: 10px; font-weight: bold; color: #B9C0C7; text-transform: uppercase; letter-spacing: 2px;">Target Department</p>
                  <p style="margin: 8px 0 0 0; font-size: 14px; font-weight: bold; color: #ffffff; text-transform: uppercase; letter-spacing: 1px;">${department}</p>
                </td>
              </tr>
            </table>

            <!-- Message Block -->
            <p style="margin: 0 0 12px 0; font-size: 11px; font-weight: bold; color: #B9C0C7; text-transform: uppercase; letter-spacing: 2px;">
              2. Inquiry Details
            </p>
            <div style="background-color: #002E5C; border: 1px solid #004080; border-left: 4px solid #B9C0C7; padding: 24px; margin-bottom: 32px;">
              <p style="margin: 0; color: #ffffff; font-size: 14px; line-height: 1.7; white-space: pre-wrap;">${message}</p>
            </div>

            <!-- Direct Action Button -->
            <table width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td align="left">
                  <a href="mailto:${email}?subject=RE:%20Inquiry%20to%20${encodeURIComponent(COMPANY_NAME)}%20(${encodeURIComponent(department)})" style="display: inline-block; background-color: #B9C0C7; color: #001E3D; font-size: 12px; font-weight: 900; text-transform: uppercase; letter-spacing: 1.5px; padding: 16px 32px; text-decoration: none; border-radius: 2px;">
                    Reply to Sender (${fullName}) &rarr;
                  </a>
                </td>
              </tr>
            </table>
          </div>

          <!-- Internal Footer -->
          <div style="background-color: #001830; padding: 20px 40px; border-top: 1px solid #004080;">
            <table width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td align="left">
                  <p style="margin: 0; color: #8A99AD; font-size: 10px; text-transform: uppercase; letter-spacing: 1px;">
                    Notification Gateway: <a href="${WEBSITE_URL}" style="color: #B9C0C7; text-decoration: none;">${WEBSITE_URL}</a>
                  </p>
                </td>
                <td align="right">
                  <p style="margin: 0; color: #8A99AD; font-size: 10px; text-transform: uppercase; letter-spacing: 1px;">
                    ${COMPANY_NAME}
                  </p>
                </td>
              </tr>
            </table>
          </div>

        </div>
      </td>
    </tr>
  </table>
</body>
</html>
`;
};

export const getAutoReplyHtml = (firstName: string, lang: string = "en") => {
  const baseLang = lang.split("-")[0].toLowerCase();
  const t = autoReplyTranslations[baseLang] || autoReplyTranslations["en"];
  const currentYear = new Date().getFullYear();

  return `
<!DOCTYPE html>
<html lang="${baseLang}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${t.subject}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #001429; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; -webkit-font-smoothing: antialiased;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #001429; padding: 40px 16px;">
    <tr>
      <td align="center">
        <div style="max-width: 640px; margin: 0 auto; background-color: #001E3D; border: 1px solid #004080; text-align: left; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5);">
          
          <!-- Header with White Logo Plate for High Contrast -->
          <div style="background-color: #002E5C; padding: 28px 40px; border-bottom: 3px solid #B9C0C7;">
            <table width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td valign="middle" align="left">
                  <a href="${WEBSITE_URL}" target="_blank" style="text-decoration: none; display: inline-block; background-color: #ffffff; padding: 10px 16px; border-radius: 2px; border-left: 4px solid #B9C0C7;">
                    <img src="${LOGO_URL}" alt="${COMPANY_NAME} Logo" width="56" style="display: block; border: none; outline: none; height: auto;" />
                  </a>
                </td>
                <td valign="middle" align="right">
                  <p style="margin: 0; color: #ffffff; font-size: 18px; font-weight: 800; letter-spacing: 1.5px; text-transform: uppercase;">
                    ${COMPANY_NAME}
                  </p>
                  <p style="margin: 4px 0 0 0; color: #B9C0C7; font-size: 10px; font-weight: 700; letter-spacing: 2.5px; text-transform: uppercase;">
                    ${COMPANY_TAGLINE}
                  </p>
                </td>
              </tr>
            </table>
          </div>

          <!-- Body Content -->
          <div style="padding: 40px; border-bottom: 1px solid #004080; background-color: #001E3D;">
            
            <!-- Hero-style Badge -->
            <div style="display: inline-block; border-left: 4px solid #B9C0C7; background-color: rgba(255, 255, 255, 0.05); padding: 6px 14px; margin-bottom: 20px;">
              <span style="color: #ffffff; font-size: 10px; font-weight: bold; text-transform: uppercase; letter-spacing: 2px;">
                ${t.badge}
              </span>
            </div>

            <h2 style="margin: 0 0 24px 0; color: #ffffff; font-size: 22px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px;">
              ${t.title}
            </h2>
            
            <p style="margin: 0 0 20px 0; color: #B9C0C7; font-size: 13px; font-weight: bold; text-transform: uppercase; letter-spacing: 1.5px;">
              ${t.greeting} <span style="color: #ffffff;">${firstName}</span>
            </p>
            
            <p style="margin: 0 0 16px 0; color: #E1E4E7; font-size: 14px; line-height: 1.7;">
              ${t.body1}
            </p>
            <p style="margin: 0 0 32px 0; color: #E1E4E7; font-size: 14px; line-height: 1.7;">
              ${t.body2}
            </p>
            
            <!-- Formal Sign-off Block -->
            <div style="border-left: 2px solid #004080; padding-left: 16px; margin-top: 32px;">
              <p style="margin: 0; color: #B9C0C7; font-size: 11px; line-height: 1.6; text-transform: uppercase; letter-spacing: 1.5px;">
                ${t.regards},<br/>
                <strong style="color: #ffffff; font-size: 14px; letter-spacing: 1px;">${COMPANY_NAME}</strong><br/>
                <span style="color: #8A99AD; font-size: 10px;">${t.senderRole} • ${COMPANY_TAGLINE}</span>
              </p>
            </div>
          </div>

          <!-- Footer & Directory -->
          <div style="padding: 40px; background-color: #001830;">
            
            <!-- Direct Contact Card -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 32px; background-color: #00264D; border: 1px solid #004080; padding: 20px;">
              <tr>
                <td valign="top" width="50%" style="padding-right: 12px;">
                  <p style="margin: 0 0 8px 0; font-size: 10px; font-weight: bold; color: #B9C0C7; text-transform: uppercase; letter-spacing: 2px;">
                    ${t.contactTitle}
                  </p>
                  <p style="margin: 0; font-size: 12px; color: #E1E4E7;">
                    ${t.emailLabel} <a href="mailto:${CONTACT_EMAIL}" style="color: #ffffff; font-weight: bold; text-decoration: underline;">${CONTACT_EMAIL}</a>
                  </p>
                </td>
                <td valign="top" width="50%" style="padding-left: 12px; border-left: 1px solid #004080;">
                  <p style="margin: 0 0 8px 0; font-size: 10px; font-weight: bold; color: #B9C0C7; text-transform: uppercase; letter-spacing: 2px;">
                    ${COMPANY_NAME} Web
                  </p>
                  <p style="margin: 0; font-size: 12px; color: #E1E4E7;">
                    ${t.websiteLabel} <a href="${WEBSITE_URL}" target="_blank" style="color: #ffffff; font-weight: bold; text-decoration: underline;"> www.rg-oilgas.com</a>
                  </p>
                </td>
              </tr>
            </table>

            <!-- 3-Column Sitemap & Services Grid -->
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <!-- Column 1: Quick Links -->
                <td valign="top" width="33%" style="padding-right: 12px;">
                  <p style="margin: 0 0 16px 0; font-size: 10px; font-weight: bold; color: #B9C0C7; text-transform: uppercase; letter-spacing: 2px;">
                    ${t.linksTitle}
                  </p>
                  <a href="${WEBSITE_URL}" target="_blank" style="display: block; color: #E1E4E7; text-decoration: none; font-size: 13px; margin-bottom: 10px;">&rsaquo; ${t.links.home}</a>
                  <a href="${WEBSITE_URL}/about" target="_blank" style="display: block; color: #E1E4E7; text-decoration: none; font-size: 13px; margin-bottom: 10px;">&rsaquo; ${t.links.about}</a>
                  <a href="${WEBSITE_URL}/services" target="_blank" style="display: block; color: #E1E4E7; text-decoration: none; font-size: 13px; margin-bottom: 10px;">&rsaquo; ${t.links.services}</a>
                  <a href="${WEBSITE_URL}/contact" target="_blank" style="display: block; color: #E1E4E7; text-decoration: none; font-size: 13px; margin-bottom: 10px;">&rsaquo; ${t.links.contact}</a>
                </td>

                <!-- Column 2: Industrial Divisions (Matched to HeroBlock links) -->
                <td valign="top" width="37%" style="padding-right: 12px;">
                  <p style="margin: 0 0 16px 0; font-size: 10px; font-weight: bold; color: #B9C0C7; text-transform: uppercase; letter-spacing: 2px;">
                    ${t.divisionsTitle}
                  </p>
                  <a href="${WEBSITE_URL}/services#construction" target="_blank" style="display: block; color: #E1E4E7; text-decoration: none; font-size: 13px; margin-bottom: 10px;">&rsaquo; ${t.divisions.construction}</a>
                  <a href="${WEBSITE_URL}/services#machineShop" target="_blank" style="display: block; color: #E1E4E7; text-decoration: none; font-size: 13px; margin-bottom: 10px;">&rsaquo; ${t.divisions.manufacture}</a>
                  <a href="${WEBSITE_URL}/services#procurement" target="_blank" style="display: block; color: #E1E4E7; text-decoration: none; font-size: 13px; margin-bottom: 10px;">&rsaquo; ${t.divisions.supply}</a>
                  <a href="${WEBSITE_URL}/services#maintenance" target="_blank" style="display: block; color: #E1E4E7; text-decoration: none; font-size: 13px; margin-bottom: 10px;">&rsaquo; ${t.divisions.maintain}</a>
                </td>

                <!-- Column 3: Legal -->
                <td valign="top" width="30%">
                  <p style="margin: 0 0 16px 0; font-size: 10px; font-weight: bold; color: #B9C0C7; text-transform: uppercase; letter-spacing: 2px;">
                    ${t.legalTitle}
                  </p>
                  <a href="${WEBSITE_URL}/privacy" target="_blank" style="display: block; color: #E1E4E7; text-decoration: none; font-size: 13px; margin-bottom: 10px;">&rsaquo; ${t.legal.privacy}</a>
                  <a href="${WEBSITE_URL}/terms" target="_blank" style="display: block; color: #E1E4E7; text-decoration: none; font-size: 13px; margin-bottom: 10px;">&rsaquo; ${t.legal.terms}</a>
                  <a href="${WEBSITE_URL}/cookies" target="_blank" style="display: block; color: #E1E4E7; text-decoration: none; font-size: 13px; margin-bottom: 10px;">&rsaquo; ${t.legal.cookie}</a>
                </td>
              </tr>
            </table>

            <!-- Copyright Bar -->
            <div style="margin-top: 32px; border-top: 1px solid #004080; padding-top: 24px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td align="left">
                    <p style="margin: 0; color: #8A99AD; font-size: 10px; text-transform: uppercase; letter-spacing: 1px; font-weight: bold;">
                      &copy; ${currentYear} ${COMPANY_NAME} (${COMPANY_TAGLINE}). ${t.rightsReserved}
                    </p>
                  </td>
                  <td align="right">
                    <a href="${WEBSITE_URL}" style="color: #B9C0C7; font-size: 10px; text-transform: uppercase; letter-spacing: 1px; text-decoration: none; font-weight: bold;">
                      rg-oilgas.com
                    </a>
                  </td>
                </tr>
              </table>
            </div>

          </div>
        </div>
      </td>
    </tr>
  </table>
</body>
</html>
`;
};