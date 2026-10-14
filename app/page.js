import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Lock, MessagesSquare, Video } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import FaqList from "@/components/FaqList";
import { featuredServices } from "@/data/services";
import { getFaqs } from "@/data/faqs";
import { posts } from "@/data/posts";
import { BOOKING_PATH, WHATSAPP_HREF, YEARS_OF_PRACTICE } from "@/data/site";
import { formatDate } from "@/lib/format";

export const metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      {/* 1. Hero */}
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Clinical psychologist &amp; psychotherapist · {YEARS_OF_PRACTICE} years</p>
            <h1>Opening a window to healing and hope.</h1>
            <p className="hero-lead">
              Individual, couples, family and child therapy — online across India and Canada, in person in North
              Vancouver.
            </p>
            <div className="btn-row">
              <Link href={BOOKING_PATH} className="btn btn-primary">
                Book a session
              </Link>
              <a href={WHATSAPP_HREF} className="btn btn-soft" target="_blank" rel="noopener noreferrer">
                Say hello on WhatsApp
              </a>
            </div>
          </div>
          <div className="hero-art">
            <div className="hero-arch arch">
              <Image
                className="photo"
                src="/images/manse-portrait.png"
                alt="Manse M Doshi, clinical psychologist and psychotherapist"
                width={367}
                height={778}
                sizes="(min-width: 900px) 220px, 45vw"
                priority
              />
            </div>
            <span className="sun-dot" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* 2. Reassurance */}
      <section className="container" aria-label="Before you begin">
        <div className="reassure">
          <ul>
            <li>
              <Video size={24} strokeWidth={1.5} aria-hidden="true" />
              <p>
                <strong>Online or in person</strong>
                <span>Video sessions across India and Canada; a quiet room in North Vancouver.</span>
              </p>
            </li>
            <li>
              <Lock size={24} strokeWidth={1.5} aria-hidden="true" />
              <p>
                <strong>Confidential</strong>
                <span>What you share stays between us, within limits I explain at the start.</span>
              </p>
            </li>
            <li>
              <MessagesSquare size={24} strokeWidth={1.5} aria-hidden="true" />
              <p>
                <strong>Your first session, explained</strong>
                <span>
                  <Link href="/faq#faq-4">What to expect, and how to prepare</Link>.
                </span>
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* 3. Services */}
      <section className="section">
        <div className="container">
          <div className="section-head-row">
            <div className="section-head">
              <p className="eyebrow">Services</p>
              <h2>Therapy for anxiety, stress and life changes</h2>
            </div>
            <Link href="/services" className="text-link">
              All services <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" />
            </Link>
          </div>
          <div className="grid grid-3">
            {featuredServices.map((service) => (
              <article key={service.id} className="card">
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
                <Link href={`/services#${service.id}`} className="text-link">
                  Learn more <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" />
                  <span className="sr-only"> about {service.title.toLowerCase()}</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. About Manse */}
      <section className="section section-cream">
        <div className="container split">
          <div className="arch arch-photo">
            <Image
              className="photo"
              src="/images/manse-with-rocky.jpg"
              alt="Manse M Doshi smiling at home beside her dog, Rocky"
              width={1200}
              height={1599}
              sizes="(min-width: 900px) 440px, 90vw"
            />
          </div>
          <div className="measure">
            <p className="eyebrow">About me</p>
            <h2>I'm Manse M Doshi.</h2>
            <p>
              For me, therapy is a space of possibility, where understanding ourselves can open doors to healing,
              balance and change. I have worked with children, adolescents, adults and couples, each with their own
              story and strengths.
            </p>
            <p>
              My work draws on cognitive behavioural therapy, play therapy and other evidence-based approaches. Above
              all, I want our sessions to feel safe, honest and free of judgement.
            </p>
            <div className="stat">
              <span className="stat-num">{YEARS_OF_PRACTICE}</span>
              <span className="stat-label">years of practice</span>
            </div>
            <Link href="/about" className="text-link">
              More about me <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. How it works */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">How it works</p>
            <h2>Three small steps</h2>
          </div>
          <ol className="steps">
            <li>
              <h3>Send a message</h3>
              <p>Write to me on WhatsApp, by email or through the form below. A line or two is enough.</p>
            </li>
            <li>
              <h3>A short consultation</h3>
              <p>We talk briefly about what is going on and whether working together feels right.</p>
            </li>
            <li>
              <h3>Your first session</h3>
              <p>Online or in person, at your pace. We start with what matters most to you now.</p>
            </li>
          </ol>
        </div>
      </section>

      {/* 6. FAQs */}
      <section className="section section-sky">
        <div className="container">
          <div className="section-head-row">
            <div className="section-head">
              <p className="eyebrow">Questions</p>
              <h2>Things people often ask</h2>
            </div>
            <Link href="/faq" className="text-link">
              All questions <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" />
            </Link>
          </div>
          <FaqList items={getFaqs([4, 8, 10])} />
        </div>
      </section>

      {/* 7. Latest insights */}
      <section className="section">
        <div className="container">
          <div className="section-head-row">
            <div className="section-head">
              <p className="eyebrow">Insights</p>
              <h2>Recent writing</h2>
            </div>
            <Link href="/insights" className="text-link">
              All articles <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" />
            </Link>
          </div>
          <div className="grid grid-2">
            {posts.slice(0, 2).map((post) => (
              <article key={post.slug} className="card">
                <p className="card-meta">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                </p>
                <h3>
                  <Link href={`/insights/${post.slug}`}>{post.title}</Link>
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Closing invitation */}
      <section className="section section-cream" id="contact">
        <div className="container split split-even">
          <div className="measure">
            <p className="eyebrow">Take the first step</p>
            <h2>A safe space is just a message away.</h2>
            <p>
              Let's talk about what has been weighing on you and find a way forward, one step at a time. Whether you
              are looking for therapy, have a question about my services, or would like to arrange a consultation, a
              simple message is a good place to start.
            </p>
          </div>
          <div className="form-card">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
