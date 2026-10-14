import Link from "next/link";
import Logo from "@/components/brand/Logo";
import SocialIcon from "@/components/ui/SocialIcon";
import { EMAIL, LOCATION, PERSON, PHONE_DISPLAY, PHONE_HREF, SITE_NAME, TAGLINE, WHATSAPP_HREF, socials } from "@/data/site";

const links = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/faq", label: "FAQs" },
  { href: "/insights", label: "Insights" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo
            variant="horizontal"
            withDescriptor
            height={56}
            alt="The White Window — Manse M Doshi, Clinical Psychologist & Psychotherapist"
          />
          <p className="footer-tagline">{TAGLINE}</p>
        </div>

        <div>
          <h2 className="footer-title">Contact</h2>
          <ul className="footer-list">
            <li>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </li>
            <li>
              <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
              {" · "}
              <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </li>
            <li>{LOCATION} · Online across India and Canada</li>
          </ul>
        </div>

        <nav aria-label="Footer">
          <h2 className="footer-title">Links</h2>
          <ul className="footer-list">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="footer-title">Follow</h2>
          <ul className="footer-social">
            {socials.map((social) => (
              <li key={social.name}>
                <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                  <SocialIcon name={social.name} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>
          © {new Date().getFullYear()} {SITE_NAME} · {PERSON}
        </p>
      </div>
    </footer>
  );
}
