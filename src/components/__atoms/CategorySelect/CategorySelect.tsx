import React from "react";

interface CategoryTitle {
  text: string;
  backgroundColor: string;
  textColor: string;
  categoryId: number;
  onClick: (selectedOption: number) => void;
}

const CategorySelect = ({
  text,
  backgroundColor,
  textColor,
  onClick,
  categoryId,
}: CategoryTitle) => {
  return (
    <button
      style={{ backgroundColor: backgroundColor, color: textColor }}
      className={`rounded-[30px] px-[10px] py-[6px] text-xs`}
      onClick={() => onClick(categoryId)}
    >
      {text}
    </button>
  );
};

export default CategorySelect;
