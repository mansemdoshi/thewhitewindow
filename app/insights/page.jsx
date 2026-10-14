import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageIntro from "@/components/PageIntro";
import { excerpt, posts } from "@/data/posts";
import { formatDate } from "@/lib/format";

export const metadata = {
  title: "Insights",
  description:
    "Articles by Manse M Doshi on starting therapy, managing stress and anxiety, setting boundaries and supporting children.",
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  return (
    <>
      <PageIntro eyebrow="Insights" title="Notes on therapy and everyday well-being">
        <p>Short, practical pieces on starting therapy, looking after yourself and supporting the people you love.</p>
      </PageIntro>
      <section className="section section-tight-top">
        <div className="container grid grid-3">
          {posts.map((post) => (
            <article key={post.slug} className="card">
              <p className="card-meta">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </p>
              <h2 className="card-title">
                <Link href={`/insights/${post.slug}`}>{post.title}</Link>
              </h2>
              <p>{excerpt(post)}</p>
              <Link href={`/insights/${post.slug}`} className="text-link" aria-hidden="true" tabIndex={-1}>
                Read <ArrowRight size={16} strokeWidth={1.5} />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
