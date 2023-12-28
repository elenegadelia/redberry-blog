import React from "react";
import DeleteIcon from "../../../../public/icons/DeleteIcon";

interface CategoryDropdownProps {
  text: string;
  backgroundColor: string;
  textColor: string;
  categoryId: number;
  removeCategory: (id: number) => void;
}

const CategoryDropdowns: React.FC<CategoryDropdownProps> = ({
  text,
  backgroundColor,
  textColor,
  categoryId,
  removeCategory,
}) => {
  return (
    <div
      className="flex items-center relative rounded-[30px] px-[12px] py-[8px] text-xs z-50 overflow-hidden"
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
        maxWidth: "150px",
      }}
    >
      <span className="truncate">{text}</span>
      <div onClick={() => removeCategory(categoryId)}>
        <DeleteIcon />
      </div>
    </div>
  );
};

export default CategoryDropdowns;
