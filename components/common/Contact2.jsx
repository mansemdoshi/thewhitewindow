"use client";
import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import {
  CONTACT_EMAIL,
  EMAILJS_PUBLIC_KEY,
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  TOAST_OPTIONS,
} from "@/utlis/emailjs";

export default function Contact({
  parentClass = "get-in-touch-area tmp-section-gapTop tmp-section-gapBottom",
}) {
  const form = useRef();
  const [sending, setSending] = useState(false);

  const sandMail = (e) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form.current, {
        publicKey: EMAILJS_PUBLIC_KEY,
      })
      .then((res) => {
        if (res.status == 200) {
          toast.success("Message Sent successfully!", TOAST_OPTIONS);
          form.current.reset();
        } else {
          toast.error("Oops! Message not sent.", TOAST_OPTIONS);
        }
      })
      .catch(() => {
        // sendForm rejects on network errors and quota/auth failures; without
        // this the visitor gets no feedback at all and assumes it went through.
        toast.error(
          `Sorry, your message could not be sent. Please email ${CONTACT_EMAIL} instead.`,
          TOAST_OPTIONS
        );
      })
      .finally(() => setSending(false));
  };

  return (
    <section className={parentClass} id="contacts">
      <div className="container">
        <div className="contact-get-in-touch-wrap">
          <div className="get-in-touch-wrapper tmponhover">
            <div className="row g-5 align-items-center">
              <div className="col-lg-5">
                <div className="section-head text-align-left">
                  <div className="section-sub-title tmp-scroll-trigger tmp-fade-in animation-order-1">
                    <span className="subtitle">TAKE THE FIRST STEP</span>
                  </div>
                  <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
                    A safe space is just a message away.
                  </h2>
                  <p className="description tmp-scroll-trigger tmp-fade-in animation-order-3">
                    Let’s talk about what’s been weighing
                    on you and find a way forward, one
                    step at a time. I’d love to hear from you. Whether you’re seeking therapy, have questions about services, 
                    or would like to schedule a consultation, please reach out. Your journey toward clarity 
                    and well‑being can begin with a simple message.
                  </p>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="contact-inner">
                  <div className="contact-form">
                    <div id="form-messages" className="error" />
                    <form
                      className="tmp-dynamic-form"
                      id="contact-form"
                      ref={form}
                      onSubmit={sandMail}
                    >
                      <div className="contact-form-wrapper row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input
                              className="input-field"
                              name="name"
                              id="contact-name"
                              placeholder="Your Name"
                              type="text"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input
                              className="input-field"
                              id="contact-phone"
                              name="phone"
                              placeholder="Phone Number"
                              type="tel"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input
                              className="input-field"
                              id="contact-email"
                              name="email"
                              placeholder="Your Email"
                              type="email"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input
                              className="input-field"
                              type="text"
                              id="subject"
                              name="subject"
                              placeholder="Subject"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group">
                            <textarea
                              className="input-field"
                              placeholder="Your Message"
                              name="message"
                              id="contact-message"
                              required
                              defaultValue={""}
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="tmp-button-here">
                            <button
                              className="tmp-btn hover-icon-reverse radius-round w-100"
                              name="submit"
                              type="submit"
                              id="submit"
                              disabled={sending}
                            >
                              <span className="icon-reverse-wrapper">
                                <span className="btn-text">
                                  {sending ? "Sending..." : "Send Message"}
                                </span>
                                <span className="btn-icon">
                                  <i className="fa-sharp fa-regular fa-arrow-right" />
                                </span>
                                <span className="btn-icon">
                                  <i className="fa-sharp fa-regular fa-arrow-right" />
                                </span>
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
