/**
 * EmailJS configuration for the contact form.
 *
 * The public key is meant to ship to the browser; the service/template ids are
 * not secrets either. They are read from env so they can be rotated without a
 * code change, with the current values as fallbacks. The recipient is set on
 * the template in the EmailJS dashboard.
 */
export const EMAILJS_SERVICE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_cyobi0y";

export const EMAILJS_TEMPLATE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_4nbexqj";

export const EMAILJS_PUBLIC_KEY =
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "D79JdTqxXVCcQBXL4";
