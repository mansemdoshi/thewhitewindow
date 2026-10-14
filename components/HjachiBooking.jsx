"use client";

import { useEffect, useState } from "react";

/**
 * HJachi booking widget, inlined as an iframe (what https://book.hjachi.com/embed.js does).
 *
 * Config (.env.local):
 *   NEXT_PUBLIC_HJACHI_PROVIDER     provider booking code / slug (default below)
 *   NEXT_PUBLIC_HJACHI_PROVIDER_ID  provider UUID (optional; takes precedence)
 *
 * `service` deep-links to a specific offering (HJachi service id) and auto-selects it.
 * The widget is themed to match the site's current light/dark state.
 */
const ORIGIN = "https://book.hjachi.com";

function siteTheme() {
  const attr = document.documentElement.getAttribute("data-theme");
  if (attr === "light" || attr === "dark") return attr;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function HjachiBooking({ service, minHeight = 950 }) {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    setTheme(siteTheme());
    // Follow the header toggle while the page is open.
    const observer = new MutationObserver(() => setTheme(siteTheme()));
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => observer.disconnect();
  }, []);

  const providerId = process.env.NEXT_PUBLIC_HJACHI_PROVIDER_ID;
  const code = process.env.NEXT_PUBLIC_HJACHI_PROVIDER || "thewhitewindow";
  const path = providerId ? `/p/${encodeURIComponent(providerId)}` : `/c/${encodeURIComponent(code)}`;

  let src = `${ORIGIN}${path}?embed=1`;
  if (theme) src += `&theme=${theme}`;
  if (service) src += `&service=${encodeURIComponent(service)}`;

  return (
    <div className="booking-frame" style={{ minHeight }}>
      {theme && (
        <iframe src={src} title="Book a session with Manse M Doshi" allow="payment" style={{ minHeight }} />
      )}
    </div>
  );
}
