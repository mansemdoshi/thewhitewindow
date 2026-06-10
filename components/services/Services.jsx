import React from "react";
import Link from "next/link";
import Image from "next/image";
import { serviceCards3 } from "@/data/services";

export default function Services({ isLight = false }) {
  return (
    <section className="latest-service-area tmp-section-gap">
      <div className="container">
        <div className="row">
          <div className="section-head mb--60">
            <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1">
            </div>
            <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
              Services
            </h2>
          </div>
          <div className="row align-items-center mb--60">
            <div className="col-lg-7">
              <div className="services-intro">
                <div className="services-intro-block tmp-scroll-trigger tmp-fade-in animation-order-1">
                  <h4 className="services-intro-heading">
                    <i className="fa-solid fa-video" style={{ marginRight: '10px', color: 'var(--color-primary)' }} />
                    Virtual Sessions
                  </h4>
                  <p className="services-intro-text">
                    Secure video sessions for clients who prefer remote care. Book your first session
                    online and choose a time that suits you.
                  </p>
                  <Link href="/book-a-session" className="tmp-btn hover-icon-reverse radius-round btn-border btn-sm" style={{ marginTop: '0', marginBottom: '16px', display: 'inline-flex' }}>
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">Book Now</span>
                      <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right" /></span>
                      <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right" /></span>
                    </span>
                  </Link>
                </div>

                <div className="services-intro-block tmp-scroll-trigger tmp-fade-in animation-order-2" style={{ marginTop: '32px' }}>
                  <h4 className="services-intro-heading">
                    <i className="fa-solid fa-clipboard-check" style={{ marginRight: '10px', color: 'var(--color-primary)' }} />
                    Psychological Assessment (Online & In-Person)
                  </h4>
                  <p className="services-intro-text">
                    Structured, standardised assessments to clarify learning, developmental, or
                    emotional concerns. We offer secure, evidence-based testing remotely and
                    in-clinic, with a clear report and recommended next steps after each assessment.
                  </p>
                  <div className="services-process" style={{ marginTop: '16px' }}>
                    <h5 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '10px', color: '#333' }}>Process:</h5>
                    <ol className="services-process-list">
                      <li>Book an assessment consult online.</li>
                      <li>Complete pre-assessment forms electronically.</li>
                      <li>Schedule the test (remote or in-clinic).</li>
                      <li>Receive a detailed report and follow-up session to discuss results and a treatment plan.</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="tmp-scroll-trigger tmp-fade-in animation-order-2" style={{ textAlign: 'center' }}>
                <Image
                  src="/assets/images/services/services-illustration.svg"
                  alt="Online therapy and consultation services"
                  width={500}
                  height={400}
                  className="w-100"
                />
              </div>
            </div>
          </div>
          <div className="about-us-section-card row g-5">
            <div className="section-head mb--0">
              <div className="section-sub-title tmp-scroll-trigger tmp-fade-in animation-order-1">
                <span className="subtitle">Services Offered</span>
              </div>
            </div>
            {serviceCards3.map((card, index) => (
              <div className="col-lg-6 col-md-6 col-sm-6 col-12" key={index}>
                <div
                  className={`about-us-card tmp-scroll-trigger tmponhover tmp-fade-in animation-order-${card.animationOrder}`}
                >
                  <div className="card-head">
                    <div className="logo-img">
                      <i className={card.iconClass}></i>
                    </div>
                    <h3 className="card-title">{card.title}</h3>
                  </div>
                  <p className="card-para">{card.description}</p>
                  
                  <div className="button-area-banner-three tmp-scroll-trigger tmp-fade-in animation-order-4">
                  <Link
                    className="tmp-btn hover-icon-reverse radius-round"
                    href={`${card.bookingUrl}`}
                  >
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">Book Now</span>
                      <span className="btn-icon">
                        <i className="fa-sharp fa-regular fa-arrow-right" />
                      </span>
                      <span className="btn-icon">
                        <i className="fa-sharp fa-regular fa-arrow-right" />
                      </span>
                    </span>
                  </Link>
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
