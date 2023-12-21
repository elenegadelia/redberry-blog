import React from "react";

interface CustomInputProps {
  placeholder: string;
  width: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput = ({
  placeholder,
  width,
  onChange,
  value,
}: CustomInputProps) => {
  return (
    <div className="flex flex-col">
      <label className="text-primaryBlack font-medium text-sm">ელ ფოსტა</label>
      <input
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        style={{ width: width }}
        className="bg-[#F7F7FF] rounded-xl px-4 py-3 mt-2"
      />
    </div>
  );
};

export default CustomInput;
