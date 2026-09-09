import { blogData3 } from "@/data/blogs";

const SITE_URL = "https://thewhitewindow.com";

export default function sitemap() {
  const now = new Date();

  const pages = [
    { url: "/", priority: 1.0, changeFrequency: "monthly" },
    { url: "/about-me", priority: 0.9, changeFrequency: "monthly" },
    { url: "/services", priority: 0.9, changeFrequency: "monthly" },
    { url: "/book-a-session", priority: 0.9, changeFrequency: "monthly" },
    { url: "/faq", priority: 0.7, changeFrequency: "monthly" },
    { url: "/contact", priority: 0.7, changeFrequency: "monthly" },
    { url: "/blog-white", priority: 0.6, changeFrequency: "monthly" },
    { url: "/privacy", priority: 0.3, changeFrequency: "yearly" },
    { url: "/terms", priority: 0.3, changeFrequency: "yearly" },
  ].map((page) => ({
    url: `${SITE_URL}${page.url}`,
    lastModified: now,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  // Only the posts actually surfaced on the site (blogData3); the other
  // blogData* arrays are unused template filler.
  const posts = blogData3.map((post) => ({
    url: `${SITE_URL}/blog-details-white/${post.slug}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...pages, ...posts];
}
