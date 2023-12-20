import React from "react";

interface PrimaryButtonProps {
  styles: string;
  text: string;
}

const PrimaryButton = (props: PrimaryButtonProps) => {
  return (
    <button
      className={`${props.styles} rounded-lg bg-[#5D37F3] text-white text-sm font-medium`}
    >
      {props.text}
    </button>
  );
};

export default PrimaryButton;
