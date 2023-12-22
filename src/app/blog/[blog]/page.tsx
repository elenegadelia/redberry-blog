"use client";
import BlogPost from "@/components/__molecules/BlogPost/BlogPost";
import Header from "@/components/__organisms/Header/Header";
import { useRouter } from "next/router";
import React from "react";

const Blog = () => {
  return (
    <>
      <Header />
      <BlogPost />
    </>
  );
};

export default Blog;
