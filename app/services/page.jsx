import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageIntro from "@/components/PageIntro";
import { services } from "@/data/services";
import { BOOKING_PATH, REACH, WHATSAPP_HREF } from "@/data/site";

export const metadata = {
  title: "Services",
  description:
    "Individual psychotherapy, premarital counselling, CBT for children and adolescents, parental guidance, psychological assessment, trauma-informed therapy, CBT, ACT and grief counselling.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageIntro eyebrow="Services" title="How I can help">
        <p>
          Every service is available as a secure video session or in person. {REACH} If you are not sure which is
          right for you, send me a message and we can work it out together.
        </p>
        <nav aria-label="Services on this page">
          <ul className="chip-list">
            {services.map((service) => (
              <li key={service.id}>
                <a href={`#${service.id}`}>{service.title}</a>
              </li>
            ))}
          </ul>
        </nav>
      </PageIntro>

      <section className="section section-tight-top">
        <div className="container">
          {services.map((service) => (
            <article key={service.id} id={service.id} className="service-block">
              <h2>{service.title}</h2>
              <div className="measure">
                <p>{service.description}</p>
                {service.process && (
                  <>
                    <h3 className="eyebrow">How it works</h3>
                    <ol className="process-list">
                      {service.process.map((step) => (
                        <li key={step}>{step}</li>
                      ))}
                    </ol>
                  </>
                )}
                <dl className="service-meta">
                  <div>
                    <dt>Who it is for</dt>
                    <dd>{service.forWhom}</dd>
                  </div>
                  <div>
                    <dt>Format</dt>
                    <dd>Online, or in person in North Vancouver</dd>
                  </div>
                </dl>
                <Link href={`${BOOKING_PATH}?type=${service.id}`} className="text-link">
                  Book this session <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" />
                  <span className="sr-only">: {service.title}</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-cream">
        <div className="container">
          <div className="measure">
            <h2>Ready when you are</h2>
            <p>Book a session online, or say hello first if you would like to talk it through.</p>
            <div className="btn-row">
              <Link href={BOOKING_PATH} className="btn btn-primary">
                Book a session
              </Link>
              <a href={WHATSAPP_HREF} className="btn btn-soft" target="_blank" rel="noopener noreferrer">
                Say hello on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
