import React from "react";

interface PrimaryButtonProps {
  styles: string;
  text: string;
  disabled: boolean;
  onclick?: () => void;
}

const PrimaryButton = ({
  styles,
  text,
  onclick,
  disabled,
}: PrimaryButtonProps) => {
  return (
    <button
      className={`${styles} rounded-lg bg-[#5D37F3] text-white text-sm font-medium  px-5 ${
        disabled && "opacity-70"
      }`}
      disabled={disabled}
      onClick={onclick}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
