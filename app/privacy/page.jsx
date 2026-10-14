import Link from "next/link";
import LegalPage from "@/components/legal/LegalPage";

export const metadata = {
  title: "Privacy policy",
  alternates: { canonical: "/privacy" },
  description:
    "How The White Window collects, uses, stores and protects personal information submitted through this website, and how clinical records are handled separately.",
};

export default function page() {
  return (
    <LegalPage title="Privacy policy" lastUpdated="13 October 2026">
      <p>
        This Privacy Policy explains how The White Window (&ldquo;we&rdquo;,
        &ldquo;us&rdquo;), the private practice of Manse M Doshi, Clinical
        Psychologist &amp; Psychotherapist, handles personal information
        collected through this website at thewhitewindow.com.
      </p>
      <p>
        It covers the <strong>website only</strong>. Information you share
        during therapy is clinical record material and is governed by
        professional confidentiality obligations and the separate consent
        documents you receive when treatment begins.
      </p>

      <h2>1. Information we collect</h2>
      <h3>Information you give us</h3>
      <ul>
        <li>
          <strong>Contact form.</strong> Your name, the email address or
          phone number you give us, and your message.
        </li>
        <li>
          <strong>Booking.</strong> Appointment requests are handled by our
          booking provider (see section 3). Details you enter there — including
          any intake information — are collected by that provider on our behalf.
        </li>
        <li>
          <strong>Direct contact.</strong> Anything you choose to include when
          you email, message or call us.
        </li>
      </ul>
      <p>
        Please do not send detailed clinical or sensitive health information
        through the website contact form or by email. Use it to make initial
        contact, and we will arrange a secure channel.
      </p>

      <h3>Information collected automatically</h3>
      <p>
        Our hosting provider records standard technical data such as IP address,
        browser type and pages requested, for security and reliability purposes.
        This site does not run advertising trackers or profile visitors for
        marketing.
      </p>

      <h2>2. How we use your information</h2>
      <ul>
        <li>To respond to your enquiry and arrange appointments.</li>
        <li>To provide and administer psychological services you request.</li>
        <li>To keep the website secure and functioning.</li>
        <li>To meet professional, regulatory and legal obligations.</li>
      </ul>
      <p>
        We do not sell your personal information, and we do not share it for
        third-party marketing.
      </p>

      <h2>3. Service providers</h2>
      <p>
        We rely on a small number of third parties to run the site. Each
        processes data under its own privacy terms:
      </p>
      <ul>
        <li>
          <strong>EmailJS</strong> — delivers contact form submissions to our
          inbox.
        </li>
        <li>
          <strong>HJachi</strong> — hosts the booking flow embedded on our
          &ldquo;Book a session&rdquo; page, including scheduling and any
          payment steps.
        </li>
        <li>
          <strong>Our hosting provider</strong> — serves the website and keeps
          the technical logs described above.
        </li>
      </ul>

      <h2>4. Confidentiality and its limits</h2>
      <p>
        Clinical information is treated as confidential. In specific
        circumstances, professional and legal duties may require disclosure
        without your consent — for example where there is a serious and
        imminent risk of harm to you or another person, where a child or
        vulnerable adult may be at risk, or where disclosure is compelled by a
        court order or by law. These limits are explained in full at the start
        of therapy.
      </p>

      <h2>5. Retention</h2>
      <p>
        Website enquiries are kept only as long as needed to deal with them and
        for a reasonable period afterwards. Clinical records are retained for the period
        required by the professional standards applicable to the practice, which
        is generally longer.
      </p>

      <h2>6. Security</h2>
      <p>
        The site is served over HTTPS and we take reasonable technical and
        organisational measures to protect the information we hold. No method of
        transmission over the internet is completely secure, and email in
        particular is not a secure medium — please bear that in mind when
        deciding what to send.
      </p>

      <h2>7. Your rights</h2>
      <p>
        Subject to applicable law and to professional record-keeping
        obligations, you may ask us to:
      </p>
      <ul>
        <li>confirm what personal information we hold about you;</li>
        <li>provide a copy of it;</li>
        <li>correct information that is inaccurate or incomplete;</li>
        <li>delete information we no longer need to retain.</li>
      </ul>
      <p>
        To make a request, email{" "}
        <a href="mailto:info@thewhitewindow.com">info@thewhitewindow.com</a>. We
        may need to verify your identity first.
      </p>

      <h2>8. Children</h2>
      <p>
        Where services are provided to children or adolescents, a parent or
        legal guardian normally provides consent. The website itself is not
        directed at children, and we do not knowingly collect information from
        them through it.
      </p>

      <h2>9. International transfers</h2>
      <p>
        Our service providers may process and store data outside your country of
        residence. Where that happens, we take reasonable steps to ensure the
        information continues to receive appropriate protection.
      </p>

      <h2>10. Changes to this policy</h2>
      <p>
        We may update this policy from time to time. The revised version takes
        effect when posted here, and the &ldquo;last updated&rdquo; date above
        will change accordingly.
      </p>

      <h2>11. Contact us</h2>
      <p>
        Questions or concerns about privacy can be sent to{" "}
        <a href="mailto:info@thewhitewindow.com">info@thewhitewindow.com</a>, or
        through our <Link href="/contact">contact page</Link>.
      </p>

      <div className="callout">
        <p>
          <strong>Please note:</strong> this policy is provided for general
          information and is not legal advice. It should be reviewed by a
          qualified professional against the privacy and health-records
          legislation and the professional-college requirements that apply to
          this practice before being relied upon.
        </p>
      </div>
    </LegalPage>
  );
}
