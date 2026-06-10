import Copyright from "@/components/footers/Copyright";
import Footer from "@/components/footers/Footer1";
import Header from "@/components/headers/Header1";
import CalBooking from "@/components/common/CalBooking";
import Link from "next/link";
import React, { Suspense } from "react";
import CommonComponents from "@/components/common/CommonComponents";

export const metadata = {
  title:
    "Book a Session || The White Window | Manse M Doshi | Clinical Psychologist & Psychotherapist",
  description:
    "Book a therapy session with Manse M Doshi, Clinical Psychologist & Psychotherapist. Choose from individual psychotherapy, CBT, trauma therapy, assessments, and more.",
};

export default function page() {
  const calUsername =
    process.env.NEXT_PUBLIC_CALENDLY_USERNAME || "thewhitewindow";

  return (
    <>
      <div className="tmp-white-version">
        <Header /><br/><br/>
        <div className="container tmp-section-gapTop">
          <div className="section-head">
            <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
              Book a Session
            </h2>
          </div>
        </div>
        <section className="booking-area" style={{ paddingTop: '0' }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="cal-embed-wrapper">
                  <Suspense
                    fallback={
                      <div className="cal-loading">
                        Loading booking calendar...
                      </div>
                    }
                  >
                    <CalBooking calLink={calUsername} />
                  </Suspense>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
        <Copyright />
        <CommonComponents />
      </div>
    </>
  );
}
