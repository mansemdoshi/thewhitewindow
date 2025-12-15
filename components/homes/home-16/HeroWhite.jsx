import React from "react";

export default function HeroWhite() {
  return (
    <div
      className="tmp-banner-one-area model-style-banner with-instructor style-2"
      id="home"
      data-white-overlay={3}
    >
      <div className="container">
        <div className="banner-one-main-wrapper">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="inner banner-model-15">
                <h1 className="title tmp-fade-in">Julian Tobias</h1>
                <p className="disc tmp-fade-in">
                  German Gym Instructor, Entrepreneur &amp; Youtuber
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="social-area-wrapper-varticle">
        <ul>
          <li>
            <a href="https://www.facebook.com/mansi.hasan">
              <i className="fa-brands fa-facebook-f" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/mansihasan">
              <i className="fa-brands fa-instagram" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/mansi-doshi-009ab620a">
              <i className="fa-brands fa-linkedin" />
            </a>
          </li>
          <li>
            <a href="https://wa.me/+919820155137">
              <i className="fa-brands fa-whatsapp" />
            </a>
          </li>
        </ul>
      </div>
      <div className="hero-bg-video">
        <video autoPlay muted loop id="myVideo">
          <source src="/assets/images/video/fitness.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
