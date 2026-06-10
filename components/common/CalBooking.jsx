"use client";

import { InlineWidget } from "react-calendly";
import { useSearchParams } from "next/navigation";

export default function CalBooking({ calLink }) {
  const searchParams = useSearchParams();
  const eventType = searchParams.get("type");

  const url = eventType
    ? `https://calendly.com/${calLink}/${eventType}`
    : `https://calendly.com/${calLink}`;

  return (
    <InlineWidget
      url={url}
      styles={{ minWidth: "320px", height: "950px" }}
      pageSettings={{
        backgroundColor: "ffffff",
        primaryColor: "0184ff",
        textColor: "141414",
        hideEventTypeDetails: false,
        hideLandingPageDetails: false,
        hideGdprBanner: true,
        hidePrivacyPolicy: true,
      }}
    />
  );
}
