import CategoryTitle from "@/components/__atoms/CategoryTitle/CategoryTitle";
import BlogImage from "../../../../public/images/MoonImage.png";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogPost = () => {
  return (
    <div className="mx-auto max-w-[720px] mt-10">
      <div className="w-[100%] h-[328px]">
        <Image
          width={428}
          height={328}
          className="w-[100%] h-[100%] rounded-xl object-cover"
          src={BlogImage}
          alt="blog image"
        />
      </div>
      <p className="text-primaryBlack text-base font-medium mt-10">
        ლილე კვარაცხელია
      </p>
      <span className="text-[#85858D] text-xs mt-2">123123</span>
      <h4 className="text-primaryBlack text-xl font-medium max-w-[408px] mt-4">
        asdsaddsa
      </h4>
      <div className="flex flex-wrap mt-4 gap-4 max-w-[354px]">
        {/* <CategoryTitle
          backgroundColor={category.background_color}
          textColor={category.text_color}
          text={category.title}
        /> */}
      </div>
      <p className="text-base text-[#404049] mt-4">sadsda</p>
    </div>
  );
};

export default BlogPost;
