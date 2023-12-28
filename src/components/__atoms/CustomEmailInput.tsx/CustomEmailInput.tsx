import React from "react";
import WarningIcons from "../../../../public/icons/WarningIcon";

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
const CustomEmailInput = ({
  name,
  placeholder,
  width,
  height,
  onChange,
  label,
  errors,
  value,
}: CustomInputProps) => {
  const emailValidationRules = [
    {
      rule: "მეილი უნდა მთავრდებოდეს @redberry.ge-ით",
      passed: /@redberry\.ge$/i.test(value),
    },
  ];

  const areAllRulesPassed = (rules: ValidationRule[]) => {
    return rules.every((item) => item.passed);
  };
  const allRulesPassed = areAllRulesPassed(emailValidationRules);
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
      {value === "" ||
        (!emailValidationRules[0].passed && (
          <p className="text-xs mt-2 flex gap-2 text-[#EA1919]">
            <WarningIcons />
            <span className="max-w-[260px]">
              {emailValidationRules[0].rule}
            </span>
          </p>
        ))}
    </div>
  );
};

export default CustomEmailInput;
