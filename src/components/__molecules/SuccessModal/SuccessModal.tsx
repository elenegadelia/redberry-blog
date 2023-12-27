import React from "react";
import SuccessIcon from "../../../../public/icons/SuccessIcon";
import PrimaryButton from "@/components/__atoms/PrimaryButton/PrimaryButton";
import CloseIcon from "../../../../public/icons/CloseIcon";

interface succesModalProps {
  setIsModalActive: (isActive: boolean) => void;
  returnToHomePage: () => void;
}

const SuccessModal = ({
  setIsModalActive,
  returnToHomePage,
}: succesModalProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="w-[480px] h-[300px] bg-white rounded-xl p-4 relative">
        <div
          className="absolute right-5 top-5 cursor-pointer"
          onClick={() => setIsModalActive(false)}
        >
          <CloseIcon />
        </div>
        <div className="flex flex-col items-center">
          <div className="mt-16">
            <SuccessIcon />
          </div>
          <p className="text-primaryBlack text-xl font-bold mt-4 mt">
            ჩანაწერი წარმატებით დაემატა
          </p>
          <PrimaryButton
            onclick={returnToHomePage}
            styles="w-[432px] h-[40px] mt-12"
            text="მთავარ გვერდზე დაბრუნება"
            disabled={false}
          />
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
