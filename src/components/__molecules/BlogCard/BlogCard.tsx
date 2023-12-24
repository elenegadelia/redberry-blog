import CategoryTitle from "@/components/__atoms/CategoryTitle/CategoryTitle";
import BlogImage from "../../../../public/images/unsplash_01_igFr7hd4.png";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import LinkArrow from "../../../../public/icons/LinkArrow";
import { Blog } from "@/types/services";

interface BlogCardProps {
  blog: Blog;
}

const BlogCard = ({ blog }: BlogCardProps) => {
  return (
    <div>
      <div className="w-[100%] h-[328px]">
        <Image
          width={428}
          height={328}
          className="w-[100%] h-[100%] rounded-xl object-cover"
          src={blog.image}
          alt="blog image"
        />
      </div>
      <p className="text-primaryBlack text-base font-medium mt-6">
        {blog.author}
      </p>
      <span className="text-[#85858D] text-xs mt-2">{blog.publish_date}</span>
      <h4 className="text-primaryBlack text-xl font-medium max-w-[408px] mt-4">
        {blog.title}
      </h4>
      <div className="flex flex-wrap mt-4 gap-4 max-w-[354px]">
        {blog.categories.map((category, catIndex) => (
          <CategoryTitle
            key={catIndex}
            backgroundColor={category.background_color}
            textColor={category.text_color}
            text={category.title}
          />
        ))}
      </div>
      <p className="text-base text-[#404049] mt-4 overflow-hidden">
        <span className="line-clamp-2">{blog.description}</span>
      </p>
      <Link
        href={`blog/${blog.id}`}
        className="flex items-center gap-1 text-[#5D37F3] mt-4 text-sm font-medium"
      >
        სრულად ნახვა
        <LinkArrow />
      </Link>
    </div>
  );
};

export default BlogCard;
