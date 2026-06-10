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
        <br/><br/>
        <Services isLight />
        {/* <Pricing parentClass="our-price-plan-area tmp-section-gapBottom" /> */}
        <Footer />
        <Copyright /> 
        <CommonComponents />
      </div>
    </>
  );
}
