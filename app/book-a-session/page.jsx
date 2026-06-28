import Copyright from "@/components/footers/Copyright";
import Footer from "@/components/footers/Footer1";
import Header from "@/components/headers/Header1";
import HjachiBooking from "@/components/common/HjachiBooking";
import Link from "next/link";
import React from "react";
import CommonComponents from "@/components/common/CommonComponents";

export const metadata = {
  title:
    "Book a Session || The White Window | Manse M Doshi | Clinical Psychologist & Psychotherapist",
  description:
    "Book a therapy session with Manse M Doshi, Clinical Psychologist & Psychotherapist. Choose from individual psychotherapy, CBT, trauma therapy, assessments, and more.",
};

export default async function page({ searchParams }) {
  // Service cards on /services link here as ?type=<service>; forward it to the
  // HJachi widget as ?service=<id> to deep-link straight to that offering.
  const params = await searchParams;
  const service = params?.type;

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
                  <HjachiBooking service={service} />
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
