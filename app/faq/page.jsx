import Contact from "@/components/common/Contact2";
import Copyright from "@/components/footers/Copyright";
import Hero from "@/components/common/FAQs";
import Footer from "@/components/footers/Footer1";
import Header from "@/components/headers/Header1";
import Link from "next/link";
import React from "react";
import CommonComponents from "@/components/common/CommonComponents";
export const metadata = {
  title:
    "FAQs || The White Window | Manse M Doshi | Clinical Psychologist & Psychotherapist",
  description:
    "The White Window | Manse M Doshi | Clinical Psychologist & Psychotherapist",
};
export default function page() {
  return (
    <>
      <div className="tmp-white-version">
        <Header />
        <br/><br/>
        <Hero />
        <Contact parentClass="get-in-touch-area tmp-section-gapBottom" />
        <Footer /> 
        <Copyright />
        <CommonComponents />
      </div>
    </>
  );
}
