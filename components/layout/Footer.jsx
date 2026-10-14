import Link from "next/link";
import { Globe, Mail, MapPin, Phone } from "lucide-react";
import Logo from "@/components/brand/Logo";
import SocialIcon from "@/components/ui/SocialIcon";
import { DESCRIPTOR, EMAIL, LOCATION, PERSON, PHONE_DISPLAY, PHONE_HREF, SITE_NAME, TAGLINE, socials } from "@/data/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          {/* Footer lockup: the mark spans the name, person, role and tagline. Built from the official
              mark and wordmark files, because the descriptor baked into the horizontal
              lockup is too small to read at footer size. */}
          <div className="footer-lockup">
            <Logo variant="mark" height={132} className="footer-mark" />
            <div className="footer-lockup-text">
              <Logo variant="wordmark" height={18} alt="The White Window" className="footer-wordmark" />
              <p className="footer-descriptor">
                <span className="footer-descriptor-name">{PERSON}</span>
                {DESCRIPTOR}
              </p>
              <p className="footer-tagline">{TAGLINE}</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="footer-title">Contact</h2>
          <ul className="footer-contact">
            <li>
              <Mail size={18} strokeWidth={1.5} aria-hidden="true" />
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </li>
            <li>
              <Phone size={18} strokeWidth={1.5} aria-hidden="true" />
              <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
            </li>
            <li>
              <MapPin size={18} strokeWidth={1.5} aria-hidden="true" />
              <span>
                <span className="footer-label">In person</span>
                {LOCATION}
              </span>
            </li>
            <li>
              <Globe size={18} strokeWidth={1.5} aria-hidden="true" />
              <span>
                <span className="footer-label">Online</span>
                Worldwide
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="footer-title">Follow</h2>
          <ul className="footer-social">
            {socials.map((social) => (
              <li key={social.name}>
                <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                  <SocialIcon name={social.name} size={20} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container">
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} {SITE_NAME} · {PERSON}
          </p>
          <nav aria-label="Legal">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
