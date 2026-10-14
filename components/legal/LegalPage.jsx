import PageIntro from "@/components/PageIntro";

/** Shared shell for the Terms and Privacy pages: one readable text column. */
export default function LegalPage({ title, lastUpdated, children }) {
  return (
    <>
      <PageIntro eyebrow="Legal" title={title}>
        <p>Last updated: {lastUpdated}</p>
      </PageIntro>
      <section className="section section-tight-top">
        <div className="container">
          <div className="prose">{children}</div>
        </div>
      </section>
    </>
  );
}
