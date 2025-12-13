import React from "react";
import Image from "next/image";
import { educationExperienceData } from "@/data/education";
export default function Education() {
  return (
    <section className="education-experience tmp-section-gapTop" id="resume">
      <div className="container">
        <h2 className="custom-title mb-32 tmp-scroll-trigger tmp-fade-in animation-order-1">
          Education
          <span>
            <Image
              alt="custom-line"
              src="/assets/images/custom-line/custom-line.png"
              width={81}
              height={6}
            />
          </span>
        </h2>
        <div className="row g-5">
          {educationExperienceData.map((item, index) => (
            <div className="col-lg-6 col-sm-6" key={index}>
              <div
                className={`education-experience-card tmponhover tmp-scroll-trigger tmp-fade-in animation-order-${item.animationOrder}`}
              >
                <h4 className="edu-sub-title">{item.role}</h4>
                <h2 className="edu-title">{item.duration}</h2>
                <p className="edu-para">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="experiences-wrapper">
          <div className="row">
            <div className="col-lg-6">
              <div className="experiences-wrap-left-content">
                <h2 className="custom-title mb-32 tmp-scroll-trigger tmp-fade-in animation-order-1">
                  Experiences
                  <span>
                    <Image
                      alt="custom-line"
                      src="/assets/images/custom-line/custom-line.png"
                      width={81}
                      height={6}
                    />
                  </span>
                </h2>
                <div className="experience-content tmp-scroll-trigger tmp-fade-in animation-order-1">
                  <h2 className="ex-name">Founder & Lead Psychotherapist</h2>
                  <h3 className="ex-title">2003 - Present</h3>
                  <p className="ex-para">
                    I work with adults, couples, and young people to
                    address anxiety, relationship challenges, and
                    emotional well-being through CBT, play therapy,
                    and mindfulness-based approaches.
                  </p>
                </div>
                <div className="experience-content tmp-scroll-trigger tmp-fade-in animation-order-2">
                  <h2 className="ex-name">Consulting Psychologist – Television & Entertainment</h2>
                  <h3 className="ex-title">2008-2010</h3>
                  <p className="ex-para">
                    I have provided psychological support for
                    contestants and teams on shows like Indian Idol
                    and Kaun Banega Crorepati.
                  </p>
                </div>
                <div className="experience-content tmp-scroll-trigger tmp-fade-in animation-order-1">
                  <h2 className="ex-name">Consulting Psychologist – Media & Publications</h2>
                  <h3 className="ex-title">2003-2017</h3>
                  <p className="ex-para">
                    Shared my expert insights on mental health and
                    relationships in leading outlets such as Bombay
                    Times, Hindustan Times, DNA India, and Reader’s
                    Digest.
                  </p>
                </div>
                <div className="experience-content tmp-scroll-trigger tmp-fade-in animation-order-1">
                  <h2 className="ex-name">Consultant – Tobacco Cessation & Behavioural Change</h2>
                  <h3 className="ex-title">2012</h3>
                  <p className="ex-para">
                    Trained at the Mayo Clinic (USA), I designed and led
                    CBT-based tobacco cessation programs
                    emphasizing behaviour change and relapse
                    prevention.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="experiences-wrap-right-content">
                <Image
                  className="tmp-scroll-trigger tmp-zoom-in animation-order-1"
                  alt="expert-img"
                  src="/assets/images/experiences/expert-img.jpg"
                  width={945}
                  height={719}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
