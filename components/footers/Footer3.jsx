"use client";
import Image from "next/image";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { toast } from "react-toastify";
import Demomodal from "../modals/Demomodal";
import Chat from "../common/Chat";
import DemoToggler from "../common/DemoToggler";
import ScrollTop from "../common/ScrollTop";
import Sidebar from "../headers/Sidebar";
import MobileMenu from "../headers/MobileMenu";
import MobileMenuOnepage from "../headers/MobileMenuOnepage";
import { footerLinks, footerLinksWhite } from "@/data/footerLinks";
export default function Footer3({
  darkLogo = "/assets/images/logo/logo-dark.png",
  lightLogo = "/assets/images/logo/logo-white.png",
}) {
  const newsletterRef = useRef();

  const handleNewsletter = (e) => {
    e.preventDefault();
    const email = newsletterRef.current.value.trim();
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }
    emailjs
      .send(
        "service_cyobi0y",
        "template_4nbexqj",
        {
          name: "Newsletter Subscriber",
          email: email,
          subject: "New Newsletter Subscription",
          message: `New newsletter subscription from: ${email}`,
        },
        "D79JdTqxXVCcQBXL4"
      )
      .then(() => {
        toast.success("Subscribed to newsletter successfully!");
        newsletterRef.current.value = "";
      })
      .catch(() => {
        toast.error("Something went wrong. Please try again.");
      });
  };

  return (
    <>
      <footer className="footer-area footer-style-one-wrapper  tmp-section-gap">
        <div className="container">
          <div className="footer-main footer-style-one">
            <div className="row g-5">
              <div className="col-lg-5 col-md-6">
                <div className="single-footer-wrapper border-right mr--20">
                  <div className="logo">
                    <Link href={`/`}>
                      <Image
                        className="logo-dark"
                        alt="The White Window | Manse M Doshi | Clinical Psychologist & Psychotherapist"
                        src={darkLogo}
                        width={121}
                        height={41}
                      />
                      <Image
                        className="logo-white"
                        alt="The White Window | Manse M Doshi | Clinical Psychologist & Psychotherapist"
                        src={lightLogo}
                        width={121}
                        height={40}
                      />
                    </Link>
                  </div>
                  <p className="description">
                    <span>Opening a Window </span> to <br /> to Healing and Hope
                  </p>
                  <form
                    onSubmit={handleNewsletter}
                    className="newsletter-form-1 mt--40"
                  >
                    <input type="email" ref={newsletterRef} placeholder="Email Address" required />
                    <button type="submit" className="form-icon" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                      <i className="fa-regular fa-envelope" />
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-footer-wrapper quick-link-wrap">
                  <h5 className="ft-title">Quick Link</h5>
                  <ul className="ft-link tmp-link-animation dark-content">
                    {footerLinks.map((item, index) => (
                      <li key={index}>
                        <Link href={item.href}>{item.label}</Link>
                      </li>
                    ))}
                  </ul>
                  <ul className="ft-link tmp-link-animation light-content2">
                    {footerLinksWhite.map((item, index) => (
                      <li key={index}>
                        <Link href={item.href}>{item.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single-footer-wrapper contact-wrap">
                  <h5 className="ft-title">Contact </h5>
                  <ul className="ft-link tmp-link-animation">
                    <li>
                      <span className="ft-icon">
                        <i className="fa-solid fa-envelope" />
                      </span>
                      <a href="mailto:info@thewhitewindow.com">info@thewhitewindow.com</a>
                    </li>
                    <li>
                      <span className="ft-icon">
                        <i className="fa-solid fa-location-dot" />
                      </span>
                      North Vancouver, BC, Canada
                    </li>
                    <li>
                      <span className="ft-icon">
                        <i className="fa-solid fa-phone" />
                      </span>
                      <a href="#">+91 98201 55137</a>
                    </li>
                  </ul>
                  <div className="social-link footer">
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
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bg-img">
          <Image
            alt="footer-img"
            width={437}
            height={430}
            src="/assets/images/footer/footer-bg-img.png"
          />
        </div>
      </footer>{" "}
    </>
  );
}
