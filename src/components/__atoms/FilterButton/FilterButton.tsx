import React from "react";

interface FilterButtonProps {
  text: string;
  backgroundColor: string;
  textColor: string;
}

const FilterButton = ({
  text,
  backgroundColor,
  textColor,
}: FilterButtonProps) => {
  return (
    <button
      style={{ backgroundColor: backgroundColor, color: textColor }}
      className={`rounded-[30px] px-4 py-2 text-xs`}
    >
      {text}
    </button>
  );
};

export default FilterButton;
