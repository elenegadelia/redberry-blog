import React from "react";

interface CategoryTitle {
  text: string;
  backgroundColor: string;
  textColor: string;
}

const CategoryTitle = ({ text, backgroundColor, textColor }: CategoryTitle) => {
  return (
    <span
      style={{ backgroundColor: backgroundColor, color: textColor }}
      className={`rounded-[30px] px-[10px] py-[6px] text-xs`}
    >
      {text}
    </span>
  );
};

export default CategoryTitle;
