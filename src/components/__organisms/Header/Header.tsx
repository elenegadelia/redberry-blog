import PrimaryButton from "@/components/__atoms/PrimaryButton/PrimaryButton";
import Image from "next/image";
import React from "react";
import RedberryLogo from "../../../../public/images/RedberryLogo.png";

const Header = () => {
  return (
    <header className="mx-auto flex justify-between items-center bg-white py-5 px-[76px]">
      <div>
        <Image src={RedberryLogo} alt="redberry logo" />
      </div>
      <PrimaryButton styles={"w-[93px] h-[40px]"} text="შესვლა" />
    </header>
  );
};

export default Header;
