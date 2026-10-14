import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { themeScript } from "@/lib/theme";
import { DESCRIPTOR, PERSON, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/data/site";

// Brand typefaces (SIL Open Font License), self-hosted as Latin-subset variable WOFF2.
const display = localFont({
  src: "./fonts/josefin-sans.woff2",
  weight: "100 700",
  variable: "--font-display",
  display: "swap",
  fallback: ["Jost", "sans-serif"],
});
const body = localFont({
  src: [
    { path: "./fonts/lora.woff2", weight: "400 700", style: "normal" },
    { path: "./fonts/lora-italic.woff2", weight: "400 700", style: "italic" },
  ],
  variable: "--font-body",
  display: "swap",
  fallback: ["Georgia", "serif"],
});

const DEFAULT_TITLE = `${SITE_NAME} · ${PERSON}, ${DESCRIPTOR}`;

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: DEFAULT_TITLE, template: `%s · ${SITE_NAME}` },
  description: SITE_DESCRIPTION,
  // Each page sets its own canonical; a root default would leak "/" onto every page.
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "32x32" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: "/favicon/site.webmanifest",
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    url: SITE_URL,
    title: DEFAULT_TITLE,
    description: SITE_DESCRIPTION,
    images: [{ url: "/social/og-image.png", width: 1200, height: 630, alt: "The White Window — Opening a window to healing and hope" }],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/social/og-image.png"],
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#1F2A44" },
  ],
};

export default function RootLayout({ children }) {
  return (
    // data-theme is set before paint by themeScript, so React must not reconcile it.
    <html lang="en" className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
