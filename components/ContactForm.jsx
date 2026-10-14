"use client";

import emailjs from "@emailjs/browser";
import { useId, useState } from "react";
import { EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID } from "@/lib/emailjs";
import { EMAIL } from "@/data/site";

const SUCCESS = "Thank you. I read every message myself and will reply within two working days.";

export default function ContactForm() {
  const id = useId();
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [errors, setErrors] = useState({});

  const onSubmit = async (e) => {
    e.preventDefault();
    if (status === "sending") return;

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const next = {};
    if (!data.name.trim()) next.name = "Please tell me your name.";
    if (!data.contact.trim()) next.contact = "Please add an email address or phone number so I can reply.";
    if (!data.message.trim()) next.message = "Please write a short message.";
    setErrors(next);
    if (Object.keys(next).length) {
      form.querySelector(`[name="${Object.keys(next)[0]}"]`)?.focus();
      return;
    }

    // The EmailJS template expects separate email and phone fields.
    const contact = data.contact.trim();
    const isEmail = contact.includes("@");
    setStatus("sending");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: data.name.trim(),
          email: isEmail ? contact : "",
          phone: isEmail ? "" : contact,
          subject: "Website enquiry",
          message: data.message.trim(),
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <p className="form-success" role="status">
        {SUCCESS}
      </p>
    );
  }

  const field = (name, label, props) => (
    <div className="field">
      <label htmlFor={`${id}-${name}`}>{label}</label>
      {props.as === "textarea" ? (
        <textarea
          id={`${id}-${name}`}
          name={name}
          rows={5}
          aria-invalid={errors[name] ? "true" : undefined}
          aria-describedby={errors[name] ? `${id}-${name}-error` : undefined}
        />
      ) : (
        <input
          id={`${id}-${name}`}
          name={name}
          type="text"
          autoComplete={props.autoComplete}
          aria-invalid={errors[name] ? "true" : undefined}
          aria-describedby={errors[name] ? `${id}-${name}-error` : undefined}
        />
      )}
      {errors[name] && (
        <p id={`${id}-${name}-error`} className="field-error">
          {errors[name]}
        </p>
      )}
    </div>
  );

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      {field("name", "Your name", { autoComplete: "name" })}
      {field("contact", "Email or phone", { autoComplete: "email" })}
      {field("message", "Message", { as: "textarea" })}
      <p className="form-note">Please keep it brief and avoid detailed health information; we can talk properly once we are in touch.</p>
      {status === "error" && (
        <p className="field-error" role="alert">
          Sorry, your message could not be sent. Please email <a href={`mailto:${EMAIL}`}>{EMAIL}</a> instead.
        </p>
      )}
      <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send a message"}
      </button>
    </form>
  );
}
