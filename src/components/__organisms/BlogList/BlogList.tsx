import React from "react";
import BlogCard from "@/components/__molecules/BlogCard/BlogCard";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const BlogList = () => {
  const { blogs } = useSelector((state: RootState) => state.blog);
  const { filteredCategories } = useSelector(
    (state: RootState) => state.categoryFilter
  );

  const filteredBlogs = filteredCategories.length
    ? blogs.filter((blog) =>
        blog.categories.some((category) =>
          filteredCategories.includes(category.id)
        )
      )
    : blogs;
  return (
    <div className="px-[76px] mb-14">
      <div className="mt-16 grid grid-cols-3 gap-8">
        {filteredBlogs.map((blog) => {
          return <BlogCard blog={blog} />;
        })}
      </div>
    </div>
  );
};

export default BlogList;
