/**
 * Shared EmailJS configuration.
 *
 * The public key is safe to ship to the browser (that is what EmailJS's
 * browser SDK expects); the service/template ids are not secrets either.
 * They are read from env so they can be rotated without a code change, with
 * the current values as fallbacks.
 *
 * IMPORTANT: the recipient of every EmailJS message is set on the *template*
 * in the EmailJS dashboard, not here. For NEWSLETTER_TO below to take effect,
 * the template's "To Email" field must be set to {{to_email}}.
 */
export const EMAILJS_SERVICE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_cyobi0y";

export const EMAILJS_TEMPLATE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_4nbexqj";

export const EMAILJS_PUBLIC_KEY =
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "D79JdTqxXVCcQBXL4";

/** Where newsletter signups are sent. */
export const NEWSLETTER_TO =
  process.env.NEXT_PUBLIC_NEWSLETTER_TO || "contact@thewhitewindow.com";

/** Shown when a send fails, so the visitor still has a way to reach us. */
export const CONTACT_EMAIL = "info@thewhitewindow.com";

export const TOAST_OPTIONS = {
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};
