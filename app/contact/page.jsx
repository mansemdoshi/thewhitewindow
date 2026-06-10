import Copyright from "@/components/footers/Copyright";
import Footer3 from "@/components/footers/Footer3";
import Header1 from "@/components/headers/Header1";
import Contact from "@/components/others/Contact";
import Link from "next/link";
import React from "react";
import CommonComponents from "@/components/common/CommonComponents";
export const metadata = {
  title:
    "Contact || The White Window | Manse M Doshi | Clinical Psychologist & Psychotherapist",
  description:
    "The White Window | Manse M Doshi | Clinical Psychologist & Psychotherapist",
};
export default function page() {
  return (
    <>
      <div className="tmp-white-version">
        <Header1 /><br/><br/>
        <div className="container tmp-section-gapTop">
          <div className="section-head">
            <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
              Contact
            </h2>
          </div>
        </div>
        <div style={{ marginTop: '-30px' }}>
          <Contact />
        </div>
        <Footer3 />
        <Copyright /> <CommonComponents />
      </div>
    </>
  );
}
