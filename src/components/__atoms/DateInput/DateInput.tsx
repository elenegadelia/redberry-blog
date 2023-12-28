import React from "react";

interface CustomInputProps {
  placeholder: string;
  name: string;
  width: string;
  value: string;
  label: string;
  height: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const DateInput = ({
  name,
  placeholder,
  width,
  height,
  onChange,
  label,
  value,
}: CustomInputProps) => {
  return (
    <div className="flex flex-col">
      <label className="text-primaryBlack font-medium text-sm">{label}</label>
      <input
        name={name}
        type="date"
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        style={{ width: width, height: height }}
        className={`rounded-xl px-4 py-3 mt-2 border-[1.5px] ${
          value !== ""
            ? "input-date-success border-[#14D81C]"
            : "input-date-stock border-[#E4E3EB]"
        }`}
      />
    </div>
  );
};

export default DateInput;
