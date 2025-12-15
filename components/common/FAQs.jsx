import React from "react";
import Image from "next/image";
import { serviceCards } from "@/data/services";
export default function FAQs() {
  return (
    <section className="latest-service-area tmp-section-gapTop">
      <div className="container">
        <div className="section-head mb--60">
          <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1">
          </div>
          <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
            Frequenly Asked Questions (FAQs)
          </h2><br/>
          <p className="description tmp-scroll-trigger tmp-fade-in animation-order-3">
            {" "}
            Seeking support for your mental health can feel like a big step, and it’s natural to have questions along the way.<br/><br/>This page is designed to provide clear, compassionate answers to the most common questions clients ask about counseling, therapy, and our practice.
            <br/><br/>Whether you’re wondering what to expect in your first session, how confidentiality works, or how to find the right approach for your needs, you’ll find guidance here. <br/><br/>Our goal is to make the process feel approachable and transparent, so you can focus on what matters most—your well-being.
{" "}
          </p>
        </div><br/>
        <div className="row">
          <div className="col-lg-6">
            {serviceCards
              .filter((service) => service.column === 1)
              .map((card, index) => (
              <div
                key={index}
                className={`service-card-v2 tmponhover tmp-scroll-trigger tmp-fade-in animation-order-${
                  index + 1
                }`}
              >
                <h2 className="service-card-num">
                  <span>{`0${card.id}.`}</span>
                  {card.title}
                </h2>
                <p className="service-para">{card.description}</p>
              </div>
            ))}
          </div>
          <div className="col-lg-6">
            <br/><br/><br/>
            <div className="service-card-user-image">
              <Image
                className="tmp-scroll-trigger tmp-zoom-in animation-order-1"
                alt="latest-user-image"
                width={567}
                height={588}
                src="/assets/images/services/latest-services-user-image-two.png"
              />
            </div><br/><br/><br/><br/>
            {serviceCards
              .filter((service) => service.column === 2)
              .map((card, index) => (
              <div
                key={index}
                className={`service-card-v2 tmponhover tmp-scroll-trigger tmp-fade-in animation-order-${
                  index + 1
                }`}
              >
                <h2 className="service-card-num">
                  <span>{`0${card.id}.`}</span>
                  {card.title}
                </h2>
                <p className="service-para">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="section-head mb--60">
          <p className="description section-sm tmp-scroll-trigger tmp-fade-in animation-order-3">
            {" "}
            <br/><br/><br/>If you don’t see your question answered, please reach out directly. Every journey is unique, and we’re here to support yours.
{" "}
          </p>
        </div>
      </div>
    </section>
  );
}
