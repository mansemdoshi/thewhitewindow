import Contact from "@/components/common/Contact2";
import Copyright from "@/components/footers/Copyright";
import Education from "@/components/common/Education2";
import Facts from "@/components/common/Facts";
import Hero from "@/components/homes/home-17/Hero";
import Skills from "@/components/common/Skills";
import Footer from "@/components/footers/Footer1";
import Header from "@/components/headers/Header1";
import Link from "next/link";
import React from "react";
import CommonComponents from "@/components/common/CommonComponents";
export const metadata = {
  title:
    "About || The White Window | Manse M Doshi | Clinical Psychologist & Psychotherapist",
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
                  <h1 className="title split-collab">About Me</h1>
                  <ul className="page-list">
                    <li className="tmp-breadcrumb-item">
                      <Link href={`/`}>Home</Link>
                    </li>
                    <li className="icon">
                      <i className="fa-solid fa-angle-right" />
                    </li>
                    <li className="tmp-breadcrumb-item active">About Me</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Hero />
        <Education />
        <Skills parentClass="tmp-skill-area tmp-section-gapTop tmp-section-gapBottom" />
        <Facts />
        <Contact parentClass="get-in-touch-area tmp-section-gapBottom tmp-section-gapTop" />
        <Footer /> 
        <Copyright />
        <CommonComponents />
      </div>
    </>
  );
}
