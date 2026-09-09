import BlogDetails from "@/components/blog/BlogDetails";
import Copyright from "@/components/footers/Copyright";
import Footer3 from "@/components/footers/Footer3";
import Header1 from "@/components/headers/Header1";
import { allBlogs } from "@/data/blogs";
import { notFound } from "next/navigation";
import CommonComponents from "@/components/common/CommonComponents";
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = allBlogs.find((entry) => entry.slug == slug);
  if (!item) return { title: "Not Found" };
  return {
    title: item.title,
    description: item.description || "The White Window | Manse M Doshi | Clinical Psychologist & Psychotherapist",
  };
}
export default async function page({ params }) {
  const { slug } = await params;
  const blog = allBlogs.find((item) => item.slug == slug);
  if (!blog) notFound();
  return (
    <>
      <div className="tmp-white-version">
        <Header1 /><br/><br/>
        <div className="container tmp-section-gapTop" style={{ marginBottom: '20px' }}>
            <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
              {blog.title}
            </h2>
        </div>
        <BlogDetails isLight blog={blog} />
        <Footer3 />
        <Copyright /> <CommonComponents />
      </div>
    </>
  );
}
