import Link from "next/link";
import path from "path";
import React from "react";

interface PrimaryAnchorProps {
  styles: string;
  text: string;
  path: string;
}

const PrimaryAnchor = ({ styles, text, path }: PrimaryAnchorProps) => {
  return (
    <Link
      className={`${styles} flex items-center rounded-lg bg-[#5D37F3] text-white text-sm font-medium  px-5`}
      href={path}
    >
      {text}
    </Link>
  );
};

export default PrimaryAnchor;
