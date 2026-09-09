import Copyright from "@/components/footers/Copyright";

import Footer from "@/components/footers/Footer1";

import Header from "@/components/headers/Header1";
import Pricing from "@/components/common/Pricing";
import Services from "@/components/services/Services";
import CommonComponents from "@/components/common/CommonComponents";
export const metadata = {
  title: "Services",
  description:
    "Individual psychotherapy, CBT, ACT, trauma-informed therapy, grief and loss counselling, psychological assessments, parental guidance and premarital counselling.",
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
