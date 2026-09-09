"use client";
import Image from "next/image";
import Link from "next/link";
import { footerLinks, footerLinksWhite } from "@/data/footerLinks";
import NewsletterForm from "../common/NewsletterForm";
export default function Footer3({
  darkLogo = "/assets/images/logo/logo-dark.png",
  lightLogo = "/assets/images/logo/logo-white.png",
}) {
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
                    <span>Opening a Window</span> to <br /> Healing and Hope
                  </p>
                  <NewsletterForm />
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
                      <a href="tel:+919820155137">+91 98201 55137</a>
                    </li>
                  </ul>
                  <div className="social-link footer">
                    <a href="https://www.instagram.com/mansihasan" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                      <i className="fa-brands fa-instagram" />
                    </a>
                    <a href="https://www.linkedin.com/in/mansi-doshi-009ab620a" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <i className="fa-brands fa-linkedin-in" />
                    </a>
                    <a href="https://wa.me/919820155137" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                      <i className="fa-brands fa-whatsapp" />
                    </a>
                    <a href="https://www.facebook.com/mansi.hasan" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
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
