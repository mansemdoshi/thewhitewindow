import PageIntro from "@/components/PageIntro";
import HjachiBooking from "@/components/HjachiBooking";
import { WHATSAPP_HREF } from "@/data/site";

export const metadata = {
  title: "Book a session",
  description:
    "Book a therapy session with Manse M Doshi, clinical psychologist and psychotherapist. Individual psychotherapy, assessments, CBT, trauma-informed therapy and more, online or in person.",
  alternates: { canonical: "/book-a-session" },
};

export default async function BookPage({ searchParams }) {
  // Service links on /services arrive as ?type=<service id>; the widget takes it as ?service=.
  const { type } = await searchParams;

  return (
    <>
      <PageIntro eyebrow="Book a session" title="Choose a time that suits you.">
        <p>
          Pick a service and a time below. Prefer to talk first?{" "}
          <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer">
            Say hello on WhatsApp
          </a>
          .
        </p>
      </PageIntro>
      <section className="section section-tight-top">
        <div className="container">
          <HjachiBooking service={typeof type === "string" ? type : undefined} />
        </div>
      </section>
    </>
  );
}
