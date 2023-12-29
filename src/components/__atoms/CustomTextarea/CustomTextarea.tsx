import React from "react";

interface CustomInputProps {
  placeholder: string;
  name: string;
  width: string;
  value: string;
  label: string;
  height: string;
  errors: boolean;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
interface ValidationRule {
  rule: string;
  passed: boolean;
}
const CustomTextarea = ({
  name,
  placeholder,
  width,
  height,
  onChange,
  label,
  errors,
  value,
}: CustomInputProps) => {
  const titleValidationRules = [
    {
      rule: "მინიმუმ 2 სიმბოლო",
      passed: value.replace(/\s+/g, "").length >= 2,
    },
  ];

  const areAllRulesPassed = (rules: ValidationRule[]) => {
    return rules.every((item) => item.passed);
  };

  const allRulesPassed = areAllRulesPassed(titleValidationRules);
  const inputColor = allRulesPassed
    ? "border-[#14D81C] bg-[#F8FFF8]"
    : value === ""
    ? "border-[#E4E3EB] bg-[#FCFCFD]"
    : "border-[#EA1919] bg-[#FAF2F3]";

  return (
    <div className="flex flex-col">
      <label className="text-primaryBlack font-medium text-sm">{label}</label>
      <textarea
        name={name}
        onChange={(e) => onChange(e)}
        placeholder={placeholder}
        value={value}
        style={{ width: width, height: height }}
        className={`rounded-xl px-4 py-3 mt-2 border-[1.5px] resize-none ${inputColor}`}
      />
      <ul className="mt-2">
        {titleValidationRules.map((item, index) => (
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

export default CustomTextarea;
