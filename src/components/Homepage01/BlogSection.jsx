import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as RightArrow } from "../../assets/icons/arrow-right-room.svg";
import BlogImage1 from "../../assets/images/blogimg1.jpg";
import BlogImage2 from "../../assets/images/blogimg2.jpg";
import BlogImage3 from "../../assets/images/blogimg3.jpg";

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "7 ways to decor your home",
      image: BlogImage1,
      link: "/",
    },
    {
      id: 2,
      title: "Kitchen organization",
      image: BlogImage2,
      link: "/",
    },
    {
      id: 3,
      title: "Decor your bedroom",
      image: BlogImage3,
      link: "/",
    },
  ];

  return (
    <div className="mt-10 px-8 xl:px-40">
      <div className="flex items-end justify-between mb-10 ">
        <div>
          <h2 className="font-poppins font-medium text-[2.1rem] leading-8">
            Articles
          </h2>
        </div>
        <div>
          <Link
            to="#"
            className="flex font-inter text-sm items-center space-x-1 border-b border-neutral-900"
          >
            <span>More Articles</span>
            <RightArrow />
          </Link>
        </div>
      </div>
      <div className="flex flex-wrap sm:flex-nowrap gap-6">
        {blogPosts.map((post) => {
          return (
            <div key={post.id} className=" w-full space-y-2">
              <div className="flex flex-wrap gap-4">
                <img src={post.image} className="w-full object-cover" alt="" />
                <h3 className="font-inter text-base font-semibold">
                  {post.title}
                </h3>
              </div>
              <div>
                <Link
                  to={`${post.link}`}
                  className="flex font-inter text-sm items-center space-x-1 border-b w-[6.5rem] border-neutral-900"
                >
                  <span>Read Morw</span>
                  <RightArrow />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogSection;
