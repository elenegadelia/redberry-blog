import { RootState } from "@/redux/store";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { isatty } from "tty";

interface FilterButtonProps {
  text: string;
  backgroundColor: string;
  textColor: string;
  id: number;
  onClick: (id: number, isActive: boolean) => void;
}

const FilterButton = ({
  text,
  backgroundColor,
  textColor,
  onClick,
  id,
}: FilterButtonProps) => {
  const categoryFilters: number[] = useSelector(
    (state: RootState) => state.categoryFilter.filteredCategories
  );

  const isActive = categoryFilters.includes(id);
  const handleButtonClick = () => {
    onClick(id, isActive);
  };

  return (
    <button
      style={{ backgroundColor: backgroundColor, color: textColor }}
      onClick={handleButtonClick}
      className={`rounded-[30px] px-4 py-2 text-xs ${
        isActive ? "border-[#000] border-[1px] border-solid" : ""
      }`}
    >
      {text}
    </button>
  );
};

export default FilterButton;
