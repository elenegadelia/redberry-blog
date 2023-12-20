import FilterButton from "@/components/__atoms/FilterButton/FilterButton";
import React from "react";

interface Category {
  id: number;
  title: string;
  text_color: string;
  background_color: string;
}

interface categoryFilterProps {
  categories: Category[];
}

const CategoryFilter = ({ categories }: categoryFilterProps) => {
  return (
    <div className="flex flex-wrap items-center justify-center max-w-[684px] mx-auto mt-16 gap-6">
      {categories.map((category) => (
        <FilterButton
          key={category.id}
          backgroundColor={category.background_color}
          textColor={category.text_color}
          text={category.title}
        />
      ))}
    </div>
  );
};

export default CategoryFilter;
