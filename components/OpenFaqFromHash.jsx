"use client";

import { useEffect } from "react";

// Links such as /faq#faq-4 should land on that question already open.
export default function OpenFaqFromHash() {
  useEffect(() => {
    const open = () => {
      const target = window.location.hash && document.querySelector(window.location.hash);
      if (target?.tagName === "DETAILS") {
        target.open = true;
        target.scrollIntoView({ block: "start" });
      }
    };
    open();
    window.addEventListener("hashchange", open);
    return () => window.removeEventListener("hashchange", open);
  }, []);
  return null;
}
