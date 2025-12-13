import React from "react";
import Image from "next/image";
import TyperComponent from "@/components/common/TyperComponent";

export default function Hero() {
  return (
    <div className="banner-right-thumbnail-area tmp-section-gap" id="home">
      <div className="container">
        <div className="row align-items-center pt--50">
          <div className="col-lg-7">
            <div className="banner-right-thumb-left-content">
              <span className="pre-title">Welcome to The White Window</span>
              <h1 className="title">
                I’m Manse M Doshi <br />A{" "}
                <span className="header-caption">
                  <span className="cd-headline clip is-full-width">
                    <TyperComponent
                      strings={[
                        "Clinical Psychologist",
                        "Psychotherapist",
                        "Clinical Counselor",
                      ]}
                    />
                  </span>
                </span>
              </h1>
              <p className="disc">
                For me, therapy is a space of possibility where understanding
                ourselves can open doors to healing, balance, and change.<br/><br/>
                Over the last 20 years, I have worked with children, adolescents,
                adults, and couples, each with their own story, struggles, and
                strengths. Through this journey, I’ve seen how awareness can shift
                behaviour, how empathy can rebuild connection, and how even
                small insights can reshape entire lives.<br/><br/>
                As a clinical psychologist, my work draws from Cognitive
                Behavioural Therapy (CBT), Play Therapy, and other
                evidence-based approaches.<br/><br/>
                But beyond techniques, I believe in building a therapeutic
                relationship that feels safe, authentic, and non-judgmental.
                My sessions are collaborative. We explore patterns, emotions, and
                experiences together, translating insight into practical tools for
                everyday life.<br/><br/>
                Whether it’s helping a child find words for their feelings, a teenager
                navigate self-esteem, or an adult rediscover their strengths, my
                goal is to make therapy a place where growth feels possible.
              </p>
              <div className="find-me-on">
                <h2 className="find-me-on-title">Find me on</h2>
                <div className="social-link banner">
                  <a href="#">
                    <i className="fa-brands fa-instagram" />
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-linkedin-in" />
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-facebook-f" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="">
              <div className="thumbnail-right-inner-main-image tmponhover">
                <Image
                  alt=""
                  src="/assets/images/banner/instructor.png"
                  width={700}
                  height={933}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
