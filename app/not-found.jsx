import Link from "next/link";
import Logo from "@/components/brand/Logo";

export const metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <section className="container not-found">
      <Logo variant="mark" height={96} />
      <h1>This window is closed.</h1>
      <p className="lead-text">Let's find the one you were looking for.</p>
      <div className="btn-row">
        <Link href="/" className="btn btn-primary">
          Go to the homepage
        </Link>
        <Link href="/services" className="btn btn-secondary">
          See services
        </Link>
      </div>
    </section>
  );
}
