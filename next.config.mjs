/** @type {import('next').NextConfig} */
const nextConfig = {
  // 75 is the default; 90 is reserved for portrait photos where softness shows.
  images: { qualities: [75, 90] },
  // One URL per page: old template and duplicate URLs move permanently (301) to their canonical home.
  async redirects() {
    const moved = (source, destination) => ({ source, destination, statusCode: 301 });
    return [
      moved("/about-me", "/about"),
      moved("/service", "/services"),
      moved("/contact-us", "/contact"),
      moved("/faqs", "/faq"),
      moved("/blog", "/insights"),
      moved("/blog-white", "/insights"),
      moved("/blog-white/:path*", "/insights"),
      moved("/blog-details-white/:slug", "/insights/:slug"),
    ];
  },
};

export default nextConfig;
