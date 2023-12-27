import React from "react";

interface categoryDropdownsProps {
  text: string;
  backgroundColor: string;
  textColor: string;
}

const CategoryDropdowns = ({
  text,
  backgroundColor,
  textColor,
}: categoryDropdownsProps) => {
  return (
    <span
      style={{ backgroundColor: backgroundColor, color: textColor }}
      className={`rounded-[30px] px-[10px] py-[6px] text-xs`}
    >
      {text}
    </span>
  );
};

export default CategoryDropdowns;
