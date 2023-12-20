import CustomInput from "@/components/__atoms/CustomInput/CustomInput";
import PrimaryButton from "@/components/__atoms/PrimaryButton/PrimaryButton";
import React from "react";

const SignInModal = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="w-[480px] h-[300px] bg-white rounded-xl p-4">
        <h4 className="text-primaryBlack text-2xl font-bold text-center mt-10">
          შესვლა
        </h4>
        <CustomInput placeholder="Example@redberry.ge" />
        <PrimaryButton text="შესვლა" styles="w-[432px] h-[40px] mt-[24px]" />
      </div>
    </div>
  );
};

export default SignInModal;
