import Link from "next/link";
import LegalPage from "@/components/legal/LegalPage";

export const metadata = {
  title: "Terms & Conditions",
  description:
    "The terms governing use of the The White Window website, including booking and cancellation, scope of services, and important limitations.",
};

export default function page() {
  return (
    <LegalPage title="Terms &amp; Conditions" lastUpdated="8 September 2026">
      <p>
        These terms govern your use of thewhitewindow.com, the website of The
        White Window, the private practice of Manse M Doshi, Clinical
        Psychologist &amp; Psychotherapist. By using the site you agree to them.
        If you do not agree, please do not use the site.
      </p>

      <div className="legal-callout">
        <p>
          <strong>This website is not an emergency service.</strong> If you or
          someone else is in immediate danger, or you are thinking about
          harming yourself, contact your local emergency number or go to the
          nearest emergency department now. Messages sent through this site are
          not monitored continuously and may not be seen for some time.
        </p>
      </div>

      <h2>1. Information, not treatment</h2>
      <p>
        The content on this site — including service descriptions, articles and
        FAQs — is general information. It is not psychological advice,
        diagnosis or treatment, and it is not a substitute for a consultation
        with a qualified professional who knows your circumstances.
      </p>
      <p>
        Reading this site, submitting a form or booking an appointment does not
        by itself create a therapist–client relationship. That relationship
        begins only when we have met, agreed to work together, and completed
        the intake and consent process.
      </p>

      <h2>2. Appointments and booking</h2>
      <p>
        Appointments can be requested through the{" "}
        <Link href="/book-a-session">booking page</Link>, which uses a
        third-party scheduling provider. A booking request is a request only; it
        is confirmed once you receive confirmation from us.
      </p>
      <p>
        We may decline or discontinue services where the presenting concern
        falls outside our scope of practice or competence, and will make a
        reasonable effort to suggest an appropriate referral.
      </p>

      <h2>3. Fees, cancellation and rescheduling</h2>
      <p>
        Current fees are confirmed to you before your first session. Unless
        agreed otherwise in writing:
      </p>
      <ul>
        <li>fees are payable at or before the time of the session;</li>
        <li>
          appointments cancelled or rescheduled with less than 24 hours&rsquo;
          notice may be charged in full;
        </li>
        <li>
          missed appointments without notice may be charged in full.
        </li>
      </ul>
      <p>
        We will use discretion in genuine emergencies. Any payments taken
        through the booking provider are subject to that provider&rsquo;s terms
        in addition to these.
      </p>

      <h2>4. Online sessions</h2>
      <p>
        Where sessions are delivered remotely, you are responsible for having a
        suitable connection and a private space. Remote delivery has inherent
        limitations — including the possibility of technical failure and
        reduced suitability for higher-risk presentations — which will be
        discussed with you. We may recommend in-person care where remote work is
        not clinically appropriate.
      </p>

      <h2>5. Communication</h2>
      <p>
        Email, contact forms, WhatsApp and social media are not secure or
        confidential channels and are not monitored continuously. Please use
        them for administrative matters only, and never to report a crisis or to
        share detailed clinical information.
      </p>

      <h2>6. Your responsibilities</h2>
      <ul>
        <li>Provide accurate information when contacting or booking.</li>
        <li>
          Use the site lawfully, and do not attempt to disrupt, probe or gain
          unauthorised access to it.
        </li>
        <li>
          Do not submit content that infringes another person&rsquo;s rights or
          privacy.
        </li>
      </ul>

      <h2>7. Intellectual property</h2>
      <p>
        The text, graphics, logo and design of this site belong to The White
        Window or its licensors. You may read, share and print pages for
        personal, non-commercial use. Reproducing or republishing content for
        other purposes requires our written permission.
      </p>

      <h2>8. External links</h2>
      <p>
        The site links to third-party services and resources. We do not control
        those sites and are not responsible for their content, availability or
        privacy practices.
      </p>

      <h2>9. Availability</h2>
      <p>
        We aim to keep the site available and accurate, but do not guarantee
        uninterrupted access or that content is complete and current at all
        times. We may change or withdraw any part of the site without notice.
      </p>

      <h2>10. Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, we are not liable for any
        indirect or consequential loss arising from use of this website or
        reliance on its general content. Nothing in these terms excludes or
        limits liability that cannot lawfully be excluded — including liability
        for death or personal injury caused by negligence, or any liability
        arising from the professional services themselves, which is governed by
        applicable professional and legal standards.
      </p>

      <h2>11. Privacy</h2>
      <p>
        Our handling of personal information is described in the{" "}
        <Link href="/privacy">Privacy Policy</Link>, which forms part of these
        terms.
      </p>

      <h2>12. Changes</h2>
      <p>
        We may update these terms from time to time. The version published here
        applies from the &ldquo;last updated&rdquo; date shown above.
      </p>

      <h2>13. Contact</h2>
      <p>
        Questions about these terms can be sent to{" "}
        <a href="mailto:info@thewhitewindow.com">info@thewhitewindow.com</a> or
        through our <Link href="/contact">contact page</Link>.
      </p>

      <div className="legal-callout">
        <p>
          <strong>Please note:</strong> these terms are provided for general
          information and are not legal advice. Cancellation periods, fee terms
          and the governing jurisdiction should be confirmed by a qualified
          professional, and aligned with the regulatory body under which this
          practice is registered, before being relied upon.
        </p>
      </div>
    </LegalPage>
  );
}
