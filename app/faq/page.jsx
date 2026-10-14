import Link from "next/link";
import PageIntro from "@/components/PageIntro";
import FaqList from "@/components/FaqList";
import OpenFaqFromHash from "@/components/OpenFaqFromHash";
import { faqs } from "@/data/faqs";
import { WHATSAPP_HREF } from "@/data/site";

export const metadata = {
  title: "FAQs",
  description:
    "Common questions about starting therapy with The White Window: your first session, confidentiality, fees, how long therapy takes and online sessions.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <PageIntro eyebrow="FAQs" title="Frequently asked questions">
        <p>
          Reaching out for support can feel like a big step, and it is natural to have questions. Here are clear,
          honest answers to the ones people ask most: what to expect in a first session, how confidentiality works,
          and how to find the right approach for you.
        </p>
      </PageIntro>

      <section className="section section-tight-top">
        <div className="container">
          <div className="faq-list-numbered">
            <FaqList items={faqs} numbered />
          </div>
          <OpenFaqFromHash />
        </div>
      </section>

      <section className="section section-cream">
        <div className="container">
          <div className="measure">
            <h2>Still wondering about something?</h2>
            <p>If your question is not answered here, ask me directly. Every situation is different, and I am happy to help.</p>
            <div className="btn-row">
              <Link href="/contact" className="btn btn-primary">
                Send a message
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
