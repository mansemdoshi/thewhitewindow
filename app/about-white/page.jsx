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
        <br/><br/>
        <Hero />
        <Education />
        <Skills parentClass="tmp-skill-area tmp-section-gapTop" />
        <Facts />
        <Contact parentClass="get-in-touch-area tmp-section-gapBottom tmp-section-gapTop" />
        <Footer /> 
        <Copyright />
        <CommonComponents />
      </div>
    </>
  );
}
