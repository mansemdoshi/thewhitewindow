"use client";

import emailjs from "@emailjs/browser";
import { useId, useRef, useState } from "react";
import { toast } from "react-toastify";
import {
  EMAILJS_PUBLIC_KEY,
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  NEWSLETTER_TO,
  TOAST_OPTIONS,
} from "@/utlis/emailjs";

/**
 * Footer newsletter signup. Sends the subscriber's address to NEWSLETTER_TO
 * via EmailJS, reusing the same service/template as the contact forms.
 */
export default function NewsletterForm({ className = "newsletter-form-1 mt--40" }) {
  const inputRef = useRef(null);
  const [sending, setSending] = useState(false);
  const inputId = useId();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (sending) return;

    const email = inputRef.current?.value.trim();
    if (!email) {
      toast.error("Please enter your email address.", TOAST_OPTIONS);
      return;
    }
    // The input is type="email", so the browser has already validated the
    // shape by the time submit fires; this only guards a bypassed field.
    if (!inputRef.current.checkValidity()) {
      toast.error("Please enter a valid email address.", TOAST_OPTIONS);
      return;
    }

    setSending(true);
    emailjs
      .send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          to_email: NEWSLETTER_TO,
          name: "Newsletter Subscriber",
          email,
          subject: "New newsletter subscription",
          message: `${email} asked to subscribe to the newsletter.`,
        },
        EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        toast.success("Thanks — you're subscribed.", TOAST_OPTIONS);
        inputRef.current.value = "";
      })
      .catch(() => {
        toast.error(
          "Sorry, we couldn't sign you up just now. Please try again shortly.",
          TOAST_OPTIONS
        );
      })
      .finally(() => setSending(false));
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      <label htmlFor={inputId} className="visually-hidden">
        Email address for newsletter
      </label>
      <input
        id={inputId}
        ref={inputRef}
        type="email"
        name="email"
        autoComplete="email"
        placeholder="Email Address"
        aria-label="Email address for newsletter"
        required
        disabled={sending}
      />
      <button
        type="submit"
        className="form-icon"
        aria-label="Subscribe to the newsletter"
        disabled={sending}
      >
        <i className="fa-regular fa-envelope" />
      </button>
    </form>
  );
}
