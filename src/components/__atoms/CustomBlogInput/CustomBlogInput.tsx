import React from "react";

interface CustomInputProps {
  placeholder: string;
  name: string;
  width: string;
  value: string;
  label: string;
  height: string;
  errors: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomBlogInput = ({
  name,
  placeholder,
  width,
  height,
  onChange,
  label,
  errors,
  value,
}: CustomInputProps) => {
  const authorValidationRules = [
    "მინიმუმ 4 სიმბოლო",
    "მინიმუმ ორი სიტყვა",
    "მხოლოდ ქართული სიმბოლოები",
  ];

  const titleValidationRules = ["მინიმუმ 2 სიმბოლო"];

  return (
    <div className="flex flex-col">
      <label className="text-primaryBlack font-medium text-sm">{label}</label>
      <input
        name={name}
        type="text"
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        style={{ width: width, height: height }}
        className={`bg-[#F7F7FF] rounded-xl px-4 py-3 mt-2 border-[1.5px] ${
          errors ? "border-[#EA1919]" : "border-[#E4E3EB]"
        }`}
      />
      <ul className="mt-2">
        {name === "author" &&
          authorValidationRules.map((item, index) => (
            <li key={index} className="text-[#85858D] text-xs list-disc ml-4">
              {item}
            </li>
          ))}
        {name === "title" || name === "description"
          ? titleValidationRules.map((item, index) => (
              <li key={index} className="text-[#85858D] text-xs list-disc ml-4">
                {item}
              </li>
            ))
          : null}
      </ul>
    </div>
  );
};

export default CustomBlogInput;
