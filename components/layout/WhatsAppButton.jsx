import SocialIcon from "@/components/ui/SocialIcon";
import { WHATSAPP_HREF } from "@/data/site";

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_HREF}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message on WhatsApp"
    >
      <SocialIcon name="WhatsApp" />
    </a>
  );
}
