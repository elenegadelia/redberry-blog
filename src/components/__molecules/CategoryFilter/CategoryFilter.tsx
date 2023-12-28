import FilterButton from "@/components/__atoms/FilterButton/FilterButton";
import {
  removeFilteredCategory,
  setFilteredCategory,
} from "@/redux/features/categoryFilter-slice";
import { RootState } from "@/redux/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

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
  const dispatch = useDispatch();

  const filters = useSelector(
    (state: RootState) => state.categoryFilter.filteredCategories
  );

  const addCategoryToFilter = (id: number, isActive: boolean) => {
    if (!isActive) {
      dispatch(setFilteredCategory(id));
    } else {
      dispatch(removeFilteredCategory(id));
    }
  };

  return (
    <div className="flex flex-wrap items-center justify-center max-w-[684px] mx-auto mt-16 gap-6">
      {categories.map((category) => (
        <FilterButton
          key={category.id}
          id={category.id}
          onClick={addCategoryToFilter}
          backgroundColor={category.background_color}
          textColor={category.text_color}
          text={category.title}
        />
      ))}
    </div>
  );
};

export default CategoryFilter;
