import { posts } from "@/data/posts";
import { SITE_URL } from "@/data/site";

export default function sitemap() {
  const pages = [
    { url: "/", priority: 1.0, changeFrequency: "monthly" },
    { url: "/about", priority: 0.9, changeFrequency: "monthly" },
    { url: "/services", priority: 0.9, changeFrequency: "monthly" },
    { url: "/book-a-session", priority: 0.9, changeFrequency: "monthly" },
    { url: "/faq", priority: 0.7, changeFrequency: "monthly" },
    { url: "/contact", priority: 0.7, changeFrequency: "monthly" },
    { url: "/insights", priority: 0.6, changeFrequency: "monthly" },
    { url: "/privacy", priority: 0.3, changeFrequency: "yearly" },
    { url: "/terms", priority: 0.3, changeFrequency: "yearly" },
  ].map((page) => ({ ...page, url: `${SITE_URL}${page.url}`, lastModified: new Date() }));

  const articles = posts.map((post) => ({
    url: `${SITE_URL}/insights/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...pages, ...articles];
}
