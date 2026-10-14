"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "@/components/brand/Logo";
import ThemeToggle from "./ThemeToggle";
import { BOOKING_PATH, WHATSAPP_HREF, nav } from "@/data/site";

const HEADER_ALT = "The White Window — Manse M Doshi, Clinical Psychologist & Psychotherapist";

function isCurrent(pathname, href) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuButton = useRef(null);
  const drawer = useRef(null);

  // Close the drawer whenever the route changes.
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const panel = drawer.current;
    const opener = menuButton.current;
    const focusable = () => panel.querySelectorAll("a[href], button:not([disabled])");
    focusable()[0]?.focus();
    document.body.style.overflow = "hidden";

    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      if (e.key !== "Tab") return;
      // Keep focus inside the drawer while it is open.
      const items = focusable();
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      opener?.focus();
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="header-logo" aria-label="The White Window, home">
          <Logo variant="horizontal" height={44} alt={HEADER_ALT} className="header-logo-full" />
          <Logo variant="mark" height={36} className="header-logo-mark" />
        </Link>

        <nav className="header-nav" aria-label="Main">
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} aria-current={isCurrent(pathname, item.href) ? "page" : undefined}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <ThemeToggle />
          <Link href={BOOKING_PATH} className="btn btn-primary header-book">
            Book a session
          </Link>
          <button
            ref={menuButton}
            type="button"
            className="icon-btn menu-btn"
            aria-expanded={open}
            aria-controls="site-drawer"
            onClick={() => setOpen(true)}
          >
            <Menu size={24} strokeWidth={1.5} aria-hidden="true" />
            <span className="sr-only">Open menu</span>
          </button>
        </div>
      </div>

      {open && (
        <div className="drawer-backdrop" onClick={() => setOpen(false)}>
          <div
            id="site-drawer"
            ref={drawer}
            className="drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="drawer-top">
              <button type="button" className="icon-btn" onClick={() => setOpen(false)}>
                <X size={24} strokeWidth={1.5} aria-hidden="true" />
                <span className="sr-only">Close menu</span>
              </button>
            </div>
            <Link href="/" className="drawer-logo">
              <Logo variant="stacked" height={46} alt="The White Window, home" />
            </Link>
            <nav aria-label="Main">
              <ul className="drawer-nav">
                <li>
                  <Link href="/" aria-current={pathname === "/" ? "page" : undefined}>
                    Home
                  </Link>
                </li>
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} aria-current={isCurrent(pathname, item.href) ? "page" : undefined}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="drawer-actions">
              <Link href={BOOKING_PATH} className="btn btn-primary">
                Book a session
              </Link>
              <a href={WHATSAPP_HREF} className="btn btn-soft" target="_blank" rel="noopener noreferrer">
                Say hello on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
