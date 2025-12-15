import BlogDetails from "@/components/blog/BlogDetails";
import Copyright from "@/components/footers/Copyright";
import Footer3 from "@/components/footers/Footer3";
import Header1 from "@/components/headers/Header1";
import { allBlogs } from "@/data/blogs";
import Link from "next/link";
import React from "react";
import CommonComponents from "@/components/common/CommonComponents";
export const metadata = {
  title:
    "Blog Details || The White Window | Manse M Doshi | Clinical Psychologist & Psychotherapist",
  description:
    "The White Window | Manse M Doshi | Clinical Psychologist & Psychotherapist",
};
export default async function page({ params }) {
  const { slug } = await params;
  const blog = allBlogs.find((blog) => blog.slug == slug) || allBlogs[0];
  return (
    <>
      <div className="tmp-white-version">
        <Header1 /><br/><br/>
        <div className="section-head">
            <h2 className="tmp-section-gapTop title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
              {blog.title}
            </h2>
        </div><br/>
        <BlogDetails isLight blog={blog} />
        <Footer3 />
        <Copyright /> <CommonComponents />
      </div>
    </>
  );
}
