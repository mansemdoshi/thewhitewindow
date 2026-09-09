import Copyright from "@/components/footers/Copyright";
import Footer from "@/components/footers/Footer1";
import Header from "@/components/headers/Header1";
import CommonComponents from "@/components/common/CommonComponents";

/**
 * Shared shell for the Terms and Privacy pages: site chrome plus a single
 * readable text column.
 */
export default function LegalPage({ title, lastUpdated, children }) {
  return (
    <div className="tmp-white-version">
      <Header />
      <br />
      <br />
      <div className="container tmp-section-gapTop">
        <div className="section-head">
          <h1 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
            {title}
          </h1>
        </div>
      </div>
      <section className="tmp-section-gapBottom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="legal-content">
                <p className="legal-updated">Last updated: {lastUpdated}</p>
                {children}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <Copyright />
      <CommonComponents />
    </div>
  );
}
