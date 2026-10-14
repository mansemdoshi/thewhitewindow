import Image from "next/image";
import Link from "next/link";
import { credentials, experience, focusAreas, mediaWork, testimonials } from "@/data/about";
import { BOOKING_PATH, WHATSAPP_HREF, YEARS_OF_PRACTICE } from "@/data/site";

export const metadata = {
  title: "About",
  description:
    "Meet Manse M Doshi, clinical psychologist and psychotherapist with 24 years of practice: my approach, training, credentials and the people I work with.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="section">
        <div className="container split split-reverse">
          <div className="arch arch-photo">
            <Image
              className="photo"
              src="/images/manse-with-rocky.jpg"
              alt="Manse M Doshi smiling at home beside her dog, Rocky"
              width={1200}
              height={1599}
              sizes="(min-width: 900px) 440px, 90vw"
              priority
            />
          </div>
          <div className="measure">
            <p className="eyebrow">About me</p>
            <h1>I'm Manse M Doshi.</h1>
            <p className="lead-text">
              For me, therapy is a space of possibility, where understanding ourselves can open doors to healing,
              balance and change.
            </p>
            <p>
              Over the last {YEARS_OF_PRACTICE} years I have worked with children, adolescents, adults and couples,
              each with their own story, struggles and strengths. I have seen how awareness can shift behaviour, how
              empathy can rebuild connection, and how even small insights can reshape a life.
            </p>
            <p>
              As a clinical psychologist, my work draws on cognitive behavioural therapy (CBT), play therapy and
              other evidence-based approaches. Beyond technique, I believe in a therapeutic relationship that feels
              safe, authentic and free of judgement. Sessions are collaborative: we explore patterns, emotions and
              experiences together, and turn insight into practical tools for everyday life.
            </p>
            <p>
              Whether it is helping a child find words for their feelings, a teenager work through self-esteem, or an
              adult rediscover their strengths, my aim is to make therapy a place where growth feels possible.
            </p>
            <div className="stat">
              <span className="stat-num">{YEARS_OF_PRACTICE}</span>
              <span className="stat-label">years of practice</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Areas of focus</p>
            <h2>Where I can help</h2>
          </div>
          <div className="grid grid-2">
            {focusAreas.map((area) => (
              <div key={area.title} className="card">
                <h3>{area.title}</h3>
                <p>{area.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split split-even">
          <div>
            <p className="eyebrow">Experience</p>
            <h2>Where I have worked</h2>
            <ul className="timeline">
              {experience.map((item) => (
                <li key={item.title}>
                  <span className="timeline-year">{item.year}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">Training</p>
            <h2>Education and credentials</h2>
            <ul className="timeline">
              {credentials.map((item) => (
                <li key={item.title}>
                  <span className="timeline-year">{item.year}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-sky">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Media and writing</p>
            <h2>Mental health in the public eye</h2>
          </div>
          <div className="measure">
            {mediaWork.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">In clients' words</p>
            <h2>What people have shared</h2>
          </div>
          <div className="grid grid-3">
            {testimonials.map((item) => (
              <figure key={item.name} className="card testimonial">
                <blockquote>“{item.text}”</blockquote>
                <figcaption>{item.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container">
          <div className="measure">
            <h2>A safe space is just a message away.</h2>
            <p>When you are ready, book a session or say hello. There is no need to have it all figured out.</p>
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
