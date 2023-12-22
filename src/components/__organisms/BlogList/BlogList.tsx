import React from "react";
import BlogCard from "@/components/__molecules/BlogCard/BlogCard";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const BlogList = () => {
  const { blogs } = useSelector((state: RootState) => state.blog);
  return (
    <div className="px-[76px]">
      <div className="mt-16 grid grid-cols-3 gap-8">
        {blogs.map((blog) => {
          return <BlogCard blog={blog} />;
        })}
      </div>
    </div>
  );
};

export default BlogList;
