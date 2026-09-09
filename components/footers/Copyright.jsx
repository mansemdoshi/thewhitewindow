import React from "react";
import Link from "next/link";
export default function Copyright() {
  return (
    <div className="copyright-area-one">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="main-wrapper">
              <p className="copy-right-para tmp-link-animation">
                ©{" "}
                <a href="https://thewhitewindow.com" target="_blank" rel="noopener noreferrer">
                  The White Window {new Date().getFullYear()}
                </a>{" "}
                | All Rights Reserved
              </p>{" "}
              <ul className="tmp-link-animation dark-content">
                <li>
                  <Link href={`/terms`}>Terms &amp; Conditions</Link>
                </li>
                <li>
                  <Link href={`/privacy`}>Privacy Policy</Link>
                </li>
                <li>
                  <Link href={`/contact`}>Contact</Link>
                </li>
              </ul>
              <ul className="tmp-link-animation light-content">
                <li>
                  <Link href={`/terms`}>Terms &amp; Conditions</Link>
                </li>
                <li>
                  <Link href={`/privacy`}>Privacy Policy</Link>
                </li>
                <li>
                  <Link href={`/contact`}>Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
