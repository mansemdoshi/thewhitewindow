import "../public/assets/scss/main.scss";
import "../public/assets/scss/odometer-custom.css"; // Custom odometer theme without invalid CSS
import "react-toastify/dist/ReactToastify.css";
import LayoutWrapper from "@/components/common/LayoutWrapper";
import Script from 'next/script';
import { ToastContainer } from "react-toastify";
const SITE_URL = "https://thewhitewindow.com";
const SITE_NAME = "The White Window";
const SITE_DESCRIPTION =
  "Manse M Doshi - Clinical Psychologist & Psychotherapist. Individual, couples and family therapy, CBT, trauma-informed care and psychological assessments.";

export const metadata = {
  // metadataBase lets Next resolve relative canonical/OG URLs to absolute ones.
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Manse M Doshi | Clinical Psychologist & Psychotherapist`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    url: SITE_URL,
    title: `${SITE_NAME} | Manse M Doshi | Clinical Psychologist & Psychotherapist`,
    description: SITE_DESCRIPTION,
    images: [{ url: "/assets/images/logo/logo-dark.png" }],
  },
  twitter: {
    card: "summary",
    title: `${SITE_NAME} | Manse M Doshi | Clinical Psychologist & Psychotherapist`,
    description: SITE_DESCRIPTION,
    images: ["/assets/images/logo/logo-dark.png"],
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap"
          rel="stylesheet"
        />
      </head>

      <body>
          <Script
          src="/assets/js/smooth.js"
          strategy="beforeInteractive"
        />
        <LayoutWrapper>
          <ToastContainer
            position="top-right"
            // autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
