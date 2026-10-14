import Link from "next/link";
import { notFound } from "next/navigation";
import PostBody from "@/components/insights/PostBody";
import { excerpt, getPost, posts } from "@/data/posts";
import { formatDate } from "@/lib/format";
import { BOOKING_PATH, PERSON, WHATSAPP_HREF } from "@/data/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const post = getPost((await params).slug);
  if (!post) return {};
  return {
    title: post.title,
    description: excerpt(post),
    alternates: { canonical: `/insights/${post.slug}` },
    openGraph: { type: "article", title: post.title, description: excerpt(post), publishedTime: post.date },
  };
}

export default async function PostPage({ params }) {
  const post = getPost((await params).slug);
  if (!post) notFound();

  return (
    <article>
      <header className="post-header">
        <div className="container">
          <p className="eyebrow">
            <Link href="/insights">Insights</Link> · <time dateTime={post.date}>{formatDate(post.date)}</time>
          </p>
          <h1>{post.title}</h1>
          <p className="post-byline">By {PERSON}</p>
          <hr className="sill" />
        </div>
      </header>
      <div className="section section-tight-top">
        <div className="container">
          <PostBody body={post.body} />
          <aside className="post-end" aria-label="Next step">
            <h2>A safe space is just a message away.</h2>
            <p>If anything here resonates and you would like support, I am here.</p>
            <div className="btn-row">
              <Link href={BOOKING_PATH} className="btn btn-primary">
                Book a session
              </Link>
              <a href={WHATSAPP_HREF} className="btn btn-soft" target="_blank" rel="noopener noreferrer">
                Say hello on WhatsApp
              </a>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
