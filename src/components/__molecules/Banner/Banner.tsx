import Image from "next/image";
import React from "react";
import MoonImage from "../../../../public/images/MoonImage.png";

const Banner = () => {
  return (
    <div className="mx-auto flex justify-between items-center py-5 px-[76px] mt-16">
      <h1 className="text-[64px] text-[#1A1A1F] font-bold">ბლოგი</h1>
      <Image src={MoonImage} alt="moon image" />
    </div>
  );
};

export default Banner;
