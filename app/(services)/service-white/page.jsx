import Copyright from "@/components/footers/Copyright";

import Footer from "@/components/footers/Footer1";

import Header from "@/components/headers/Header1";
import Pricing from "@/components/common/Pricing";
import Services from "@/components/services/Services";
import Link from "next/link";
import React from "react";
import CommonComponents from "@/components/common/CommonComponents";
export const metadata = {
  title:
    "Services || The White Window | Manse M Doshi | Clinical Psychologist & Psychotherapist",
  description:
    "The White Window | Manse M Doshi | Clinical Psychologist & Psychotherapist",
};
export default function page() {
  return (
    <>
      <div className="tmp-white-version">
        <Header />
        <div className="breadcrumb-area breadcrumb-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb-inner text-center">
                  <h1 className="title split-collab">Services</h1>
                  <ul className="page-list">
                    <li className="tmp-breadcrumb-item">
                      <Link href={`/`}>Home</Link>
                    </li>
                    <li className="icon">
                      <i className="fa-solid fa-angle-right" />
                    </li>
                    <li className="tmp-breadcrumb-item active">Services</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Services isLight />
        {/* <Pricing parentClass="our-price-plan-area tmp-section-gapBottom" /> */}
        <Footer />
        <Copyright /> 
        <CommonComponents />
      </div>
    </>
  );
}
