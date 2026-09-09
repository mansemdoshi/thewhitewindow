import Contact from "@/components/common/Contact2";
import Copyright from "@/components/footers/Copyright";
import Hero from "@/components/common/FAQs";
import Footer from "@/components/footers/Footer1";
import Header from "@/components/headers/Header1";
import CommonComponents from "@/components/common/CommonComponents";
export const metadata = {
  title: "FAQs",
  description:
    "Common questions about starting therapy with The White Window: what a first session looks like, confidentiality, fees, session length and online appointments.",
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
