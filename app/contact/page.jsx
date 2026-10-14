import { Mail, MapPin, Phone } from "lucide-react";
import PageIntro from "@/components/PageIntro";
import ContactForm from "@/components/ContactForm";
import SocialIcon from "@/components/ui/SocialIcon";
import { EMAIL, LOCATION, PHONE_DISPLAY, PHONE_HREF, WHATSAPP_HREF } from "@/data/site";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with Manse M Doshi at The White Window by WhatsApp, email or the contact form, to ask a question or arrange a consultation.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageIntro eyebrow="Contact" title="A safe space is just a message away.">
        <p>
          Whether you are looking for therapy, have a question about my services, or would like to arrange a
          consultation, I would love to hear from you.
        </p>
      </PageIntro>

      <section className="section section-tight-top">
        <div className="container split split-even">
          <div>
            <ul className="contact-ways">
              <li>
                <SocialIcon name="WhatsApp" />
                <p>
                  <strong>WhatsApp</strong>
                  <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer">
                    Say hello on WhatsApp
                  </a>
                </p>
              </li>
              <li>
                <Mail size={24} strokeWidth={1.5} aria-hidden="true" />
                <p>
                  <strong>Email</strong>
                  <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                </p>
              </li>
              <li>
                <Phone size={24} strokeWidth={1.5} aria-hidden="true" />
                <p>
                  <strong>Phone</strong>
                  <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
                </p>
              </li>
              <li>
                <MapPin size={24} strokeWidth={1.5} aria-hidden="true" />
                <p>
                  <strong>Where</strong>
                  In person in {LOCATION}; online across India and Canada.
                </p>
              </li>
            </ul>
            <div className="callout">
              <p>
                <strong>This is not an emergency service.</strong> If you or someone else is in immediate danger,
                call your local emergency number or go to the nearest emergency department.
              </p>
            </div>
          </div>
          <div className="form-card">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
