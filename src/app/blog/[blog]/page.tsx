"use client";
import BlogPost from "@/components/__molecules/BlogPost/BlogPost";
import Header from "@/components/__organisms/Header/Header";
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
    dispatch(fetchBlogById(blogId));
  }, []);

  return (
    <>
      <Header isButtonActive={true} />
      {singleBlog != null && <BlogPost singleBlog={singleBlog} />}
    </>
  );
};

export default Blog;
