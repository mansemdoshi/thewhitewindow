"use client";

import { closeSidebar } from "@/utlis/toggleSidebar";

export default function Sidebar() {
  return (
    <div className="d-none d-xl-block">
      <div className="tmp-sidebar-area tmp_side_bar">
        <div className="inner">
          <div className="top-area">
            <a href="index.html" className="logo">
              <img
                className="logo-dark"
                alt="The White Window | Manse M Doshi | Clinical Psychologist & Psychotherapist"
                src="/assets/images/logo/logo-dark.png"
                width={121}
                height={41}
              />
              <img
                className="logo-white"
                alt="The White Window | Manse M Doshi | Clinical Psychologist & Psychotherapist"
                src="/assets/images/logo/logo-white.png"
                width={121}
                height={40}
              />
            </a>
            <div className="close-icon-area">
              <button
                className="tmp-round-action-btn close_side_menu_active"
                onClick={closeSidebar}
              >
                <i className="fa-sharp fa-light fa-xmark" />
              </button>
            </div>
          </div>
          <div className="content-wrapper">
            <h5 className="title mt--30">
              Manse M Doshi
            </h5>
            <p className="disc">
              I'm a Clinical Psychologist and Psychotherapist dedicated to fostering mental well‑being 
              through evidence‑based care. With expertise in individual, couples, and family therapy, 
              I help clients navigate challenges with clarity and resilience. My approach blends clinical 
              rigor with empathy, creating a safe and supportive space for personal growth.
            </p>
            <div className="short-contact-area">
              {/* single contact information */}
              <div className="single-contact">
                <i className="fa-solid fa-phone" />
                <div className="information tmp-link-animation">
                  <span>Phone</span>
                  <a href="#" className="number">
                    +91 98201 55137
                  </a>
                </div>
              </div>
              {/* single contact information end */}
              {/* single contact information */}
              <div className="single-contact">
                <i className="fa-solid fa-envelope" />
                <div className="information tmp-link-animation">
                  <span>E-Mail</span>
                  <a href="#" className="number">
                    info@thewhitewindow.com
                  </a>
                </div>
              </div>
              {/* single contact information end */}
              {/* single contact information */}
              <div className="single-contact">
                <i className="fa-solid fa-location-crosshairs" />
                <div className="information tmp-link-animation">
                  <span>Address</span>
                  <span className="number">North Vancouver, BC, Canada</span>
                </div>
              </div>
              {/* single contact information end */}
            </div>
            {/* social area start */}
            <div className="social-wrapper mt--20">
              <span className="subtitle">find me on social media</span>
              <div className="social-link">
                <a href="https://www.instagram.com/mansihasan">
                  <i className="fa-brands fa-instagram" />
                </a>
                <a href="https://www.linkedin.com/in/mansi-doshi-009ab620a">
                  <i className="fa-brands fa-linkedin-in" />
                </a>
                <a href="https://wa.me/+919820155137">
                  <i className="fa-brands fa-whatsapp" />
                </a>
                <a href="https://www.facebook.com/mansi.hasan">
                  <i className="fa-brands fa-facebook-f" />
                </a>
              </div>
            </div>
            {/* social area end */}
          </div>
        </div>
      </div>
      <a
        className="overlay_close_side_menu close_side_menu_active"
        onClick={closeSidebar}
        href="#"
      />
    </div>
  );
}
