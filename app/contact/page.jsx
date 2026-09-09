import Copyright from "@/components/footers/Copyright";
import Footer3 from "@/components/footers/Footer3";
import Header1 from "@/components/headers/Header1";
import Contact from "@/components/others/Contact";
import CommonComponents from "@/components/common/CommonComponents";
export const metadata = {
  title: "Contact",
  description:
    "Get in touch with The White Window. Reach Manse M Doshi by email, WhatsApp or Instagram, or send a message to arrange a consultation.",
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
