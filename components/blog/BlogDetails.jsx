import Image from "next/image";
import BlogContent from "./BlogContent";

export default function BlogDetails({ blog }) {
  return (
    <div className="blog-classic-area-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="blog-details-left-area">
              <div className="blog-details-discription">
                <div className="blog-classic-tag">
                  <h4 className="title">By {blog.author}</h4>
                  <ul>
                    <li>
                      <div className="tag-wrap">
                        <i className="fa-solid fa-tag" />
                        <h4 className="tag-title">{blog.tags?.[0]}</h4>
                      </div>
                    </li>
                  </ul>
                </div>
                <h3 className="title split-collab">{blog.title}</h3>
                <div className="blog-hero-image">
                  <Image
                    alt={blog.altText || blog.title}
                    src={blog.imageSrc}
                    width={600}
                    height={480}
                  />
                </div>
                <BlogContent content={blog.description} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
