"use client";
import { fetchCategories } from "@/redux/features/categories-slice";
import { setBlogCategories } from "@/redux/features/createBlog-slice";
import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const CustomDropdown = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch<any>(fetchCategories());
  }, []);
  const [isOpen, setIsOpen] = useState(false);
  const addedCategories: number[] = useSelector(
    (state: RootState) => state.createBlog.categories
  );
  const { categories } = useSelector((state: RootState) => state.category);
  const handleOptionSelect = (selectedOption: number) => {
    dispatch(setBlogCategories(selectedOption));
    setIsOpen(false);
  };
  const filteredCategories = categories.filter(
    (category) => !addedCategories.includes(category.id)
  );
  return (
    <div className="relative">
      <label className="text-primaryBlack font-medium text-sm">კატეგორია</label>
      <div
        className="flex items-center justify-between bg-[#FCFCFD] border border-solid border-[#E4E3EB] rounded-xl w-[288px] h-[44px] px-4 cursor-pointer select-none mt-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-[#85858D]">შეიყვანეთ სათაური</span>
        <span>&#9660;</span>
      </div>
      {isOpen && (
        <div className="absolute top-full left-0 w-72 border border-t-0 border-E4E3EB border-solid bg-FCFCFD rounded-b-lg">
          {filteredCategories.map((category, index) => (
            <div
              key={index}
              className="py-2 px-4 cursor-pointer hover:bg-gray-100"
              onClick={() => handleOptionSelect(category.id)}
            >
              {category.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
