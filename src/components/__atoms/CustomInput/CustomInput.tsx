import React from "react";

interface CustomInputProps {
  placeholder: string;
}

const CustomInput = ({ placeholder }: CustomInputProps) => {
  return (
    <div className="flex flex-col">
      <label className="text-primaryBlack font-medium text-sm">ელ ფოსტა</label>
      <input
        placeholder={placeholder}
        className="bg-[#F7F7FF] rounded-xl px-4 py-3 mt-2"
      />
    </div>
  );
};

export default CustomInput;
