"use client";
import { fetchCategories } from "@/redux/features/categories-slice";
import {
  deleteCategory,
  setBlogCategories,
} from "@/redux/features/createBlog-slice";
import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoryDropdowns from "../CategoryDropdowns/CategoryDropdowns";
import ArrowDown from "../../../../public/icons/ArrowDown";
import CategorySelect from "../CategorySelect/CategorySelect";

const CustomDropdown = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch<any>(fetchCategories());
  }, []);
  const [isOpen, setIsOpen] = useState(false);
  const [isFullOpen, setIsFullOpen] = useState(false);
  const addedCategories: number[] = useSelector(
    (state: RootState) => state.createBlog.categories
  );
  const { categories } = useSelector((state: RootState) => state.category);
  const createBlogCategories = useSelector(
    (state: RootState) => state.createBlog.categories
  );
  const chosenCategories = categories.filter((category) =>
    createBlogCategories.includes(category.id)
  );
  const handleOptionSelect = (selectedOption: number) => {
    dispatch(setBlogCategories(selectedOption));
  };
  const filteredCategories = categories.filter(
    (category) => !addedCategories.includes(category.id)
  );

  const removeCategory = (id: number) => {
    dispatch(deleteCategory(id));
  };

  return (
    <div className="relative flex flex-col">
      <label className="text-primaryBlack font-medium text-sm">კატეგორია</label>
      <div
        className={`flex items-center justify-between gap-[8px] border border-solid ${
          createBlogCategories.length > 0
            ? "border-[#14D81C] bg-[#F8FFF8]"
            : "border-[#E4E3EB] bg-[#FCFCFD]"
        } rounded-xl w-[288px] h-[44px] px-4 select-none mt-2`}
      >
        {chosenCategories.length > 0 ? (
          chosenCategories
            .slice(0, 2)
            .map((category, index) => (
              <CategoryDropdowns
                categoryId={category.id}
                removeCategory={removeCategory}
                key={index}
                text={category.title}
                textColor={category.text_color}
                backgroundColor={category.background_color}
              />
            ))
        ) : (
          <span className="text-[#85858D]">აირჩიეთ კატეგორია</span>
        )}
        <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          <ArrowDown />
        </div>
      </div>
      {isOpen && (
        <div className="absolute z-50 flex flex-wrap top-full rounded-xl left-0 w-[288px] border border-[#E4E3EB] border-solid bg-[#fff] shadow-md gap-2 p-[16px]">
          {filteredCategories.map((category, index) => (
            <CategorySelect
              key={index}
              categoryId={category.id}
              onClick={handleOptionSelect}
              text={category.title}
              textColor={category.text_color}
              backgroundColor={category.background_color}
            />
          ))}
        </div>
      )}
      {isFullOpen}
    </div>
  );
};

export default CustomDropdown;
