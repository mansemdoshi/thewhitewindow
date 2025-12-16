import React from "react";
import Link from "next/link";
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
            </h2><br/><br/>
            <div className="section-sub-title tmp-scroll-trigger tmp-fade-in animation-order-1">
              <span className="subtitle">1. Virtual sessions:</span>
            </div>
            <div style={{ textAlign: 'left'}} className="section-description tmp-scroll-trigger tmp-fade-in animation-order-1">
              <span className="description">
                Secure video sessions for clients who prefer remote care. Book your first session
                online and choose a time that suits you.<br/>
                Book your first session → <span className="subtitle">[Online booking button]</span>
              </span>
            </div>
            <br/>
            <div className="section-sub-title tmp-scroll-trigger tmp-fade-in animation-order-1">
              <span className="subtitle">2. Psychological Assessment (Online & In-person)</span>
            </div>
            <div style={{ textAlign: 'left'}} className="section-description tmp-scroll-trigger tmp-fade-in animation-order-1">
              <span className="description">
                Structured, standardised assessments to clarify learning, developmental, or
                emotional concerns. We offer secure, evidence-based testing remotely and
                in-clinic, with a clear report and recommended next steps after each assessment.
              </span>
            </div>
            <br/>
            <div className="section-sub-title tmp-scroll-trigger tmp-fade-in animation-order-1">
              <span className="subtitle">Process:</span>
            </div>
            <div style={{ textAlign: 'left'}} className="section-description tmp-scroll-trigger tmp-fade-in animation-order-1">
              <span className="description">
                1. Book an assessment consult online.<br/>
                2. Complete pre-assessment forms electronically.<br/>
                3. Schedule the test (remote or in-clinic).<br/>
                4. Receive a detailed report and follow-up session to discuss results and a
                treatment plan.
              </span>
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
