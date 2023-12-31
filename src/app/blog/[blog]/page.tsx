"use client";
import BlogPost from "@/components/__molecules/BlogPost/BlogPost";
import Slider from "@/components/__molecules/Slider/Slider";
import Header from "@/components/__organisms/Header/Header";
import { fetchBlogs } from "@/redux/features/blog-slice";
import { fetchBlogById } from "@/redux/features/singleBlog-slice";
import { RootState } from "@/redux/store";
import { extractIdFromUrl } from "@/utils/helpers";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

interface Props {
  params: {
    blog: string;
  };
}

const Blog = ({ params: { blog } }: Props) => {
  const blogId = extractIdFromUrl(blog);
  const dispatch = useDispatch();
  const { singleBlog } = useSelector((state: RootState) => state.singleBlog);

  useEffect(() => {
    dispatch<any>(fetchBlogById(blogId));
    dispatch<any>(fetchBlogs());
  }, []);
  return (
    <>
      <Header isButtonActive={true} />
      {singleBlog != null && <BlogPost singleBlog={singleBlog} />}
      {singleBlog != null && <Slider blogCategories={singleBlog.categories} />}
    </>
  );
};

export default Blog;
