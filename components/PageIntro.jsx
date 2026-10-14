// Standard page opening: eyebrow, H1 and an optional lead paragraph, closed by the sill line.

export default function PageIntro({ eyebrow, title, children }) {
  return (
    <section className="page-intro">
      <div className="container">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {children && <div className="page-intro-lead">{children}</div>}
        <hr className="sill" />
      </div>
    </section>
  );
}
