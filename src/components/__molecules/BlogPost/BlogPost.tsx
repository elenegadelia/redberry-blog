import CategoryTitle from "@/components/__atoms/CategoryTitle/CategoryTitle";
import BlogImage from "../../../../public/images/unsplash_L0nipfx-Ry4.png";
import Image from "next/image";
import React from "react";
import { SingleBlog } from "@/types/services";

interface blogPostProps {
  singleBlog: SingleBlog;
}

const BlogPost = ({ singleBlog }: blogPostProps) => {
  return (
    <div className="mx-auto max-w-[720px] mt-10">
      <div className="w-[100%] h-[328px]">
        <Image
          width={720}
          height={328}
          className="w-[100%] h-[100%] rounded-xl object-cover"
          src={singleBlog.image}
          alt="blog image"
        />
      </div>
      <p className="text-primaryBlack text-base font-medium mt-10">
        {singleBlog.author}
      </p>
      <span className="text-[#85858D] text-xs mt-2">
        {`${singleBlog.publish_date} • ${singleBlog.email}`}
      </span>
      <h4 className="text-primaryBlack text-[32px] font-bold max-w-[720px] mt-6">
        {singleBlog.title}
      </h4>
      <div className="flex flex-wrap mt-6 gap-4 max-w-[354px]">
        {singleBlog.categories.map((category, catIndex) => (
          <CategoryTitle
            key={catIndex}
            backgroundColor={category.background_color}
            textColor={category.text_color}
            text={category.title}
          />
        ))}
      </div>
      <p className="text-base text-[#404049] mt-10">{singleBlog.description}</p>
    </div>
  );
};

export default BlogPost;
