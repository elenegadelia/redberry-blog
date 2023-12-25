import React from "react";

interface CustomInputProps {
  placeholder: string;
  width: string;
  value: string;
  label: string;
  errors: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput = ({
  placeholder,
  width,
  onChange,
  label,
  errors,
  value,
}: CustomInputProps) => {
  return (
    <div className="flex flex-col">
      <label className="text-primaryBlack font-medium text-sm">{label}</label>
      <input
        type="text"
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        style={{ width: width }}
        className={`bg-[#F7F7FF] rounded-xl px-4 py-3 mt-2 border-[1.5px] ${
          errors ? "border-[#EA1919]" : "border-[#5D37F3]"
        }`}
      />
    </div>
  );
};

export default CustomInput;
