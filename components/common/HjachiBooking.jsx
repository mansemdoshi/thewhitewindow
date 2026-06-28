"use client";

/**
 * HJachi booking widget.
 *
 * Renders the HJachi-hosted booking flow (provider profile → services →
 * availability → intake → confirmation/payment) inside an iframe, the same way
 * https://book.hjachi.com/embed.js does. We inline the iframe here instead of
 * injecting that script so it plays nicely with React/Next and we control the
 * markup.
 *
 * Config (set in .env.local):
 *   NEXT_PUBLIC_HJACHI_PROVIDER     provider booking code / slug (default below)
 *   NEXT_PUBLIC_HJACHI_PROVIDER_ID  provider UUID (optional; takes precedence)
 *
 * The slug/UUID comes from heal.hjachi.com → Booking → Public listing.
 * `theme` pins the hosted page ("light" | "dark"); omit to follow the visitor.
 * `service` deep-links to a specific offering (HJachi service id) and
 * auto-selects it, e.g. book.hjachi.com/c/{slug}?service={id}.
 */
export default function HjachiBooking({
  code,
  providerId,
  theme = "light",
  service,
  minHeight = 950,
}) {
  const origin = "https://book.hjachi.com";

  const resolvedId = providerId || process.env.NEXT_PUBLIC_HJACHI_PROVIDER_ID;
  const resolvedCode =
    code || process.env.NEXT_PUBLIC_HJACHI_PROVIDER || "thewhitewindow";

  // /p/<uuid> takes precedence over /c/<code>, matching embed.js.
  const path = resolvedId
    ? `/p/${encodeURIComponent(resolvedId)}`
    : `/c/${encodeURIComponent(resolvedCode)}`;

  let src = `${origin}${path}?embed=1`;
  if (theme === "light" || theme === "dark") src += `&theme=${theme}`;
  if (service) src += `&service=${encodeURIComponent(service)}`;

  return (
    <iframe
      src={src}
      title="Book a session"
      loading="lazy"
      allow="payment"
      style={{
        width: "100%",
        minWidth: "320px",
        minHeight: `${minHeight}px`,
        border: 0,
        borderRadius: "12px",
      }}
    />
  );
}
