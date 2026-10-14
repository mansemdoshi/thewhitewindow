"use client";

import { Moon, Sun } from "lucide-react";
import { THEME_KEY } from "@/lib/theme";

function currentTheme() {
  const attr = document.documentElement.getAttribute("data-theme");
  if (attr === "light" || attr === "dark") return attr;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

// Both states are rendered and CSS shows the one matching the active theme, so the
// icon and its accessible name are right on first paint without a hydration mismatch.
export default function ThemeToggle() {
  const toggle = () => {
    const next = currentTheme() === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch {
      // Storage blocked: the choice still applies for this page view.
    }
  };

  return (
    <button type="button" className="icon-btn theme-toggle" onClick={toggle}>
      <span className="day-only">
        <Moon size={20} strokeWidth={1.5} aria-hidden="true" />
        <span className="sr-only">Switch to dark mode</span>
      </span>
      <span className="night-only">
        <Sun size={20} strokeWidth={1.5} aria-hidden="true" />
        <span className="sr-only">Switch to light mode</span>
      </span>
    </button>
  );
}
