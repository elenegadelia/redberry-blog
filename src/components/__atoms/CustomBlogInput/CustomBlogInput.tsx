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
interface ValidationRule {
  rule: string;
  passed: boolean;
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
    {
      rule: "მინიმუმ 4 სიმბოლო",
      passed: value.replace(/\s+/g, "").length >= 4,
    },
    {
      rule: "მინიმუმ ორი სიტყვა",
      passed: value.split(" ").length >= 2,
    },
    {
      rule: "მხოლოდ ქართული სიმბოლოები",
      passed: /^[\u10D0-\u10F9\s]+$/.test(value),
    },
  ];

  const titleValidationRules = [
    {
      rule: "მინიმუმ 2 სიმბოლო",
      passed: value.replace(/\s+/g, "").length >= 2,
    },
  ];

  const otheValidationRules = [
    {
      rule: "",
      passed: value.length > 0,
    },
  ];

  const emailValidationRules = [
    {
      rule: "მეილი უნდა მთავრდებოდეს @redberry.ge-ით",
      passed: /@redberry\.ge$/i.test(value),
    },
  ];

  const areAllRulesPassed = (rules: ValidationRule[]) => {
    return rules.every((item) => item.passed);
  };
  const validationRules =
    name === "author"
      ? authorValidationRules
      : name === "title" || name === "description"
      ? titleValidationRules
      : otheValidationRules;
  const allRulesPassed = areAllRulesPassed(validationRules);
  const inputColor = allRulesPassed
    ? "border-[#14D81C] bg-[#F8FFF8]"
    : value === ""
    ? "border-[#E4E3EB] bg-[#FCFCFD]"
    : "border-[#EA1919] bg-[#FAF2F3]";

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
        className={`rounded-xl px-4 py-3 mt-2 border-[1.5px] ${inputColor}`}
      />
      <ul className="mt-2">
        {validationRules[0].rule != "" &&
          validationRules.map((item, index) => (
            <li
              key={index}
              className={`text-xs ml-4 list-disc ${
                value === ""
                  ? "#85858D"
                  : item.passed
                  ? "text-[#14D81C]"
                  : "text-[#EA1919]"
              }`}
            >
              {item.rule}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default CustomBlogInput;
