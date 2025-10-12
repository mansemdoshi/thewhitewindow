import Copyright from "@/components/footers/Copyright";
import Header from "@/components/headers/Header1";
import Blogs from "@/components/common/Blogs";
import Brands from "@/components/common/Brands";
import Contact from "@/components/common/Contact2";
import Education from "@/components/common/Education2";
import Facts from "@/components/common/Facts";
import Hero from "@/components/homes/home-4/Hero";
import Portfolio from "@/components/common/Portfolio2";
import Services from "@/components/common/Services5";
import Skills from "@/components/common/Skills";
import Testimonials from "@/components/homes/home-5/Testimonials";
import Footer from "@/components/footers/Footer1";
import CommonComponents from "@/components/common/CommonComponents";

export const metadata = {
  title:
    "Home || The White Window",
  description:
    "Manse M Doshi - Clinical Psychologist & Psychotherapist",
};
export default function Home() {
  return (
    <>
      <div className="tmp-white-version">
        <Header />
        <Hero />
        <Services isLight/>
        <Facts />
        {/* <Skills /> */}
        {/* <Services /> */}
        {/* <Education /> */}
        {/* <Brands /> */}
        {/* <Portfolio /> */}
        {/* <Skills /> */}
        {/* <Testimonials /> */}
        <Contact />
        {/* <Blogs /> */}
        <Footer />
        <Copyright />
        <CommonComponents />
      </div>
    </>
  );
}
